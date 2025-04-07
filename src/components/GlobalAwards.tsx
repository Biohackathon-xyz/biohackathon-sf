
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const awards = [
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

const GlobalAwards: React.FC = () => {
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
