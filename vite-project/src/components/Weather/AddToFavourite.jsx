import { useContext, useEffect, useState } from "react";
import redHeart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { favouriteContext, weatherContext } from "../../context/allContexts";

export default function AddToFavourite() {
  const [isFav, toggleFav] = useState(false);
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(favouriteContext);
  const { weatherData } = useContext(weatherContext);
  const { latitude, longitude, location } = weatherData;

  function handleFav() {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleFav(!isFav);
  }

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFav(found);
  }, [favourites, location]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFav}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFav ? redHeart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
