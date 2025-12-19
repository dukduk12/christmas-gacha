import React from "react";

export default function Header({ onTabClick, activeTab }) {
  const tabs = [
    { name: "Home", key: "home" },
    { name: "Gacha", key: "gacha" }
  ];

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#000",
      color: "#fff",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000,
      boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      boxSizing: "border-box"
    }}>
      {/* 로고 */}
      <div style={{
        fontFamily: "'Pacifico', cursive",
        fontSize: "28px",
        color: "#fff",
      }}>
        Christmas Gacha
      </div>

      {/* 내비게이션 버튼 */}
      <nav style={{ display: "flex", gap: "25px" }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabClick(tab.key)}
            style={{
              padding: "8px 0",
              border: "none",
              borderBottom: activeTab === tab.key ? "3px solid #FF4500" : "3px solid transparent",
              backgroundColor: "transparent",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.borderBottom = "3px solid #FF4500"}
            onMouseLeave={e => e.currentTarget.style.borderBottom = activeTab === tab.key ? "3px solid #FF4500" : "3px solid transparent"}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
