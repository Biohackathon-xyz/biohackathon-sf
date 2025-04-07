
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-biohack-dark text-white py-12 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-smythe text-2xl mb-4">Biohackathon.xyz</h3>
            <p className="text-sm opacity-80">
              Breaking barriers in biohacking and open science.
            </p>
          </div>
          <div>
            <h4 className="font-raleway font-bold text-lg mb-3">Connect With Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-biohack-secondary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-biohack-secondary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-biohack-secondary transition-colors">Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-raleway font-bold text-lg mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-biohack-secondary transition-colors">Start a Biohackathon</a></li>
              <li><a href="#" className="hover:text-biohack-secondary transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-biohack-secondary transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Biohackathon.xyz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
