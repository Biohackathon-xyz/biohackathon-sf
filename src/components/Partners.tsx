
import React from 'react';

const partners = [
  {
    name: "DIY Bio Association",
    logo: "https://placehold.co/180x60?text=DIY+Bio+Association",
    url: "#"
  },
  {
    name: "Academic Alliance",
    logo: "https://placehold.co/180x60?text=Academic+Alliance",
    url: "#"
  },
  {
    name: "BioMakers Network",
    logo: "https://placehold.co/180x60?text=BioMakers+Network",
    url: "#"
  },
  {
    name: "Global Science Forum",
    logo: "https://placehold.co/180x60?text=Global+Science+Forum",
    url: "#"
  },
  {
    name: "STEM Education Coalition",
    logo: "https://placehold.co/180x60?text=STEM+Education+Coalition",
    url: "#"
  },
  {
    name: "OpenLab Initiative",
    logo: "https://placehold.co/180x60?text=OpenLab+Initiative",
    url: "#"
  }
];

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Global Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
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
