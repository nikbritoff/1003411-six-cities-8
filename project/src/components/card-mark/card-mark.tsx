type CardMarkProps = {
  className: string,
}

function CardMark({className}: CardMarkProps): JSX.Element {
  return (
    // <div className="place-card__mark">
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default CardMark;
