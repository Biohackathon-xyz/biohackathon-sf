
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CitiesGrid />
        <GlobalAwards />
        <ParticipationInfo />
        <PreviousYears />
        <Sponsors />
        <Partners />
        <CityExample />
        <DeploymentInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
