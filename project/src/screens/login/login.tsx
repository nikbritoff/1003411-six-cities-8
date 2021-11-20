import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginForm from '../../components/login-form/login-form';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/user/selectors';
import { changeCity, redirectToRoute } from '../../store/action';
import { useEffect } from 'react';
import { getRandomCity } from '../../utils/common';

function SignIn(): JSX.Element {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  });

  const randomCity = getRandomCity();

  const clickCityHandler = () => {
    dispatch(changeCity(randomCity));
  };


  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={clickCityHandler}
              >
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
