import React from "react";
import CardGrid from "./CardGrid";

export default function Section2({ onStart }) {
  return (
    <section style={{
      width: "100vw",
      minHeight: "100vh",
      backgroundColor: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      {/* 내부 콘텐츠 컨테이너 */}
      <div style={{
        width: "100%",
        maxWidth: "1400px",
        padding: "120px 8vw",
        boxSizing: "border-box",
        color: "#fff"
      }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          marginBottom: "16px"
        }}>
          Choose Your Christmas Fate
        </h2>

        <p style={{
          opacity: 0.7,
          maxWidth: "640px",
          marginBottom: "60px"
        }}>
          One choice. Fixed probability.  
          No turning back.
        </p>

        <CardGrid />

        {/* START 버튼 */}
        <div style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center"
        }}>
          <button
            onClick={onStart}
            style={{
              padding: "16px 48px",
              fontSize: "16px",
              letterSpacing: "2px",
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.6)",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            START GACHA
          </button>
        </div>
      </div>
    </section>
  );
}
