import MainScreen from '../main-screen/main-screen';
import { MainScreenProps } from '../../types/main-screen';
import Favorites from '../favorites/favorites';
// import Property from '../property/property';

function App(props: MainScreenProps): JSX.Element {
  // return Property();
  return Favorites();
  return MainScreen(props);
}

export default App;
