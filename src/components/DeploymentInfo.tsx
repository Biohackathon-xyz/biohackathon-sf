
import React from 'react';

const DeploymentInfo: React.FC = () => {
  return (
    <section className="py-16 bg-biohack-dark text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-smythe text-center mb-8">
          GitHub & CMS Integration
        </h2>
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-smythe mb-4 text-biohack-secondary">For City Organizers</h3>
          <div className="space-y-4">
            <p>
              Each city's website is powered by a static site generator deployed on GitHub Pages 
              and connected to Netlify CMS for easy content management.
            </p>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="font-raleway font-bold mb-2">How It Works:</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Each city has its own GitHub repository</li>
                <li>Static site deployed via GitHub Pages</li>
                <li>Connected to Netlify CMS for content management</li>
                <li>Custom domain mapping to city.biohackathon.xyz</li>
              </ol>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="font-raleway font-bold mb-2">Benefits:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Free hosting with GitHub Pages</li>
                <li>User-friendly content management</li>
                <li>Version control for all content changes</li>
                <li>Multiple contributor access</li>
                <li>Simple deployment workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentInfo;
