import { useContext } from "react";
import { FavoritesContext } from "../../App";
import "./favorites.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ImageViewer from "../ImageViewer/ImageViewer";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <section className="container-fluid favorites-section">
      <div className="d-flex justify-content-center mb-4">
        <div className="page-title-container">
          <h1>My Favorites</h1>
        </div>
      </div>
      {favorites.length > 0 ? (
        <div className="favorites-container">
          {favorites.map((fav) => (
            <div
              className="favorites-item row d-flex align-items-center mb-4"
              key={fav.date}
            >
              <h5 className="favorites-text-title">{fav.title}</h5>
              <div className="col-lg-5 col-md-12 mb-3 mb-lg-0 d-flex justify-content-end">
                <ImageViewer
                  src={fav.url}
                  alt={fav.title}
                  className="rounded favorites-img"
                />
              </div>
              <div className="col-lg-7 col-md-12 text-lg-start text-center">
                <div className="favorites-description">
                  <FavoriteButton picture={fav} className="favoriteButton" />
                  <p className="mt-2 mb-1">{fav.date}</p>
                  <p>{fav.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-warming">No pictures in favorites!</p>
      )}
    </section>
  );
};

export default Favorites;
