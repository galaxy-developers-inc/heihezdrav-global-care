import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'ru' ? 'zh' : 'ru';
    setLanguage(newLanguage);
  };

  const getLanguageLabel = () => {
    return language === 'ru' ? '中文' : 'РУС';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 min-w-[80px]"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{getLanguageLabel()}</span>
    </Button>
  );
};

export default LanguageSwitcher;