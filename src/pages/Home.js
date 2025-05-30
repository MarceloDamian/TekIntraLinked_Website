import {React,useEffect} from 'react';
import '../App.css';
import Tech from '../components/Tech';
import Main_Section from '../components/Main_Section';
import TopFooter from '../components/TopFooter';


// import BottomFooter from '../components/BottomFooter';

const Home = () => {

  useEffect(() => { 
    window.scrollTo(0, 0)
  }, []);// Empty dependency array

  return (
    <>
      <Main_Section/>
      <Tech />
      <TopFooter />
      {/* Bottomfooter is in app js */}
    </>
  );
}

export default Home;
