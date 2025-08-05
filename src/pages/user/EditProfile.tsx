import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth, getAuthToken } from "@/context/AuthContext";
import { baseUrl } from '@/config/api';
import { useLocation, Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Check, X, Plus, Upload, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Constants
const SKILL_CATEGORIES = ['Programming', 'Design', 'DevOps', 'Data', 'Other'];
const PROFICIENCY_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const EXPERIENCE_LEVELS = ['Entry', 'Intermediate', 'Senior', 'Expert'];
const LANGUAGE_PROFICIENCY = ['Native', 'Fluent', 'Intermediate', 'Basic'];
const TIMEZONES = [
  'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00',
  'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00',
  'UTC+00:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00',
  'UTC+05:30', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00',
  'UTC+11:00', 'UTC+12:00'
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location: string;
  professionalTitle: string;
  experienceLevel: string;
  hourlyRate: {
    min: number;
    max: number;
  };
  professionalSummary: string;
  timezone: string;
  skills: Array<{
    name: string;
    category: string;
    proficiency: string;
    yearsOfExperience: number;
  }>;
  languages: Array<{
    name: string;
    proficiency: string;
  }>;
  experiences: Array<{
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
    technologies: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate: string;
  }>;
  availabilityForNewProjects: boolean;
  avatar?: string;
  resume?: string;
}

export default function EditProfile() {
  const { user, updateUser } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState('basic');

  const { register, handleSubmit, control, setValue, watch, formState: { errors }, trigger } = useForm<FormData>({
    defaultValues: {
      ...user,
      hourlyRate: {
        min: user?.hourlyRate?.min || 0,
        max: user?.hourlyRate?.max || 0
      },
      skills: user?.skills || [],
      languages: user?.languages || [],
      experiences: user?.experiences || [],
      education: user?.education || []
    }
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name?.includes('hourlyRate')) {
        trigger(["hourlyRate.min", "hourlyRate.max"]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, trigger]);

  const calculateCompletion = () => {
    const formValues = watch();
    const requiredFields = [
      formValues.firstName,
      formValues.lastName,
      formValues.email,
      formValues.location,
      formValues.professionalTitle,
      formValues.experienceLevel,
      formValues.hourlyRate?.min,
      formValues.hourlyRate?.max,
      formValues.professionalSummary,
      formValues.timezone,
      formValues.skills?.length > 0,
      formValues.languages?.length > 0
    ];

    const completedFields = requiredFields.filter(Boolean).length;
    return Math.round((completedFields / requiredFields.length) * 100);
  };

  const completionPercentage = calculateCompletion();
  const initials = `${user?.firstName?.charAt(0) || ''}${user?.lastName?.charAt(0) || ''}`;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const cleanPayload = {
        ...data,
        hourlyRate: {
          min: Number(data.hourlyRate.min),
          max: Number(data.hourlyRate.max)
        },
        skills: data.skills?.filter(skill => skill.name && skill.category && skill.proficiency) || [],
        languages: data.languages?.filter(lang => lang.name && lang.proficiency) || [],
        experiences: data.experiences?.filter(exp => exp.position && exp.company) || [],
        education: data.education?.filter(edu => edu.degree && edu.institution) || []
      };

      const response = await fetch(`${baseUrl}/api/v1/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify(cleanPayload)
      });

      if (!response.ok) throw new Error("Failed to update profile");

      const result = await response.json();
      if (updateUser) await updateUser(result.data);

      toast({ title: "Profile Updated", description: "Your profile has been successfully updated." });
      navigate('/profile/user');
    } catch (error: any) {
      toast({
        title: "Update Failed",
        description: error.message || "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const addArrayItem = (field: string, defaultValue: any) => {
    const current = watch(field) || [];
    setValue(field as any, [...current, defaultValue]);
  };

  const removeArrayItem = (field: string, index: number) => {
    const current = watch(field);
    setValue(field as any, current.filter((_, i) => i !== index));
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading profile data...</div>;

  const sections = [
    { id: 'basic', title: 'Basic Information' },
    { id: 'about', title: 'About & Skills' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'availability', title: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#81004D]/10 to-[#fe5182]/10 p-4 py-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/profile/user')}
            className="group text-[#81004D] dark:text-[#fe5182] hover:bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Profile
          </Button>
          <div className="flex items-center gap-4 bg-white dark:bg-gray-900 p-3 rounded-lg border-2 border-[#e9e9e9] dark:border-[#81004d4f]">
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-300">Profile Completion</p>
              <p className="font-medium text-[#81004D] dark:text-[#fe5182]">{completionPercentage}%</p>
            </div>
            <Progress value={completionPercentage} className="w-32 h-2 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Navigation */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between px-4 py-2 text-sm rounded-md transition-colors ${
                        activeSection === section.id 
                          ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10'
                      }`}
                    >
                      <span>{section.title}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Basic Information Section */}
              {activeSection === 'basic' && (
                <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] mb-6">
                  <CardHeader>
                    <CardTitle className="text-[#080106] dark:text-white">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <Avatar className="w-24 h-24 border-2 border-[#81004D] dark:border-[#fe5182]">
                          <AvatarImage src={watch('avatar')} alt={`${watch('firstName')} ${watch('lastName')}`} />
                          <AvatarFallback className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white text-2xl">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                        <label className="absolute -bottom-2 right-0 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md cursor-pointer hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                          <Upload className="w-4 h-4 text-[#81004D] dark:text-[#fe5182]" />
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: 'firstName', label: 'First Name *', required: true },
                        { id: 'lastName', label: 'Last Name *', required: true },
                        { id: 'email', label: 'Email *', required: true, type: 'email' },
                        { id: 'phone', label: 'Phone' },
                        { id: 'location', label: 'Location *', required: true },
                        { id: 'professionalTitle', label: 'Professional Title *', required: true }
                      ].map((field) => (
                        <div key={field.id}>
                          <Label htmlFor={field.id}>{field.label}</Label>
                          <Input
                            id={field.id}
                            type={field.type || 'text'}
                            {...register(field.id as any, { required: field.required && `${field.label.replace(' *', '')} is required` })}
                            className={`${errors[field.id as keyof FormData] ? 'border-red-500' : ''}`}
                          />
                          {errors[field.id as keyof FormData] && (
                            <p className="text-sm text-red-500 mt-1">{errors[field.id as keyof FormData]?.message}</p>
                          )}
                        </div>
                      ))}

                      <div>
                        <Label htmlFor="experienceLevel">Experience Level *</Label>
                        <Select
                          onValueChange={(value) => setValue("experienceLevel", value)}
                          value={watch("experienceLevel")}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {EXPERIENCE_LEVELS.map(level => (
                              <SelectItem key={level} value={level}>{level}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="timezone">Timezone *</Label>
                        <Select
                          onValueChange={(value) => setValue("timezone", value)}
                          value={watch("timezone")}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIMEZONES.map(tz => (
                              <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="hourlyRateMin">Minimum Hourly Rate ($)</Label>
                        <Input
                          id="hourlyRateMin"
                          type="number"
                          min="0"
                          {...register("hourlyRate.min", {
                            required: "Minimum rate is required",
                            valueAsNumber: true,
                            validate: {
                              positive: v => v >= 0 || "Rate must be positive",
                              lessThanMax: v => v <= watch("hourlyRate.max") || "Must be ≤ maximum rate"
                            }
                          })}
                        />
                        {errors.hourlyRate?.min && (
                          <p className="text-sm text-red-500 mt-1">{errors.hourlyRate.min.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="hourlyRateMax">Maximum Hourly Rate ($)</Label>
                        <Input
                          id="hourlyRateMax"
                          type="number"
                          min="0"
                          {...register("hourlyRate.max", {
                            required: "Maximum rate is required",
                            valueAsNumber: true,
                            validate: {
                              positive: v => v >= 0 || "Rate must be positive",
                              greaterThanMin: v => v >= watch("hourlyRate.min") || "Must be ≥ minimum rate"
                            }
                          })}
                        />
                        {errors.hourlyRate?.max && (
                          <p className="text-sm text-red-500 mt-1">{errors.hourlyRate.max.message}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* About & Skills Section */}
              {activeSection === 'about' && (
                <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] mb-6">
                  <CardHeader>
                    <CardTitle className="text-[#080106] dark:text-white">About & Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="professionalSummary">Professional Summary *</Label>
                      <Textarea
                        id="professionalSummary"
                        rows={5}
                        {...register("professionalSummary", { required: "Professional summary is required" })}
                        className={`${errors.professionalSummary ? 'border-red-500' : ''}`}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <Label>Skills *</Label>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          onClick={() => addArrayItem('skills', { name: '', category: '', proficiency: '', yearsOfExperience: 0 })}
                          className="group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        >
                          <Plus className="w-4 h-4 mr-1 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                          <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">Add Skill</span>
                        </Button>
                      </div>
                      {watch("skills")?.map((_, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg relative group">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                            onClick={() => removeArrayItem('skills', index)}
                          >
                            <X className="w-3 h-3 text-[#81004D] dark:text-[#fe5182]" />
                          </Button>
                          <div>
                            <Label>Skill Name</Label>
                            <Input {...register(`skills.${index}.name`)} />
                          </div>
                          <div>
                            <Label>Category</Label>
                            <Select
                              onValueChange={(value) => setValue(`skills.${index}.category`, value)}
                              value={watch(`skills.${index}.category`)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {SKILL_CATEGORIES.map(cat => (
                                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Proficiency</Label>
                            <Select
                              onValueChange={(value) => setValue(`skills.${index}.proficiency`, value)}
                              value={watch(`skills.${index}.proficiency`)}
                            >
                              <SelectTrigger>
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
                            <Label>Years of Experience</Label>
                            <Input
                              type="number"
                              {...register(`skills.${index}.yearsOfExperience`, { valueAsNumber: true })}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <Label>Languages *</Label>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          onClick={() => addArrayItem('languages', { name: '', proficiency: '' })}
                          className="group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                        >
                          <Plus className="w-4 h-4 mr-1 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                          <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">Add Language</span>
                        </Button>
                      </div>
                      {watch("languages")?.map((_, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg relative group">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                            onClick={() => removeArrayItem('languages', index)}
                          >
                            <X className="w-3 h-3 text-[#81004D] dark:text-[#fe5182]" />
                          </Button>
                          <div>
                            <Label>Language</Label>
                            <Input {...register(`languages.${index}.name`)} />
                          </div>
                          <div>
                            <Label>Proficiency</Label>
                            <Select
                              onValueChange={(value) => setValue(`languages.${index}.proficiency`, value)}
                              value={watch(`languages.${index}.proficiency`)}
                            >
                              <SelectTrigger>
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
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] mb-6">
                  <CardHeader>
                    <CardTitle className="text-[#080106] dark:text-white">Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-end mb-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={() => addArrayItem('experiences', {
                          position: '',
                          company: '',
                          startDate: '',
                          endDate: '',
                          description: [''],
                          technologies: []
                        })}
                        className="group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                      >
                        <Plus className="w-4 h-4 mr-1 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                        <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">Add Experience</span>
                      </Button>
                    </div>
                    {watch("experiences")?.map((_, index) => (
                      <div key={index} className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg p-4 relative group">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                          onClick={() => removeArrayItem('experiences', index)}
                        >
                          <X className="w-3 h-3 text-[#81004D] dark:text-[#fe5182]" />
                        </Button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {[
                            { id: `exp-position-${index}`, label: 'Position *', field: 'position' },
                            { id: `exp-company-${index}`, label: 'Company *', field: 'company' },
                            { id: `exp-start-${index}`, label: 'Start Date *', field: 'startDate', type: 'date' },
                            { id: `exp-end-${index}`, label: 'End Date *', field: 'endDate', type: 'date' }
                          ].map((item) => (
                            <div key={item.id}>
                              <Label htmlFor={item.id}>{item.label}</Label>
                              <Input
                                id={item.id}
                                type={item.type || 'text'}
                                {...register(`experiences.${index}.${item.field}` as any, { required: `${item.label.replace(' *', '')} is required` })}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mb-4">
                          <Label>Description</Label>
                          <Textarea
                            {...register(`experiences.${index}.description.0`)}
                            placeholder="Describe your responsibilities and achievements"
                            rows={3}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Education Section */}
              {activeSection === 'education' && (
                <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] mb-6">
                  <CardHeader>
                    <CardTitle className="text-[#080106] dark:text-white">Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-end mb-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={() => addArrayItem('education', {
                          degree: '',
                          institution: '',
                          fieldOfStudy: '',
                          startDate: '',
                          endDate: ''
                        })}
                        className="group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                      >
                        <Plus className="w-4 h-4 mr-1 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                        <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">Add Education</span>
                      </Button>
                    </div>
                    {watch("education")?.map((_, index) => (
                      <div key={index} className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg p-4 relative group">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 p-1 h-6 w-6 hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                          onClick={() => removeArrayItem('education', index)}
                        >
                          <X className="w-3 h-3 text-[#81004D] dark:text-[#fe5182]" />
                        </Button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {[
                            { id: `edu-degree-${index}`, label: 'Degree *', field: 'degree' },
                            { id: `edu-institution-${index}`, label: 'Institution *', field: 'institution' },
                            { id: `edu-field-${index}`, label: 'Field of Study', field: 'fieldOfStudy' }
                          ].map((item) => (
                            <div key={item.id}>
                              <Label htmlFor={item.id}>{item.label}</Label>
                              <Input
                                id={item.id}
                                {...register(`education.${index}.${item.field}` as any, { required: item.label.includes('*') && `${item.label.replace(' *', '')} is required` })}
                              />
                            </div>
                          ))}
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor={`edu-start-${index}`}>Start Date *</Label>
                              <Input
                                id={`edu-start-${index}`}
                                type="date"
                                {...register(`education.${index}.startDate` as any, { required: "Start date is required" })}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`edu-end-${index}`}>End Date *</Label>
                              <Input
                                id={`edu-end-${index}`}
                                type="date"
                                {...register(`education.${index}.endDate` as any, { required: "End date is required" })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Availability Section */}
              {activeSection === 'availability' && (
                <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] mb-6">
                  <CardHeader>
                    <CardTitle className="text-[#080106] dark:text-white">Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Availability for New Projects</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        {[
                          { value: true, label: 'Available' },
                          { value: false, label: 'Not Available' }
                        ].map((option) => (
                          <label key={option.label} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              checked={watch("availabilityForNewProjects") === option.value}
                              onChange={() => setValue("availabilityForNewProjects", option.value)}
                              className="h-4 w-4 text-[#81004D] dark:text-[#fe5182] focus:ring-[#81004D] dark:focus:ring-[#fe5182]"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Resume</Label>
                      <div className="mt-2">
                        {watch("resume") ? (
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Current resume: {watch("resume").split('/').pop()}
                            </span>
                            <Button variant="outline" size="sm" type="button">
                              Change Resume
                            </Button>
                          </div>
                        ) : (
                          <Button variant="outline" size="sm" type="button">
                            Upload Resume
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white hover:shadow-lg hover:shadow-[#fe5182]/25"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}