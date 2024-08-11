import React from 'react';
import '../App.css';
import Tech from '../components/Tech';
import HeroSection from '../components/HeroSection';
import TopFooter from '../components/TopFooter';
import BottomFooter from '../components/BottomFooter';

function Home() {
  return (
    <>
      <HeroSection />
      <Tech />
      <TopFooter />
    </>
  );
}

export default Home;
