import React from "react";

export default function Footer() {
  return (
    <footer style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",       // 좌우 꽉 차게
      backgroundColor: "#000",
      color: "#fff",
      padding: "15px 0",   // 좌우 padding 제거, 상하만
      textAlign: "center",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "500",
      fontSize: "14px",
      letterSpacing: "1px",
      borderTop: "1px solid #333",
      opacity: 0.8,
      boxSizing: "border-box" // 너비 계산에 padding 포함
    }}>
      © Notone-0818 2025. All rights reserved.
    </footer>
  );
}
