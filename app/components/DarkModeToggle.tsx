'use client';

import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/audio/light-switch.mp3');
    audio.volume = 0.5;
    audioRef.current = audio;
  }, []);

  const isDark = resolvedTheme === 'dark';

  const toggle = () => {
    setTheme(isDark ? 'light' : 'dark');
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.log('Audio play failed:', err));
    }
  };

  return (
    <button onClick={toggle} className="p-1 rounded-full border border-ring">
      {isDark ? <SunMedium /> : <Moon />}
    </button>
  );
}
