import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Briefcase, Calendar, Clock, Check, AlertCircle, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

function JobSeekerDashboard() {
  const { user, isLoading } = useAuth();

  if (isLoading || !user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading dashboard...</p>
      </div>
    );
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

  // Mock data - replace with real data from your backend
  const stats = {
    applications: 12,
    interviews: 3,
    offers: 1,
    profileViews: 47
  };

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      match: 92,
      skills: ["React", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "InnovateSoft",
      location: "New York, NY",
      match: 87,
      skills: ["JavaScript", "Python", "AWS"]
    },
    {
      id: 3,
      title: "Frontend Architect",
      company: "DigitalSolutions",
      location: "San Francisco, CA",
      match: 85,
      skills: ["React", "GraphQL", "Design Systems"]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      type: "interview",
      title: "Technical Interview with TechCorp",
      date: "2023-11-15",
      time: "14:00"
    },
    {
      id: 2,
      type: "meeting",
      title: "Career Coaching Session",
      date: "2023-11-16",
      time: "10:30"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black p-4 py-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
      <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#080106] dark:text-white">
              Welcome back, <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">{user.firstName}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              Here's your job search at a glance
            </p>
          </div>
          
          <Link href="/profile">
            <Button 
              variant="outline" 
              className="group bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border border-[#e9e9e9] dark:border-[#81004d4f]"
            >
              <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">View Full Profile</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Completion Card */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl text-[#080106] dark:text-white">
                  Profile Completeness
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {completionPercentage < 80 ? (
                    <span className="flex items-center text-yellow-600 dark:text-yellow-400">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Complete your profile to increase visibility
                    </span>
                  ) : (
                    <span className="flex items-center text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4 mr-1" />
                      Great job! Your profile looks strong
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={completionPercentage} className="h-3 bg-gray-200 dark:bg-gray-700" />
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#81004D] dark:text-[#fe5182]">
                      {completionPercentage}% Complete
                    </span>
                    {completionPercentage < 100 && (
                      <Link href="/profile/edit" className="text-sm font-medium text-[#81004D] dark:text-[#fe5182] hover:underline">
                        Complete Profile
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#81004D] dark:text-[#fe5182]">
                      {stats.applications}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Applications
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#81004D] dark:text-[#fe5182]">
                      {stats.interviews}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Interviews
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#81004D] dark:text-[#fe5182]">
                      {stats.offers}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Offers
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-bold text-[#81004D] dark:text-[#fe5182]">
                      {stats.profileViews}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Profile Views
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recommended Jobs */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl text-[#080106] dark:text-white">
                  Recommended Jobs
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Based on your skills and experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedJobs.map((job) => (
                    <div key={job.id} className="p-4 border border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg hover:bg-[#81004D]/5 dark:hover:bg-[#fe5182]/5 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-[#080106] dark:text-white">{job.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{job.company} • {job.location}</p>
                        </div>
                        <Badge variant="outline" className="border border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182]">
                          {job.match}% Match
                        </Badge>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline"
                            className="text-xs border border-[#81004D] dark:border-[#fe5182] text-[#81004D] dark:text-[#fe5182] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                      >
                        <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skill Strength */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl text-[#080106] dark:text-white">
                  Your Top Skills
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Based on your profile and endorsements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.skills?.slice(0, 5).map((skill: any) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.proficiency}
                        </span>
                      </div>
                      <Progress 
                        value={
                          skill.proficiency === 'Beginner' ? 25 :
                          skill.proficiency === 'Intermediate' ? 50 :
                          skill.proficiency === 'Advanced' ? 75 : 100
                        } 
                        className="h-2 bg-gray-200 dark:bg-gray-700" 
                      />
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-full group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                >
                  <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">View All Skills</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl text-[#080106] dark:text-white">
                  Upcoming Events
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Interviews and important dates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-3 border border-[#e9e9e9] dark:border-[#81004d4f] rounded-lg">
                      <div className="p-2 rounded-full bg-[#81004D]/10 dark:bg-[#fe5182]/10 text-[#81004D] dark:text-[#fe5182]">
                        {event.type === 'interview' ? (
                          <Briefcase className="w-5 h-5" />
                        ) : (
                          <Calendar className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-full group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                >
                  <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">View Calendar</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                </Button>
              </CardContent>
            </Card>

            {/* Profile Tips */}
            <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl text-[#080106] dark:text-white">
                  Profile Tips
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Boost your profile visibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#81004D]/10 dark:bg-[#fe5182]/10 text-[#81004D] dark:text-[#fe5182]">
                      <Star className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Add a professional profile photo to get 14x more profile views
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#81004D]/10 dark:bg-[#fe5182]/10 text-[#81004D] dark:text-[#fe5182]">
                      <Star className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Complete all profile sections to appear in more searches
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#81004D]/10 dark:bg-[#fe5182]/10 text-[#81004D] dark:text-[#fe5182]">
                      <Star className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      List at least 5 key skills to match with relevant jobs
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-full group border border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-[#81004D]/10 dark:hover:bg-[#fe5182]/10"
                >
                  <span className="group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]">Get More Tips</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:text-[#81004D] dark:group-hover:text-[#fe5182]" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard 