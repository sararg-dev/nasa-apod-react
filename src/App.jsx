import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

// Contexto para compartir favoritos
export const FavoritesContext = createContext();

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (picture) => {
    const isFavorite = favorites.some((fav) => fav.date === picture.date);
    const updateFavorites = isFavorite
      ? favorites.filter((fav) => fav.date !== picture.date)
      : [...favorites, picture];

    setFavorites(updateFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoritesContext.Provider>
  );
}

export default App;
