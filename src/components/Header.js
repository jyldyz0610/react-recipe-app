import React from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1>Switcher-App</h1>
      <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </header>
  );
};

export default Header;

