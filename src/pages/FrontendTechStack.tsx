import React from "react";

const frontendRoles = [
  "React Developer",
  "Vue.js Developer",
  "Angular Developer",
  "Svelte Developer",
  "Next.js Developer",
  "Frontend Engineer",
  "UI Developer",
  "HTML/CSS Developer",
  "JavaScript Developer",
  "Tailwind CSS Developer",
  "Web Accessibility Specialist",
  "Frontend Architect",
];

const FrontendJobProfiles = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 text-center">
          Hire Frontend Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frontendRoles.map((role) => (
            <div
              key={role}
              className="rounded-lg bg-slate-50 dark:bg-slate-800 p-6 shadow hover:shadow-md transition border border-slate-200 dark:border-slate-700"
            >
              <p className="text-lg font-medium text-slate-800 dark:text-white">
                {role}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Expert {role.toLowerCase()} available for hire.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontendJobProfiles;
