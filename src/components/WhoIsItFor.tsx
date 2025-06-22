
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { Building2, MapPin, Smartphone } from 'lucide-react';

const WhoIsItFor = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const audiences = [
    {
      icon: Building2,
      title: t.whoItems.corporations.title,
      description: t.whoItems.corporations.description,
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: t.whoItems.sez.title,
      description: t.whoItems.sez.description,
      color: 'bg-[#007C91]'
    },
    {
      icon: Smartphone,
      title: t.whoItems.platforms.title,
      description: t.whoItems.platforms.description,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F6F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#121C2B] mb-6">
            {t.whoTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${audience.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#121C2B] mb-4">
                {audience.title}
              </h3>
              <p className="text-[#2A2A2A] leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
