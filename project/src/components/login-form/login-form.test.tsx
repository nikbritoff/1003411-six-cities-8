import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import  { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import LoginForm from './login-form';
import { NameSpace } from '../../store/root-reducer';
import userEvent from '@testing-library/user-event';


const mockStore = configureMockStore();


describe('Component: LoginForm', () => {
  const store = mockStore({
    [NameSpace.User] : {
      loginLoading: false,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter >
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    const email = screen.getByPlaceholderText(/E-mail/i);
    const password = screen.getByPlaceholderText(/Password/i);
    const button = screen.getByRole('button', { name: /sign/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).not.toBeEnabled();
  });

  it('should inputs work correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter >
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    const email = screen.getByPlaceholderText(/E-mail/i);
    const password = screen.getByPlaceholderText(/Password/i);
    const button = screen.getByRole('button', { name: /sign/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).not.toBeEnabled();

    userEvent.type(email, 'test@test.ru');
    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();

    userEvent.type(password, '1w');
    expect(screen.getByDisplayValue(/1w/i)).toBeInTheDocument();

    expect(button).toBeEnabled();
  });

  it('should render error correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter >
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    const email = screen.getByPlaceholderText(/E-mail/i);
    const password = screen.getByPlaceholderText(/Password/i);
    const button = screen.getByRole('button', { name: /sign/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).not.toBeEnabled();

    userEvent.type(email, 'test');
    expect(screen.getByText(/Invalid login/i)).toBeInTheDocument();

    userEvent.type(password, '1');
    expect(screen.getByText(/Invalid password/i)).toBeInTheDocument();

    expect(button).not.toBeEnabled();

  });
  it('should render "Singing in" on submit', () => {
    const storeLoginLoading = mockStore({
      [NameSpace.User] : {
        loginLoading: true,
      },
    });

    render(
      <Provider store={storeLoginLoading}>
        <MemoryRouter >
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    const button = screen.getByRole('button', { name: /Singing in/i });
    expect(button).not.toBeEnabled();
    expect(button).toHaveTextContent('Singing in');
  });

  it('should submit form when user clicked to login-button', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <MemoryRouter >
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    const button = screen.getByRole('button', { name: /sign/i });
    userEvent.click(button);

    expect(useDispatch).toBeCalledTimes(1);
  });
});
