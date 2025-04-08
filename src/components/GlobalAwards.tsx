
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGlobalAwards } from '@/hooks/useSanityData';

const GlobalAwards: React.FC = () => {
  // Fetch awards from Sanity
  const { data: sanityAwards, isLoading, error } = useGlobalAwards();

  // Fallback data in case Sanity data isn't available yet
  const fallbackAwards = [
    {
      title: "Grand Challenge Award",
      prize: "$10,000",
      description: "For the most innovative solution with global impact potential"
    },
    {
      title: "Open Science Champion",
      prize: "$5,000",
      description: "For exemplary open collaboration and documentation"
    },
    {
      title: "DIY Biohacking Excellence",
      prize: "$3,000",
      description: "For creativity in accessible biohacking approaches"
    }
  ];

  // Use fallback data if Sanity data isn't available
  const awards = sanityAwards?.length ? sanityAwards : fallbackAwards;

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16 bg-biohack-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
            Loading Global Awards...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Card key={i} className="border-2 border-biohack-primary bg-white">
                <CardHeader className="text-center pb-2 animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
                </CardHeader>
                <CardContent className="text-center animate-pulse">
                  <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 mx-auto"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.error("Error loading global awards from Sanity:", error);
  }

  return (
    <section className="py-16 bg-biohack-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-12">
          Global Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card key={award.title} className="border-2 border-biohack-primary bg-white">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-smythe text-2xl text-biohack-primary">{award.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-biohack-secondary mb-3">{award.prize}</div>
                <p className="text-gray-600">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalAwards;
