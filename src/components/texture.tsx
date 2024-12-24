"use client";
import { useEffect, useRef } from "react";

export function Texture() {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    if (!rect) return;

    rect.setAttribute("width", window.innerWidth.toString());
    rect.setAttribute("height", window.innerHeight.toString());
    window.addEventListener("resize", handleResize);
  }, [rectRef]);

  const handleResize = () => {
    const rect = rectRef.current;
    if (!rect) return;

    rect.setAttribute("width", window.innerWidth.toString());
    rect.setAttribute("height", window.innerHeight.toString());
  };

  return (
    <svg
      id="texture"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "calc(100vh + 200px)",
        opacity: 0.25,
        pointerEvents: "none",
        transform: "translateY(0)",
        filter: "contrast(120%) brightness(60%)",
        zIndex: "1900",
      }}
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".999"
          numOctaves="1"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect ref={rectRef} filter="url(#noise)"></rect>
    </svg>
  );
}
