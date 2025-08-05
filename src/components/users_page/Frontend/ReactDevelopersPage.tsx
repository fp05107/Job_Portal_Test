import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Verified } from "lucide-react";

// Sample React developer profiles
const reactDevelopers = [
  {
    id: 1,
    name: "Arjun Krishnan",
    title: "Senior React Developer",
    avatar: "https://www.flexjobs.com/blog/wp-content/uploads/2020/09/30064933/successful-remote-workers.png",
    location: "Bangalore, India",
    hourlyRate: "$65/hr",
    rating: 4.9,
    totalReviews: 127,
    skills: ["React", "Next.js", "TypeScript", "Redux", "GraphQL"],
    bio: "8+ years building React applications. Expert in component architecture and performance optimization.",
    verified: true,
    availability: "Full-time",
    previousCompany: "Microsoft",
    experience: "12 years",
    projects: "50+",
    englishLevel: "Fluent"
  },
  {
    id: 2,
    name: "Vikram Singh",
    title: "Full Stack React Developer",
    avatar: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    location: "Hyderabad, India",
    hourlyRate: "$72/hr",
    rating: 4.9,
    totalReviews: 95,
    skills: ["React", "Node.js", "TypeScript", "AWS", "Serverless"],
    bio: "Specializes in building scalable React applications with serverless backends.",
    verified: true,
    availability: "Full-time",
    previousCompany: "Amazon",
    experience: "9 years",
    projects: "45+",
    englishLevel: "Native"
  },
  {
    id: 3,
    name: "Priya Nair",
    title: "React Native Specialist",
    avatar: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    location: "Mumbai, India",
    hourlyRate: "$58/hr",
    rating: 4.8,
    totalReviews: 89,
    skills: ["React Native", "Expo", "TypeScript", "Firebase", "Jest"],
    bio: "Built 15+ production React Native apps with over 1M downloads each.",
    verified: true,
    availability: "Part-time",
    previousCompany: "Uber",
    experience: "7 years",
    projects: "30+",
    englishLevel: "Fluent"
  },
  // {
  //   id: 4,
  //   name: "Neha Patel",
  //   title: "React UI/UX Expert",
  //   avatar: "https://img.freepik.com/free-photo/smiley-teacher-classroom_23-2151696480.jpg?semt=ais_hybrid&w=740",
  //   location: "Delhi, India",
  //   hourlyRate: "$60/hr",
  //   rating: 4.7,
  //   totalReviews: 64,
  //   skills: ["React", "Figma", "CSS-in-JS", "Design Systems", "Animation"],
  //   bio: "Bridges design and development with pixel-perfect React implementations.",
  //   verified: true,
  //   availability: "Full-time",
  //   previousCompany: "Adobe",
  //   experience: "6 years",
  //   projects: "35+",
  //   englishLevel: "Fluent"
  // },
];

// Filter options
const filters = {
  availability: ["All", "Full-time", "Part-time"],
  experience: ["All", "1-3 years", "3-5 years", "5+ years"],
  englishLevel: ["All", "Basic", "Fluent", "Native"]
};

export default function ReactDevelopersPage() {
  const [activeFilter, setActiveFilter] = useState({
    availability: "All",
    experience: "All",
    englishLevel: "All"
  });

  const filteredDevelopers = reactDevelopers.filter(dev => {
    return (
      (activeFilter.availability === "All" || dev.availability === activeFilter.availability) &&
      (activeFilter.experience === "All" || 
        (activeFilter.experience === "1-3 years" && dev.experience.includes("1-3")) ||
        (activeFilter.experience === "3-5 years" && dev.experience.includes("3-5")) ||
        (activeFilter.experience === "5+ years" && parseInt(dev.experience) >= 5)
      ) &&
      (activeFilter.englishLevel === "All" || dev.englishLevel === activeFilter.englishLevel)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl text-center md:text-5xl/[4.7rem] font-bold text-slate-900 dark:text-slate-100 mb-4">
                Hire Top <span className="text-transparent bg-clip-text vio-org-grad">React.js</span> Developers
              </h1>
              <p className="text-xl text-gray-300 text-center mb-8">
                Pre-vetted React experts with proven track records. Hire in 48 hours.
              </p>
              <div className="flex gap-4">
                <Button className="vio-org-grad text-[1.1rem] py-7 rounded-full px-8">
                  Hire React Developers
                </Button>
                <Button variant="outline" className="border border-white bg-transparent text-white text-[1.1rem] py-7 rounded-full px-8">
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Filter By:</h3>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Availability</label>
                <select 
                  className="bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 text-sm"
                  value={activeFilter.availability}
                  onChange={(e) => setActiveFilter({...activeFilter, availability: e.target.value})}
                >
                  {filters.availability.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Experience</label>
                <select 
                  className="bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 text-sm"
                  value={activeFilter.experience}
                  onChange={(e) => setActiveFilter({...activeFilter, experience: e.target.value})}
                >
                  {filters.experience.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">English Level</label>
                <select 
                  className="bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md px-3 py-2 text-sm"
                  value={activeFilter.englishLevel}
                  onChange={(e) => setActiveFilter({...activeFilter, englishLevel: e.target.value})}
                >
                  {filters.englishLevel.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDevelopers.map((developer) => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find The Right Fit?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We have more React specialists in our network. Tell us your requirements and we'll match you with perfect candidates within 24 hours.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
            Get Custom Matches
          </Button>
        </div>
      </section>
    </div>
  );
}

function DeveloperCard({ developer }: { developer: typeof reactDevelopers[0] }) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Header with avatar */}
       <div className="relative h-60 bg-gradient-to-r from-blue-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-t-lg overflow-hidden">
        <div className="w-full h-full">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage 
              src={developer.avatar} 
              className="w-full h-full object-cover" 
              alt={developer.name}
            />
            <AvatarFallback className="bg-blue-600 text-4xl text-white rounded-none flex items-center justify-center w-full h-full">
              {developer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {developer.verified && (
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              <Verified />
            </Badge>
          )}
          <div className="bg-gradient-to-r from-[#3a0023d3] to-[#000000d3] flex justify-between items-center absolute w-full bottom-0 py-2 px-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 pb-2">{developer.name}</h3>
              <p className="text-gray-300">{developer.title}</p>
            </div>
            <Button className="w-[6rem] rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]">
              View
            </Button>
          </div>
        </div>
      </div>

        {/* Main content */}
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(developer.rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {developer.rating} ({developer.totalReviews} reviews)
              </span>
            </div>
            
          </div>
          <p title={developer.bio} className="text-slate-700 text-[0.9rem] dark:text-slate-300 mb-4 line-clamp-3 truncate">
            {developer.bio}
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {developer.skills.slice(0, 2).map(skill => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                >
                  {skill}
                </Badge>
              ))}

              {developer.skills.length > 2 && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                >
                  +{developer.skills.length - 2} more
                </Badge>
              )}
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <div>
              <div className="text-slate-500 dark:text-slate-400">Experience</div>
              <div className="font-medium">{developer.experience}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Availability</div>
              <div className="font-medium">{developer.availability}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Rate</div>
              <div className="font-medium">{developer.hourlyRate}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">English</div>
              <div className="font-medium">{developer.englishLevel}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}