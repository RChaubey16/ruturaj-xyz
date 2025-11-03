'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on mount
  useEffect(() => {
    audioRef.current = new Audio('/audio/light-switch.mp3');
    audioRef.current.volume = 0.5; // Set volume to 50%
  }, []);

  // Apply theme to DOM after mount
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Play switch sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    }
  };

  return (
    <button onClick={toggle} className='p-1 rounded-full border border-ring'>
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
