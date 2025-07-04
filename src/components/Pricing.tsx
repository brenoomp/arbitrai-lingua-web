import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { Check, DollarSign } from 'lucide-react';

const Pricing = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <section className="py-20 bg-[#F4F6F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#121C2B] mb-6">
          {t.pricingTitle}
        </h2>
        <p className="text-lg md:text-xl text-[#2A2A2A] mb-12 max-w-2xl mx-auto">
          {t.pricingDescription}
        </p>

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#007C91] to-[#121C2B] rounded-full flex items-center justify-center">
              <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#121C2B] mb-6">{t.pricingCardTitle}</h3>
          
          <div className="space-y-4 mb-8 text-left">
            {t.pricingCardFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-[#007C91] flex-shrink-0 mt-1" />
                <span className="text-[#2A2A2A]">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#007C91]/10 to-[#121C2B]/10 rounded-2xl p-4 md:p-6">
            <p className="text-base md:text-lg font-semibold text-[#121C2B]">
              {t.pricingCardNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
