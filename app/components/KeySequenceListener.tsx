'use client';

import { useEffect, useRef } from 'react';

export default function KeySequenceListener() {
  const typedSequence = useRef('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create the audio element once when component mounts
    audioRef.current = new Audio('/audio/light-switch.mp3');

    const handleKeyPress = (event: KeyboardEvent) => {
      // Add the typed character to our sequence
      typedSequence.current += event.key.toLowerCase();

      // Clear the timeout if it exists
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Check if our sequence contains "yoda"
      if (typedSequence.current.includes('yoda')) {
        console.log('YODA');
        
        // Play the audio
        if (audioRef.current) {
          audioRef.current.currentTime = 0; // Reset to start
          audioRef.current.play().catch(err => {
            console.error('Failed to play audio:', err);
          });
        }
        
        typedSequence.current = ''; // Reset after detection
      }

      // Reset the sequence after 2 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        typedSequence.current = '';
      }, 2000);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Clean up audio element
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
}
