import React from 'react';
import { LegoCard } from '../ui/LegoCard';
import { Badge } from '../ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    id: 1,
    title: "Mortgagelink",
    description: "A comprehensive mortgage and financial services platform tailored for seamless user experience.",
    tags: ["React", "Finance", "Web App"],
    color: "yellow",
    link: "https://mortgagelink.netlify.app/",
    github: "https://github.com/JanviRocks/mortgage-website-platform"
  },
  {
    id: 2,
    title: "Techsoftj",
    description: "Modern software technology solutions showcase featuring responsive design patterns.",
    tags: ["React", "Tech", "UI/UX"],
    color: "blue",
    link: "https://techsoftj.netlify.app/",
    github: "https://github.com/JanviRocks/soft_tech"
  },
  {
    id: 3,
    title: "Iptvd",
    description: "Interactive streaming service dashboard with dynamic content management.",
    tags: ["Streaming", "Media", "Interface"],
    color: "red",
    link: "https://iptvd.netlify.app/",
    github: "https://github.com/JanviRocks/iptv-website"
  },
  {
    id: 4,
    title: "Atlanticbuild",
    description: "Construction and architectural portfolio highlighting diverse building projects.",
    tags: ["Construction", "Design", "Portfolio"],
    color: "green",
    link: "https://atlanticbuild.netlify.app/",
    github: "https://github.com/JanviRocks/AtlaticBuildCo"
  }
] as const;

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="bg-white border-4 border-black p-4 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Selected<br/>Projects
          </h2>
        </div>
        <p className="md:max-w-md text-lg font-bold bg-black text-white p-4 border-4 border-white shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
          A collection of digital monuments built with precision and code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <LegoCard 
            key={project.id} 
            color={project.color} 
            title={`PROJECT_0${project.id}`}
            className="h-full flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black mb-4 uppercase">{project.title}</h3>
                <p className="text-lg font-medium mb-6 border-l-4 border-black pl-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-2 border-black rounded-none text-sm font-bold bg-white hover:bg-black hover:text-white transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t-4 border-black border-dashed">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1"
                >
                  <Button size="sm" className="w-full rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </Button>
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1"
                >
                  <Button size="sm" className="w-full rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                </a>
              </div>
            </div>
          </LegoCard>
        ))}
      </div>
    </section>
  );
};
