"use client";

import { useRef } from "react";
import { Keyquence } from "react-keyquence";
import IronMan from "@/components/animation/IronMan";

export default function KeyquenceComponent() {
  const ironManRef = useRef<HTMLDivElement>(null);

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
            keys: "hello",
            onDetect: () => {
              console.log('User typed "hello"!');
            },
            audioPath: "/audio/cornfield-chase.mp3",
          },
          {
            keys: "ironman",
            onDetect: () => {
              triggerIronMan();
            },
            audioPath: "/audio/iron-man-repulsor.mp3",
          },
        ]}
      />

     <IronMan ref={ironManRef} />
    </>
  );
}
