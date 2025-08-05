import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Check, Calendar, Edit, ChevronRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Progress } from "@/components/ui/progress";

export function UserProfile() {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading || user === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (user === null) {
    return null; 
  }
    
  // Calculate profile completion percentage
  const calculateCompletion = () => {
    const requiredFields = [
      user.firstName,
      user.lastName,
      user.email,
      user.location,
      user.professionalTitle,
      user.experienceLevel,
      user.hourlyRate?.min,
      user.hourlyRate?.max,
      user.professionalSummary,
      user.timezone,
      user.skills?.length > 0,
      user.languages?.length > 0
    ];

    const completedFields = requiredFields.filter(Boolean).length;
    return Math.round((completedFields / requiredFields.length) * 100);
  };

  const completionPercentage = calculateCompletion();
  const initials = `${user.firstName?.charAt(0) || ''}${user.lastName?.charAt(0) || ''}`;

  return (
    <div className="min-h-screen bg-white dark:bg-black p-4 py-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
      <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Profile Header with Completion */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#080106] dark:text-white">
              My <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Profile</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              Manage your professional identity
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg border border-[#e9e9e9] dark:border-[#81004d4f] shadow-sm">
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Profile Completion</p>
              <p className="font-medium text-[#81004D] dark:text-[#fe5182]">{completionPercentage}%</p>
            </div>
            <Progress value={completionPercentage} className="w-32 h-2 bg-gray-200 dark:bg-gray-700" />
            <Link href="/edit-profile/user">
              <Button 
                variant="outline" 
                size="sm"
                className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-[#e9e9e9] dark:border-[#81004d4f]"
              >
                <Edit className="w-4 h-4 mr-2 group-hover:text-[#fe5182]" />
                <span className="group-hover:text-[#fe5182]">Edit</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Summary */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24 border-2 border-[#81004D] dark:border-[#fe5182]">
                      <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                      <AvatarFallback className="bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white text-2xl">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    {user.isVerified && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border border-white">
                        <Check className="text-white w-3 h-3" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#080106] dark:text-white">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-lg text-[#81004D] dark:text-[#fe5182]">
                      {user.professionalTitle}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 text-[#81004D] dark:text-[#fe5182]" />
                    <span>{user.location}</span>
                  </div>

                  <div className="w-full pt-4 border-t border-[#e9e9e9] dark:border-[#81004d4f]">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Hourly Rate
                        </div>
                        <div className="text-lg font-bold text-[#81004D] dark:text-[#fe5182]">
                          ${user.hourlyRate?.min} - ${user.hourlyRate?.max}
                        </div>
                      </div>
                    </div>
                  </div>

                  {user.resume && (
                    <Button
                      variant="outline"
                      className="w-full group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">View Resume</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader className="px-6 py-4 border-b border-[#e9e9e9] dark:border-[#81004d4f]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#080106] dark:text-white">
                    Skills & Expertise
                  </h3>
                  <Link href="/edit-profile/user">
                    <Button variant="ghost" size="sm" className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {user.skills?.map((skill: any) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="text-sm font-medium border border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader className="px-6 py-4 border-b border-[#e9e9e9] dark:border-[#81004d4f]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#080106] dark:text-white">
                    Languages
                  </h3>
                  <Link href="/edit-profile/user">
                    <Button variant="ghost" size="sm" className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {user.languages?.map((language: any) => (
                    <div key={language.name} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">
                        {language.name}
                      </span>
                      <Badge 
                        variant="outline" 
                        className="text-xs border border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182]"
                      >
                        {language.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader className="px-6 py-4 border-b border-[#e9e9e9] dark:border-[#81004d4f]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#080106] dark:text-white">
                    About Me
                  </h3>
                  <Link href="/edit-profile/user">
                    <Button variant="ghost" size="sm" className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {user.professionalSummary || (
                    <span className="text-gray-500 dark:text-gray-400 italic">
                      No professional summary added yet
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>

            {/* Experience Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader className="px-6 py-4 border-b border-[#e9e9e9] dark:border-[#81004d4f]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#080106] dark:text-white">
                    Work Experience
                  </h3>
                  <Link href="/edit-profile/user">
                    <Button variant="ghost" size="sm" className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {user.experiences?.length > 0 ? (
                    user.experiences.map((exp: any) => (
                      <div key={`${exp.company}-${exp.position}`} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182] flex items-center justify-center text-white font-bold">
                            {exp.company?.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#080106] dark:text-white">
                            {exp.position}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {exp.company} • {exp.startDate} - {exp.endDate || 'Present'}
                          </p>
                          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            {exp.description?.map((desc: any, i: any) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {exp.technologies?.map((tech: any) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs border border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                      No work experience added yet
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader className="px-6 py-4 border-b border-[#e9e9e9] dark:border-[#81004d4f]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#080106] dark:text-white">
                    Education
                  </h3>
                  <Link href="/edit-profile/user">
                    <Button variant="ghost" size="sm" className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {user.education?.length > 0 ? (
                    user.education.map((edu: any) => (
                      <div key={`${edu.institution}-${edu.degree}`} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182] flex items-center justify-center text-white font-bold">
                            {edu.institution?.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#080106] dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {edu.institution}
                          </p>
                          {edu.fieldOfStudy && (
                            <p className="text-gray-600 dark:text-gray-400">
                              {edu.fieldOfStudy}
                            </p>
                          )}
                          <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                            {edu.startDate} - {edu.endDate || 'Present'}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                      No education added yet
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader className="px-6 py-4 border-b border-[#e9e9e9] dark:border-[#81004d4f]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#080106] dark:text-white">
                    Availability
                  </h3>
                  <Link href="/edit-profile/user">
                    <Button variant="ghost" size="sm" className="text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${user.availabilityForNewProjects
                      ? "bg-green-500"
                      : "bg-red-500"
                      }`}
                  ></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {user.availabilityForNewProjects
                      ? "Available for new projects"
                      : "Not currently available"}
                  </span>
                </div>
                <div className="mt-4 flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 text-[#81004D] dark:text-[#fe5182]" />
                  <span>Timezone: {user.timezone}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}