import { useState, useEffect } from "react";
import StepButton from "../components/ui/StepButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OptionButtonList from "@/components/ui/OptionButtonList";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";
import { baseUrl } from "@/config/api";
import { getSuggestedSkills } from "@/utils/suggestedSkills";

interface HiringFormData {
  companySize: string;
  hiringFor: string;
  durationNeeded: string;
  timeCommitment: string;
  skills: string[];
  startTime: string;
  email: string;
  companyName: string;
  contactName: string;
  phone?: string;
  domain?: string;
}

interface HireTalentProps {
  initialSkill?: string;
}

const StepHeader = ({ stepNumber, title }: { stepNumber: number; title: string }) => (
  <div className="flex items-start gap-4">
    <div className="rounded-full w-10 h-10 flex-shrink-0 bg-gradient-to-r from-[#81004D] to-[#fe5182] flex items-center justify-center text-white font-semibold shadow-sm">
      {stepNumber}
    </div>
    <h2 className="text-xl font-semibold pt-1 text-[#080106] dark:text-white">{title}</h2>
  </div>
);

const HireTalent = ({ initialSkill }: HireTalentProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<HiringFormData>({
    companySize: '',
    hiringFor: '',
    durationNeeded: '',
    timeCommitment: '',
    skills: [],
    startTime: '',
    email: '',
    companyName: '',
    contactName: '',
    phone: '',
    domain: initialSkill || ''
  });
  const [inputSkill, setInputSkill] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (initialSkill) {
      const suggestions = getSuggestedSkills(initialSkill);
      setSuggestedSkills(suggestions);
      setFormData(prev => ({
        ...prev,
        domain: initialSkill
      }));
    }
  }, [initialSkill]);

  const handleSuggestionClick = (skill: string) => {
    if (!formData.skills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
      setSuggestedSkills(prev => prev.filter(s => s !== skill));
    }
  };

  const nextStep = (selectedOption?: string) => {
    setError(null);
    switch(step) {
      case 1:
        setFormData({...formData, companySize: selectedOption || ''});
        break;
      case 2:
        setFormData({...formData, hiringFor: selectedOption || ''});
        break;
      case 3:
        setFormData({...formData, durationNeeded: selectedOption || ''});
        break;
      case 4:
        setFormData({...formData, timeCommitment: selectedOption || ''});
        break;
      case 6:
        setFormData({...formData, startTime: selectedOption || ''});
        break;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError(null);
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSkillAdd = () => {
    if (inputSkill.trim() && !formData.skills.includes(inputSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, inputSkill.trim()]
      });
      setInputSkill('');
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.companyName || !formData.contactName) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/api/v1/hiring`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRoleType = (domain: string): string => {
    const lowerDomain = domain.toLowerCase();
    
    if (lowerDomain.includes('developer')) return 'developer';
    if (lowerDomain.includes('engineer')) return 'engineer';
    if (lowerDomain.includes('scientist')) return 'scientist';
    if (lowerDomain.includes('analyst')) return 'analyst';
    if (lowerDomain.includes('specialist')) return 'specialist';
    if (lowerDomain.includes('architect')) return 'architect';
    if (lowerDomain.includes('administrator')) return 'administrator';
    if (lowerDomain.includes('expert')) return 'expert';
    
    return 'professional';
  };

  const getDynamicText = (baseText: string): string => {
    if (!formData.domain) return baseText;
    
    const roleType = getRoleType(formData.domain);
    const roleName = formData.domain;
    
    if (baseText.includes('the developer')) {
      return baseText.replace('the developer', `the ${roleName}`);
    }
    if (baseText.includes('developer')) {
      return baseText.replace('developer', roleName);
    }
    
    if (baseText.startsWith('How long do you need')) {
      return `How long do you need the ${roleName}?`;
    }
    if (baseText.startsWith('What level of time commitment')) {
      return `What level of time commitment will you require from the ${roleName}?`;
    }
    if (baseText.startsWith('When do you need')) {
      return `When do you need the ${roleName} to start?`;
    }
    if (baseText.startsWith('What skills would you like')) {
      return `What skills would you like to see in your ${roleName}?`;
    }
    
    return baseText;
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
        <div className="w-full max-w-2xl mx-auto text-center z-10">
          <div className="p-10 rounded-2xl bg-white dark:bg-black border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
            <div className="flex flex-col items-center justify-center">
              <CheckCircle2 className="text-green-500 w-16 h-16 mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold text-green-400 mb-2">Thank You!</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Your hiring request has been submitted successfully.<br />We'll get back to you soon.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white hover:shadow-lg hover:shadow-pink-500/25"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
      <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <div className="relative max-w-3xl mx-auto mb-6 rounded-xl border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] px-8 py-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#080106] dark:text-white mb-4">
                  Welcome to <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Topskyll Hiring!</span>
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Thanks for your interest in hiring through
                  <span className="font-semibold text-[#fe5182]"> Topskyll</span>!
                  <br />
                  Before we get started, we'd like to ask a few questions to better understand your business needs.
                </p>
              </div>
            </div>
            <StepHeader stepNumber={step} title={getDynamicText("How many people are employed at your company?")} />
            <OptionButtonList
              options={[
                "Less than 10",
                "11-50",
                "51-200",
                "201 - 1000",
                "1001 - 5000",
                "More than 5000",
              ]}
              onSelect={nextStep}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <StepHeader stepNumber={step} title={getDynamicText("What are you hiring for?")} />
            <OptionButtonList
              options={[
                "New idea or project",
                "Existing project that needs more resources",
                "None of the above, I'm just looking to learn more about Toptal",
              ]}
              onSelect={nextStep}
            />
            <button onClick={() => nextStep()} className="text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#81004D] to-[#fe5182] font-bold hover:underline mt-2 block">
              Skip
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <StepHeader stepNumber={step} title={getDynamicText("How long do you need the developer?")} />
            <OptionButtonList
              options={[
                "Less than 1 week",
                "1 to 4 weeks",
                "1 to 3 months",
                "3 to 6 months",
                "Longer than 6 months",
                "I'll decide later",
              ]}
              onSelect={nextStep}
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <StepHeader stepNumber={step} title={getDynamicText("What level of time commitment will you require from the developer?")} />
            <OptionButtonList
              options={[
                "Full time (40 or more hrs/week)",
                "Part time (Less than 40 hrs/week)",
                "Hourly",
                "I'll decide later",
              ]}
              onSelect={nextStep}
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <StepHeader stepNumber={step} title={getDynamicText("What skills would you like to see in your new hire?")} />

            <div className="flex gap-3 items-center">
              <Input
                className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                placeholder="Enter a skill"
                value={inputSkill}
                onChange={(e) => setInputSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSkillAdd()}
              />
              <Button
                onClick={handleSkillAdd}
                className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:shadow-lg hover:shadow-pink-500/25"
              >
                Add
              </Button>
            </div>

            {suggestedSkills.length > 0 && (
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Suggested skills:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedSkills.map((skill) => (
                    <Button
                      key={skill}
                      onClick={() => handleSuggestionClick(skill)}
                      variant="outline"
                      className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
                    >
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {formData.skills.length === 0 ? (
                <p className="text-sm text-gray-400 italic">No skills added yet</p>
              ) : (
                formData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-sm text-gray-800 dark:text-white"
                  >
                    <span className="text-sm">{skill}</span>
                    <button
                      onClick={() => handleSkillRemove(skill)}
                      className="text-red-400 hover:text-red-600 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={() => nextStep()}
                className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:shadow-lg hover:shadow-pink-500/25"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <StepHeader stepNumber={step} title={getDynamicText("When do you need the developer to start?")} />
            <OptionButtonList
              options={[
                "Immediately",
                "In 1 to 2 weeks",
                "More than 2 weeks from now",
                "I'll decide later",
              ]}
              onSelect={nextStep}
            />
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6">
            <StepHeader stepNumber={step} title="Success! Let's connect you with talent." />

            <div className="space-y-5">
              <div className="space-y-1">
                <Label className="text-sm text-gray-700 dark:text-gray-300">Email *</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-sm text-gray-700 dark:text-gray-300">Company Name *</Label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="e.g. Topskyll Inc."
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-sm text-gray-700 dark:text-gray-300">Contact Name *</Label>
                <Input
                  type="text"
                  name="contactName"
                  placeholder="Your full name"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-sm text-gray-700 dark:text-gray-300">Phone (Optional)</Label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+91 9123456789"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:shadow-lg hover:shadow-pink-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-10">
          {step > 1 && <StepButton onClick={prevStep} direction="prev" />}
          {step < 7 && step !== 5 && <StepButton onClick={() => nextStep()} direction="next" />}
        </div>
      </div>
    </div>
  );
};

export default HireTalent;