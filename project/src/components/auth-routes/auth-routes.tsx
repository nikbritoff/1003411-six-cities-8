import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/user-data/selectors';

type AuthRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function AuthRoute ({
  exact,
  path,
  render,
}: AuthRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);

  return (
    <Route
      exact = {exact}
      path = {path}
      render = {() => (
        authorizationStatus === AuthorizationStatus.NoAuth
          ? render()
          : <Redirect to={AppRoute.Main}/>
      )}
    />
  );
}

export default AuthRoute;
