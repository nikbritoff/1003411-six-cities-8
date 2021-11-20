type CardMarkProps = {
  className: string,
}

function CardMark({className}: CardMarkProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default CardMark;
