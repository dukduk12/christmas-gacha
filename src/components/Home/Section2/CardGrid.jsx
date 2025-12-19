import React from "react";
import GachaCard from "./GachaCard";

const cards = [
  { title: "Sweets", emoji: "🍬", prob: "10%" },
  { title: "Costume", emoji: "👕", prob: "70%" },
  { title: "Message", emoji: "💌", prob: "10%" },
  { title: "Mystery", emoji: "🎁", prob: "10%" },
];

export default function CardGrid() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "36px"
    }}>
      {cards.map((card, i) => (
        <GachaCard key={i} {...card} />
      ))}
    </div>
  );
}
