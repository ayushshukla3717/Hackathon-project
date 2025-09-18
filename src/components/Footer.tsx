import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-green-400 mb-2">PASHU MITRA</h3>
          <p className="text-gray-300">
            Empowering farmers with AI-powered livestock breed identification
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Pashu Mitra. Built for the betterment of Indian Agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;