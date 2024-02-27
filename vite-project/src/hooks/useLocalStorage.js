import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favourites));
  }, [favourites, storageKey]);

  return [favourites, setFavourites];
};

export default useLocalStorage;
