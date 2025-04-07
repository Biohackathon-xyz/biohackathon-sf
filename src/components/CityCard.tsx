
import React from 'react';
import { cn } from '@/lib/utils';

interface CityCardProps {
  name: string;
  image: string;
  subdomain: string;
  date: string;
  className?: string;
}

const CityCard: React.FC<CityCardProps> = ({ name, image, subdomain, date, className }) => {
  const handleClick = () => {
    // In a real implementation, this would navigate to the subdomain
    window.open(`https://${subdomain}.biohackathon.xyz`, '_blank');
  };

  return (
    <div 
      className={cn("city-card cursor-pointer aspect-[4/3] border border-gray-200", className)}
      onClick={handleClick}
    >
      <img 
        src={image} 
        alt={`${name} Biohackathon`} 
        className="w-full h-full object-cover"
      />
      <div className="city-card-overlay">
        <div className="flex flex-col">
          <h3 className="city-card-title">{name}</h3>
          <p className="text-white text-sm md:text-base mt-1">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
