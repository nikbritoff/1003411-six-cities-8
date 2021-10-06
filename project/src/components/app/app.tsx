import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../screens/main/main';
import Login from '../../screens/login/login';
import Favorites from '../../screens/favorites/favorites';
import Property from '../../screens/property/property';
import NotFound from '../../screens/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type Cards = {
  cards: number[],
};

function App({cards} : Cards): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main cards={cards}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
