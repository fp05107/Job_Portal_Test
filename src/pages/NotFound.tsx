// src/pages/NotFound.tsx
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[60vh] pt-20 text-center">
      <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
        404 - Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
