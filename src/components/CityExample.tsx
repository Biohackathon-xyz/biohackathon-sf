import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CityExample: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-6">
          San Francisco Biohackathon.xyz
        </h2>
        
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg mb-12">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad" 
              alt="San Francisco skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-4xl md:text-6xl font-smythe text-white">San Francisco</h1>
                <p className="text-xl font-raleway text-white/90">Biohackathon 2025</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Tracks</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-gray-100 rounded-lg">Synthetic Biology</li>
                <li className="p-3 bg-gray-100 rounded-lg">Biomedical Devices</li>
                <li className="p-3 bg-gray-100 rounded-lg">Environmental Monitoring</li>
                <li className="p-3 bg-gray-100 rounded-lg">DIY Lab Equipment</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Local Awards</h3>
              <div className="space-y-3">
                <Card>
                  <CardContent className="p-4">
                    <div className="font-bold">1st Place</div>
                    <div className="text-gray-700">$2,000 + Lab Equipment</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="font-bold">2nd Place</div>
                    <div className="text-gray-700">$1,000 + Mentorship</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="font-bold">3rd Place</div>
                    <div className="text-gray-700">$500 + Networking Opportunity</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-smythe text-black mb-4">Advisors & Judges</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2"></div>
                  <div className="font-semibold">Dr. Name {i}</div>
                  <div className="text-sm text-gray-600">Institution {i}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Local Partners</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
                    Partner {i}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Local Sponsors</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center border border-gray-200">
                    Sponsor {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityExample;
