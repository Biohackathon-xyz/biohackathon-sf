
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-8 md:py-12", className)}>
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-smythe text-biohack-primary">
          Biohackathon.xyz
        </h1>
        <p className="text-xl md:text-2xl font-raleway text-biohack-secondary mt-2 italic">
          Open science, open minds — because online hackathons suck
        </p>
      </div>
    </header>
  );
};

export default Header;
