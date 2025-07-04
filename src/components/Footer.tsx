import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <footer className="bg-[#121C2B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a href="/" className="flex items-center space-x-2">
              <img className="h-8 w-auto" src="/Arbitrai-logo-white.png" alt="ArbitrAI Logo" />
              <div className="text-2xl font-bold text-white">
                Arbitr<span className="text-[#007C91]">AI</span>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#" 
              className="text-gray-300 hover:text-[#007C91] transition-colors duration-200"
            >
              {t.privacyPolicy}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
