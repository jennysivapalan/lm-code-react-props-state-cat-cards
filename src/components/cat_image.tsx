interface CatImageProps {
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const CatImage: React.FC<CatImageProps> = (props) => {
  return (
    <>
      <img src={props.image} alt={props.altText} className="card__image" />
      <p className="card__text__small">
        Image licenced under <a href={props.licenceUrl}>{props.licenceType}</a>
        {props.attributionName && (
          <>
            &nbsp;by <a href={props.attributionUrl}>{props.attributionName}</a>
          </>
        )}
      </p>
    </>
  );
};

export default CatImage;
