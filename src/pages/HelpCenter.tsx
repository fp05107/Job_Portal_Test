
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, MessageCircle, Phone, Mail, ChevronRight } from "lucide-react";

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: "Getting Started",
      icon: Book,
      color: "blue",
      articles: [
        "How to create an account",
        "Setting up your profile",
        "Understanding the application process",
        "First steps for employers"
      ]
    },
    {
      title: "For Talent",
      icon: MessageCircle,
      color: "green", 
      articles: [
        "How to apply for jobs",
        "Preparing for interviews",
        "Managing your applications",
        "Payment and invoicing"
      ]
    },
    {
      title: "For Employers",
      icon: Phone,
      color: "purple",
      articles: [
        "How to post a job",
        "Screening candidates",
        "Managing your team",
        "Billing and payments"
      ]
    },
    {
      title: "Account & Settings",
      icon: Mail,
      color: "orange",
      articles: [
        "Updating your profile",
        "Privacy settings",
        "Notification preferences",
        "Account security"
      ]
    }
  ];

  const popularArticles = [
    "How do I reset my password?",
    "What are the payment terms?",
    "How long does the screening process take?",
    "Can I work with multiple clients?",
    "What happens if I'm not satisfied?",
    "How do I update my skills?"
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Help Center
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {helpCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.articles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between py-2 px-3 rounded hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                      <span className="text-slate-600 dark:text-slate-400">{article}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Popular Articles */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="flex items-center justify-between py-3 px-4 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                <span className="text-slate-600 dark:text-slate-400">{article}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            ))}
          </div>
        </Card>

        {/* Contact Support */}
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Still Need Help?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Start Live Chat</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Email Support</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;
