import React from 'react';
import { motion } from 'motion/react';

export const Footer = () => {
  const techStack = [
    "React", "TypeScript", "Three.js", "Node.js", "Tailwind", "Next.js", "PostgreSQL", "GraphQL", "AWS", "Figma"
  ];

  return (
    <footer className="border-t-4 border-black bg-blue-600 text-white overflow-hidden py-4 flex relative z-20">
      <motion.div 
        className="whitespace-nowrap flex gap-12 text-2xl font-black uppercase items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-4">
                <span className="w-3 h-3 bg-yellow-300 border-2 border-black block"></span>
                {tech}
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </footer>
  );
};
