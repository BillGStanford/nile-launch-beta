import React from 'react';
import { Link } from 'react-router-dom';
import { BookIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-amber-50 to-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <BookIcon className="w-10 h-10 text-amber-700" />
          <span className="text-3xl font-bold text-amber-900">Nile</span>
        </Link>
        <div className="space-x-4">
          <a 
            href="https://forms.gle/ezjuMqGZD6yXpSM88" // Replace this with your actual Google Form link
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition"
          >
            Register for Official Launch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;