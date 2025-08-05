
import React from 'react';
import { Card } from "@/components/ui/card";

const CookiePolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Cookie Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-8">
          <div className="prose max-w-none dark:prose-invert space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                What Are Cookies?
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Essential Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation and access to secure areas.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Analytics Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Preference Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    These cookies remember your preferences and settings to provide you with a 
                    personalized experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                Managing Cookies
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                You can control and/or delete cookies as you wish. You can delete all cookies that 
                are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                Third-Party Cookies
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We may use third-party services that place cookies on your device. These services 
                include analytics providers and advertising networks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you have any questions about our use of cookies, please contact us at 
                privacy@topskyll.com.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;
