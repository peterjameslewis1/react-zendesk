import React, { Fragment, useEffect, useRef, useState } from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import CustomerExp from './CustomerExp/CustomerExperience';
import CustomerLogos from './CustomersLogos/CustomerLogos';
import SectionArticles from './SectionArticles/SectionArticles';
import Footer from './Footer/Footer';
import './App.css';

function App() {


  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (window.pageYOffset >= 50) {
      setSticky(true);
    }
    else {
      setSticky(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  



  return (
    <div className="App">
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Header />
      </div>
      <Section />
      <Section1 />
      <Section2/>
      <Section3 />
      <Section4 />
      <CustomerExp />
      <CustomerLogos />
      <SectionArticles />
      <Footer />
    </div>
  );
}

export default App;
