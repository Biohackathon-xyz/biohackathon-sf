
import React from 'react';
import { useGlobalSponsors } from '@/hooks/useSanityData';
import { urlFor } from '@/lib/sanity';

const Sponsors: React.FC = () => {
  // Fetch sponsors from Sanity
  const { data: sanitySponsors, isLoading, error } = useGlobalSponsors();

  // Fallback data in case Sanity data isn't available yet
  const fallbackSponsors = [
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

  // Use fallback data if Sanity data isn't available
  const sponsors = sanitySponsors?.length ? sanitySponsors : fallbackSponsors;

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
    console.error("Error loading global sponsors from Sanity:", error);
  }

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
                src={sponsor._type === 'globalSponsor' && sponsor.logo ? urlFor(sponsor.logo).url() : sponsor.logo} 
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
