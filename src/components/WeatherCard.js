import useWeather from "../hooks/useWeather";
import { getWeatherIcon } from "../utils/weatherIcons";

export default function WeatherCard({ city, unit }) {
  const { weatherData, loading, error } = useWeather(city, unit);

  // Display nothing if no city has been searched yet
  if (!city) {
    return (
      <div className="mt-6 text-center text-gray-500">
        Search for a city to see its weather
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="mt-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
        <p className="font-bold">Error:</p>
        <p>{error.message}</p>
        {error.message === "City not found" && (
          <p className="mt-2">Please check the city name and try again.</p>
        )}
      </div>
    );
  }

  // Weather data display
  if (weatherData) {
    const temperature = Math.round(weatherData.main.temp);
    const minTemp = Math.round(weatherData.main.temp_min);
    const maxTemp = Math.round(weatherData.main.temp_max);
    const condition = weatherData.weather[0].main;
    const iconCode = weatherData.weather[0].icon;

    return (
      <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">
                {temperature}°{unit === "metric" ? "C" : "F"}
              </span>
              <div>
                <div>
                  Min: {minTemp}°{unit === "metric" ? "C" : "F"}
                </div>
                <div>
                  Max: {maxTemp}°{unit === "metric" ? "C" : "F"}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-6xl mb-1">{getWeatherIcon(iconCode)}</div>
              <p className="text-gray-600 capitalize mt-2">
                {condition.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
