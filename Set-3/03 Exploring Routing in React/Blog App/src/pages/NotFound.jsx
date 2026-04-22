import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="weather-status-page">
      <div className="weather-status-card">
        <p className="weather-status-card__eyebrow">404 Error</p>
        <h2 className="weather-status-card__title">Page not found</h2>
        <p className="weather-status-card__text">
          The route you opened does not exist in this dashboard.
        </p>
        <Link className="weather-action-button weather-action-button--link" to="/">
          Back to Search
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
