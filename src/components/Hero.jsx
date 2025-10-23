import React from "react";
import heroImage from "../assets/hero 5.jpg";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="text-center bg-image"
        style={{
          backgroundImage: `url(${heroImage})`,
          minHeight: "50vh", // ✅ full screen height
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 27px 30px rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem", // ✅ adds breathing room on smaller screens
        }}
      >
        <div className="text-white">
          <h1
            className="mb-3"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)", // ✅ responsive font
              padding: "1rem",
            }}
          >
            Hi! I'm Vellan
          </h1>

          <h4
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)", // ✅ scales down on mobile
              marginBottom: "0.5rem",
            }}
          >
            I am a full-stack developer.
          </h4>
          <h4
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
            }}
          >
            Design engineer, with an interest in programming.
          </h4>
        </div>
      </div>
    </header>
  );
}
