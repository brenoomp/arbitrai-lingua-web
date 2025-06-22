
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const PreLaunchForm = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    jobTitle: '',
    interest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Success!",
        description: "You've been added to our priority access list. We'll be in touch soon!",
      });
      setFormData({
        fullName: '',
        workEmail: '',
        company: '',
        jobTitle: '',
        interest: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-[#0A2240] to-[#1a365d]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.formTitle}
          </h2>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[#0A2240] font-semibold">
                  {t.formFields.fullName}
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="border-2 border-gray-200 focus:border-[#00C49A] rounded-xl p-4"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="workEmail" className="text-[#0A2240] font-semibold">
                  {t.formFields.workEmail}
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => handleInputChange('workEmail', e.target.value)}
                  className="border-2 border-gray-200 focus:border-[#00C49A] rounded-xl p-4"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#0A2240] font-semibold">
                {t.formFields.company}
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-2 border-gray-200 focus:border-[#00C49A] rounded-xl p-4"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-[#0A2240] font-semibold">
                  {t.formFields.jobTitle}
                </Label>
                <Input
                  id="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="border-2 border-gray-200 focus:border-[#00C49A] rounded-xl p-4"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-[#0A2240] font-semibold">
                  {t.formFields.interest}
                </Label>
                <Select onValueChange={(value) => handleInputChange('interest', value)} required>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-[#00C49A] rounded-xl p-4 h-14">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporation">{t.formOptions.corporation}</SelectItem>
                    <SelectItem value="sez">{t.formOptions.sez}</SelectItem>
                    <SelectItem value="platform">{t.formOptions.platform}</SelectItem>
                    <SelectItem value="other">{t.formOptions.other}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#00C49A] hover:bg-[#00a882] text-white text-lg px-12 py-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'SUBMITTING...' : t.formButton}
              </Button>
              
              <p className="text-sm text-gray-600 mt-6">
                {t.formCompliance}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PreLaunchForm;
