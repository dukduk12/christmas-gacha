import React, { useEffect, useRef } from "react";

export default function TreeGraphic() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.parentElement.clientWidth;
    let height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const snowflakes = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5
    }));

    const treeDots = [];
    const treeHeight = height * 0.6;
    const treeBaseWidth = width * 0.5;

    for (let y = 0; y < treeHeight; y += 6) {
      const rowWidth = (y / treeHeight) * treeBaseWidth;
      for (let x = width / 2 - rowWidth / 2; x < width / 2 + rowWidth / 2; x += 6) {
        if (Math.random() > 0.4) {
          const isDecoration = Math.random() > 0.85;
          treeDots.push({ 
            x, 
            y: height * 0.2 + y, // 정상 방향
            color: isDecoration ? `hsl(${Math.random() * 360}, 80%, 60%)` : "white"
          });
        }
      }
    }

    const star = { x: width / 2, y: height * 0.2 - 15, r: 12 };

    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
      let rot = Math.PI / 2 * 3;
      let step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
        rot += step;
      }
      ctx.closePath();
      ctx.fillStyle = "yellow";
      ctx.shadowColor = "yellow";
      ctx.shadowBlur = 10;
      ctx.fill();
    }

    const groundSnow = [];
    for (let i = 0; i < width; i++) {
      const hillHeight = Math.sin((i / width) * Math.PI * 3) * 15; // 물결 형태
      groundSnow.push({ x: i, y: height * 0.8 + hillHeight });
    }

    function draw() {
      ctx.fillStyle = "#000"; // 배경 검정
      ctx.fillRect(0, 0, width, height);

      // 눈송이
      ctx.fillStyle = "white";
      ctx.beginPath();
      snowflakes.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      });
      ctx.fill();

      // 트리 도트 + 장식
      treeDots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      // 최상단 별
      drawStar(star.x, star.y, 5, star.r, star.r / 2.5);

      // 눈 이동
      snowflakes.forEach(f => {
        f.y += f.speed;
        if (f.y > height * 0.8) f.y = 0, f.x = Math.random() * width;
      });

      // 바닥 눈 언덕
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.moveTo(0, height);
      groundSnow.forEach(s => ctx.lineTo(s.x, s.y));
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
    }

    const interval = setInterval(draw, 25);

    // 캔버스 리사이즈 대응
    const handleResize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
