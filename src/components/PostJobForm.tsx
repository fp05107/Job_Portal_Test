import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X, ChevronDown, ChevronUp } from "lucide-react";
import { TECHNOLOGY_STACK } from "@/config/user.config";
import { EMPLOYMENT_TYPES, EXPERIENCE_LEVELS, JOB_TYPES, URGENCY_LEVELS } from "@/config/job.config";


// Define form schema using Zod
const jobFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(200),
  description: z.string().min(50, "Description must be at least 50 characters").max(10000),
  shortDescription: z.string().max(500).optional(),
  jobType: z.enum(JOB_TYPES),
  employmentType: z.enum(EMPLOYMENT_TYPES),
  experienceLevel: z.enum(EXPERIENCE_LEVELS),
  category: z.string().min(1, "Category is required"),
  requiredTechnologies: z.array(z.string()).min(1, "At least one technology is required"),
  preferredTechnologies: z.array(z.string()).optional(),
  skillsRequired: z.array(z.string()).min(1, "At least one skill is required"),
  skillsPreferred: z.array(z.string()).optional(),
  location: z.object({
    country: z.string().min(1, "Country is required"),
    city: z.string().optional(),
    state: z.string().optional(),
    timezone: z.string().optional(),
    isRemote: z.boolean(),
  }),
  compensation: z.object({
    type: z.enum(["Hourly", "Fixed", "Salary"]),
    currency: z.string().length(3),
    amount: z.object({
      min: z.number().min(0).optional(),
      max: z.number().min(0).optional(),
    }).optional(),
    fixedAmount: z.number().min(0).optional(),
    isNegotiable: z.boolean(),
  }),
  projectDuration: z.string().optional(),
  startDate: z.date().optional(),
  urgency: z.enum(URGENCY_LEVELS),
  requirements: z.array(z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    isRequired: z.boolean(),
  })).optional(),
  responsibilities: z.array(z.string()).min(1, "At least one responsibility is required"),
  qualifications: z.array(z.string()).optional(),
  benefits: z.array(z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
  })).optional(),
  applicationInstructions: z.string().optional(),
  applicationQuestions: z.array(z.object({
    question: z.string().min(1, "Question is required"),
    type: z.enum(["text", "textarea", "select", "multiselect", "boolean", "file"]),
    options: z.array(z.string()).optional(),
    isRequired: z.boolean(),
    maxLength: z.number().optional(),
  })).optional(),
  applicationDeadline: z.date().optional(),
  isPublic: z.boolean(),
  targetCountries: z.array(z.string()).optional(),
  targetTimezones: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  seoKeywords: z.array(z.string()).optional(),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

const defaultValues: Partial<JobFormValues> = {
  jobType: "Full-time",
  employmentType: "Remote",
  experienceLevel: "Intermediate",
  urgency: "Medium",
  requiredTechnologies: [],
  preferredTechnologies: [],
  skillsRequired: [],
  skillsPreferred: [],
  location: {
    country: "",
    isRemote: true,
  },
  compensation: {
    type: "Salary",
    currency: "USD",
    isNegotiable: false,
  },
  responsibilities: [],
  isPublic: true,
};

