import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto">
        <Link to="/" className="text-lg font-semibold">Rezepte App</Link>
      </nav>
    </header>
  );
};

export default Header;
