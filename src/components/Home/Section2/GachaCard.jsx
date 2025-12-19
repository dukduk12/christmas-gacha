import React, { useState } from "react";

export default function GachaCard({ title, emoji, prob }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "1400px",
        cursor: "pointer"
      }}
      onClick={() => setFlipped(v => !v)}
    >
      <div
        style={{
          height: "340px",
          borderRadius: "28px",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.9s cubic-bezier(.22,.61,.36,1)",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)"
        }}
      >
        {/* ---------- FRONT ---------- */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "28px",
            background: `
              linear-gradient(
                145deg,
                #1b2430,
                #0f1620
              )
            `,
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: `
              0 20px 40px rgba(0,0,0,0.6),
              inset 0 0 30px rgba(255,255,255,0.03)
            `,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backfaceVisibility: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "64px",
              marginBottom: "18px",
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
            }}
          >
            {emoji}
          </div>

          <h3
            style={{
              fontSize: "22px",
              letterSpacing: "1px"
            }}
          >
            {title}
          </h3>

          <p
            style={{
              marginTop: "12px",
              fontSize: "12px",
              opacity: 0.6
            }}
          >
            click anywhere
          </p>
        </div>

        {/* ---------- BACK ---------- */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "28px",
            background: `
              linear-gradient(
                160deg,
                #2b1d3a,
                #140b1f
              )
            `,
            border: "1px solid rgba(255,255,255,0.18)",
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p
            style={{
              fontSize: "14px",
              opacity: 0.7,
              marginBottom: "10px"
            }}
          >
            Probability
          </p>

          {/* 3D 확률 텍스트 */}
          <div
            style={{
              fontSize: "42px",
              fontWeight: "700",
              letterSpacing: "2px",
              transform: "perspective(600px) translateZ(20px)",
              textShadow: `
                0 1px 0 #ccc,
                0 2px 0 #bbb,
                0 3px 0 #aaa,
                0 6px 12px rgba(0,0,0,0.6)
              `,
              color: "#fff"
            }}
          >
            {prob}
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "12px",
              opacity: 0.5
            }}
          >
            fixed chance
          </p>
        </div>
      </div>
    </div>
  );
}
