import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { Globe, TrendingUp, Shield, Zap } from 'lucide-react';

const SEZSection = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const features = [
    { icon: Globe, text: "Global Recognition" },
    { icon: TrendingUp, text: "Investment Attraction" },
    { icon: Shield, text: "Legal Certainty" },
    { icon: Zap, text: "Rapid Deployment" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[#121C2B] mb-6 md:mb-8 leading-tight">
              {t.sezTitle}
            </h2>
            <p className="text-lg md:text-xl text-[#2A2A2A] mb-8 leading-relaxed">
              {t.sezDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#007C91]/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#007C91]" />
                  </div>
                  <span className="font-semibold text-[#121C2B]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:order-2">
            <div className="bg-gradient-to-br from-[#121C2B] to-[#1a2332] rounded-3xl p-2 h-full flex items-center justify-center">
              <img 
                src="/sez-illustration.png" 
                alt="Illustration of a Smart Economic Zone powered by ArbitrAI"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEZSection;
