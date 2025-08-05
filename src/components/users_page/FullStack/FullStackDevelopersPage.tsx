import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Badge } from "@/components/ui/badge";
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';


const FullStackDevelopersPage = () => {

const fullStackDevelopers = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Full Stack Developer",
    skills: ["Angular", "TypeScript", "RxJS", "Node.js", "Express", "MongoDB", "HTML", "CSS", "NgRx"],
    experience: "3 years",
    location: "Bangalore, India",
    languages: ["English", "Hindi"],
    description: "Aarav is a passionate full-stack developer with solid experience in building responsive applications. He specializes in Angular with Node.js backend and state management using NgRx.",
    avatar: " ",
    verified: true
  },
  {
    id: 2,
    name: "Vikram Nair",
    role: "Full Stack Developer",
    skills: ["Angular", "JavaScript", "Node.js", "Express", "MongoDB", "Bootstrap", "REST APIs"],
    experience: "4.5 years",
    location: "Hyderabad, India",
    languages: ["English", "Telugu"],
    description: "Vikram has a deep understanding of full-stack development. He excels in creating scalable UI components and building robust APIs with Node.js.",
    avatar: " ",
    verified: true
  },
  {
    id: 3,
    name: "Isha Kapoor",
    role: "Full Stack Developer",
    skills: ["Angular", "SCSS", "Angular Material", "Node.js", "Express", "MongoDB", "Unit Testing"],
    experience: "5 years",
    location: "Ahmedabad, India",
    languages: ["English", "Gujarati", "Hindi"],
    description: "Isha crafts intuitive user interfaces using Angular Material and builds RESTful APIs with Node.js. She is skilled in reactive forms and writing clean code.",
    avatar: " ",
    verified: true
  },
  {
    id: 4,
    name: "Rohan Malhotra",
    role: "Full Stack Developer",
    skills: ["Angular", "Node.js", "MongoDB", "Express", "TypeScript"],
    experience: "6 years",
    location: "Pune, India",
    languages: ["English", "Hindi", "Marathi"],
    description: "Rohan brings full-stack expertise with a strong Angular frontend and Node.js backend. He enjoys optimizing performance and developing robust APIs.",
    avatar: " ",
    verified: true
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Senior Full Stack Developer",
    skills: ["Angular", "RxJS", "NgRx", "Node.js", "GraphQL", "MongoDB", "CI/CD", "SCSS"],
    experience: "7+ years",
    location: "Remote",
    languages: ["English", "Hindi", "Marathi"],
    description: "Neha leads complex full-stack projects with Angular and Node.js. She is experienced in GraphQL integration, advanced state management, and deployment pipelines.",
    avatar: " ",
    verified: true
  },
  {
    id: 6,
    name: "Siddharth Rao",
    role: "Full Stack Developer",
    skills: ["Angular", "TypeScript", "RxJS", "Node.js", "Express", "MongoDB", "Jest", "SASS"],
    experience: "4 years",
    location: "Chennai, India",
    languages: ["English", "Telugu", "Tamil"],
    description: "Siddharth specializes in building reusable Angular components and developing scalable backend services using Node.js and MongoDB.",
    avatar: " ",
    verified: true
  }
];


  const steps = [
    {
      number: 1,
      title: "Language and Personality Evaluation",
      passRate: "26.4%",
      description:
        "The first step of the screening process is a comprehensive English language and communication evaluation. We also assess personality traits, seeking only those who are passionate and fully engaged in their work.",
    },
    {
      number: 2,
      title: "In-depth Skill Review",
      passRate: "7.4%",
      description:
        "We test each applicant’s technical knowledge and problem-solving ability through various assessments. Only candidates with exceptional results move forward.",
    },
    {
      number: 3,
      title: "Live Technical Interview",
      passRate: "5.1%",
      description:
        "Candidates are interviewed by expert Angular engineers in real-time coding sessions to validate depth and fluency.",
    },
    {
      number: 4,
      title: "Project Execution Test",
      passRate: "4.2%",
      description:
        "Engineers complete a real-world project to showcase their ability to build and ship functional Angular apps.",
    },
    {
      number: 5,
      title: "Soft Skills Assessment",
      passRate: "3.5%",
      description:
        "We assess collaboration, responsiveness, and communication style to ensure a strong team fit.",
    },
    {
      number: 6,
      title: "Client Simulation Phase",
      passRate: "2.8%",
      description:
        "Engineers simulate real client communication and deliverables to mirror actual job expectations.",
    },
    {
      number: 7,
      title: "Final TopSkyll Approval",
      passRate: "2.3%",
      description:
        "Only candidates who excel in all phases are approved as Top 3% Full Stack developers by TopSkyll.",
    },
  ];
  
  const capabilities = [
    {
      title: "Single-page Application (SPA) Development",
      content:
        "SPAs update content dynamically, resulting in a smoother, faster, and more engaging user experience. Our developers create responsive SPAs leveraging Full Stack component architecture and third-party tools to guarantee maximum performance and memorable user interactions.",
    },
    {
      title: "Routing and Navigation With Full Stack Router",
      content:
        "Effective routing is essential to the user experience, enhancing usability by providing seamless navigation between views. To maximize usability and performance, TopSklll developers implement sophisticated routing using Full Stack Router, leveraging features such as deep linking and lazy loading.",
    },
    {
      title: "Building Progressive Web Apps (PWAs)",
      content:
        "PWAs deliver an app-like experience directly through the web browser. Our engineers leverage tools like Full Stack Material and Workbox to build and deploy reliable and engaging PWAs, ensuring an immersive web experience that offers the ease of use of a mobile app.",
    },
    {
      title: "API Integration and Real-time Data",
      content:
        "Back-end API integration enables communication with different systems, services, and databases. Our experts ensure robust real-time data synchronization and interactions with third-party services by building elegant RESTful APIs with tools like Axios and Socket.IO, enabling dynamic data flow and advanced interactivity.",
    },
    {
      title: "Performance Optimization for Apps",
      content:
        "Speed and responsiveness are crucial characteristics of successful applications. To minimize load times and optimize resource usage, TopSklll programmers craft high-performance apps that deliver seamless user experiences, using tools like Full Stack CLI and techniques such as code splitting and lazy loading.",
    },
    {
      title: "Integration With RxJS for Asynchronous Data",
      content:
        "Asynchronous programming enhances performance by enabling multiple tasks to run concurrently. Our developers harness the capabilities of RxJS to manage asynchronous data streams, handling events such as API responses and user inputs while promoting reactive programming.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 2 < steps.length) setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const visibleSteps = steps.slice(currentIndex, currentIndex + 2);
  function DeveloperCard({ developer }: { developer: typeof fullStackDevelopers[0] }) {
    return (
      <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Header with avatar */}
          <div className="relative h-40 bg-gradient-to-r from-blue-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-t-lg">
            <div className="absolute -bottom-10 left-4">
              <Avatar className="w-16 h-16  rounded-full overflow-hidden">
                <AvatarImage
                  src={developer.avatar}
                  className="w-full h-full object-cover rounded-full"
                />
                <AvatarFallback className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-lg font-medium rounded-full border-2 border-blue-800">

                  {developer.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>


            </div>
          </div>


          {/* Main content */}
          <div className="pt-12 px-6 pb-6 flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{developer.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{developer.role}</p>
              </div>
              {developer.verified && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Verified
                </Badge>
              )}
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
              {developer.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map(skill => (
                  <Badge
                    key={skill}
                    className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div>
                <div className="text-slate-500 dark:text-slate-400">Experience</div>
                <div className="font-medium">{developer.experience}</div>
              </div>
              <div>
                <div className="text-slate-500 dark:text-slate-400">Location</div>
                <div className="font-medium">{developer.location}</div>
              </div>
              <div className="col-span-2">
                <div className="text-slate-500 dark:text-slate-400">Languages</div>
                <div className="font-medium">{developer.languages.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 pt-4 border-t border-slate-200 dark:border-slate-700">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }



  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto mt-[2rem]">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Hire Top <span className="text-blue-600">Full Stack</span> Developers
        </h1>
      </div>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackDevelopers.map((developer) => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className=" text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 gap-2">
              How it{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Works
              </span>
            </h1>
          </div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Talk to One of Our Industry Experts
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  An expert on our team will work with you to understand your goals, technical needs, and team dynamics.
                </p>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Work With Hand-Selected Talent
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Within days, we'll introduce you to the right Full Stack expert for your project. Average time to match is under 24 hours.
                </p>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center max-w-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  The Right Fit, Guaranteed
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Work with your new Full Stack consultant for a trial period, ensuring they're the right fit before starting the engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-purple-600 rounded-tr-[90px] rounded-bl-[90px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start px-4 py-8 ">
            {/* Left Content */}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-bold mb-3 text-white">
                How We Source the Top 5% <br /> of Full Stack Developers
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Our name “TopSkyll” comes from Top Skill—meaning we constantly strive to
                find and work with the best from around the world. Our rigorous
                screening process identifies experts in their domains who have passion
                and drive.
              </p>
              <p className="mt-4 text-white">
                Of the thousands of applications TopSkyll sees each month, typically
                fewer than 3% are accepted.
              </p>
              <button className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
                Start Hiring Today
              </button>
            </div>

            {/* Right Steps */}
            <div className="md:w-1/2 mt-10 ml-4">
              <div className="flex gap-6">
                {visibleSteps.map((step: any) => (
                  <div
                    key={step.number}
                    className="bg-white text-black rounded-lg p-4 shadow-md w-[500px] h-[250px] flex flex-col"
                  >
                    <div className="text-xl font-bold text-blue-500 mb-3">{step.number}</div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>


              {/* Arrow Controls */}
              <div className="flex mt-5">
                <button
                  onClick={prev}
                  disabled={currentIndex === 0}
                  className="text-white disabled:opacity-30"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={next}
                  disabled={currentIndex + 2 >= steps.length}
                  className="text-white disabled:opacity-30"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-2xl sm:text-5xl font-bold text-white mb-8 text-center">
            Capabilities of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full Stack Developers</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 sm:text-lg text-center mb-5">
            Our Full Stack developers leverage their expertise to elevate your applications’ user interfaces and client-side functionality. Whether you’re looking to refine your existing apps or build innovative projects, they are equipped to deliver customized solutions that meet your strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-xl overflow-hidden shadow">
          {capabilities.map((card, index) => {
            const isTopRight = index === 1;
            const isBottomLeft = index === 4;
            return (
              <div
                key={index}
                className={`border border-blue-200 p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 ${isTopRight ? "rounded-tr-xl" : ""
                  } ${isBottomLeft ? "rounded-bl-xl" : ""}`}
              >

                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{card.content}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  )
}

export default FullStackDevelopersPage

