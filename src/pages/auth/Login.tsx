import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Linkedin, Mail, Lock, ArrowRight, Loader2, Shield, Eye, EyeOff } from "lucide-react";
import { baseUrl } from "@/config/api";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { loginUser, user, isLoading: userLoading, linkedInLoginUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [location, navigate] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = new URLSearchParams(location.split("?")[1]);
  const redirectPath = searchParams.get("redirect") || "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Redirect if user is already logged in
  useEffect(() => {
    if (!userLoading && user) {
      navigate(redirectPath);
    }
  }, [user, userLoading, navigate, redirectPath]);

  const handleLinkedInLogIn = () => {
    const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID; 
    const redirectUri = encodeURIComponent(import.meta.env.VITE_LINKEDIN_REDIRECT_URI_LOGIN);
    const scope = encodeURIComponent('openid profile email');
    const state = 'random_string_to_prevent_csrf';
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    // Redirect to LinkedIn
    window.location.href = linkedInAuthUrl;
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");

    if (code) {
      fetch(`${baseUrl}/api/v1/user/auth/login/linkedin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error('LinkedIn authentication failed');
          }
          const data = await res.json();
          linkedInLoginUser(data.user, data.token)
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        })
        .catch((error) => {
          toast({
            title: "LinkedIn Error",
            description: error.message,
            variant: "destructive"
          });
        });
    } else if (error) {
      toast({
        title: "LinkedIn Error",
        description: error,
        variant: "destructive"
      });
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await loginUser(data.email, data.password);
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      setLocation("/dashboard");
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe5182]/10 to-[#81004D]/10 pointer-events-none" />
      <div className="absolute w-full h-full bottom-0 right-0 bg-[linear-gradient(to_top_left,_#DB0083_0%,_transparent_30%)] opacity-20 -z-10 pointer-events-none" />

      <div className="w-full max-w-md space-y-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#080106] dark:text-white">
            Welcome to <span className="bg-gradient-to-r from-[#81004D] to-[#fe5182] bg-clip-text text-transparent">TopSkyll</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sign in to access your personalized dashboard
          </p>
        </div>

        <Card className="border-2 border-[#e9e9e9] dark:border-[#81004d4f] shadow-xl dark:shadow-[#81004d1a] bg-gradient-to-t from-[#fe51822f] dark:from-[#81004d4f] to-[#ffffff] dark:to-[#000000]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-[#080106] dark:text-white">
              Login to Your Account
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Access your job search tools and profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Button
                variant="outline"
                className="w-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
                onClick={() => handleLinkedInLogIn()}>
                <Linkedin className="w-5 h-5 mr-2 text-[#0077B5]" />
                Continue with LinkedIn
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">
                    Or continue with email
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
                    Email Address
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email"
                        }
                      })}
                      className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password" className="block mb-2 text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters"
                        }
                      })}
                      className={`pl-10 ${errors.password ? "border-red-500" : ""}`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#fe5182] focus:ring-[#fe5182]"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                      Remember me
                    </label>
                  </div>

                  <Link href="/forgot-password" className="text-sm font-medium text-[#fe5182] hover:text-[#fe5182]/80">
                    Forgot password?
                  </Link>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Your information is secure and will never be shared.</span>
                </div>

                <Button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white hover:shadow-lg hover:shadow-pink-500/25"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/register/jobseeker" className="font-medium text-[#fe5182] hover:text-[#fe5182]/80">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}