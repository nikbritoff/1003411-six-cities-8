type PropertyGalleryProps = {
  images: string[],
  type: string,
}

function PropertyGallery({images, type}: PropertyGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, 6).map((image) => (
          <div className="property__image-wrapper" key={image}>
            <img className="property__image" src={image} alt={type}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;
