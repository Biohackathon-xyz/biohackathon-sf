
import React from 'react';
import Header from '@/components/Header';
import CitiesGrid from '@/components/CitiesGrid';
import GlobalAwards from '@/components/GlobalAwards';
import Sponsors from '@/components/Sponsors';
import Partners from '@/components/Partners';
import ParticipationInfo from '@/components/ParticipationInfo';
import DeploymentInfo from '@/components/DeploymentInfo';
import CityExample from '@/components/CityExample';
import PreviousYears from '@/components/PreviousYears';
import Footer from '@/components/Footer';
import HostInYourCity from '@/components/HostInYourCity';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CitiesGrid />
        <section id="awards">
          <GlobalAwards />
        </section>
        <section id="participation">
          <ParticipationInfo />
        </section>
        <section id="previous-years">
          <PreviousYears />
        </section>
        <section id="sponsors">
          <Sponsors />
          <Partners />
        </section>
        <CityExample />
        <DeploymentInfo />
        <section id="host-in-your-city">
          <HostInYourCity />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
