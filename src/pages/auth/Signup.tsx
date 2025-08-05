import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Briefcase, UserPlus } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
          Create Your Free Account
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
          Whether you're a professional looking for top opportunities or an employer seeking the best talent, you're in the right place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left">
          <Link href="/register/jobseeker">
            <div className="border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 dark:bg-muted/30 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <UserPlus className="w-8 h-8 text-primary" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Register as Job Seeker</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Showcase your skills, apply for jobs, and connect with top employers across industries.
              </p>
              <Button className="w-full">Get Started</Button>
            </div>
          </Link>

          {/* <Link href="/register/employer">
            <div className="border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 dark:bg-muted/30 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Register as Employer</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Post jobs, browse talented candidates, and hire the right people with ease.
              </p>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
          </Link> */}
        </div>

        <p className="text-sm text-muted-foreground mt-10">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
