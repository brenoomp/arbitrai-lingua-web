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

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQZpgrNuzOU35RVIzI0efpzYMesRQ4r1bpbXAaf-My2JfVat1Irh-mlLEHfFoVR1hd/exec';
    const body = new URLSearchParams();
    
    // Append form data to the body explicitly
    body.append('fullName', formData.fullName);
    body.append('workEmail', formData.workEmail);
    body.append('company', formData.company);
    body.append('jobTitle', formData.jobTitle);
    body.append('interest', formData.interest);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: body,
        mode: 'no-cors', // Important to avoid CORS issues
      });

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

    } catch (error) {
      console.error('Error!', error.message);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-[#121C2B] to-[#1a2332]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.formTitle}
          </h2>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[#121C2B] font-semibold">
                  {t.formFields.fullName}
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full border-2 border-[#D1D5D9] focus:border-[#007C91] rounded-xl p-4 h-14 text-base"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="workEmail" className="text-[#121C2B] font-semibold">
                  {t.formFields.workEmail}
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => handleInputChange('workEmail', e.target.value)}
                  className="w-full border-2 border-[#D1D5D9] focus:border-[#007C91] rounded-xl p-4 h-14 text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#121C2B] font-semibold">
                {t.formFields.company}
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full border-2 border-[#D1D5D9] focus:border-[#007C91] rounded-xl p-4 h-14 text-base"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-[#121C2B] font-semibold">
                  {t.formFields.jobTitle}
                </Label>
                <Input
                  id="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="w-full border-2 border-[#D1D5D9] focus:border-[#007C91] rounded-xl p-4 h-14 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-[#121C2B] font-semibold">
                  {t.formFields.interest}
                </Label>
                <Select onValueChange={(value) => handleInputChange('interest', value)} required>
                  <SelectTrigger className="w-full border-2 border-[#D1D5D9] focus:border-[#007C91] rounded-xl p-4 h-14 text-base">
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

            <div className="text-center pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#007C91] hover:bg-[#006a7d] text-white text-lg px-12 py-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'SUBMITTING...' : t.formButton}
              </Button>
              
              <p className="text-sm text-[#2A2A2A] mt-6">
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
