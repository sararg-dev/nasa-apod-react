import { useState } from "react";
import * as API from "../../services/api";
import "./randomButton.css";
import Spinner from "../Spinner/Spinner";

const RandomButton = ({ setPictureData }) => {
  const [loading, setLoading] = useState(false);

  const handleRandomClick = async () => {
    setLoading(true);
    try {
      const randomPicture = await API.getRandomPOD();
      setPictureData(randomPicture);
    } catch (error) {
      console.error("Error al obtener la imagen aleatoria", error);
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <button
      onClick={handleRandomClick}
      disabled={loading}
      type="button"
      className="btn randomButton d-flex align-items-center"
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <i className="bi bi-shuffle icono me-2"></i>
          <span>Random picture</span>
        </>
      )}
    </button>
  );
};

export default RandomButton;
