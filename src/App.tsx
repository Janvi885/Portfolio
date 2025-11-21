import './components/suppressWarnings';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LegoGardenScene } from './components/lego/LegoGardenScene';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Linkedin, Instagram, Github } from 'lucide-react';

export default function App() {
  // Error boundary for debugging
  console.log('App component rendering...');
  React.useEffect(() => {
    console.log('App component mounted');
  }, []);
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/janvichauhan15/' },
    { icon: Instagram, href: 'https://www.instagram.com/janvical/' },
    { icon: Github, href: 'https://github.com/JanviRocks' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-yellow-400 text-black font-mono overflow-x-hidden">
      {/* 3D Scene Background - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-sky-300">
        <ErrorBoundary fallback={<div className="w-full h-full bg-sky-300">Canvas Error - Check Console</div>}>
          <LegoGardenScene />
        </ErrorBoundary>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <BrowserRouter>
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>

      {/* Floating Social Links */}
      <div className="fixed left-6 bottom-32 hidden md:flex flex-col gap-4 pointer-events-auto z-50">
        {socialLinks.map((social, idx) => (
           <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center font-black hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-sm">
             <social.icon size={20} strokeWidth={2.5} />
           </a>
        ))}
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
}
