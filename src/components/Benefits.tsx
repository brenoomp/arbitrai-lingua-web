
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { Zap, DollarSign, Target } from 'lucide-react';

const Benefits = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const benefits = [
    {
      icon: Zap,
      title: t.benefitsItems.speed.title,
      description: t.benefitsItems.speed.description,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: DollarSign,
      title: t.benefitsItems.cost.title,
      description: t.benefitsItems.cost.description,
      gradient: 'from-green-400 to-[#00C49A]'
    },
    {
      icon: Target,
      title: t.benefitsItems.predictability.title,
      description: t.benefitsItems.predictability.description,
      gradient: 'from-blue-400 to-[#0A2240]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2240] to-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.benefitsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
