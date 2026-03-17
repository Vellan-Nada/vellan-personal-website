import React from "react";
import "./Banner.css";
import logo from "../assets/stack-logo.png";
import utterLogo from "../assets/utter.svg";

export default function Banner() {
  const zenitUrl = "https://www.zenit-online.com/";
  const utterUrl =
    "https://play.google.com/store/apps/details?id=com.utter.app";
  const nutriScanUrl = "https://nutriscan-website.vercel.app/";

  return (
    <section className="banner-section">
      {/* Section title (same style as Skills/Projects) */}
      <div className="banner-heading-wrap">
        <h2 className="banner-heading">Main Software</h2>
      </div>

      {/* Banners */}
      <div className="banner-container">
        <div className="banner-grid">
          <a
            href={zenitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
          >
            <div className="banner">
              {/* Decorative big logo (background) */}
              <div
                className="banner-deco"
                style={{ backgroundImage: `url(${logo})` }}
                aria-hidden="true"
              />

              {/* Center content */}
              <div className="banner-content">
                <div className="banner-logo-link">
                  <div className="banner-logo-wrap">
                    <img className="banner-logo" src={logo} alt="Logo" />
                  </div>
                </div>

                <h1 className="banner-title">
                  <span className="banner-title-link">Zenit</span>
                </h1>

                <p className="banner-subtitle">
                  You don’t need another productivity app.
                </p>
              </div>
            </div>
          </a>

          <a
            href={utterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
          >
            <div className="banner banner--placeholder">
              <div
                className="banner-deco"
                style={{ backgroundImage: `url(${utterLogo})` }}
                aria-hidden="true"
              />
              <div className="banner-content">
                <div className="banner-logo-link">
                  <div className="banner-logo-wrap">
                    <img className="banner-logo" src={utterLogo} alt="Utter logo" />
                  </div>
                </div>
                <h1 className="banner-title">
                  <span className="banner-title-link">Utter</span>
                </h1>
                <p className="banner-subtitle">
                  Turn your Voice into Notes, Journals, To-dos.
                </p>
              </div>
            </div>
          </a>

          <a
            href={nutriScanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
          >
            <div className="banner banner--green">
              <div className="banner-content">
                <div className="banner-logo-link">
                  <div className="banner-logo-wrap">
                    <svg
                      className="banner-leaf-icon"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                    >
                      <path
                        d="M48.8 14.2c-11.4 1-20.3 5-26.2 11.8-5.3 6.1-7.9 13.4-7.7 21.8 8.4-.2 15.7-2.8 21.8-7.7 6.8-5.9 10.8-14.8 11.8-26.2.1-1-.7-1.8-1.7-1.7Z"
                        fill="#22c55e"
                      />
                      <path
                        d="M43.8 19.6c-7.9 1.4-14 4.8-18.3 10.1-3.4 4.2-5.2 9.1-5.6 14.7 5.6-.4 10.5-2.3 14.7-5.6 5.3-4.3 8.7-10.4 10.1-18.3.1-.6-.4-1.1-.9-.9Z"
                        fill="#4ade80"
                      />
                    </svg>
                  </div>
                </div>
                <h1 className="banner-title">
                  <span className="banner-title-link">NutriScan</span>
                </h1>
                <p className="banner-subtitle">
                  Analyse nutrition labels, ingredients & allergens. Coming soon!
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
