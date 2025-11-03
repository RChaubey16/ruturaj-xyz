'use client';

import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button onClick={toggle} className='p-1 rounded-full border border-ring'>
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
