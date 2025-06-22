
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, label: 'English' },
    { code: 'es' as Language, label: 'Español' },
    { code: 'pt' as Language, label: 'Português' },
  ];

  return (
    <div className="flex items-center space-x-2 text-sm">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          {currentLanguage === lang.code ? (
            <span className="font-bold text-gray-200">{lang.label}</span>
          ) : (
            <button
              onClick={() => setLanguage(lang.code)}
              className="text-gray-400 hover:text-[#007C91] transition-colors duration-200"
            >
              {lang.label}
            </button>
          )}
          {index < languages.length - 1 && (
            <span className="mx-2 text-gray-500">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
