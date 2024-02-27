/* eslint-disable react/prop-types */
import { weatherContext } from "../context/allContexts";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();
  return (
    <weatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
