import { useState } from "react";
import { LocationContext } from "../context/allContexts";

// eslint-disable-next-line react/prop-types
export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  console.log(selectedLocation);
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
