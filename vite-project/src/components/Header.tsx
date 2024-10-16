import React from 'react';
import { Film } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Film className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">VideoEditorPro</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;