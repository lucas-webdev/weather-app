// src/App.jsx
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import UnitToggle from "./components/UnitToggle";

function App() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit according to API

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-md lg:max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Weather App
        </h1>

        <SearchBar onSearch={handleSearch} />

        <WeatherCard city={city} unit={unit} />

        <UnitToggle
          unit={unit}
          onToggle={() => setUnit(unit === "metric" ? "imperial" : "metric")}
        />
      </div>
    </div>
  );
}

export default App;
