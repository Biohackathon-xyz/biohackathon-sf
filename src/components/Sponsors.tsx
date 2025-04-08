
import React from 'react';
import { useGlobalSponsors } from '@/hooks/useSanityData';

const Sponsors: React.FC = () => {
  // Fetch sponsors from mock data
  const { data: sponsors, isLoading, error } = useGlobalSponsors();

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
            Loading Global Sponsors...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-20 w-48 bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.error("Error loading global sponsors:", error);
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Global Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors?.map((sponsor) => (
            <a 
              key={sponsor.name} 
              href={sponsor.url} 
              className="hover:opacity-80 transition-opacity"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-20 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
