import React from 'react';
import { Button } from '../ui/button';
import { Github, FileCode } from 'lucide-react';

export const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-start p-6 md:p-24 pt-32 relative z-10 pointer-events-none">
      <div className="max-w-5xl space-y-8 mix-blend-hard-light pointer-events-auto">
        <div className="inline-block bg-blue-600 text-white font-bold px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-pulse mt-10">
          👋 HELLO, I'M A CREATIVE DEVELOPER
        </div>
        
        <h1 className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter bg-white inline-block border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          HI, I'M <span className="text-red-600">JANVI</span>.<br />
          ASSEMBLING IDEAS<br />
          <span className="text-yellow-500">BRICK</span> BY <span className="text-blue-600">BRICK</span>.
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-black text-white p-6 max-w-xl border-4 border-white shadow-[-8px_8px_0px_0px_rgba(255,0,0,1)]">
            <p className="text-lg md:text-2xl font-bold leading-tight">
              Full Stack Developer building robust architectures and immersive 3D web experiences. 
              Turning complex problems into simple, reusable blocks.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8">
          <Button onClick={scrollToWork} size="lg" className="h-16 px-8 text-xl rounded-none border-4 border-black bg-yellow-300 hover:bg-yellow-400 text-black font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:translate-x-1 gap-3">
            <FileCode className="w-6 h-6" />
            VIEW PROJECTS
          </Button>

        </div>
      </div>
      
      {/* Status Badge */}
      <div className="hidden md:flex absolute top-32 right-20 w-32 h-32 bg-red-500 border-4 border-black rounded-full z-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-col items-center justify-center font-black text-center leading-none animate-bounce pointer-events-none rotate-12">
        <span className="text-sm">STATUS:</span>
        <span className="text-xl">OPEN TO</span>
        <span className="text-xl">WORK</span>
      </div>
    </section>
  );
};
