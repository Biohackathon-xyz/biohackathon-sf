
import React from 'react';
import { useLocalContent } from '@/hooks/useLocalContent';

const Sponsors: React.FC = () => {
  // Fetch sponsors from markdown content
  const { data: sponsorsContent, isLoading, error } = useLocalContent('sponsors');

  // Mock sponsors for fallback
  const mockSponsors = [
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

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
            Loading Sponsors...
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
    console.error("Error loading sponsors:", error);
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Sponsors
        </h2>
        
        {sponsorsContent ? (
          <div dangerouslySetInnerHTML={{ __html: sponsorsContent }} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {mockSponsors.map((sponsor) => (
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
        )}
      </div>
    </section>
  );
};

export default Sponsors;
