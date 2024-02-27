import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import FavouriteProvider from "./provider/FavouriteProvider";

import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <LocationProvider>
      <FavouriteProvider>
        <WeatherProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </WeatherProvider>
      </FavouriteProvider>
    </LocationProvider>
  );
}
