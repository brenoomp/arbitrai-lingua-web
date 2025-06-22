
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { AlertTriangle, Clock, TrendingUp, Users } from 'lucide-react';

const Problem = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const problems = [
    {
      icon: TrendingUp,
      title: t.problemItems.cost.title,
      description: t.problemItems.cost.description,
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: t.problemItems.delays.title,
      description: t.problemItems.delays.description,
      color: 'text-orange-500'
    },
    {
      icon: AlertTriangle,
      title: t.problemItems.unpredictability.title,
      description: t.problemItems.unpredictability.description,
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: t.problemItems.burden.title,
      description: t.problemItems.burden.description,
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F6F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#121C2B] mb-6">
            {t.problemTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-[#D1D5D9] flex items-center justify-center mb-6`}>
                <problem.icon className={`w-8 h-8 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#121C2B] mb-4">
                {problem.title}
              </h3>
              <p className="text-[#2A2A2A] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
