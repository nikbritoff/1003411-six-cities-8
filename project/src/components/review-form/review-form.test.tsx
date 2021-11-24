import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import  { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import ReviewForm from './review-form';
import { NameSpace } from '../../store/root-reducer';
import userEvent from '@testing-library/user-event';
import { RATING_TITLES } from '../../const';
import { makeFakeInvalidComment, makeFakeValidComment } from '../../utils/mock';
import { debug } from 'console';

const mockStore = configureMockStore();
const mockId = '12';


describe('Component: ReviewForm', () => {
  const store = mockStore({
    [NameSpace.Reviews] : {
      reviewsLoading: false,
      reviewsError: false,
      postingNewReview: false,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter >
          <ReviewForm id={mockId} />
        </MemoryRouter>
      </Provider>,
    );

    const review = screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i);
    const stars = screen.getAllByRole('radio');
    const button = screen.getByRole('button', { name: /Submit/i });

    expect(review).toBeInTheDocument();
    expect(stars).toHaveLength(RATING_TITLES.length);
    expect(button).not.toBeEnabled();
  });

  it('should inputs work correctly', () => {
    const mockValidComment = makeFakeValidComment();
    debug(mockValidComment.length);

    render(
      <Provider store={store}>
        <MemoryRouter >
          <ReviewForm id={mockId} />
        </MemoryRouter>
      </Provider>,
    );

    const review = screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i);
    const stars = screen.getAllByRole('radio');
    const button = screen.getByRole('button', { name: /Submit/i });

    expect(button).not.toBeEnabled();

    userEvent.click(stars[0]);
    userEvent.type(review, mockValidComment);
    expect(screen.getByDisplayValue(mockValidComment)).toBeInTheDocument();

    expect(button).toBeEnabled();
  });

  it('should be disabled submit when comment is invalid and rating is touched', () => {
    const mockInvalidComment = makeFakeInvalidComment();

    render(
      <Provider store={store}>
        <MemoryRouter >
          <ReviewForm id={mockId} />
        </MemoryRouter>
      </Provider>,
    );

    const review = screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i);
    const stars = screen.getAllByRole('radio');
    const button = screen.getByRole('button', { name: /Submit/i });

    expect(button).not.toBeEnabled();

    userEvent.click(stars[4]);
    userEvent.type(review, mockInvalidComment);
    expect(screen.getByDisplayValue(mockInvalidComment)).toBeInTheDocument();

    expect(button).not.toBeEnabled();
  });

  it('should be disabled submit when comment is valid and rating is untouched', () => {
    const mockValidComment = makeFakeValidComment();

    render(
      <Provider store={store}>
        <MemoryRouter >
          <ReviewForm id={mockId} />
        </MemoryRouter>
      </Provider>,
    );

    const review = screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i);
    const button = screen.getByRole('button', { name: /Submit/i });

    expect(button).not.toBeEnabled();

    userEvent.type(review, mockValidComment);
    expect(screen.getByDisplayValue(mockValidComment)).toBeInTheDocument();

    expect(button).not.toBeEnabled();
  });

  it('should render "Submitting..." on submit', () => {
    const storePosting = mockStore({
      [NameSpace.Reviews] : {
        reviewsLoading: false,
        reviewsError: false,
        postingNewReview: true,
      },
    });

    render(
      <Provider store={storePosting}>
        <MemoryRouter >
          <ReviewForm id={mockId} />
        </MemoryRouter>
      </Provider>,
    );

    const button = screen.getByRole('button', { name: /Submit/i });

    expect(button).not.toBeEnabled();
    expect(button).toHaveTextContent('Submitting...');
  });

  it('should submit form when user clicked to sumit', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <MemoryRouter >
          <ReviewForm id={mockId} />
        </MemoryRouter>
      </Provider>,
    );

    const button = screen.getByRole('button', { name: /Submit/i });
    userEvent.click(button);

    expect(useDispatch).toBeCalledTimes(1);
  });
});
