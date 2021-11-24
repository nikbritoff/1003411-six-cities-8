import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import  { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import { NameSpace } from '../../store/root-reducer';
import userEvent from '@testing-library/user-event';
import OfferCard from './offer-card';
import { makeFakeNotFavoriteOffer, makeFakeOffer } from '../../utils/mock';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore();
const cardClass = 'cities__place-card';
const imageClass = 'cities__image-wrapper';

describe('Component: OfferCard', () => {
  it('should render favorite offer correctly', () => {
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });
    const mockFavoriteOffer = makeFakeOffer(true);

    render(
      <Provider store={store}>
        <MemoryRouter >
          <OfferCard offer={mockFavoriteOffer} cardClassName={cardClass} cardImageClassName={imageClass}/>
        </MemoryRouter>
      </Provider>,
    );

    const favoriteButton = screen.getByRole('button', { name: 'In bookmarks'});

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toBeEnabled();
    expect(favoriteButton).toHaveTextContent('In bookmarks');
    expect(favoriteButton).toHaveClass('place-card__bookmark-button--active');
  });

  it('should render not favorite offer correctly', () => {
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });
    const mockNotFavoriteOffer = makeFakeNotFavoriteOffer();


    render(
      <Provider store={store}>
        <MemoryRouter >
          <OfferCard offer={mockNotFavoriteOffer} cardClassName={cardClass} cardImageClassName={imageClass}/>
        </MemoryRouter>
      </Provider>,
    );

    const favoriteButton = screen.getByRole('button', { name: 'To bookmarks'});

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteButton).toBeEnabled();
    expect(favoriteButton).toHaveTextContent('To bookmarks');
  });

  it('should change favorite status on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });
    const mockFavoriteOffer = makeFakeNotFavoriteOffer();


    render(
      <Provider store={store}>
        <MemoryRouter >
          <OfferCard offer={mockFavoriteOffer} cardClassName={cardClass} cardImageClassName={imageClass}/>
        </MemoryRouter>
      </Provider>,
    );

    const favoriteButton = screen.getByRole('button', { name: 'To bookmarks'});
    userEvent.click(favoriteButton);
  });

  it('get class correctly', () => {
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });
    const mockFavoriteOffer = makeFakeOffer(true);

    render(
      <Provider store={store}>
        <MemoryRouter >
          <OfferCard offer={mockFavoriteOffer} cardClassName={cardClass} cardImageClassName={imageClass}/>
        </MemoryRouter>
      </Provider>,
    );

    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
    expect(article).toHaveClass(cardClass);
  });
});
