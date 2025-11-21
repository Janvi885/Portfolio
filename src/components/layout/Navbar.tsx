import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Mail, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close menu on click
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 border-b-4 border-black bg-white/90 backdrop-blur-sm transition-all">
        <div 
          className="text-xl md:text-3xl font-black tracking-tighter uppercase pointer-events-auto cursor-pointer hover:italic flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
          Janvi<span className="text-blue-600">.</span>BUILD
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 pointer-events-auto bg-white/50 p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {['Work', 'About', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="text-lg font-bold hover:bg-black hover:text-white px-4 py-1 transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            onClick={() => window.open('https://l.gourl.es/l/326c45fe9a378a2acbf6b87dfd8f86b161f916f8?u=12358005', '_blank')}
            className="rounded-none border-4 border-black bg-green-500 hover:bg-green-600 text-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all gap-2 h-10 md:h-11 px-4 md:px-6"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">RESUME</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 border-4 border-black bg-yellow-400 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-yellow-400 pt-24 px-6 md:hidden flex flex-col gap-6 overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {['Work', 'About', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-4xl font-black uppercase border-b-4 border-black pb-2 text-left hover:italic"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
