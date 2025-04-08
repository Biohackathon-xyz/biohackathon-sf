
import React from 'react';
import Header from '@/components/Header';
import CitiesGrid from '@/components/CitiesGrid';
import GlobalAwards from '@/components/GlobalAwards';
import Sponsors from '@/components/Sponsors';
import Partners from '@/components/Partners';
import ParticipationInfo from '@/components/ParticipationInfo';
import CityExample from '@/components/CityExample';
import PreviousYears from '@/components/PreviousYears';
import Footer from '@/components/Footer';
import HostInYourCity from '@/components/HostInYourCity';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="cities" className="pt-20 mt-4">
          <CitiesGrid />
        </section>
        <section id="awards" className="pt-20 mt-4">
          <GlobalAwards />
        </section>
        <section id="participation" className="pt-20 mt-4">
          <ParticipationInfo />
        </section>
        <section id="previous-years" className="pt-20 mt-4">
          <PreviousYears />
        </section>
        <section id="sponsors" className="pt-20 mt-4">
          <Sponsors />
          <Partners />
        </section>
        <CityExample />
        <section id="host-in-your-city" className="pt-20 mt-4">
          <HostInYourCity />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
