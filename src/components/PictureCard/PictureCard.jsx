import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Spinner from "../Spinner/Spinner";
import ImageViewer from '../ImageViewer/ImageViewer';
import "./pictureCard.css";

const PictureCard = ({ pictureData, loading }) => {
  if (loading) {
    return (
      <div className="picture-image-container p-4">
        <Spinner /> 
      </div>
    );
  }

  if (!pictureData) {
    return (
      <div className="picture-image-container p-4 text-center">
        <p>Picture not available</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="picture-title mb-4 text-center">{pictureData.title}</h3>
      <div className="picture-image-container p-4 d-flex flex-column align-items-center">
      <ImageViewer
          src={pictureData.url}
          alt={pictureData.title}
        />
        <div className="favorite-button-container mt-3">
          <FavoriteButton picture={pictureData} />
        </div>
      </div>
      <div className="mt-2 mb-4 picture-description">
        <h6>{pictureData.date}</h6>
        <p>{pictureData.explanation}</p>
      </div>
    </>
  );  
};

export default PictureCard;