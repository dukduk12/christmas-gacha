import React, { useEffect, useState } from "react";

export default function LandingText() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / window.innerHeight, 1); // 0~1

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "0 5vw",
      boxSizing: "border-box",
      color: "#fff",
      transform: `translateY(${progress * 100}px)`, // 스크롤 따라 아래로 이동
      opacity: 1 // 항상 하얀색
    }}>
      <h1 style={{
        fontSize: "min(6vw, 48px)",
        marginBottom: "20px",
        lineHeight: "1.1",
      }}>
        Merry Christmas!
      </h1>
      <p style={{
        fontSize: "min(2.5vw, 20px)",
        lineHeight: "1.6",
        maxWidth: "90%"
      }}>
        The snow is falling, the tree is sparkling, and a special gift is waiting just for you.
        Each decoration could hide a sweet surprise, a funny costume, or even a heartfelt message.
      </p>
      <p style={{
        marginTop: "30px",
        fontStyle: "italic",
        fontSize: "min(1.8vw, 16px)"
      }}>
        Scroll down to start your festive adventure!
      </p>

      {/* 스크롤 아이콘 ⬇ */}
      <div style={{
        marginTop: "8px",       // 글자 바로 아래
        alignSelf: "center",    // 가로 중앙
        fontSize: "5rem",
        opacity: 0.5,
        animation: "bounce 1.5s infinite"
      }}>
        ⬇
      </div>

      {/* 애니메이션 정의 */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(8px); }
          60% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
}
