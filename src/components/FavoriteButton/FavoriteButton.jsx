import { useContext } from "react";
import { FavoritesContext } from "../../App";
import './favoriteButton.css';

const FavoriteButton = ({ picture }) => {
  const {favorites, toggleFavorite} = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.date === picture.date);

  return (
    <button onClick={() => toggleFavorite(picture)} className="btn favoriteButton" type="button">
      {isFavorite ? <i className="bi bi-heart-fill icono"></i> : <i className="bi bi-heart icono"></i>}
      Favorites
    </button>
  );
};

export default FavoriteButton;
