
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const PreviousYears: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-smythe mb-8 text-center">Previous Years</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={1} className="w-full">
                <img 
                  src="/lovable-uploads/437cee30-3864-455c-965a-4d9e52c28f94.png" 
                  alt="Cambridge Biohackathon collage of participants" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </CardContent>
          </Card>
          
          <Card className="shadow-md overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={1} className="w-full">
                <img 
                  src="/lovable-uploads/4d180eb1-a586-4687-8c64-b57bf1474154.png" 
                  alt="Cambridge Biohackathon participants working together" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-smythe mb-4">Pilot Biohackathon, 2024 — Cambridge, UK</h3>
          <p className="text-lg mb-4 font-raleway">
            Our journey began with the inaugural Biohackathon in Cambridge, bringing together innovators, scientists, and DIY biology enthusiasts from across the globe.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-base">£115,000 in non-dilutive awards distributed to groundbreaking projects</li>
            <li className="text-base">Access to state-of-the-art laboratory facilities for winning teams</li>
            <li className="text-base">Mentorship from leading experts in synthetic biology and biotech</li>
            <li className="text-base">Collaborative environment fostering innovation in DIY biology</li>
          </ul>
          <p className="text-base italic">
            Pilot in 2024 went better than expected and proved the idea. Global edition in 2025 will be a base for global partnerships and sponsors which will allow us to provide grants for smaller cities in 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviousYears;
