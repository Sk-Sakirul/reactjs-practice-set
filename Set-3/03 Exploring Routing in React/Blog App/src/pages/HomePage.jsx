import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const trimmed = city.trim();
    if (!trimmed) {
      setErrorMessage("Please enter a valid city name.");
      return;
    }

    setErrorMessage("");
    navigate(`/weather/${encodeURIComponent(trimmed)}`);
    setCity("");
  }

  return (
    <main className="weather-home">
      <section className="weather-home__hero">
        <div className="weather-home__content">
          <p className="weather-home__eyebrow">Weather Dashboard</p>
          <h1 className="weather-home__title">Track live weather by city name</h1>
          <p className="weather-home__description">
            Search for any city to view its current temperature, humidity,
            weather condition, and location map on a clean routed page.
          </p>

          <form className="weather-search-form" onSubmit={handleSearch}>
            <label className="weather-search-form__label" htmlFor="city">
              Enter city name
            </label>
            <div className="weather-search-form__controls">
              <input
                id="city"
                className="weather-search-form__input"
                type="text"
                placeholder="Try Kolkata, London, or Tokyo"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="weather-search-form__button" type="submit">
                Search
              </button>
            </div>
            {errorMessage ? (
              <p className="weather-search-form__error">{errorMessage}</p>
            ) : null}
          </form>
        </div>

        <div className="weather-home__panel">
          <div className="weather-home__card">
            <span className="weather-home__card-label">Fast routing</span>
            <strong className="weather-home__card-value">/weather/:city</strong>
          </div>
          <div className="weather-home__card">
            <span className="weather-home__card-label">Shows</span>
            <strong className="weather-home__card-value">
              Temperature, humidity, condition
            </strong>
          </div>
          <div className="weather-home__card">
            <span className="weather-home__card-label">Bonus</span>
            <strong className="weather-home__card-value">
              Embedded city map included
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
