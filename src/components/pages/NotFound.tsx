import React from 'react';
import { Button } from '../ui/button';
import { LegoCard } from '../ui/LegoCard';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 text-center mt-24">
      <LegoCard color="red" studs={6} title="ERROR 404">
        <div className="space-y-6 max-w-md mx-auto">
           <h1 className="text-4xl md:text-6xl font-black uppercase">Piece Not Found</h1>
           <p className="text-xl font-medium">
             The page you are looking for doesn't exist in this set. It might have been dismantled or never built.
           </p>
           <div className="w-full h-4 bg-black/10 border-2 border-black my-4"></div>
           <Button 
             onClick={() => navigate('/')}
             className="w-full bg-black text-white border-4 border-transparent hover:bg-gray-800 font-black uppercase p-6 text-lg rounded-none"
           >
             Return to Base
           </Button>
        </div>
      </LegoCard>
    </div>
  );
};
