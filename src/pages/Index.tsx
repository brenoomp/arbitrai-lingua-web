
import { useRef } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Benefits from '@/components/Benefits';
import WhoIsItFor from '@/components/WhoIsItFor';
import SEZSection from '@/components/SEZSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import PreLaunchForm from '@/components/PreLaunchForm';
import Footer from '@/components/Footer';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero onCtaClick={scrollToForm} />
        <Problem />
        <Solution />
        <Benefits />
        <WhoIsItFor />
        <SEZSection />
        <Pricing />
        <FAQ />
        <div ref={formRef}>
          <PreLaunchForm />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
