import { FormEvent, useState, ChangeEvent } from 'react';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { loginAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { AuthData } from '../../types/auth-data';
import BeatLoader from 'react-spinners/BeatLoader';
import cn from 'classnames';
import styles from './login-form.module.css';

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
  touched: boolean,
  errorText: string,
  regex: RegExp,
};

type FormStateProps = {
  [key: string]: FieldProps,
}


function LoginForm({onSubmit, loginLoading, loginError}: PropsFromRedux): JSX.Element {
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      touched: false,
      errorText: 'Invalid login',
      regex: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/i,
    },
    password: {
      value: '',
      error: false,
      touched: false,
      errorText: 'Invalid password',
      regex: /([a-zA-Z]+[0-9]+\w*)|([0-9]+[a-zA-Z]+\w*)/,
    },
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const rule = formState[name].regex;
    const isFieldValid = rule.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
        error: !isFieldValid,
        touched: true,
      },
    });
  };

  const isFormValid = Object.values(formState).every((item : FieldProps) => !item.error && item.touched);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: formState.email.value,
      password: formState.password.value,
    });
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      {Object.entries(formFields).map(([name, label]) => {
        const inputClass = cn('login__input', 'form__input',
          formState[name].error ? styles.error : '');

        return (
          <div
            className={cn('login__input-wrapper', 'form__input-wrapper', styles.container)}
            key={name}
          >
            <label className="visually-hidden">{label}</label>
            <input
              className={inputClass}
              type={name}
              name={name}
              placeholder={label}
              value={formState[name].value}
              onChange={handleChange}
            />
            {formState[name].error && <p className={styles.text}>{formState[name].errorText}</p>}
          </div>
        );
      })}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={loginLoading || !isFormValid}
      >
        {loginLoading
          ? 'Singing in'
          : 'Sign in'}
        <BeatLoader
          css={styles.spinner}
          size={10}
          color='#ffffff'
          loading={loginLoading}
          speedMultiplier={1}
        />
      </button>
    </form>
  );
}

export { LoginForm };
export default connector(LoginForm);
