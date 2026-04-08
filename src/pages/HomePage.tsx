import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SmartFeatures from '../components/SmartFeatures';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import TrustBadges from '../components/TrustBadges';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import DataManager from '../components/DataManager';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const pendingTarget = sessionStorage.getItem('pendingScrollTarget');
    if (pendingTarget) {
      sessionStorage.removeItem('pendingScrollTarget');
      setTimeout(() => {
        document.getElementById(pendingTarget)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <CTASection
        title="Ready to Maximize Your Revenue?"
        subtitle="Join 100+ drivers who are already earning more with our expert dispatch services"
        buttonText="Start Earning More"
        showUrgency={true}
      />
      <SmartFeatures />
      <HowItWorks />
      <CTASection
        title="See How It Works in 3 Simple Steps"
        subtitle="Get started in minutes and see results within 24 hours"
        buttonText="Get Started Now"
        variant="secondary"
      />
      <Testimonials />
      <CTASection
        title="Take Control of Your Trucking Business Today"
        subtitle="Limited spots available - secure your place now and start maximizing your revenue"
        buttonText="Claim Your Spot"
        showUrgency={true}
      />
      <Contact />
      <Footer />
      <FloatingButtons />
      <DataManager />
    </>
  );
};

export default HomePage;
