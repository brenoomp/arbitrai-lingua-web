import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121C2B] via-[#121C2B] to-[#1a2332] overflow-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007C91' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Neural network animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#007C91]/5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#007C91]/10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-16">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight break-words">
            <span className="block">{t.heroHeadline.split('. ')[0]}.</span>
            <span className="block text-[#007C91] mt-2 md:mt-4">
              {t.heroHeadline.split('. ')[1]}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed break-words">
            {t.heroSubheadline}
          </p>
          
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="w-full md:w-auto bg-[#007C91] hover:bg-[#006a7d] text-white text-base md:text-lg h-auto whitespace-normal px-6 md:px-12 py-4 md:py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            {t.heroCTA}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
