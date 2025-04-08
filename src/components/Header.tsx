
import React from 'react';
import { cn } from '@/lib/utils';
import Navigation from './Navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full bg-white", className)}>
      <Navigation />
      <div className="container mx-auto pt-20 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-smythe text-black">
              Global Biohackathon.xyz
            </h1>
            <p className="text-xl md:text-2xl font-raleway text-gray-700 mt-4">
              Bringing DIY biology, innovation, and open science to cities around the world — because online hackathons suck
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="/lovable-uploads/5fb88901-6512-4107-8568-8937a00445ac.png" 
              alt="Steampunk octopus with mechanical enhancements" 
              className="rounded-lg h-32 md:h-48 w-auto object-contain shadow-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
