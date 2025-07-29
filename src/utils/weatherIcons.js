import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaBolt,
  FaSmog,
} from "react-icons/fa";

/**
 * Possible weather condition icon codes (https://openweathermap.org/weather-conditions#Icon-list)
 * 01 - Clear Sky
 * 02 - Few Clouds
 * 03 - Scattered Clouds
 * 04 - Broken Clouds
 * 09 - Shower Rain
 * 10 - Rain
 * 11 - Thunderstorm
 * 13 - Snow
 * 50 - Mist
 * I set the same icon for day and night to keep it simple based on code challenge purpose
 */
export function getWeatherIcon(iconCode) {
  const iconMap = {
    "01d": <FaSun className="text-yellow-400" />,
    "01n": <FaSun className="text-yellow-200" />,
    "02d": <FaCloud className="text-gray-400" />,
    "02n": <FaCloud className="text-gray-300" />,
    "03d": <FaCloud className="text-gray-500" />,
    "03n": <FaCloud className="text-gray-400" />,
    "04d": <FaCloud className="text-gray-600" />,
    "04n": <FaCloud className="text-gray-500" />,
    "09d": <FaCloudRain className="text-blue-400" />,
    "09n": <FaCloudRain className="text-blue-300" />,
    "10d": <FaCloudRain className="text-blue-500" />,
    "10n": <FaCloudRain className="text-blue-400" />,
    "11d": <FaBolt className="text-yellow-500" />,
    "11n": <FaBolt className="text-yellow-400" />,
    "13d": <FaSnowflake className="text-blue-200" />,
    "13n": <FaSnowflake className="text-blue-100" />,
    "50d": <FaSmog className="text-gray-300" />,
    "50n": <FaSmog className="text-gray-200" />,
  };

  return iconMap[iconCode] || <FaSun className="text-yellow-400" />;
}
