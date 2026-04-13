import React from "react";
import "./Banner.css";
import logo from "../assets/stack-logo.png";
import utterLogo from "../assets/utter.svg";
import nutriScanLogo from "../assets/nutriscan.png";
import assetGenLogo from "../assets/assetgen.png";

export default function Banner() {
  const zenitUrl = "https://www.zenit-online.com/";
  const utterUrl =
    "https://play.google.com/store/apps/details?id=com.utter.app";
  const nutriScanUrl = "https://play.google.com/store/apps/details?id=com.nutriscan.vellan";
  const assetGenUrl = "https://www.assetgenerator.io/";

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
                  You don’t need another productivity app
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
                  Turn your Voice into Notes, Journals, To-dos
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
                    <img
                      className="banner-logo"
                      src={nutriScanLogo}
                      alt="NutriScan logo"
                    />
                  </div>
                </div>
                <h1 className="banner-title">
                  <span className="banner-title-link">NutriScan</span>
                </h1>
                <p className="banner-subtitle">
                  Analyse nutrition labels, ingredients & allergens
                </p>
              </div>
            </div>
          </a>

          <a
            href={assetGenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
          >
            <div className="banner banner--soft-black">
              <div className="banner-content">
                <div className="banner-logo-link">
                  <div className="banner-logo-wrap banner-logo-wrap--placeholder">
                    <img
                      className="banner-logo"
                      src={assetGenLogo}
                      alt="AssetGen logo"
                    />
                  </div>
                </div>
                <h1 className="banner-title">
                  <span className="banner-title-link">AssetGen</span>
                </h1>
                <p className="banner-subtitle">
                  Context-aware asset generation for every project
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
