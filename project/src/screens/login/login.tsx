import { FormEvent, useState, ChangeEvent } from 'react';
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
import cn from 'classnames';

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

const formFields = {
  email: 'E-mail',
  password: 'Password',
};

type FieldProps = {
  value: string,
  error: boolean,
  errorText: string,
  regex: RegExp,
};

type FormStateProps = {
  [key: string]: FieldProps,
}


function SignIn({onSubmit, loginLoading, loginError}: PropsFromRedux): JSX.Element {
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'Некорректный email',
      regex: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi,
    },
    password: {
      value: '',
      error: false,
      errorText: 'Некорректный пароль',
      regex: /\w{3,}/gi,
    },
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const rule = formState[name].regex;

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
        error: rule.test(value),
      },
    });
  };

  const errorComponent = loginError ? <LoginFailed/> : '';

  const override = css`
  display: inline;
  margin: 0 auto;
  position: absolute;
  right: 70px;
`;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let isValid = true;

    (Object.values(formState).forEach((field) => {
      if (field.error) {
        isValid = false;
      }
    }));

    if (isValid) {
      onSubmit({
        login: formState.email.value,
        password: formState.password.value,
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
              {Object.entries(formFields).map(([name, label]) => {
                const inputClass = cn('login__input', 'form__input');
                return (
                  <div
                    className="login__input-wrapper form__input-wrapper"
                    key={name}
                  >
                    <label className="visually-hidden">{label}</label>
                    <input
                      className={inputClass}
                      type={name}
                      name={name}
                      placeholder={label}
                      // required
                      value={formState[name].value}
                      onChange={handleChange}
                    />
                    {formState[name].error
                      ? <p>{formState[name].errorText}</p>
                      : ''}
                  </div>
                );
              })}
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
