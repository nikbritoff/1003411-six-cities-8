type PropertyInsideListProps = {
  goods: string[],
}

function PropertyInsideList({goods}: PropertyInsideListProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods.map((good) => (
        <li className="property__inside-item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
}

export default PropertyInsideList;
