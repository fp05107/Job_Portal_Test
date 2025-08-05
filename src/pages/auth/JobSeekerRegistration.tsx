import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Lock,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  Upload,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { baseUrl } from '@/config/api';
import { useAuth } from '@/context/AuthContext';

// Mock data for dropdowns
const SKILL_CATEGORIES = ['Programming', 'Design', 'DevOps', 'Data', 'Other'];
const PROFICIENCY_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const EXPERIENCE_LEVELS = ['Entry', 'Intermediate', 'Senior', 'Expert'];
const LANGUAGE_PROFICIENCY = ['Native', 'Fluent', 'Intermediate', 'Basic'];

const TECHNOLOGY_STACK = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Angular', 'Vue',
  'Node.js', 'Express', 'Django', 'Flask', 'MongoDB', 'PostgreSQL', 'MySQL',
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'Jenkins', 'Figma', 'Adobe XD'
];

const TIMEZONES = [
  'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00',
  'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00',
  'UTC+00:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00',
  'UTC+05:30', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00',
  'UTC+11:00', 'UTC+12:00'
];

const PRIMARY_EXPERTISE_OPTIONS = [
  'Frontend Development', 'Backend Development', 'Full Stack Development',
  'Mobile Development', 'DevOps Engineering', 'Data Science', 'Machine Learning',
  'UI/UX Design', 'Product Management', 'Quality Assurance'
];

