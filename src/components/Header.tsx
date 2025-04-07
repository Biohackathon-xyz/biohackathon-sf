
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-8 md:py-12", className)}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-smythe text-black">
            Biohackathon.xyz
          </h1>
          <p className="text-xl md:text-2xl font-raleway text-gray-700 mt-2 italic">
            Open science, open minds — because online hackathons suck
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=500&auto=format&fit=crop" 
            alt="Lab equipment" 
            className="rounded-lg h-32 md:h-40 w-auto object-cover shadow-md"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
