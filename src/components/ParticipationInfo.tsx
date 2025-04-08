
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ParticipationInfo: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-biohack-primary to-biohack-accent text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-smythe mb-6">Who Can Participate?</h2>
          <div className="space-y-4 mb-8">
            <p className="text-lg">
              <strong>Anyone and everyone!</strong> We're committed to ensuring biohacking is accessible to all, 
              regardless of your academic background or experience level.
            </p>
            <p>
              Biohackathon was created to break down the barriers of traditional gatekeeping academic institutions. 
              Whether you're a student, professional, hobbyist, or curious newcomer, you're welcome here.
            </p>
            <p>
              Our event provides the resources, mentorship, and community support needed for anyone to learn 
              DIY biohacking in a collaborative environment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-biohack-primary hover:bg-gray-100 font-medium"
              asChild
            >
              <a href="https://lu.ma/biohacksf25" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-biohack-primary font-medium"
              onClick={() => {
                const element = document.getElementById('host-in-your-city');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Host In Your City
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationInfo;
