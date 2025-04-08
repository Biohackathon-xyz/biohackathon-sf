
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLocalContent } from '@/hooks/useLocalContent';

const CityExample: React.FC = () => {
  const { data: tracks } = useLocalContent('tracks');
  const { data: localAwards } = useLocalContent('local-awards');
  const { data: advisors } = useLocalContent('advisors');
  const { data: localSponsors } = useLocalContent('local-sponsors');
  const { data: localPartners } = useLocalContent('local-partners');
  
  // Default advisors if content isn't loaded yet
  const defaultAdvisors = [
    {
      name: "Dr. Sarah Chen",
      institution: "Stanford University",
      institutionUrl: "https://stanford.edu",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. James Wilson",
      institution: "UC Berkeley",
      institutionUrl: "https://berkeley.edu",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. Maria Rodriguez",
      institution: "UCSF",
      institutionUrl: "https://ucsf.edu",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. Robert Park",
      institution: "Genentech",
      institutionUrl: "https://gene.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-6">
          San Francisco <a href="https://global.biohackathon.xyz/" className="text-biohack-primary hover:underline">Global Biohackathon.xyz</a>
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
                {tracks ? (
                  <div dangerouslySetInnerHTML={{ __html: tracks }} />
                ) : (
                  <>
                    <li className="p-3 bg-gray-100 rounded-lg">Synthetic Biology</li>
                    <li className="p-3 bg-gray-100 rounded-lg">Biomedical Devices</li>
                    <li className="p-3 bg-gray-100 rounded-lg">Environmental Monitoring</li>
                    <li className="p-3 bg-gray-100 rounded-lg">DIY Lab Equipment</li>
                  </>
                )}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Local Awards</h3>
              {localAwards ? (
                <div dangerouslySetInnerHTML={{ __html: localAwards }} />
              ) : (
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
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-smythe text-black mb-4">Advisors & Judges</h3>
            {advisors ? (
              <div dangerouslySetInnerHTML={{ __html: advisors }} />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {defaultAdvisors.map((advisor, i) => (
                  <div key={i} className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full mb-2 overflow-hidden">
                      <img 
                        src={advisor.image} 
                        alt={advisor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-semibold">{advisor.name}</div>
                    <div className="text-sm text-gray-600">
                      <a href={advisor.institutionUrl} className="hover:underline">{advisor.institution}</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Local Sponsors</h3>
              {localSponsors ? (
                <div dangerouslySetInnerHTML={{ __html: localSponsors }} />
              ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                  {[1, 2, 3].map((i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center border border-gray-200 hover:opacity-80 transition-opacity"
                    >
                      Sponsor {i}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-2xl font-smythe text-black mb-4">Local Partners</h3>
              {localPartners ? (
                <div dangerouslySetInnerHTML={{ __html: localPartners }} />
              ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                  {[1, 2, 3].map((i) => (
                    <a 
                      key={i}
                      href="#"
                      className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      Partner {i}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityExample;
