import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import HowItWorks from '../components/HowItWorks';
import SmartFeatures from '../components/SmartFeatures';
import Dashboard from '../components/Dashboard';
import DriverBenefits from '../components/DriverBenefits';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';
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
      <TargetAudience />
      <HowItWorks />
      <SmartFeatures />
      <Dashboard />
      <DriverBenefits />
      <Testimonials />
      <Pricing />
      <CTASection
        title="Start Your Trucking Business With the Right Technology"
        subtitle="Launch your trucking or dispatch business with a professional system designed for the modern logistics industry."
        buttonText="Book Free Demo"
        showUrgency={false}
        variant="primary"
      />
      <Contact />
      <Footer />
      <FloatingButtons />
      <DataManager />
    </>
  );
};

export default HomePage;
