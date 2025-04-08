
import React from 'react';
import CityCard from './CityCard';
import { useCities } from '@/hooks/useSanityData';

const CitiesGrid: React.FC = () => {
  // Fetch cities from our mock data hook
  const { data: cities, isLoading, error } = useCities();

  // Loading state
  if (isLoading) {
    return (
      <section className="py-12" id="cities">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
            Loading Cities...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-[4/3] bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.error("Error loading cities:", error);
  }

  return (
    <section className="py-12" id="cities">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Biohackathon Cities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities?.map((city) => (
            <CityCard
              key={city.name}
              name={city.name}
              image={city.image}
              subdomain={city.subdomain}
              date={city.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesGrid;
