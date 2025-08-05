import React from "react";

interface HirePageLayoutProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const HirePageLayout: React.FC<HirePageLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-background px-6 py-12  bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
        <p className="text-lg text-muted-foreground mt-4">{subtitle}</p>
        <div className="mt-10 text-left">{children}</div>
      </div>
    </div>
  );
};

export default HirePageLayout;