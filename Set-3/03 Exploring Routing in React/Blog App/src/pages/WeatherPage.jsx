import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WeatherPage = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const decodedCity = decodeURIComponent(city || "");

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    async function fetchWeather() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(decodedCity)}&appid=${apiKey}&units=metric`,
        );

        const data = await response.json();

        if (!response.ok || Number(data.cod) !== 200) {
          throw new Error(data.message || "City not found");
        }

        setWeather(data);
      } catch (err) {
        setWeather(null);
        setError(err.message || "Unable to fetch weather details right now.");
      } finally {
        setLoading(false);
      }
    }

    if (!apiKey) {
      setLoading(false);
      setError(
        "Missing OpenWeather API key. Add VITE_OPENWEATHER_API_KEY in your .env file.",
      );
      return;
    }

    fetchWeather();
  }, [decodedCity]);

  const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY;
  const mapSource = googleMapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=${encodeURIComponent(decodedCity)}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(decodedCity)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

  if (loading) {
    return (
      <section className="weather-status-page">
        <div className="weather-status-card">
          <p className="weather-status-card__eyebrow">Loading weather</p>
          <h2 className="weather-status-card__title">
            Checking live conditions for {decodedCity}
          </h2>
          <p className="weather-status-card__text">
            Please wait while the dashboard fetches the latest weather data.
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="weather-status-page">
        <div className="weather-status-card weather-status-card--error">
          <p className="weather-status-card__eyebrow">Something went wrong</p>
          <h2 className="weather-status-card__title">
            Unable to load weather for {decodedCity}
          </h2>
          <p className="weather-status-card__text">{error}</p>
          <button className="weather-action-button" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <main className="weather-details-page">
      <section className="weather-details-hero">
        <div className="weather-details-hero__content">
          <p className="weather-details-hero__eyebrow">
            {weather.sys?.country ? `${weather.name}, ${weather.sys.country}` : weather.name}
          </p>
          <h1 className="weather-details-hero__title">
            {weather.weather[0].description}
          </h1>
          <p className="weather-details-hero__subtitle">
            Live weather details with routing and map support for your assignment.
          </p>
          <button className="weather-action-button" onClick={() => navigate("/")}>
            Search Again
          </button>
        </div>

        <div className="weather-highlight-card">
          <p className="weather-highlight-card__label">Current Temperature</p>
          <h2 className="weather-highlight-card__value">
            {Math.round(weather.main.temp)} deg C
          </h2>
          <p className="weather-highlight-card__meta">
            Feels like {Math.round(weather.main.feels_like)} deg C
          </p>
        </div>
      </section>

      <section className="weather-stats-grid">
        <article className="weather-stat-card">
          <p className="weather-stat-card__label">Humidity</p>
          <h3 className="weather-stat-card__value">{weather.main.humidity}%</h3>
          <p className="weather-stat-card__description">
            Moisture level in the air right now.
          </p>
        </article>

        <article className="weather-stat-card">
          <p className="weather-stat-card__label">Condition</p>
          <h3 className="weather-stat-card__value">{weather.weather[0].main}</h3>
          <p className="weather-stat-card__description">
            Detailed weather condition from OpenWeather.
          </p>
        </article>

        <article className="weather-stat-card">
          <p className="weather-stat-card__label">Wind Speed</p>
          <h3 className="weather-stat-card__value">{weather.wind.speed} m/s</h3>
          <p className="weather-stat-card__description">
            Surface wind speed reported for this city.
          </p>
        </article>
      </section>

      <section className="weather-map-section">
        {/* <div className="weather-map-section__content">
          <p className="weather-map-section__eyebrow">City Location</p>
          <h2 className="weather-map-section__title">Google Map for {weather.name}</h2>
          <p className="weather-map-section__description">
            The embedded map helps connect the weather reading with the searched
            city. Add <code>VITE_GOOGLE_MAPS_EMBED_API_KEY</code> for the official
            Google Maps Embed API URL. Without it, the app falls back to a
            standard map embed so the feature still works during development.
          </p>
        </div> */}

        <div className="weather-map-frame">
          <iframe
            className="weather-map-frame__iframe"
            title={`Map of ${weather.name}`}
            src={mapSource}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
};

export default WeatherPage;
