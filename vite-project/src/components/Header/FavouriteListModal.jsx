/* eslint-disable react/prop-types */
import { useContext } from "react";
import { LocationContext, favouriteContext } from "../../context/allContexts";

export default function FavouriteListModal({ onClose }) {
  const { favourites } = useContext(favouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  const handleLocationClick = (fav) => {
    setSelectedLocation({ ...fav });
    onClose(); // Close the modal
  };

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 py-2 px-4 cursor-pointer">
        {favourites && favourites.length > 0 ? (
          favourites.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              <a onClick={() => handleLocationClick(fav)}>{fav.location}</a>
            </li>
          ))
        ) : (
          <p>Nothing is added to Favourites!</p>
        )}
      </ul>
    </div>
  );
}
