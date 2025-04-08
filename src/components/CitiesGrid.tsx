
import React from 'react';
import CityCard from './CityCard';

const cities = [
  {
    name: "San Francisco",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    subdomain: "sf",
    date: "June 13 - 22, 2025"
  },
  {
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    subdomain: "london",
    date: "May 2025"
  },
  {
    name: "Boston",
    image: "https://images.unsplash.com/photo-1501979376754-2ff867a4f659",
    subdomain: "boston",
    date: "June 2025"
  },
  {
    name: "Prague",
    image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
    subdomain: "prague",
    date: "August 2025"
  },
  {
    name: "Timișoara",
    image: "https://images.unsplash.com/photo-1566209259189-5fe63e28693f?q=80&w=2697&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subdomain: "timisoara",
    date: "July 2025"
  },
  {
    name: "Gdynia",
    image: "https://images.unsplash.com/photo-1577091144216-0782c3a71b8d?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subdomain: "gdynia",
    date: "September 2025"
  }
];

const CitiesGrid: React.FC = () => {
  return (
    <section className="py-12" id="cities">
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
              date={city.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesGrid;
