'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          size={20} 
          className={`absolute inset-0 transition-all duration-300 ${
            isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          } text-yellow-500 group-hover:text-yellow-600`} 
        />
        <Moon 
          size={20} 
          className={`absolute inset-0 transition-all duration-300 ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
          } text-blue-400 group-hover:text-blue-300`} 
        />
      </div>
    </button>
  );
}
