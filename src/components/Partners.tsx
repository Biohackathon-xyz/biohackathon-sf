
import React from 'react';
import { useGlobalPartners } from '@/hooks/useSanityData';

const Partners: React.FC = () => {
  // Fetch partners from mock data
  const { data: partners, isLoading, error } = useGlobalPartners();

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
            Loading Partners...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-16 w-36 bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.error("Error loading partners:", error);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners?.map((partner) => (
            <a 
              key={partner.name} 
              href={partner.url} 
              className="hover:opacity-80 transition-opacity"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
