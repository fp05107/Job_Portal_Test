
import React from 'react';
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from "lucide-react";

const Security: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Security at TopSkyll
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Your security and privacy are our top priorities. Learn about our comprehensive security measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Data Protection
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              We implement industry-standard encryption and security protocols to protect your 
              personal and professional information.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Secure Authentication
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Multi-factor authentication and secure login processes ensure only authorized 
              users can access accounts.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Privacy Controls
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Granular privacy settings allow you to control who can see your information 
              and how it's used.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Server className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Infrastructure Security
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Our infrastructure is hosted on secure cloud platforms with regular security 
              audits and monitoring.
            </p>
          </Card>
        </div>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Security Certifications & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">SOC 2 Compliant</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Audited for security, availability, and confidentiality
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">GDPR Compliant</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Full compliance with European data protection regulations
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">ISO 27001</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                International standard for information security management
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Report a Security Issue
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            If you discover a security vulnerability or have concerns about our security practices, 
            please report it to us immediately.
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
            <p className="font-medium text-slate-900 dark:text-slate-100">Security Contact:</p>
            <p className="text-slate-600 dark:text-slate-400">security@topskyll.com</p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
              We take all security reports seriously and will respond within 24 hours.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Security;
