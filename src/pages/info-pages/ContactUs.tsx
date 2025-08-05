import React, { useState, useEffect, useCallback } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  ArrowRight,
  MessageCircle,
  Calendar,
  Clock,
  User,
  Mailbox,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Shield
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { baseUrl } from '@/config/api';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [honeypot, setHoneypot] = useState('');

  // Rate limiting - max 3 submissions per minute
  const MAX_SUBMISSIONS = 3;
  const SUBMISSION_WINDOW = 60 * 1000; // 1 minute in milliseconds

  useEffect(() => {
    // Load submission count from session storage
    const savedCount = sessionStorage.getItem('submissionCount');
    const savedTime = sessionStorage.getItem('lastSubmissionTime');

    if (savedCount) setSubmissionCount(parseInt(savedCount));
    if (savedTime) setLastSubmissionTime(parseInt(savedTime));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  // const isRateLimited = () => {
  //   const now = Date.now();
    
  //   // Reset count if outside the time window
  //   if (lastSubmissionTime && now - lastSubmissionTime > SUBMISSION_WINDOW) {
  //     setSubmissionCount(0);
  //     sessionStorage.setItem('submissionCount', '0');
  //     return false;
  //   }

  //   return submissionCount >= MAX_SUBMISSIONS;
  // };

  const isRateLimited = useCallback(() => {
  const now = Date.now();
  
  // Reset count if outside the time window
  if (lastSubmissionTime && now - lastSubmissionTime > SUBMISSION_WINDOW) {
    return false;
  }

  return submissionCount >= MAX_SUBMISSIONS;
}, [lastSubmissionTime, submissionCount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field
    if (honeypot) {
      console.log('Bot detected');
      toast.success('Message sent successfully!'); // Fake success to bots
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields are required');
      return;
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Check rate limiting
    if (isRateLimited()) {
      setError('Too many submissions. Please try again later.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(`${baseUrl}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Success - update submission count and time
      const now = Date.now();
      const newCount = submissionCount + 1;
      setSubmissionCount(newCount);
      setLastSubmissionTime(now);
      sessionStorage.setItem('submissionCount', newCount.toString());
      sessionStorage.setItem('lastSubmissionTime', now.toString());

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully!');
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to send message. Please try again.');
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#080106] dark:text-white">
              Contact <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">TopSkyll</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-[#fe5182]/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <MessageCircle className="w-5 h-5 text-[#fe5182]" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                We'd love to hear from you
              </span>
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none' />
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#080106] dark:text-white mb-8">Send us a message</h2>
              
              {success && (
                <div className="mb-8 p-4 bg-green-100 dark:bg-green-900/50 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Thank you for your message! We'll get back to you soon.</span>
                </div>
              )}

              {error && (
                <div className="mb-8 p-4 bg-red-100 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users but visible to bots */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#fe5182] focus:border-transparent"
                      required
                      placeholder="John Doe"
                      disabled={isLoading}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#fe5182] focus:border-transparent"
                      required
                      placeholder="john@example.com"
                      disabled={isLoading}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mailbox className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#fe5182] focus:border-transparent"
                      required
                      placeholder="How can we help?"
                      disabled={isLoading}
                      maxLength={200}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#e9e9e9] dark:border-[#81004d4f] bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#fe5182] focus:border-transparent"
                    required
                    placeholder="Your message here..."
                    disabled={isLoading}
                    maxLength={2000}
                  ></textarea>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Your information is secure and will never be shared.</span>
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isLoading || isRateLimited()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Reach out to us through any of these channels and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-[#080106] dark:text-white">Email</h3>
                      <div className="mt-4 space-y-2">
                        <p className="text-gray-600 dark:text-gray-300">
                          <a href="mailto:contact@topskyll.com" className="hover:text-[#fe5182] transition-colors flex items-center">
                            <ArrowRight className="w-4 h-4 mr-2 text-[#fe5182]" />
                            contact@topskyll.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-[#080106] dark:text-white">Phone</h3>
                      <div className="mt-4 space-y-2">
                        <p className="text-gray-600 dark:text-gray-300">
                          <a href="tel:+916304116234" className="hover:text-[#fe5182] transition-colors flex items-center">
                            <ArrowRight className="w-4 h-4 mr-2 text-[#fe5182]" />
                            +91 6304116234
                          </a>
                        </p>
                        <div className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Monday to Friday, 9.30am to 6.30pm IST</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-[#080106] dark:text-white mb-4">Connect With Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Follow us on social media for updates and announcements</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe5182] hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe5182] hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe5182] hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe5182] hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#81004D] to-[#fe5182]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Schedule a Consultation
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Book a call with our team to discuss how TopSkyll can help with your technology hiring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#81004D] bg-white rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = 'mailto:contact@topskyll.com?subject=Schedule a Consultation'}
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Book a Meeting</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#81004D] transition-all duration-300"
                onClick={() => window.location.href = 'tel:+916304116234'}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Us Now</span>
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-200 mb-4">
                We're committed to responding to all inquiries within 24 hours.
              </p>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  Available Monday to Friday, 9.30am to 6.30pm IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;