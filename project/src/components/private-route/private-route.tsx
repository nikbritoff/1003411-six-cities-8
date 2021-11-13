import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/user-data/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute({
  exact,
  path,
  render,
}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);

  return (
    <Route
      exact = {exact}
      path = {path}
      render = {() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login}/>
      )}
    />
  );
}

export default PrivateRoute;
