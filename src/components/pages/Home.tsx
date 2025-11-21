import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { WorkSection } from '../sections/WorkSection';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';

export const Home = () => {
  return (
    <>
       <HeroSection />
       <WorkSection />
       <AboutSection />
       <ContactSection />
    </>
  );
};
