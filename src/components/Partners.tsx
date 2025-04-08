
import React from 'react';
import { useLocalContent } from '@/hooks/useLocalContent';

const Partners: React.FC = () => {
  // Fetch partners from markdown content
  const { data: partnersContent, isLoading, error } = useLocalContent('partners');

  // Mock partners for fallback
  const mockPartners = [
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
        
        {partnersContent ? (
          <div dangerouslySetInnerHTML={{ __html: partnersContent }} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {mockPartners.map((partner) => (
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
        )}
      </div>
    </section>
  );
};

export default Partners;
