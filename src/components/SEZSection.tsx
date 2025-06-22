
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#121C2B] mb-8 leading-tight">
              {t.sezTitle}
            </h2>
            <p className="text-xl text-[#2A2A2A] mb-8 leading-relaxed">
              {t.sezDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#007C91]/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#007C91]" />
                  </div>
                  <span className="font-semibold text-[#121C2B]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Modern city visualization */}
            <div className="relative bg-gradient-to-br from-[#121C2B] to-[#1a2332] rounded-3xl p-8 overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className={`bg-[#007C91]/20 rounded-lg h-${12 + (i % 3) * 4} animate-pulse`}
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#007C91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Smart Economic Zone</h3>
                  <p className="text-gray-300 text-sm">Powered by ArbitrAI</p>
                </div>
              </div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007C91' fill-opacity='0.3'%3E%3Cpath d='M20 20l20-20H20v20z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEZSection;
