import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { AuthorizationStatus } from '../../const';
import Header from './header';
import { makeFakeUserInfo } from '../../utils/mock';
import { NameSpace } from '../../store/root-reducer';

const mockStore = configureMockStore();
const history = createMemoryHistory();


describe('Component: Header', () => {
  it('should render correctly when authorizationStatus: NoAuth', () => {
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render correctly when authorizationStatus: Auth', () => {
    const mockUser = makeFakeUserInfo();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userInfo: mockUser,
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });
});
