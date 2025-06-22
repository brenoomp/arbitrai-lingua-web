
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#121C2B] mb-6">
            {t.faqTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {t.faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#F4F6F7] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-[#121C2B] pr-4">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-[#007C91] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-[#2A2A2A] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
