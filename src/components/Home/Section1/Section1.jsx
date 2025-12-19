import React from "react";
import TreeGraphic from "./TreeGraphic";
import LandingText from "./LandingText";

export default function Section1() {
  return (
    <section style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      backgroundColor: "#000", // 섹션 전체 검정
      overflow: "hidden"
    }}>
      {/* 좌측 트리 */}
      <div style={{
        flex: 1,
        position: "relative",
        width: "50%",
        height: "100%",
        backgroundColor: "#000" // 좌측 배경도 검정
      }}>
        <TreeGraphic />
      </div>

      {/* 우측 랜딩 텍스트 */}
      <div style={{
        flex: 1,
        position: "relative",
        width: "50%",
        height: "100%",
        backgroundColor: "#000" // 우측도 검정이면 더 통일감
      }}>
        <LandingText />
      </div>
    </section>
  );
}
