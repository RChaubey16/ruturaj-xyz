"use client";

import { useRef, useState } from "react";
import { Keyquence } from "react-keyquence";
import Snowfall from "react-snowfall";
import { useTheme } from "next-themes";
import IronMan from "@/components/animation/IronMan";
import Image from "next/image";

export default function KeyquenceComponent() {
  const [snow, setSnow] = useState(false);
  const { theme } = useTheme();
  const ironManRef = useRef<HTMLDivElement>(null);
  const isDarkMode = theme === "dark";

  const triggerIronMan = () => {
    const el = ironManRef.current;
    if (!el) return;

    // Restart the CSS animation
    el.classList.remove("slide-up");
    void el.offsetWidth; // force reflow to restart animation
    el.classList.add("slide-up");

    // Optional: remove after 3s to reset visibility
    setTimeout(() => el.classList.remove("slide-up"), 3000);
  };

  return (
    <>
      <Keyquence
        sequences={[
          {
            keys: "ironman",
            onDetect: () => {
              triggerIronMan();
            },
            audioPath: "/audio/iron-man-repulsor.mp3",
          },
          {
            keys: "christmas",
            onDetect: () => setSnow((v) => !v),
          },
        ]}
      />

      <IronMan ref={ironManRef} />
      {/* Snowfall overlay */}
      {snow && (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none" }}>
          <div className="hidden lg:flex justify-end slide-in-right">
            <Image
              src="/images/christmas-cover.png"
              alt=""
              width={600}
              height={800}
            />
          </div>
          <Snowfall
            snowflakeCount={150}
            speed={[1, 3]}
            wind={[-1, 2]}
            color={isDarkMode ? "#ffffff" : "#94a3b8"}
          />
        </div>
      )}
    </>
  );
}
