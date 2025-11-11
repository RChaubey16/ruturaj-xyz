"use client";

import { useEffect, useState } from "react";
import { Telescope, WandSparkles, VolumeX } from "lucide-react";
import SendToast from "./SendToast";

export default function ToastManager() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // treat <768px as mobile
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) return null;

  const toastConfigs = [
    {
      toastContent: (
        <div className="flex items-center gap-2 font-montserrat">
          <WandSparkles className="size-5.5 shrink-0" />
          <span className="text-gray-400">
            Try typing <strong className="text-white italic">ironman</strong>, you’re in for a surprise!
          </span>
        </div>
      ),
      toastDuration: 5000,
      timeDelay: 10000,
      toastType: "message" as const,
    },
    {
      toastContent: (
        <div className="flex items-center gap-2 font-montserrat">
          <Telescope className="size-5.5 shrink-0" />
          <span className="text-gray-400">
            Ever wondered what happens if you type{" "}
            <strong className="text-white italic">hello</strong>? Try it.
          </span>
        </div>
      ),
      toastDuration: 5000,
      timeDelay: 25000,
      toastType: "message" as const,
    },
    {
      toastContent: (
        <div className="flex items-center gap-2 font-montserrat">
          <VolumeX className="size-5.5 shrink-0" />
          <span className="text-gray-400">
            🔇 Press <strong className="text-white italic">Esc</strong> to stop the music.
          </span>
        </div>
      ),
      toastDuration: 5000,
      timeDelay: 28000,
      toastType: "message" as const,
    },
  ];

  return (
    <>
      {toastConfigs.map((config, index) => (
        <SendToast key={index} {...config} />
      ))}
    </>
  );
}
