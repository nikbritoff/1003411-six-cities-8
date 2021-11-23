import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import NotFound from './not-found';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
});

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back to the home page')).toBeInTheDocument();
  });
});
