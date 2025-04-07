
import React from 'react';
import CityCard from './CityCard';

const cities = [
  {
    name: "San Francisco",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    subdomain: "sf"
  },
  {
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    subdomain: "london"
  },
  {
    name: "Boston",
    image: "https://images.unsplash.com/photo-1501979376754-2ff867a4f659",
    subdomain: "boston"
  },
  {
    name: "Prague",
    image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
    subdomain: "prague"
  },
  {
    name: "Timișoara",
    image: "https://images.unsplash.com/photo-1579025778860-755dddf8ee75",
    subdomain: "timisoara"
  },
  {
    name: "Gdynia",
    image: "https://images.unsplash.com/photo-1560127882-5440ffca4264",
    subdomain: "gdynia"
  }
];

const CitiesGrid: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Biohackathon Cities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <CityCard
              key={city.name}
              name={city.name}
              image={city.image}
              subdomain={city.subdomain}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesGrid;
