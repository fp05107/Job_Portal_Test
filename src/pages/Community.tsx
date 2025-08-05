
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Award, ExternalLink, Heart } from "lucide-react";

const Community: React.FC = () => {
  const communityStats = [
    { label: "Active Members", value: "25,000+", icon: Users },
    { label: "Daily Discussions", value: "500+", icon: MessageSquare },
    { label: "Events This Month", value: "12", icon: Calendar },
    { label: "Success Stories", value: "1,200+", icon: Award }
  ];

  const upcomingEvents = [
    {
      title: "Remote Work Best Practices",
      date: "Jan 25, 2024",
      time: "2:00 PM PST",
      type: "Webinar",
      attendees: 150
    },
    {
      title: "Tech Talk: AI in Development",
      date: "Jan 28, 2024", 
      time: "10:00 AM PST",
      type: "Discussion",
      attendees: 89
    },
    {
      title: "Career Growth Q&A",
      date: "Feb 2, 2024",
      time: "3:00 PM PST", 
      type: "Q&A Session",
      attendees: 200
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      story: "Joined TopSkyll 6 months ago and landed a dream job with a US startup. The community support was incredible!",
      company: "TechCorp Inc.",
      avatar: "PS"
    },
    {
      name: "Rahul Gupta", 
      role: "DevOps Engineer",
      story: "The technical discussions and mentorship in this community helped me advance my career significantly.",
      company: "CloudWorks",
      avatar: "RG"
    },
    {
      name: "Anita Patel",
      role: "UI/UX Designer",
      story: "Found amazing opportunities and built lasting professional relationships through the TopSkyll community.",
      company: "DesignHub",
      avatar: "AP"
    }
  ];

  const forumTopics = [
    {
      title: "Best practices for remote team collaboration",
      replies: 45,
      lastActivity: "2 hours ago",
      category: "Remote Work",
      isHot: true
    },
    {
      title: "Salary negotiation tips for remote developers",
      replies: 32,
      lastActivity: "4 hours ago", 
      category: "Career",
      isHot: true
    },
    {
      title: "How to stay productive working from home",
      replies: 28,
      lastActivity: "6 hours ago",
      category: "Productivity",
      isHot: false
    },
    {
      title: "Latest React.js trends and patterns",
      replies: 67,
      lastActivity: "8 hours ago",
      category: "Technology",
      isHot: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            TopSkyll Community
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Connect, learn, and grow with thousands of remote professionals
          </p>
          <Button size="lg" className="mr-4">
            Join Our Community
          </Button>
          <Button variant="outline" size="lg">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Forum
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center">
                <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {stat.value}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Events */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {event.title}
                    </h3>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {event.date} at {event.time}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {event.attendees} attending
                  </p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">View All Events</Button>
          </Card>

          {/* Popular Forum Topics */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2" />
              Hot Topics
            </h2>
            <div className="space-y-4">
              {forumTopics.map((topic, index) => (
                <div key={index} className="p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-slate-900 dark:text-slate-100 line-clamp-1">
                      {topic.title}
                    </h3>
                    {topic.isHot && (
                      <Badge variant="destructive" className="ml-2">Hot</Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500">
                    <span>{topic.replies} replies</span>
                    <span>{topic.lastActivity}</span>
                  </div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {topic.category}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Visit Forum</Button>
          </Card>
        </div>

        {/* Success Stories */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-red-500" />
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {story.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {story.role} at {story.company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Community Guidelines */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Community Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                Be Respectful
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Treat all community members with respect and kindness. No harassment, 
                discrimination, or hate speech will be tolerated.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                Stay On Topic
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Keep discussions relevant to remote work, technology, and career development. 
                Use appropriate channels for different topics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                Help Others
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Share your knowledge and experience to help fellow community members grow 
                and succeed in their careers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                No Spam
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Avoid posting repetitive content, excessive self-promotion, or irrelevant links. 
                Quality over quantity.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Community;
