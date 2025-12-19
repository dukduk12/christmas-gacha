import React, { useEffect, useState } from "react";

/* ===== 카드 정의 (Section2와 동일) ===== */
const cards = [
  { title: "Sweets", emoji: "🍬", prob: "10%" },
  { title: "Costume", emoji: "👕", prob: "70%" },
  { title: "Message", emoji: "💌", prob: "10%" },
  { title: "Mystery", emoji: "🎁", prob: "10%" },
];

/* ===== 결과별 빛 색상 ===== */
const glowMap = {
  Sweets: "#ff7ad9",
  Costume: "#4cff9a",
  Message: "#6bb7ff",
  Mystery: "#b388ff"
};

/* ===== 확률 기반 추첨 ===== */
function drawGacha() {
  const r = Math.random() * 100;
  let acc = 0;

  for (const card of cards) {
    acc += parseInt(card.prob, 10);
    if (r <= acc) return card;
  }
  return cards[cards.length - 1];
}

export default function Section3() {
  const [phase, setPhase] = useState("shaking"); // shaking → reveal
  const [result, setResult] = useState(null);

  useEffect(() => {
    const picked = drawGacha();
    setResult(picked);

    const timer = setTimeout(() => {
      setPhase("reveal");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const glowColor = result ? glowMap[result.title] : "#fff";

  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at top, #111, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        overflow: "hidden"
      }}
    >
      {/* Gacha Core */}
      <div
        style={{
          width: "300px",
          height: "400px",
          borderRadius: "36px",
          background: "linear-gradient(160deg, #1c1c2b, #0b0b14)",
          boxShadow:
            phase === "reveal"
              ? `
                0 0 40px ${glowColor},
                0 0 120px ${glowColor}66,
                0 40px 90px rgba(0,0,0,0.9)
              `
              : "0 40px 90px rgba(0,0,0,0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: phase === "shaking" ? "shake 0.15s infinite" : "none",
          transition: "box-shadow 0.8s ease"
        }}
      >
        {/* ---------- SHAKING ---------- */}
        {phase === "shaking" && (
          <div
            style={{
              fontSize: "72px",
              opacity: 0.85,
              animation: "pulse 0.8s infinite"
            }}
          >
            ❓
          </div>
        )}

        {/* ---------- REVEAL ---------- */}
        {phase === "reveal" && result && (
          <div
            style={{
              textAlign: "center",
              animation: "fadeIn 0.8s ease forwards"
            }}
          >
            <div
              style={{
                fontSize: "72px",
                marginBottom: "16px",
                filter: `drop-shadow(0 0 12px ${glowColor})`
              }}
            >
              {result.emoji}
            </div>

            <h2 style={{ letterSpacing: "2px" }}>
              {result.title}
            </h2>

            <p
              style={{
                marginTop: "10px",
                opacity: 0.7
              }}
            >
              Probability {result.prob}
            </p>

            {/* 🎉 Costume 전용 축하 메시지 */}
            {result.title === "Costume" && (
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  color: glowColor,
                  fontWeight: "600",
                  letterSpacing: "1px",
                  animation: "pop 0.6s ease"
                }}
              >
                🎉 CONGRATULATIONS!
              </p>
            )}
          </div>
        )}
      </div>

      {/* ---------- Animations ---------- */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            50% { transform: translateX(6px); }
            75% { transform: translateX(-4px); }
            100% { transform: translateX(0); }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.85);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.6; }
          }

          @keyframes pop {
            0% { transform: scale(0.6); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
