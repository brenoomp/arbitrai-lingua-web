
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { Brain, Zap, Shield } from 'lucide-react';

const Solution = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#121C2B] mb-6">
            {t.solutionTitle}
          </h2>
          <p className="text-xl text-[#2A2A2A] max-w-3xl mx-auto leading-relaxed">
            {t.solutionDescription}
          </p>
        </div>

        <div className="relative">
          {/* Central AI brain visualization */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#007C91] to-[#121C2B] flex items-center justify-center shadow-2xl">
                <Brain className="w-24 h-24 text-white" />
              </div>
              
              {/* Animated connections */}
              <div className="absolute -inset-8">
                <div className="w-8 h-8 bg-[#007C91] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                <div className="w-6 h-6 bg-[#121C2B] rounded-full absolute bottom-0 right-0 animate-pulse delay-500"></div>
                <div className="w-6 h-6 bg-[#007C91] rounded-full absolute bottom-0 left-0 animate-pulse delay-1000"></div>
                <div className="w-8 h-8 bg-[#121C2B] rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 animate-pulse delay-1500"></div>
                <div className="w-8 h-8 bg-[#007C91] rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Feature cards arranged around the center */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007C91]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-[#007C91]" />
              </div>
              <h3 className="text-xl font-bold text-[#121C2B] mb-4">Lightning Fast</h3>
              <p className="text-[#2A2A2A]">AI-powered analysis delivers decisions in weeks, not years.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#121C2B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-[#121C2B]" />
              </div>
              <h3 className="text-xl font-bold text-[#121C2B] mb-4">Intelligent Decisions</h3>
              <p className="text-[#2A2A2A]">Advanced algorithms trained on thousands of legal precedents.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#007C91]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#007C91]" />
              </div>
              <h3 className="text-xl font-bold text-[#121C2B] mb-4">Legally Binding</h3>
              <p className="text-[#2A2A2A]">Enforceable decisions recognized internationally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
