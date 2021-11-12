type PropertyFeaturesListProps = {
  type: string,
  bedroms: number,
  maxAdults: number,
}

function PropertyFeaturesList({type, bedroms, maxAdults}: PropertyFeaturesListProps): JSX.Element {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type.split('').map((char, index) => index === 0 ? char.toUpperCase() : char)}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedroms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default PropertyFeaturesList;
