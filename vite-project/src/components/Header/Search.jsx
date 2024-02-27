import { useContext } from "react";
import searchLogo from "../../assets/search.svg";
import { LocationContext } from "../../context/allContexts";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  function handleSearch(e) {
    const term = e.target.value;
    doSearch(term);
  }

  const doSearch = useDebounce(function (term) {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={handleSearch}
        />
        <button type="submit">
          <img src={searchLogo} />
        </button>
      </div>
    </form>
  );
}
