import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Tech from '../src/components/Tech';
import Main_Section from '../src/components/Main_Section';
import TopFooter from '../src/components/TopFooter';
import BottomFooter from '../src/components/BottomFooter';


// import BottomFooter from '../components/BottomFooter';

const Home = () => {

  useEffect(() => { 
    window.scrollTo(0, 0)
  }, []);
  // Empty dependency array

  return (
    <>
    <Head>
      <title>TekIntraLinked</title>
    </Head>
        <Main_Section/>
        <Tech />
        <TopFooter />
        <BottomFooter />
        
        {/* Bottomfooter is in app js */}
    </>
  );
}

export default Home;
