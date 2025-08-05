import React, { useState, useEffect } from 'react';
import { 
  Shield,
  Lock,
  Eye,
  EyeOff,
  Mail,
  User,
  CreditCard,
  Globe,
  Settings,
  Trash2,
  Download,
  Bell,
  Cookie,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    introduction: true,
    informationWeCollect: true,
    howWeUse: true,
    howWeShare: true,
    dataSecurity: true,
    yourRights: true,
    dataRetention: true,
    internationalTransfers: true,
    cookies: true,
    thirdParty: true,
    children: true,
    policyChanges: true,
    contact: true,
    compliance: true
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-20 h-20 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#080106] dark:text-white">
              <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">Privacy</span> Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Effective Date: January 1, 2024 • Last Updated: July 31, 2025
            </p>
          </div>
        </div>
        <div className='absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none' />
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000] rounded-3xl p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('introduction')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Introduction
                </h2>
                {expandedSections.introduction ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.introduction && (
                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    TopSkyll ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.
                  </p>
                  <p>
                    This Privacy Policy applies to all users of our platform, including clients seeking developer talent, developers applying to join our network, and visitors to our website. By using TopSkyll's services or accessing our website, you consent to the practices described in this Privacy Policy.
                  </p>
                  <p className="font-medium text-[#080106] dark:text-white">
                    If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
                  </p>
                </div>
              )}
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('informationWeCollect')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <User className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Information We Collect
                </h2>
                {expandedSections.informationWeCollect ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.informationWeCollect && (
                <div className="mt-6 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-[#fe5182]" />
                      Personal Information You Provide
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                        <h4 className="font-bold text-[#080106] dark:text-white mb-3">For Clients:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Contact Information: Name, email, phone, company
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Business Information: Company size, industry
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Account Information: Username, password
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            <span>Payment Information: <CreditCard className="w-4 h-4 inline ml-1" /></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Project Details & Communication Records
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                        <h4 className="font-bold text-[#080106] dark:text-white mb-3">For Developers:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Personal & Professional Information
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Technical Skills & Employment Info
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Identity Verification Documents
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            Portfolio Data & Assessment Results
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#fe5182] mr-2">•</span>
                            <span>Financial Information: <CreditCard className="w-4 h-4 inline ml-1" /></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4 flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-[#fe5182]" />
                      Information Automatically Collected
                    </h3>
                    <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                      <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Website Usage Data
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Platform Interaction Data
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Geolocation Data (IP-based)
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Cookies & Tracking Technologies
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-[#fe5182]" />
                      Information from Third Parties
                    </h3>
                    <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                      <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Social Media Integration
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Background Check Services
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Payment Processors
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#fe5182] mr-2">•</span>
                          Analytics & Security Services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('howWeUse')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#fe5182]" />
                  How We Use Your Information
                </h2>
                {expandedSections.howWeUse ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.howWeUse && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Service Delivery and Operations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">For Clients:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Talent Matching & Project Management</li>
                          <li>• Account Management & Quality Assurance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">For Developers:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Profile Creation & Opportunity Matching</li>
                          <li>• Performance Evaluation & Career Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Communication and Support</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Service Communications & Customer Support</li>
                      <li>• Marketing Communications (with consent)</li>
                      <li>• Surveys and Feedback collection</li>
                    </ul>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Business Operations and Improvement</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Analytics and Insights for platform improvement</li>
                      <li>• Research and Development of new features</li>
                      <li>• Security and Fraud Prevention measures</li>
                      <li>• Legal Compliance and regulatory requirements</li>
                    </ul>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Marketing and Business Development</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Personalized Marketing based on preferences</li>
                      <li>• Partnership Development with third-parties</li>
                      <li>• Market Research and competitive analysis</li>
                      <li>• Brand Promotion with user consent</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* How We Share Your Information */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('howWeShare')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-[#fe5182]" />
                  How We Share Your Information
                </h2>
                {expandedSections.howWeShare ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.howWeShare && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Authorized Sharing for Service Delivery</h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        <span className="font-medium text-[#080106] dark:text-white">Client-Developer Matching:</span> We share relevant developer information with potential clients during the matching process and basic client information with developers for opportunity evaluation. Detailed information is shared only after mutual interest and agreement.
                      </p>
                      <p>
                        <span className="font-medium text-[#080106] dark:text-white">Service Providers:</span> We engage trusted third-party providers for payment processing, background checks, communication tools, and analytics services. Data sharing is limited to what's necessary for service delivery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Legal and Regulatory Requirements</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Legal Compliance: Sharing information as required by applicable laws</li>
                      <li>• Law Enforcement: Cooperating with legitimate investigations</li>
                      <li>• Safety and Security: Protecting users' safety or preventing fraud</li>
                      <li>• Regulatory Reporting: Providing information to regulatory bodies</li>
                    </ul>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Business Transactions</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Mergers and Acquisitions: Information may be transferred</li>
                      <li>• Asset Sales: Data may be included in business asset sales</li>
                      <li>• Due Diligence: Information shared with potential partners</li>
                    </ul>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Consent-Based Sharing</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Marketing Partners: With explicit user consent</li>
                      <li>• Testimonials and Case Studies: With explicit consent</li>
                      <li>• Public Profiles: Displayed with developer consent</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Data Security and Protection */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('dataSecurity')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Data Security and Protection
                </h2>
                {expandedSections.dataSecurity ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.dataSecurity && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Security Measures</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Technical Safeguards:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Encryption of all sensitive data in transit and at rest</li>
                          <li>• Role-based access controls limiting data access</li>
                          <li>• Network security with firewalls and intrusion detection</li>
                          <li>• Regular security audits and vulnerability testing</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Operational Safeguards:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Employee security awareness training</li>
                          <li>• Background checks for employees with data access</li>
                          <li>• Incident response procedures</li>
                          <li>• Data minimization principles</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Physical Safeguards:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Secure data centers with physical controls</li>
                          <li>• Secure disposal of hardware</li>
                          <li>• Limited physical access to servers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Data Breach Response</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>In the event of a data breach that may compromise your personal information:</p>
                      <ul className="space-y-2 mt-2">
                        <li>• We will investigate the incident promptly</li>
                        <li>• Affected users will be notified within 72 hours</li>
                        <li>• Regulatory authorities will be notified as required</li>
                        <li>• We will provide protective guidance</li>
                        <li>• Additional safeguards will be implemented</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Your Privacy Rights and Choices */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('yourRights')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Your Privacy Rights and Choices
                </h2>
                {expandedSections.yourRights ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.yourRights && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Access and Control Rights</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center font-medium text-[#080106] dark:text-white mb-2">
                          <Eye className="w-5 h-5 mr-2 text-[#fe5182]" />
                          Data Access
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          You have the right to request copies of your personal information in a machine-readable format. Requests fulfilled within 30 days.
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center font-medium text-[#080106] dark:text-white mb-2">
                          <Settings className="w-5 h-5 mr-2 text-[#fe5182]" />
                          Data Correction
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Request corrections to inaccurate information through your account or customer support. Identity verification required.
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center font-medium text-[#080106] dark:text-white mb-2">
                          <Trash2 className="w-5 h-5 mr-2 text-[#fe5182]" />
                          Data Deletion
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Request deletion of your data, subject to legal obligations. Some information may be retained for legitimate purposes.
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center font-medium text-[#080106] dark:text-white mb-2">
                          <Download className="w-5 h-5 mr-2 text-[#fe5182]" />
                          Data Portability
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Request your data in portable format (JSON/CSV). Portability requests fulfilled within 45 days.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Communication Preferences</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center font-medium text-[#080106] dark:text-white mb-2">
                          <Bell className="w-5 h-5 mr-2 text-[#fe5182]" />
                          Marketing Communications
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Opt out of marketing emails via unsubscribe links. Control notification settings through your account dashboard.
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center font-medium text-[#080106] dark:text-white mb-2">
                          <User className="w-5 h-5 mr-2 text-[#fe5182]" />
                          Account Settings
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Modify privacy settings, profile visibility, and data sharing preferences in your account dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Regional Privacy Rights</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">European Union (GDPR):</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                          <li>• Right to be informed</li>
                          <li>• Right of access and rectification</li>
                          <li>• Right to erasure ("right to be forgotten")</li>
                          <li>• Right to restrict processing</li>
                          <li>• Right to data portability</li>
                          <li>• Right to object</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">California (CCPA/CPRA):</h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                          <li>• Right to know what data is collected</li>
                          <li>• Right to delete personal information</li>
                          <li>• Right to opt-out of data sale</li>
                          <li>• Right to non-discrimination</li>
                          <li>• Right to correct information</li>
                          <li>• Right to limit sensitive data use</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Data Retention and Deletion */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('dataRetention')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Trash2 className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Data Retention and Deletion
                </h2>
                {expandedSections.dataRetention ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.dataRetention && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Retention Periods</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Active Users:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Account information retained while active</li>
                          <li>• Communication records retained for 7 years</li>
                          <li>• Payment information retained per financial regulations</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Inactive Accounts:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Client accounts: 3 years after last activity</li>
                          <li>• Developer accounts: 2 years after last activity</li>
                          <li>• Marketing data: Until opt-out or 5 years</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Legal and Regulatory Requirements:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Tax-related information: 7 years</li>
                          <li>• Employment verification: 3 years</li>
                          <li>• Security incident logs: 2 years</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Deletion Procedures</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Automated Deletion:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• System identifies data eligible for deletion</li>
                          <li>• Monthly processes remove expired data</li>
                          <li>• Secure deletion methods prevent recovery</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Manual Deletion Requests:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Users can request immediate deletion</li>
                          <li>• Requests reviewed for legal compliance</li>
                          <li>• Completed within 30 days of approval</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('internationalTransfers')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-[#fe5182]" />
                  International Data Transfers
                </h2>
                {expandedSections.internationalTransfers ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.internationalTransfers && (
                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    TopSkyll operates globally and may transfer your personal information across international borders for business operations. When we transfer data internationally, we ensure appropriate safeguards are in place:
                  </p>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6 mt-4">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Safeguards for International Transfers</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Adequacy Decisions:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Prioritize transfers to countries with adequate data protection</li>
                          <li>• EU-US Data Privacy Framework compliance</li>
                          <li>• Regular monitoring of adequacy decisions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Standard Contractual Clauses:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• EU-approved SCCs for international transfers</li>
                          <li>• Regular review and updates for compliance</li>
                          <li>• Additional safeguards implemented where needed</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Binding Corporate Rules:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Internal data protection policies</li>
                          <li>• Regular audits for global compliance</li>
                          <li>• Employee training on data protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('cookies')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Cookies and Tracking Technologies
                </h2>
                {expandedSections.cookies ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.cookies && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Types of Cookies We Use</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Essential Cookies:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Authentication</li>
                          <li>• Security</li>
                          <li>• Basic functionality</li>
                          <li>• User preferences</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Analytics Cookies:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Usage statistics</li>
                          <li>• Performance monitoring</li>
                          <li>• Behavior analysis</li>
                          <li>• Conversion tracking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Marketing Cookies:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Personalized ads</li>
                          <li>• Social media</li>
                          <li>• Email marketing</li>
                          <li>• Remarketing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Cookie Management</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Browser Controls:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Most browsers allow cookie control</li>
                          <li>• Block, delete, or restrict cookies</li>
                          <li>• Disabling may affect functionality</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Our Cookie Management Tool:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Granular control over preferences</li>
                          <li>• Easy opt-in/opt-out for categories</li>
                          <li>• Regular updates for new technologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Third-Party Services and Links */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('thirdParty')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <ExternalLink className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Third-Party Services and Links
                </h2>
                {expandedSections.thirdParty ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.thirdParty && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Integrated Services</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Payment Processors:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Stripe, PayPal, and other secure providers</li>
                          <li>• Each has its own privacy policy</li>
                          <li>• We do not store complete payment card info</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Communication Tools:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Video conferencing and messaging platforms</li>
                          <li>• Third-party privacy policies apply</li>
                          <li>• Review third-party policies</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Analytics and Marketing:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Google Analytics, social media pixels</li>
                          <li>• Data sharing limited where possible</li>
                          <li>• Opt out through browser settings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">External Links</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>Our website may contain links to external websites not operated by TopSkyll:</p>
                      <ul className="space-y-2 mt-2">
                        <li>• We are not responsible for external privacy practices</li>
                        <li>• Review privacy policies of linked websites</li>
                        <li>• Links provided for convenience, not endorsement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('children')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <User className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Children's Privacy
                </h2>
                {expandedSections.children ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.children && (
                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    TopSkyll does not knowingly collect personal information from children under 13 years of age (or under 16 in the EU). Our services are designed for and directed to adults seeking professional development services.
                  </p>
                  <p>
                    If we become aware that we have collected personal information from a child under the applicable age:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>• We will take immediate steps to delete such information</li>
                    <li>• We will not use or disclose the information</li>
                    <li>• We will implement additional safeguards</li>
                  </ul>
                  <p className="font-medium text-[#080106] dark:text-white">
                    Parents or guardians who believe their child has provided personal information to us should contact us immediately using the information provided in the Contact section.
                  </p>
                </div>
              )}
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('policyChanges')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Changes to This Privacy Policy
                </h2>
                {expandedSections.policyChanges ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.policyChanges && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Policy Updates</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We may update this Privacy Policy periodically to reflect changes in our business practices, updates to applicable laws and regulations, introduction of new services or features, and feedback from users and regulatory authorities.
                    </p>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Notification of Changes</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Significant Changes:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Email notification 30 days before</li>
                          <li>• Prominent notice on website</li>
                          <li>• Clear explanation of changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Minor Changes:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li>• Updated effective date</li>
                          <li>• Platform notifications</li>
                          <li>• Summary in communications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Continued Use</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>Your continued use of TopSkyll services after policy changes indicates acceptance of the updated terms. If you do not agree with changes, you may:</p>
                      <ul className="space-y-2 mt-2">
                        <li>• Discontinue use of our services</li>
                        <li>• Request deletion of your personal information</li>
                        <li>• Contact us to discuss specific concerns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('contact')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Contact Information
                </h2>
                {expandedSections.contact ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.contact && (
                <div className="mt-6 space-y-6">
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Privacy Inquiries</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      For questions, concerns, or requests regarding this Privacy Policy or our privacy practices:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Privacy Officer:</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Email: privacy@topskyll.com
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#080106] dark:text-white mb-2">Data Protection Officer (EU Users):</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Email: dpo@topskyll.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Response Times</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• General privacy inquiries: 5 business days</li>
                      <li>• Data access requests: 30 days</li>
                      <li>• Data deletion requests: 30 days</li>
                      <li>• Urgent privacy concerns: 24 hours</li>
                    </ul>
                  </div>
                  
                  <div className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#080106] dark:text-white mb-4">Complaint Resolution</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>If you are not satisfied with our response to your privacy concern:</p>
                      <ul className="space-y-2 mt-2">
                        <li>• You may file a complaint with relevant data protection authorities</li>
                        <li>• EU users can contact their local Data Protection Authority</li>
                        <li>• California users can contact the California Attorney General's Office</li>
                        <li>• We will cooperate fully with regulatory investigations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regulatory Compliance */}
            <div className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('compliance')}
              >
                <h2 className="text-3xl font-bold text-[#080106] dark:text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-[#fe5182]" />
                  Regulatory Compliance
                </h2>
                {expandedSections.compliance ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              
              {expandedSections.compliance && (
                <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    TopSkyll is committed to compliance with applicable privacy laws and regulations, including but not limited to:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 mt-4">
                    <li>• General Data Protection Regulation (GDPR)</li>
                    <li>• California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA)</li>
                    <li>• Canada's Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
                    <li>• Australia's Privacy Act</li>
                    <li>• Other applicable regional and national privacy laws</li>
                  </ul>
                  <p className="mt-4">
                    We regularly review and update our practices to ensure ongoing compliance with evolving privacy regulations worldwide.
                  </p>
                  <p className="mt-4 font-medium text-[#080106] dark:text-white">
                    This Privacy Policy represents our commitment to protecting your privacy and maintaining the trust you place in TopSkyll. We encourage you to review this policy regularly and contact us with any questions or concerns.
                  </p>
                </div>
              )}
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
              Have Privacy Questions?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Contact our privacy team for any questions about your data or our policies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#81004D] bg-white rounded-full transform hover:scale-105 transition-all duration-300">
                <span>Contact Privacy Team</span>
                <Mail className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#81004D] transition-all duration-300">
                <span>Manage Your Data</span>
                <Settings className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;