import React from "react";
import heroImage from "../assets/hero 5.jpg";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="text-center bg-image"
        style={{
          backgroundImage: `url(${heroImage})`,
          minHeight: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 27px 30px rgba(0, 0, 0, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0", // ✅ reduced top/bottom padding
        }}
      >
        <div className="text-white">
          <h1
            className="mb-2"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              padding: "3rem", // ✅ smaller padding
            }}
          >
            Hi! I'm Vellan
          </h1>

          <h4
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              marginBottom: "0.5rem", // ✅ tighter spacing
            }}
          >
            I am a full-stack developer.
          </h4>

          <h4
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              marginBottom: "0rem", // ✅ removes bottom gap
            }}
          >
            Design engineer, with an interest in programming.
          </h4>
        </div>
      </div>
    </header>
  );
}

