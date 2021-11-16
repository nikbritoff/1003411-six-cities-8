import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../screens/main/main';
import Login from '../../screens/login/login';
import Favorites from '../../screens/favorites/favorites';
import Property from '../../screens/property/property';
import NotFound from '../../screens/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import AuthRoute from '../auth-routes/auth-routes';

function App(): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main/>
        </Route>
        <AuthRoute
          exact
          path={AppRoute.Login}
          render={() => <Login/>}
        >
        </AuthRoute>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
        >
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.Property}
        >
          <Property />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
