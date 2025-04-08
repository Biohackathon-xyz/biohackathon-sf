
import React from 'react';
import Navigation from '@/components/Navigation';
import GlobalAwards from '@/components/GlobalAwards';
import Sponsors from '@/components/Sponsors';
import Partners from '@/components/Partners';
import ParticipationInfo from '@/components/ParticipationInfo';
import CityExample from '@/components/CityExample';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section id="city-example" className="pt-20 mt-4">
          <CityExample />
        </section>
        <section id="schedule" className="pt-20 mt-4">
          <Schedule />
        </section>
        <section id="awards" className="pt-20 mt-4">
          <GlobalAwards />
        </section>
        <section id="participation" className="pt-20 mt-4">
          <ParticipationInfo />
        </section>
        <section id="sponsors" className="pt-20 mt-4">
          <Sponsors />
          <Partners />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
