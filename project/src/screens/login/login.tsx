import { useRef, FormEvent } from 'react';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { loginAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { AuthData } from '../../types/auth-data';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';
import LoginFailed from '../../components/login-failed/login-failed';

const mapStateToProps = ({loginLoading, loginError}: State) => ({
  loginLoading,
  loginError,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignIn({onSubmit, loginLoading, loginError}: PropsFromRedux): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const errorComponent = loginError ? <LoginFailed/> : '';

  const override = css`
  display: inline;
  margin: 0 auto;
  position: absolute;
  right: 70px;
`;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={false}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  required={false}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={loginLoading}
              >
                Sign in
                <BeatLoader
                  css={override}
                  size={10}
                  color={'#ffffff'}
                  loading={loginLoading}
                  speedMultiplier={1}
                />
              </button>
              {errorComponent}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { SignIn };
export default connector(SignIn);
