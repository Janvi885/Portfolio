import React from 'react';
import { LegoCard } from '../ui/LegoCard';
import { Button } from '../ui/button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Bio */}
        <div className="lg:col-span-7">
          <div className="bg-white border-4 border-black p-4 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Builder<br/>Manual
            </h2>
          </div>

          <LegoCard color="white" studs={6} title="CHARACTERISTICS" className="mb-8">
             <div className="space-y-6 text-lg font-medium">
                <p>
                  I approach web development like a master builder: robust foundations, modular components, and creative problem-solving.
                </p>
                <p>
                  Currently based in the digital ether, I specialize in translating complex requirements into intuitive, high-performance interfaces. My toolkit is vast, but I believe in using the right brick for the job.
                </p>
                <p className="font-black uppercase text-xl border-b-4 border-yellow-400 inline-block">
                  "Code is the plastic of the 21st century."
                </p>
             </div>
          </LegoCard>

          {/* Experience Section */}
          <div className="mb-8">
            <div className="inline-block bg-red-500 text-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 rotate-1">
               <h3 className="text-2xl font-black uppercase tracking-tighter">Build History</h3>
            </div>
            
            <div className="space-y-6 pl-4 border-l-4 border-black ml-2">
               {/* Job 1 */}
               <div className="relative bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="absolute -left-[22px] top-6 w-4 h-4 bg-black border-2 border-white rounded-full"></div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-4 border-gray-200 pb-2">
                     <div>
                        <h4 className="text-xl font-black uppercase">Full-Stack Developer</h4>
                        <span className="font-bold text-blue-600">Jobeyze, Moncton, NB</span>
                     </div>
                     <span className="bg-yellow-300 px-2 py-1 border-2 border-black font-bold text-sm">May 2025 – Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                     <li>Built responsive, accessible UI for an AI-powered recruitment platform using React.js and Tailwind CSS, improving mobile usability across devices.</li>
                     <li>Developed and tested scalable Node.js (Express) + PostgreSQL REST APIs for chatbot and user data, reducing frontend–backend integration issues in Agile sprints.</li>
                  </ul>
               </div>

               {/* Job 2 */}
               <div className="relative bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="absolute -left-[22px] top-6 w-4 h-4 bg-black border-2 border-white rounded-full"></div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-4 border-gray-200 pb-2">
                     <div>
                        <h4 className="text-xl font-black uppercase">Junior Developer</h4>
                        <span className="font-bold text-blue-600">Shri Dinesh Mills Ltd., Gujarat, IN</span>
                     </div>
                     <span className="bg-gray-200 px-2 py-1 border-2 border-black font-bold text-sm">Dec 2022 – Dec 2023</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                     <li>Built Spring Boot, Hibernate, MySQL REST APIs and React.js + Node.js/Express dashboards to modernize internal inventory, reporting, and user management tools.</li>
                     <li>Optimized SQL queries, added indexing, and implemented pagination, significantly improving API response times and scalability on large datasets.</li>
                  </ul>
               </div>

               {/* Job 3 */}
               <div className="relative bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="absolute -left-[22px] top-6 w-4 h-4 bg-black border-2 border-white rounded-full"></div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-4 border-gray-200 pb-2">
                     <div>
                        <h4 className="text-xl font-black uppercase">Technical Trainer – Full-Stack Tools</h4>
                        <span className="font-bold text-blue-600">Enlighten Infosystems, Gujarat, IN</span>
                     </div>
                     <span className="bg-gray-200 px-2 py-1 border-2 border-black font-bold text-sm">Jun 2021 – Dec 2022</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                     <li>Delivered hands-on training in HTML, CSS, JavaScript, and PHP through mini-projects, strengthening students’ practical full-stack skills.</li>
                     <li>Created feedback rubrics and mentored students on final projects, improving progress tracking and readiness for internships and junior developer roles.</li>
                  </ul>
               </div>

               {/* Job 4 */}
               <div className="relative bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <div className="absolute -left-[22px] top-6 w-4 h-4 bg-black border-2 border-white rounded-full"></div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-4 border-gray-200 pb-2">
                     <div>
                        <h4 className="text-xl font-black uppercase">Intern – Mobile & Web Projects</h4>
                        <span className="font-bold text-blue-600">Various Startups, Gujarat, IN</span>
                     </div>
                     <span className="bg-gray-200 px-2 py-1 border-2 border-black font-bold text-sm">Apr 2021 – Jun 2021</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                     <li>Developed a Student Counseling System using REST APIs and a responsive web UI, streamlining student–counsellor communication.</li>
                     <li>Supported Android app feature development, bug fixes, and UI testing, reducing testing turnaround time and improving app usability.</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="inline-block bg-blue-500 text-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 -rotate-1">
               <h3 className="text-2xl font-black uppercase tracking-tighter">Training Modules</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-full h-4 bg-red-500 border-2 border-black mb-3"></div>
                  <h4 className="text-lg font-black uppercase leading-tight">Postgraduate Certificate – Web Development</h4>
                  <p className="font-bold text-gray-600 text-sm mb-2">Conestoga College, Kitchener, ON</p>
                  <p className="text-xs font-bold bg-gray-100 inline-block px-1 border border-black">Jan 2024 – May 2025</p>
               </div>
               <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-full h-4 bg-yellow-400 border-2 border-black mb-3"></div>
                  <h4 className="text-lg font-black uppercase leading-tight">Bachelor of Information Technology</h4>
                  <p className="font-bold text-gray-600 text-sm mb-2">Gujarat Technological University, Gujarat, IN</p>
                  <p className="text-xs font-bold bg-gray-100 inline-block px-1 border border-black">Sept 2018 - Apr 2022</p>
               </div>
            </div>
          </div>


        </div>

        {/* Right Column: Skills / "Parts List" */}
        <div className="lg:col-span-5 space-y-8">
           <div className="bg-yellow-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Parts Inventory</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-black uppercase mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'Framer Motion'].map(skill => (
                      <span key={skill} className="bg-white px-3 py-1 border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-black uppercase mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'PostgreSQL', 'Supabase', 'GraphQL', 'Redis'].map(skill => (
                      <span key={skill} className="bg-white px-3 py-1 border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-black uppercase mb-2">Emerging Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Generative AI', 'LLMs', 'Web3', 'NFTs', 'Smart Contracts'].map(skill => (
                      <span key={skill} className="bg-white px-3 py-1 border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-black uppercase mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Git', 'Docker', 'AWS', 'Vercel'].map(skill => (
                      <span key={skill} className="bg-white px-3 py-1 border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
           </div>

           <div className="bg-blue-500 border-4 border-black p-6 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-4">Current Status</h3>
              <p className="font-medium mb-4">
                Searching for the next big challenge. Ready to relocate or work remotely.
              </p>
              <Button 
                onClick={() => window.open('https://l.gourl.es/l/326c45fe9a378a2acbf6b87dfd8f86b161f916f8?u=12358005', '_blank')}
                className="w-full rounded-none border-4 border-white bg-black text-white hover:bg-gray-900 font-bold uppercase"
              >
                Download Resume
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
};
