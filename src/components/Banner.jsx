import React from "react";
import "./Banner.css";
import logo from "../assets/stack-logo.png";
import utterLogo from "../assets/utter.svg";

export default function Banner() {
  return (
    <section className="banner-section">
      {/* Section title (same style as Skills/Projects) */}
      <div className="banner-heading-wrap">
        <h2 className="banner-heading">Main Software</h2>
      </div>

      {/* Banners */}
      <div className="banner-container">
        <div className="banner-grid">
          <div className="banner">
            {/* Decorative big logo (background) */}
            <div
              className="banner-deco"
              style={{ backgroundImage: `url(${logo})` }}
              aria-hidden="true"
            />

            {/* Center content */}
            <div className="banner-content">
              <a
                href="https://www.zenit-online.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-logo-link"
              >
                <div className="banner-logo-wrap">
                  <img className="banner-logo" src={logo} alt="Logo" />
                </div>
              </a>

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

          <div className="banner banner--placeholder">
            <div
              className="banner-deco"
              style={{ backgroundImage: `url(${utterLogo})` }}
              aria-hidden="true"
            />
            <div className="banner-content">
              <a
                href="https://utter-a.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-logo-link"
              >
                <div className="banner-logo-wrap">
                  <img className="banner-logo" src={utterLogo} alt="Utter logo" />
                </div>
              </a>
              <h1 className="banner-title">
                <a
                  href="https://utter-a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-title-link"
                >
                  Utter
                </a>
              </h1>
              <p className="banner-subtitle">
                Turn your Voice into Notes, Journal, To-dos. Coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
