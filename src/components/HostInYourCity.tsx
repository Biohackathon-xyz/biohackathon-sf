
import React, { useEffect } from 'react';

const HostInYourCity: React.FC = () => {
  useEffect(() => {
    // This ensures the typeform script is loaded after the component mounts
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="host-in-your-city" className="py-16 bg-white text-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-smythe mb-6 text-center">Host In Your City</h2>
          <p className="text-center mb-8">
            Join our global community by organizing a Biohackathon in your city. Fill out the form below to get started!
          </p>
          <div className="bg-white rounded-lg p-4 shadow-lg" style={{ height: "600px" }}>
            <div data-tf-live="01JRACGDCMZHAKR0TKESJHXTC8" style={{ height: "100%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostInYourCity;
