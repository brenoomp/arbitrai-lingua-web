import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, label: 'EN', fullName: 'English' },
    { code: 'es' as Language, label: 'ES', fullName: 'Español' },
    { code: 'pt' as Language, label: 'PT', fullName: 'Português' },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-1 text-sm">
        {languages.map((lang, index) => (
          <span key={lang.code} className="flex items-center">
            {currentLanguage === lang.code ? (
              <span className="font-bold text-white px-2 py-1 rounded bg-[#007C91]/20">{lang.label}</span>
            ) : (
              <button
                onClick={() => setLanguage(lang.code)}
                className="text-gray-300 hover:text-white px-2 py-1 rounded transition-colors duration-200 hover:bg-white/10"
              >
                {lang.label}
              </button>
            )}
            {index < languages.length - 1 && (
              <span className="mx-1 text-gray-500">|</span>
            )}
          </span>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-start space-y-1 p-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentLanguage === lang.code
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {lang.fullName}
          </button>
        ))}
      </div>
    </>
  );
};

export default LanguageSwitcher;
