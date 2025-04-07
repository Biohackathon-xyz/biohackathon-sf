
import React from 'react';
import Header from '@/components/Header';
import CitiesGrid from '@/components/CitiesGrid';
import GlobalAwards from '@/components/GlobalAwards';
import Sponsors from '@/components/Sponsors';
import Partners from '@/components/Partners';
import ParticipationInfo from '@/components/ParticipationInfo';
import DeploymentInfo from '@/components/DeploymentInfo';
import CityExample from '@/components/CityExample';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-biohack-primary to-biohack-accent py-20">
          <div className="container mx-auto text-white text-center">
            <h1 className="text-5xl md:text-7xl font-smythe mb-6">
              Global Biohackathon
            </h1>
            <p className="text-xl md:text-2xl font-raleway max-w-2xl mx-auto">
              Bringing DIY biology, innovation, and open science to cities around the world
            </p>
          </div>
        </section>
        
        <CitiesGrid />
        <GlobalAwards />
        <ParticipationInfo />
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