function PostJobForm() {
  const [activeSection, setActiveSection] = useState<string>("basic");
  const [techInput, setTechInput] = useState<string>("");
  const [skillInput, setSkillInput] = useState<string>("");
  const [tagInput, setTagInput] = useState<string>("");

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues,
  });

  const { watch, setValue, getValues } = form;
  const compensationType = watch("compensation.type");
  const isRemote = watch("location.isRemote");

  const sections = [
    { id: "basic", title: "Basic Information" },
    { id: "details", title: "Job Details" },
    { id: "requirements", title: "Requirements" },
    { id: "application", title: "Application Process" },
    { id: "preferences", title: "Preferences" },
  ];

  const handleAddTechnology = (type: "required" | "preferred") => {
    if (!techInput.trim()) return;
    const field = type === "required" ? "requiredTechnologies" : "preferredTechnologies";
    const current = getValues(field) || [];
    if (!current.includes(techInput)) {
      setValue(field, [...current, techInput]);
    }
    setTechInput("");
  };

  const handleRemoveTechnology = (tech: string, type: "required" | "preferred") => {
    const field = type === "required" ? "requiredTechnologies" : "preferredTechnologies";
    const current = getValues(field) || [];
    setValue(field, current.filter(t => t !== tech));
  };

  const handleAddSkill = (type: "required" | "preferred") => {
    if (!skillInput.trim()) return;
    const field = type === "required" ? "skillsRequired" : "skillsPreferred";
    const current = getValues(field) || [];
    if (!current.includes(skillInput)) {
      setValue(field, [...current, skillInput]);
    }
    setSkillInput("");
  };

  const handleRemoveSkill = (skill: string, type: "required" | "preferred") => {
    const field = type === "required" ? "skillsRequired" : "skillsPreferred";
    const current = getValues(field) || [];
    setValue(field, current.filter(s => s !== skill));
  };

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    const current = getValues("tags") || [];
    if (!current.includes(tagInput)) {
      setValue("tags", [...current, tagInput]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (tag: string) => {
    const current = getValues("tags") || [];
    setValue("tags", current.filter(t => t !== tag));
  };

  const onSubmit = (data: JobFormValues) => {
    console.log("Job form submitted:", data);
    // Handle form submission (API call, etc.)
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Card className="border border-slate-200 dark:border-slate-700">
        <CardHeader className="border-b border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Post a New Job
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Fill out the form below to create a new job listing.
          </p>
        </CardHeader>

        <CardContent className="p-6">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
                className="rounded-full"
              >
                {section.title}
              </Button>
            ))}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information Section */}
              {activeSection === "basic" && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Senior Frontend Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Brief summary of the job (appears in listings)"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Detailed description of the job, responsibilities, and company"
                            rows={8}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="jobType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select job type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {JOB_TYPES.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="employmentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employment Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select employment type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {EMPLOYMENT_TYPES.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Job Details Section */}
              {activeSection === "details" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="experienceLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {EXPERIENCE_LEVELS.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Category *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Software Development" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <FormLabel>Required Technologies *</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-3">
                        {watch("requiredTechnologies")?.map((tech) => (
                          <Badge key={tech} variant="secondary" className="flex items-center">
                            {tech}
                            <button
                              type="button"
                              onClick={() => handleRemoveTechnology(tech, "required")}
                              className="ml-2"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add required technology"
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                          list="technologies"
                        />
                        <datalist id="technologies">
                          {TECHNOLOGY_STACK.map((tech) => (
                            <option key={tech} value={tech} />
                          ))}
                        </datalist>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddTechnology("required")}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                      {form.formState.errors.requiredTechnologies && (
                        <p className="text-sm font-medium text-destructive mt-1">
                          {form.formState.errors.requiredTechnologies.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <FormLabel>Preferred Technologies</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-3">
                        {watch("preferredTechnologies")?.map((tech) => (
                          <Badge key={tech} variant="outline" className="flex items-center">
                            {tech}
                            <button
                              type="button"
                              onClick={() => handleRemoveTechnology(tech, "preferred")}
                              className="ml-2"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add preferred technology"
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                          list="technologies"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddTechnology("preferred")}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <FormLabel>Required Skills *</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-3">
                        {watch("skillsRequired")?.map((skill) => (
                          <Badge key={skill} variant="secondary" className="flex items-center">
                            {skill}
                            <button
                              type="button"
                              onClick={() => handleRemoveSkill(skill, "required")}
                              className="ml-2"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add required skill"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddSkill("required")}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                      {form.formState.errors.skillsRequired && (
                        <p className="text-sm font-medium text-destructive mt-1">
                          {form.formState.errors.skillsRequired.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <FormLabel>Preferred Skills</FormLabel>
                      <div className="flex flex-wrap gap-2 mt-2 mb-3">
                        {watch("skillsPreferred")?.map((skill) => (
                          <Badge key={skill} variant="outline" className="flex items-center">
                            {skill}
                            <button
                              type="button"
                              onClick={() => handleRemoveSkill(skill, "preferred")}
                              className="ml-2"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add preferred skill"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddSkill("preferred")}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Requirements Section */}
              {activeSection === "requirements" && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <FormLabel>Responsibilities *</FormLabel>
                    {watch("responsibilities")?.map((resp, index) => (
                      <div key={index} className="flex gap-2 items-start">
                        <FormControl>
                          <Input
                            value={resp}
                            onChange={(e) => {
                              const newResponsibilities = [...watch("responsibilities")];
                              newResponsibilities[index] = e.target.value;
                              setValue("responsibilities", newResponsibilities);
                            }}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newResponsibilities = [...watch("responsibilities")];
                            newResponsibilities.splice(index, 1);
                            setValue("responsibilities", newResponsibilities);
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setValue("responsibilities", [...watch("responsibilities"), ""]);
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Responsibility
                    </Button>
                    {form.formState.errors.responsibilities && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.responsibilities.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <FormLabel>Qualifications</FormLabel>
                    {watch("qualifications")?.map((qual, index) => (
                      <div key={index} className="flex gap-2 items-start">
                        <FormControl>
                          <Input
                            value={qual}
                            onChange={(e) => {
                              const newQualifications = [...watch("qualifications") || []];
                              newQualifications[index] = e.target.value;
                              setValue("qualifications", newQualifications);
                            }}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newQualifications = [...watch("qualifications") || []];
                            newQualifications.splice(index, 1);
                            setValue("qualifications", newQualifications);
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setValue("qualifications", [...(watch("qualifications") || []), ""]);
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Qualification
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <FormLabel>Benefits</FormLabel>
                    {watch("benefits")?.map((benefit, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex gap-2 items-start">
                          <FormControl>
                            <Input
                              placeholder="Benefit title"
                              value={benefit.title}
                              onChange={(e) => {
                                const newBenefits = [...watch("benefits") || []];
                                newBenefits[index] = {
                                  ...newBenefits[index],
                                  title: e.target.value,
                                };
                                setValue("benefits", newBenefits);
                              }}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const newBenefits = [...watch("benefits") || []];
                              newBenefits.splice(index, 1);
                              setValue("benefits", newBenefits);
                            }}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="Benefit description (optional)"
                            value={benefit.description || ""}
                            onChange={(e) => {
                              const newBenefits = [...watch("benefits") || []];
                              newBenefits[index] = {
                                ...newBenefits[index],
                                description: e.target.value,
                              };
                              setValue("benefits", newBenefits);
                            }}
                            rows={2}
                          />
                        </FormControl>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setValue("benefits", [
                          ...(watch("benefits") || []),
                          { title: "", description: "" },
                        ]);
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Benefit
                    </Button>
                  </div>
                </div>
              )}

              {/* Application Process Section */}
              {activeSection === "application" && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="applicationInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Application Instructions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Special instructions for applicants"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <FormLabel>Application Questions</FormLabel>
                    {watch("applicationQuestions")?.map((question, index) => (
                      <Card key={index} className="border border-slate-200 dark:border-slate-700">
                        <CardContent className="p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Question {index + 1}</h4>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const newQuestions = [...watch("applicationQuestions") || []];
                                newQuestions.splice(index, 1);
                                setValue("applicationQuestions", newQuestions);
                              }}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>

                          <FormControl>
                            <Input
                              placeholder="Question text"
                              value={question.question}
                              onChange={(e) => {
                                const newQuestions = [...watch("applicationQuestions") || []];
                                newQuestions[index] = {
                                  ...newQuestions[index],
                                  question: e.target.value,
                                };
                                setValue("applicationQuestions", newQuestions);
                              }}
                            />
                          </FormControl>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Select
                              value={question.type}
                              onValueChange={(value) => {
                                const newQuestions = [...watch("applicationQuestions") || []];
                                newQuestions[index] = {
                                  ...newQuestions[index],
                                  type: value as any,
                                };
                                setValue("applicationQuestions", newQuestions);
                              }}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select question type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="text">Short Text</SelectItem>
                                <SelectItem value="textarea">Long Text</SelectItem>
                                <SelectItem value="select">Single Select</SelectItem>
                                <SelectItem value="multiselect">Multi Select</SelectItem>
                                <SelectItem value="boolean">Yes/No</SelectItem>
                                <SelectItem value="file">File Upload</SelectItem>
                              </SelectContent>
                            </Select>

                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={`required-${index}`}
                                checked={question.isRequired}
                                onChange={(e) => {
                                  const newQuestions = [...watch("applicationQuestions") || []];
                                  newQuestions[index] = {
                                    ...newQuestions[index],
                                    isRequired: e.target.checked,
                                  };
                                  setValue("applicationQuestions", newQuestions);
                                }}
                                className="h-4 w-4"
                              />
                              <label htmlFor={`required-${index}`} className="text-sm">
                                Required
                              </label>
                            </div>
                          </div>

                          {(question.type === "select" || question.type === "multiselect") && (
                            <div className="space-y-2">
                              <FormLabel>Options</FormLabel>
                              {question.options?.map((option, optIndex) => (
                                <div key={optIndex} className="flex gap-2 items-center">
                                  <Input
                                    value={option}
                                    onChange={(e) => {
                                      const newQuestions = [...watch("applicationQuestions") || []];
                                      const newOptions = [...(newQuestions[index].options || [])];
                                      newOptions[optIndex] = e.target.value;
                                      newQuestions[index] = {
                                        ...newQuestions[index],
                                        options: newOptions,
                                      };
                                      setValue("applicationQuestions", newQuestions);
                                    }}
                                  />
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      const newQuestions = [...watch("applicationQuestions") || []];
                                      const newOptions = [...(newQuestions[index].options || [])];
                                      newOptions.splice(optIndex, 1);
                                      newQuestions[index] = {
                                        ...newQuestions[index],
                                        options: newOptions,
                                      };
                                      setValue("applicationQuestions", newQuestions);
                                    }}
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const newQuestions = [...watch("applicationQuestions") || []];
                                  const newOptions = [...(newQuestions[index].options || []), ""];
                                  newQuestions[index] = {
                                    ...newQuestions[index],
                                    options: newOptions,
                                  };
                                  setValue("applicationQuestions", newQuestions);
                                }}
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Option
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setValue("applicationQuestions", [
                          ...(watch("applicationQuestions") || []),
                          {
                            question: "",
                            type: "text",
                            isRequired: false,
                          },
                        ]);
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Question
                    </Button>
                  </div>
                </div>
              )}

              {/* Preferences Section */}
              {activeSection === "preferences" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Urgency Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select urgency level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {URGENCY_LEVELS.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="applicationDeadline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Application Deadline</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              min={new Date().toISOString().split("T")[0]}
                              onChange={(e) => field.onChange(new Date(e.target.value))}
                              value={field.value ? field.value.toISOString().split("T")[0] : ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FormLabel>Location</FormLabel>
                      <div className="space-y-4 mt-2">
                        <FormField
                          control={form.control}
                          name="location.country"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Country *" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location.city"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="City" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location.state"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="State/Region" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location.timezone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Timezone (e.g. UTC+5:30)" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location.isRemote"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={field.onChange}
                                  className="h-4 w-4"
                                />
                              </FormControl>
                              <FormLabel className="!mt-0">This is a remote position</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <FormLabel>Compensation</FormLabel>
                      <div className="space-y-4 mt-2">
                        <FormField
                          control={form.control}
                          name="compensation.type"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select compensation type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Hourly">Hourly Rate</SelectItem>
                                  <SelectItem value="Fixed">Fixed Price</SelectItem>
                                  <SelectItem value="Salary">Salary</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="compensation.currency"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Currency (e.g. USD)" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {compensationType === "Hourly" || compensationType === "Salary" ? (
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="compensation.amount.min"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="Min amount"
                                      {...field}
                                      value={field.value || ""}
                                      onChange={(e) =>
                                        field.onChange(e.target.value ? Number(e.target.value) : "")
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="compensation.amount.max"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="Max amount"
                                      {...field}
                                      value={field.value || ""}
                                      onChange={(e) =>
                                        field.onChange(e.target.value ? Number(e.target.value) : "")
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        ) : (
                          <FormField
                            control={form.control}
                            name="compensation.fixedAmount"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="Fixed amount"
                                    {...field}
                                    value={field.value || ""}
                                    onChange={(e) =>
                                      field.onChange(e.target.value ? Number(e.target.value) : "")
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}

                        <FormField
                          control={form.control}
                          name="compensation.isNegotiable"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={field.onChange}
                                  className="h-4 w-4"
                                />
                              </FormControl>
                              <FormLabel className="!mt-0">Compensation is negotiable</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <FormLabel>Tags</FormLabel>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      {watch("tags")?.map((tag) => (
                        <Badge key={tag} variant="outline" className="flex items-center">
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-2"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add tag"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleAddTag}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="isPublic"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Make this job public</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  disabled={activeSection === "basic"}
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                >
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {activeSection !== "preferences" ? (
                  <Button
                    type="button"
                    onClick={() => {
                      const currentIndex = sections.findIndex(s => s.id === activeSection);
                      if (currentIndex < sections.length - 1) {
                        setActiveSection(sections[currentIndex + 1].id);
                      }
                    }}
                  >
                    Next
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Post Job
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostJobForm