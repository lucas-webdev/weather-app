// src/hooks/useWeather.js
import { useState, useEffect, useCallback } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // In a real app, this would be in an environment variable
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export default function useWeather(city, unit) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Deal with possible API errors (https://openweathermap.org/api/one-call-3#popularerrors)
  const handleApiError = useCallback((status, errorData = {}) => {
    let message = "Failed to fetch weather data";

    switch (status) {
      case 400:
        message = `Invalid request: ${errorData.message || "Check your input"}`;
        break;
      case 401:
        message = "Unauthorized: Invalid API key";
        break;
      case 404:
        message = "City not found";
        break;
      case 429:
        message = "Too many requests - try again later";
        break;
      default:
        message = errorData.message || `Error ${status}`;
    }

    setError({ message });
  }, []);

  useEffect(() => {
    if (!city) return;

    setError(null);
    setWeatherData(null);

    const fetchWeather = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${BASE_URL}?q=${city}&units=${unit}&appid=${API_KEY}`
        );

        if (!response.ok) {
          // Handle HTTP errors without throwing
          const errorData = await response.json().catch(() => ({}));
          handleApiError(response.status, errorData);
          return;
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        // Handle network errors or other exceptions
        setError({
          message: err.message || "Network error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, handleApiError, unit]);

  return { weatherData, loading, error };
}
