/* eslint-disable react/prop-types */
import { favouriteContext } from "../context/allContexts";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };
  return (
    <favouriteContext.Provider
      value={{
        favourites,
        setFavourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </favouriteContext.Provider>
  );
}
