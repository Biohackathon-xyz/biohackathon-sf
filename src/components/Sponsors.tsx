
import React from 'react';

const sponsors = [
  {
    name: "TechBio Ventures",
    logo: "https://placehold.co/200x80?text=TechBio+Ventures",
    url: "#"
  },
  {
    name: "OpenScience Foundation",
    logo: "https://placehold.co/200x80?text=OpenScience+Foundation",
    url: "#"
  },
  {
    name: "BioInnovate Labs",
    logo: "https://placehold.co/200x80?text=BioInnovate+Labs",
    url: "#"
  },
  {
    name: "Genomica Inc.",
    logo: "https://placehold.co/200x80?text=Genomica+Inc.",
    url: "#"
  }
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Global Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor) => (
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