const JobSeekerRegistration = () => {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLinkedInSignup, setIsLinkedInSignup] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [emailVerificationStep, setEmailVerificationStep] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(0);

  // Form data state
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
    professionalTitle: '',
    experienceLevel: '',
    hourlyRate: { min: 0, max: 0 },
    professionalSummary: '',
    timezone: '',
    linkedIn: '',
    github: '',
    personalWebsite: '',
    primaryExpertise: [],
    profileImage: null
  });

  const [skills, setSkills] = useState<any>([]);
  const [languages, setLanguages] = useState<any>([]);
  const [experiences, setExperiences] = useState<any>([]);
  const [education, setEducation] = useState<any>([]);
  const [portfolioItems, setPortfolioItems] = useState<any>([]);
  const [resume, setResume] = useState<any>(null);

  const [errors, setErrors] = useState<any>({});
  const { registerUser } = useAuth();

  const handleLinkedInLogin = () => {
    const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID; // Your LinkedIn client ID
    const redirectUri = encodeURIComponent(import.meta.env.VITE_LINKEDIN_REDIRECT_URI_REGISTER);
    const scope = encodeURIComponent('openid profile email');
    const state = 'random_string_to_prevent_csrf'; // Generate a random string

    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

    // Redirect to LinkedIn
    window.location.href = linkedInAuthUrl;
  };

  // OTP timer effect
  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    if (code) {
      fetch(`${baseUrl}/api/v1/user/auth/linkedin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error('LinkedIn authentication failed');
          }
          const data = await res.json();
          setFormData({
            ...formData,
            email: data.email,
            firstName: data.given_name,
            lastName: data.family_name,
            profileImage: data.picture
          });

          setIsLinkedInSignup(true);

          // Remove the code from URL
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        })
        .catch((error) => {
          toast({
            title: "LinkedIn Error",
            description: error.message,
            variant: "destructive"
          });
        });
    } else if (error) {
      toast({
        title: "LinkedIn Error",
        description: error,
        variant: "destructive"
      });
    }
  }, []);

  const validateStep = (step: any) => {
    const newErrors: any = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!isLinkedInSignup) {
          if (!formData.password) newErrors.password = 'Password is required';
          else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
          if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
          }
        }
        break;
      case 2:
        if (!formData.professionalTitle.trim()) newErrors.professionalTitle = 'Professional title is required';
        if (!formData.experienceLevel) newErrors.experienceLevel = 'Experience level is required';
        if (formData.hourlyRate.min <= 0) newErrors.hourlyRateMin = 'Minimum rate is required';
        if (formData.hourlyRate.max <= 0) newErrors.hourlyRateMax = 'Maximum rate is required';
        if (formData.hourlyRate.max < formData.hourlyRate.min) {
          newErrors.hourlyRateMax = 'Maximum rate must be greater than minimum';
        }
        if (!formData.professionalSummary.trim()) newErrors.professionalSummary = 'Professional summary is required';
        if (!formData.timezone) newErrors.timezone = 'Timezone is required';
        break;
      case 3:
        if (formData.primaryExpertise.length === 0) {
          newErrors.primaryExpertise = 'At least one expertise is required';
        }
        if (skills.length === 0) newErrors.skills = 'At least one skill is required';
        if (languages.length === 0) newErrors.languages = 'At least one language is required';
        break;
      case 4:
        // No required fields in the final step (all optional)
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/user/auth/send-email-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName || "User", // fallback if first name is missing
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to send OTP");

      setOtpTimer(60); // Start countdown
      toast({
        title: "OTP Sent",
        description: "Please check your email for the verification code.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  const verifyOTP = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter the complete OTP.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${baseUrl}/api/v1/user/auth/verify-email-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email, // Or wherever the email is stored
          otp: otpCode,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Invalid OTP');
      }
      // if (otpCode == '123456') {
      setEmailVerificationStep(false);
      setIsEmailVerified(true)
      toast({
        title: "Email Verified",
        description: "Your email has been verified successfully.",
      });
      setCurrentStep(2)
      // }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const uploadFile = async (file: any, type = 'avatar') => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append(type === 'avatar' ? 'avatar' : 'resume', file);

      // Mock upload - replace with actual API call
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/profile-image-upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data?.data?.Location || 'https://via.placeholder.com/150';
    } catch (error) {
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = async (file: any, type = 'avatar') => {
    try {
      const url = await uploadFile(file, type);
      if (type === 'avatar') {
        setFormData((prev: any) => ({ ...prev, profileImage: url }));
      } else if (type === 'resume') {
        setResume(url);
      }
      toast({
        title: "Upload Successful",
        description: `${type === 'avatar' ? 'Profile image' : 'Resume'} uploaded successfully.`,
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const addSkill = () => {
    setSkills([...skills, { name: '', category: '', proficiency: '', yearsOfExperience: 0 }]);
  };

  const updateSkill = (index: number, field: any, value: any) => {
    const updatedSkills = skills.map((skill: any, i: number) =>
      i === index ? { ...skill, [field]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_: any, i: number) => i !== index));
  };

  const addLanguage = () => {
    setLanguages([...languages, { name: '', proficiency: '' }]);
  };

  const updateLanguage = (index: number, field: any, value: any) => {
    const updatedLanguages = languages.map((lang: any, i: number) =>
      i === index ? { ...lang, [field]: value } : lang
    );
    setLanguages(updatedLanguages);
  };

  const removeLanguage = (index: number) => {
    setLanguages(languages.filter((_: any, i: number) => i !== index));
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: [''],
      technologies: []
    }]);
  };

  const updateExperience = (index: number, field: any, value: any) => {
    const updatedExperiences = experiences.map((exp: any, i: any) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const removeExperience = (index: any) => {
    setExperiences(experiences.filter((_: any, i: any) => i !== index));
  };

  const addEducation = () => {
    setEducation([...education, {
      degree: '',
      institution: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    }]);
  };

  const updateEducation = (index: any, field: any, value: any) => {
    const updatedEducation = education.map((edu: any, i: any) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updatedEducation);
  };

  const removeEducation = (index: any) => {
    setEducation(education.filter((_: any, i: any) => i !== index));
  };

  const addPortfolioItem = () => {
    setPortfolioItems([...portfolioItems, {
      title: '',
      url: '',
      description: '',
      technologies: []
    }]);
  };

  const updatePortfolioItem = (index: any, field: any, value: any) => {
    const updatedPortfolio = portfolioItems.map((item: any, i: any) =>
      i === index ? { ...item, [field]: value } : item
    );
    setPortfolioItems(updatedPortfolio);
  };

  const removePortfolioItem = (index: any) => {
    setPortfolioItems(portfolioItems.filter((_: any, i: any) => i !== index));
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1 && !isLinkedInSignup) {
        setEmailVerificationStep(true);
        sendOTP();
        return;
      }
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    setIsSubmitting(true);
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      location: formData.location,
      password: formData.password,
      professionalTitle: formData.professionalTitle,
      experienceLevel: formData.experienceLevel,
      hourlyRateMin: formData.hourlyRate.min,
      hourlyRateMax: formData.hourlyRate.max,
      professionalSummary: formData.professionalSummary,
      availabilityForNewProjects: true,
      timezone: formData.timezone,
      phone: formData.phone || '',
      linkedIn: formData.linkedIn || '',
      github: formData.github || '',
      personalWebsite: formData.personalWebsite || '',
      resume: resume,
      primaryExpertise: formData.primaryExpertise,
      skills: skills,
      languages: languages,
      experiences: experiences,
      education: education,
      portfolioItems: portfolioItems,
      isEmailVerified: isLinkedInSignup || isEmailVerified // Mark as verified if signed up with LinkedIn
    };

    try {
      const response = await registerUser(payload);
      toast({
        title: "Registration Successful!",
        description: "Welcome to Topskyll. Your account has been created.",
      });

      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleExpertise = (expertise: any) => {
    setFormData((prev: any) => ({
      ...prev,
      primaryExpertise: prev.primaryExpertise.includes(expertise)
        ? prev.primaryExpertise.filter((e: any) => e !== expertise)
        : [...prev.primaryExpertise, expertise]
    }));
  };

  const getStepProgress = () => (currentStep / 4) * 100;

  if (emailVerificationStep) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#81004D]/10 to-[#fe5182]/10 p-4 flex items-center justify-center">
        <Card className="w-full max-w-md border-0 shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <CardHeader>
            <CardTitle className="text-center text-[#81004D] dark:text-[#fe5182]">Verify Your Email</CardTitle>
            <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
              We've sent a verification code to {formData.email}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-lg font-bold border-[#81004D] dark:border-[#fe5182] focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                />
              ))}
            </div>

            <Button
              onClick={verifyOTP}
              className="w-full bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90"
              disabled={isSubmitting || otp.join('').length !== 6}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </Button>

            <div className="text-center">
              {otpTimer > 0 ? (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Resend code in {otpTimer}s
                </p>
              ) : (
                <Button 
                  variant="link" 
                  onClick={sendOTP} 
                  className="p-0 h-auto text-[#81004D] dark:text-[#fe5182] hover:text-[#81004D]/90 dark:hover:text-[#fe5182]/90"
                >
                  Resend verification code
                </Button>
              )}
            </div>

            <Button
              variant="outline"
              onClick={() => setEmailVerificationStep(false)}
              className="w-full border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
            >
              Back to Registration
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#81004D]/10 to-[#fe5182]/10 p-4">
      <div className="max-w-4xl mx-auto ">
        <Card className="border-0 shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-[#81004D] dark:text-[#fe5182]">Join Topskyll</CardTitle>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Step {currentStep} of 4
              </div>
            </div>
            <Progress value={getStepProgress()} className="w-full bg-slate-200 dark:bg-slate-700" indicatorColor="bg-gradient-to-r from-[#81004D] to-[#fe5182]" />
          </CardHeader>

          <CardContent className="space-y-6">
            {/* LinkedIn Signup Option */}
            {currentStep === 1 && !isLinkedInSignup && (
              <div className="text-center space-y-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                <Button
                  onClick={handleLinkedInLogin}
                  className="w-full bg-[#0077B5] hover:bg-[#0077B5]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Linkedin className="w-4 h-4 mr-2" />
                      Sign up with LinkedIn
                    </>
                  )}
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400">or</p>
              </div>
            )}

            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData((prev: any) => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Enter your first name"
                        className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData((prev: any) => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Enter your last name"
                        className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev: any) => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                      className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      disabled={isLinkedInSignup}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev: any) => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData((prev: any) => ({ ...prev, location: e.target.value }))}
                      placeholder="City, Country"
                      className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                    />
                  </div>
                  {errors.location && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.location}
                    </p>
                  )}
                </div>

                {!isLinkedInSignup && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData((prev: any) => ({ ...prev, password: e.target.value }))}
                          placeholder="Create a password"
                          className="pl-10 pr-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData((prev: any) => ({ ...prev, confirmPassword: e.target.value }))}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600 mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Profile Image Upload */}
                <div>
                  <Label>Profile Image</Label>
                  <div className="mt-2 flex items-center space-x-4">
                    {formData.profileImage ? (
                      <img
                        src={formData.profileImage}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#81004D] dark:border-[#fe5182]"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center border-2 border-[#81004D] dark:border-[#fe5182]">
                        <User className="w-8 h-8 text-slate-400" />
                      </div>
                    )}
                    <Label htmlFor="profileImage" className="cursor-pointer">
                      <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#81004D]/10 to-[#fe5182]/10 hover:from-[#81004D]/20 hover:to-[#fe5182]/20 rounded-lg transition-colors">
                        {isUploading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Upload className="w-4 h-4" />
                        )}
                        <span className="text-sm">
                          {isUploading ? 'Uploading...' : 'Upload Photo'}
                        </span>
                      </div>
                      <Input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file, 'avatar');
                        }}
                        className="hidden"
                      />
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="professionalTitle">Professional Title *</Label>
                  <Input
                    id="professionalTitle"
                    value={formData.professionalTitle}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, professionalTitle: e.target.value }))}
                    placeholder="e.g., Senior Frontend Developer"
                    className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                  />
                  {errors.professionalTitle && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.professionalTitle}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="experienceLevel">Experience Level *</Label>
                  <Select
                    value={formData.experienceLevel}
                    onValueChange={(value) => setFormData((prev: any) => ({ ...prev, experienceLevel: value }))}
                  >
                    <SelectTrigger className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPERIENCE_LEVELS.map(level => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.experienceLevel && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.experienceLevel}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hourlyRateMin">Hourly Rate (Min) *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-400">$</span>
                      <Input
                        id="hourlyRateMin"
                        type="number"
                        value={formData.hourlyRate.min}
                        onChange={(e) => setFormData((prev: any) => ({
                          ...prev,
                          hourlyRate: { ...prev.hourlyRate, min: parseInt(e.target.value) || 0 }
                        }))}
                        placeholder="Minimum rate"
                        className="pl-8 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                    {errors.hourlyRateMin && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.hourlyRateMin}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="hourlyRateMax">Hourly Rate (Max) *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-400">$</span>
                      <Input
                        id="hourlyRateMax"
                        type="number"
                        value={formData.hourlyRate.max}
                        onChange={(e) => setFormData((prev: any) => ({
                          ...prev,
                          hourlyRate: { ...prev.hourlyRate, max: parseInt(e.target.value) || 0 }
                        }))}
                        placeholder="Maximum rate"
                        className="pl-8 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                    {errors.hourlyRateMax && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.hourlyRateMax}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="professionalSummary">Professional Summary *</Label>
                  <Textarea
                    id="professionalSummary"
                    value={formData.professionalSummary}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, professionalSummary: e.target.value }))}
                    placeholder="Describe your professional background, skills, and achievements"
                    rows={5}
                    className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                  />
                  {errors.professionalSummary && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.professionalSummary}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="timezone">Timezone *</Label>
                  <Select
                    value={formData.timezone}
                    onValueChange={(value) => setFormData((prev: any) => ({ ...prev, timezone: value }))}
                  >
                    <SelectTrigger className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]">
                      <SelectValue placeholder="Select your timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMEZONES.map(tz => (
                        <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.timezone && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.timezone}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="linkedIn"
                        value={formData.linkedIn}
                        onChange={(e) => setFormData((prev: any) => ({ ...prev, linkedIn: e.target.value }))}
                        placeholder="LinkedIn URL"
                        className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="github">GitHub Profile</Label>
                    <div className="relative">
                      <Github className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="github"
                        value={formData.github}
                        onChange={(e) => setFormData((prev: any) => ({ ...prev, github: e.target.value }))}
                        placeholder="GitHub URL"
                        className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="personalWebsite">Personal Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="personalWebsite"
                        value={formData.personalWebsite}
                        onChange={(e) => setFormData((prev: any) => ({ ...prev, personalWebsite: e.target.value }))}
                        placeholder="Website URL"
                        className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Resume (Optional)</Label>
                  <div className="mt-2">
                    <Label htmlFor="resume" className="cursor-pointer">
                      <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#81004D]/10 to-[#fe5182]/10 hover:from-[#81004D]/20 hover:to-[#fe5182]/20 rounded-lg transition-colors">
                        {isUploading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Upload className="w-4 h-4" />
                        )}
                        <span className="text-sm">
                          {isUploading ? 'Uploading...' : 'Upload Resume'}
                        </span>
                      </div>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file, 'resume');
                        }}
                        className="hidden"
                      />
                    </Label>
                    {resume && (
                      <div className="mt-2 flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Resume uploaded successfully
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Skills & Expertise */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label>Primary Expertise *</Label>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {PRIMARY_EXPERTISE_OPTIONS.map(expertise => (
                      <div key={expertise} className="flex items-center space-x-2">
                        <Checkbox
                          id={`expertise-${expertise}`}
                          checked={formData.primaryExpertise.includes(expertise)}
                          onCheckedChange={() => toggleExpertise(expertise)}
                          className="border-[#81004D] dark:border-[#fe5182] data-[state=checked]:bg-[#81004D] dark:data-[state=checked]:bg-[#fe5182]"
                        />
                        <Label htmlFor={`expertise-${expertise}`} className="font-normal">
                          {expertise}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.primaryExpertise && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.primaryExpertise}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <Label>Skills *</Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={addSkill}
                      className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Skill
                    </Button>
                  </div>

                  {skills.length === 0 && (
                    <div className="text-sm text-slate-500 mt-2">
                      No skills added yet
                    </div>
                  )}

                  {skills.map((skill: any, index: any) => (
                    <div key={index} className="mt-4 p-4 border rounded-lg relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        onClick={() => removeSkill(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`skill-name-${index}`}>Skill Name</Label>
                          <Input
                            id={`skill-name-${index}`}
                            value={skill.name}
                            onChange={(e) => updateSkill(index, 'name', e.target.value)}
                            placeholder="e.g., React, Python"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`skill-category-${index}`}>Category</Label>
                          <Select
                            value={skill.category}
                            onValueChange={(value) => updateSkill(index, 'category', value)}
                          >
                            <SelectTrigger className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {SKILL_CATEGORIES.map(cat => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor={`skill-proficiency-${index}`}>Proficiency</Label>
                          <Select
                            value={skill.proficiency}
                            onValueChange={(value) => updateSkill(index, 'proficiency', value)}
                          >
                            <SelectTrigger className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]">
                              <SelectValue placeholder="Select proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                              {PROFICIENCY_LEVELS.map(level => (
                                <SelectItem key={level} value={level}>{level}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor={`skill-years-${index}`}>Years of Experience</Label>
                          <Input
                            id={`skill-years-${index}`}
                            type="number"
                            value={skill.yearsOfExperience}
                            onChange={(e) => updateSkill(index, 'yearsOfExperience', e.target.value || 0)}
                            placeholder="Years"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {errors.skills && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.skills}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <Label>Languages *</Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={addLanguage}
                      className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Language
                    </Button>
                  </div>

                  {languages.length === 0 && (
                    <div className="text-sm text-slate-500 mt-2">
                      No languages added yet
                    </div>
                  )}

                  {languages.map((language: any, index: any) => (
                    <div key={index} className="mt-4 p-4 border rounded-lg relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        onClick={() => removeLanguage(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`language-name-${index}`}>Language</Label>
                          <Input
                            id={`language-name-${index}`}
                            value={language.name}
                            onChange={(e) => updateLanguage(index, 'name', e.target.value)}
                            placeholder="e.g., English, Spanish"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`language-proficiency-${index}`}>Proficiency</Label>
                          <Select
                            value={language.proficiency}
                            onValueChange={(value) => updateLanguage(index, 'proficiency', value)}
                          >
                            <SelectTrigger className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]">
                              <SelectValue placeholder="Select proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                              {LANGUAGE_PROFICIENCY.map(level => (
                                <SelectItem key={level} value={level}>{level}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}

                  {errors.languages && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.languages}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Experience & Education (Optional) */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <Label>Work Experience (Optional)</Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={addExperience}
                      className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Experience
                    </Button>
                  </div>

                  {experiences.length === 0 && (
                    <div className="text-sm text-slate-500 mt-2">
                      No work experience added yet
                    </div>
                  )}

                  {experiences.map((exp: any, index: number) => (
                    <div key={index} className="mt-4 p-4 border rounded-lg relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        onClick={() => removeExperience(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`exp-position-${index}`}>Position *</Label>
                          <Input
                            id={`exp-position-${index}`}
                            value={exp.position}
                            onChange={(e) => updateExperience(index, 'position', e.target.value)}
                            placeholder="e.g., Senior Developer"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`exp-company-${index}`}>Company *</Label>
                          <Input
                            id={`exp-company-${index}`}
                            value={exp.company}
                            onChange={(e) => updateExperience(index, 'company', e.target.value)}
                            placeholder="Company name"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor={`exp-start-${index}`}>Start Date</Label>
                          <Input
                            id={`exp-start-${index}`}
                            type="date"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`exp-end-${index}`}>End Date</Label>
                          <Input
                            id={`exp-end-${index}`}
                            type="date"
                            value={exp.endDate}
                            onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                            placeholder="Present if current"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor={`exp-description-${index}`}>Description</Label>
                        <Textarea
                          id={`exp-description-${index}`}
                          value={exp.description}
                          onChange={(e) => updateExperience(index, 'description', e.target.value)}
                          placeholder="Describe your responsibilities and achievements"
                          rows={3}
                          className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                        />
                      </div>

                      <div className="mt-4">
                        <Label>Technologies Used</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {TECHNOLOGY_STACK.map((tech: any) => (
                            <Badge
                              key={tech}
                              variant={exp.technologies.includes(tech) ? 'default' : 'outline'}
                              className={`cursor-pointer ${exp.technologies.includes(tech) ? 'bg-[#81004D] dark:bg-[#fe5182]' : ''}`}
                              onClick={() => {
                                const updatedTechs = exp.technologies.includes(tech)
                                  ? exp.technologies.filter((t: any) => t !== tech)
                                  : [...exp.technologies, tech];
                                updateExperience(index, 'technologies', updatedTechs);
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <Label>Education (Optional)</Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={addEducation}
                      className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Education
                    </Button>
                  </div>

                  {education.length === 0 && (
                    <div className="text-sm text-slate-500 mt-2">
                      No education added yet
                    </div>
                  )}

                  {education.map((edu: any, index: any) => (
                    <div key={index} className="mt-4 p-4 border rounded-lg relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        onClick={() => removeEducation(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`edu-degree-${index}`}>Degree</Label>
                          <Input
                            id={`edu-degree-${index}`}
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                            placeholder="e.g., Bachelor of Science"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`edu-institution-${index}`}>Institution</Label>
                          <Input
                            id={`edu-institution-${index}`}
                            value={edu.institution}
                            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                            placeholder="University name"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor={`edu-field-${index}`}>Field of Study</Label>
                        <Input
                          id={`edu-field-${index}`}
                          value={edu.fieldOfStudy}
                          onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                          placeholder="e.g., Computer Science"
                          className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
                          <Input
                            id={`edu-start-${index}`}
                            type="date"
                            value={edu.startDate}
                            onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`edu-end-${index}`}>End Date</Label>
                          <Input
                            id={`edu-end-${index}`}
                            type="date"
                            value={edu.endDate}
                            onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <Label>Portfolio Items (Optional)</Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={addPortfolioItem}
                      className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Item
                    </Button>
                  </div>

                  {portfolioItems.length === 0 && (
                    <div className="text-sm text-slate-500 mt-2">
                      No portfolio items added yet
                    </div>
                  )}

                  {portfolioItems.map((item: any, index: any) => (
                    <div key={index} className="mt-4 p-4 border rounded-lg relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        onClick={() => removePortfolioItem(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`portfolio-title-${index}`}>Title</Label>
                          <Input
                            id={`portfolio-title-${index}`}
                            value={item.title}
                            onChange={(e) => updatePortfolioItem(index, 'title', e.target.value)}
                            placeholder="Project name"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>

                        <div>
                          <Label htmlFor={`portfolio-url-${index}`}>URL</Label>
                          <Input
                            id={`portfolio-url-${index}`}
                            value={item.url}
                            onChange={(e) => updatePortfolioItem(index, 'url', e.target.value)}
                            placeholder="Live URL or repository"
                            className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor={`portfolio-desc-${index}`}>Description</Label>
                        <Textarea
                          id={`portfolio-desc-${index}`}
                          value={item.description}
                          onChange={(e) => updatePortfolioItem(index, 'description', e.target.value)}
                          placeholder="Describe the project and your role"
                          rows={3}
                          className="focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                        />
                      </div>

                      <div className="mt-4">
                        <Label>Technologies Used</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {TECHNOLOGY_STACK.map(tech => (
                            <Badge
                              key={tech}
                              variant={item.technologies.includes(tech) ? 'default' : 'outline'}
                              className={`cursor-pointer ${item.technologies.includes(tech) ? 'bg-[#81004D] dark:bg-[#fe5182]' : ''}`}
                              onClick={() => {
                                const updatedTechs = item.technologies.includes(tech)
                                  ? item.technologies.filter((t: any) => t !== tech)
                                  : [...item.technologies, tech];
                                updatePortfolioItem(index, 'technologies', updatedTechs);
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>

              {currentStep < 4 ? (
                <Button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90"
                >
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <p className="text-md text-muted-foreground mt-5 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-[#81004D] dark:text-[#fe5182] font-medium hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default JobSeekerRegistration;