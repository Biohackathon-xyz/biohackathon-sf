
import React from 'react';

const PreviousYears: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-smythe mb-8 text-center">Previous Years</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col">
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop" 
                alt="Cambridge Biohackathon participants" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" 
                alt="Cambridge Biohackathon lab work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-smythe mb-4">Pilot Biohackathon — Cambridge, UK</h3>
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
            The Cambridge pilot set the foundation for our global expansion, proving that community-driven biohacking events can create meaningful opportunities for innovation outside traditional academic settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviousYears;
