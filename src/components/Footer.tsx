
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  MessageSquare 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-biohack-dark text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-smythe text-2xl mb-4">Biohackathon.xyz</h3>
            <p className="text-sm opacity-80">
              Breaking barriers in biohacking and open science.
            </p>
          </div>
          <div className="md:text-right">
            <div className="inline-block text-left">
              <h4 className="font-raleway font-bold text-lg mb-3">Connect With Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://x.com/BioHackathonXYZ" className="hover:text-biohack-secondary transition-colors flex items-center gap-2">
                    <Twitter size={16} /> X
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/rDCgVT3nne" className="hover:text-biohack-secondary transition-colors flex items-center gap-2">
                    <MessageSquare size={16} /> Discord
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/biohackathon.xyz/" className="hover:text-biohack-secondary transition-colors flex items-center gap-2">
                    <Instagram size={16} /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61567106677112" className="hover:text-biohack-secondary transition-colors flex items-center gap-2">
                    <Facebook size={16} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/biohackathon-xyz" className="hover:text-biohack-secondary transition-colors flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
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
