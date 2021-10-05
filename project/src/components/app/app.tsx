import MainScreen from '../../screens/main-screen/main-screen';

type Cards = {
  cards: number[]
};

function App({cards} : Cards): JSX.Element {
  return <MainScreen cards={cards}/>;
}

export default App;
