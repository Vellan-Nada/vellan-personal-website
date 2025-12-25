import React from "react";
import "./Banner.css";
import logo from "../assets/stack-logo.png";

export default function Banner() {
  return (
    <section className="banner-section">
      {/* Section title (same style as Skills/Projects) */}
      <div className="banner-heading-wrap">
        <h2 className="banner-heading">Main Projects</h2>
      </div>

      {/* Banner */}
      <div className="banner-container">
        <div className="banner">
          {/* Decorative big logo (background) */}
          <div
            className="banner-deco"
            style={{ backgroundImage: `url(${logo})` }}
            aria-hidden="true"
          />

          {/* Center content */}
          <div className="banner-content">
            <div className="banner-logo-wrap">
              <img className="banner-logo" src={logo} alt="Logo" />
            </div>

            <h1 className="banner-title">
              <a
                href="https://www.zenit-online.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-title-link"
              >
                Zenit
              </a>
            </h1>

            <p className="banner-subtitle">
              You don’t need another productivity app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

