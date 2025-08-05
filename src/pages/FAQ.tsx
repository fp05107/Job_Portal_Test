
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is TopSkyll?",
          answer: "TopSkyll is a platform that connects the top 5% of remote talent from India with companies worldwide. We specialize in matching skilled professionals with remote work opportunities."
        },
        {
          question: "How does TopSkyll work?",
          answer: "We have a rigorous screening process where we evaluate candidates based on technical skills, communication abilities, and professional experience. Only the top 5% make it through our selection process."
        },
        {
          question: "What makes TopSkyll different?",
          answer: "Our focus on quality over quantity sets us apart. We maintain high standards by accepting only the top 5% of applicants, ensuring companies get access to exceptional talent."
        }
      ]
    },
    {
      title: "For Job Seekers",
      faqs: [
        {
          question: "How do I apply to join TopSkyll?",
          answer: "You can apply through our application form. The process includes technical assessments, communication evaluations, and interviews to ensure we maintain our high standards."
        },
        {
          question: "What is the screening process like?",
          answer: "Our screening process includes technical assessments, English proficiency tests, communication evaluations, and behavioral interviews. The entire process typically takes 2-3 weeks."
        },
        {
          question: "Do I need to pay any fees to join?",
          answer: "No, there are no fees for candidates to join TopSkyll. We make money by charging companies for our placement services."
        },
        {
          question: "How long does it take to get matched with a job?",
          answer: "Once you're accepted into our network, we typically match qualified candidates with opportunities within 2-4 weeks, depending on your skills and preferences."
        }
      ]
    },
    {
      title: "For Employers",
      faqs: [
        {
          question: "How quickly can you provide candidates?",
          answer: "We can typically provide a shortlist of pre-vetted candidates within 48-72 hours of receiving your requirements."
        },
        {
          question: "What is your pricing model?",
          answer: "Our pricing varies based on the role and engagement type. We offer both full-time placements and project-based engagements. Contact us for detailed pricing information."
        },
        {
          question: "Do you offer any guarantees?",
          answer: "Yes, we offer a 2-week trial period with a full money-back guarantee if you're not satisfied with the match."
        },
        {
          question: "Can I hire multiple candidates?",
          answer: "Absolutely! Many of our clients hire multiple team members through our platform. We can help you build entire remote teams."
        }
      ]
    },
    {
      title: "Technical & Support",
      faqs: [
        {
          question: "What technical skills do you cover?",
          answer: "We cover a wide range of technical skills including software development, data science, AI/ML, DevOps, UI/UX design, and more. Check our tech directory for a complete list."
        },
        {
          question: "How do you ensure quality?",
          answer: "We have a multi-stage vetting process, continuous performance monitoring, and regular feedback collection to maintain high quality standards."
        },
        {
          question: "What support do you provide?",
          answer: "We provide 24/7 technical support, dedicated account managers, and ongoing relationship management to ensure successful partnerships."
        },
        {
          question: "How do you handle time zones?",
          answer: "Our talent pool includes professionals comfortable working across different time zones. We match candidates based on your preferred working hours."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Find answers to common questions about TopSkyll
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        {filteredFAQs.map((category, categoryIndex) => (
          <Card key={category.title} className="mb-8 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
              {category.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, faqIndex) => (
                <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        ))}

        {searchQuery && filteredFAQs.length === 0 && (
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
              No results found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try searching with different keywords or browse our help center for more information.
            </p>
          </Card>
        )}

        {/* Contact Support */}
        <Card className="p-8 text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Still have questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Can't find the answer you're looking for? Contact our support team.
          </p>
          <a 
            href="/contact-us" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
