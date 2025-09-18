import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="text-4xl">🐄</div>
          <h1 className="text-3xl font-bold">PASHU MITRA</h1>
          <div className="text-4xl">🐃</div>
        </div>
        <p className="text-green-100 text-lg">
          AI-Powered Cattle & Buffalo Breed Recognition
        </p>
        <div className="flex items-center justify-center gap-1 mt-2 text-green-200">
          <span className="text-sm">Made with</span>
          <Heart size={14} className="fill-current" />
          <span className="text-sm">for Indian Farmers</span>
        </div>
      </div>
    </header>
  );
};

export default Header;