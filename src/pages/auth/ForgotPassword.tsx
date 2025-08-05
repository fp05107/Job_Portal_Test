import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Loader2, CheckCircle, AlertCircle, ArrowLeft, EyeOff, Eye, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { baseUrl } from "@/config/api";
import { useAuth } from "@/context/AuthContext";

const ForgotPassword = () => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetTokenValid, setResetTokenValid] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { loginUser, user, isLoading: userLoading, linkedInLoginUser } = useAuth();
  const redirectPath = "/dashboard";

  // Redirect if user is already logged in
  useEffect(() => {
    if (!userLoading && user) {
      navigate(redirectPath);
    }
  }, [user, userLoading, navigate, redirectPath]);

  // Check if we have a reset token in the URL
  useEffect(() => {
    const url = new URL(window.location.href);
    const path = url.pathname;
    const searchParams = new URLSearchParams(url.search);
    const token = searchParams.get('token');

    console.log("🚀 ~ useEffect ~ path:", path);
    console.log("🚀 ~ useEffect ~ token:", token);

    if (token) {
      setResetToken(token);
      validateResetToken(token);
      // Clean up the URL by removing the token from query params
      window.history.replaceState({}, document.title, "/forgot-password");
    }
  }, []);

  const validateResetToken = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/v1/user/auth/reset-password/${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Invalid or expired token");

      setResetTokenValid(true);
      setEmailSent(true); // Skip email step since we have a valid token
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "This password reset link is invalid or has expired.",
        variant: "destructive",
      });
      navigate('/forgot-password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendResetLink = async () => {
    // Validate email
    if (!email) {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/v1/user/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to send reset link");

      // Success - show same message whether user exists or not (security)
      setEmailSent(true);
      toast({
        title: "Reset Link Sent",
        description: "If an account with that email exists, we've sent a password reset link.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send reset link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    // Validate passwords
    if (!newPassword) {
      setErrors({ ...errors, password: 'Password is required' });
      return;
    }
    if (newPassword.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/v1/user/auth/reset-password/${resetToken}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword,
          confirmPassword: confirmPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to reset password");

      toast({
        title: "Password Reset",
        description: "Your password has been reset successfully. You can now log in with your new password.",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to reset password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#81004D]/10 to-[#fe5182]/10 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md border-0 shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
            className="w-fit p-0 text-[#81004D] dark:text-[#fe5182] hover:bg-transparent mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to login
          </Button>
          <CardTitle className="text-[#81004D] dark:text-[#fe5182]">
            {!emailSent ? "Forgot Password" : resetTokenValid ? "Reset Password" : "Check Your Email"}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {!emailSent ? (
            <>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors({ ...errors, email: '' });
                    }}
                    placeholder="Enter your email"
                    className="pl-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <Button
                onClick={handleSendResetLink}
                className="w-full bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </Button>
            </>
          ) : !resetTokenValid ? (
            <>
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We've sent a password reset link to <span className="font-semibold">{email}</span> if an account exists.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Please check your email and click the link to reset your password.
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Didn't receive an email?
                </p>
                <Button
                  variant="link"
                  onClick={handleSendResetLink}
                  className="p-0 h-auto text-[#81004D] dark:text-[#fe5182] hover:text-[#81004D]/90 dark:hover:text-[#fe5182]/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    'Resend reset link'
                  )}
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Please set your new password below.
                </p>
              </div>

              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setErrors({ ...errors, password: '' });
                    }}
                    placeholder="Enter new password (min 8 characters)"
                    className="pl-10 pr-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setErrors({ ...errors, confirmPassword: '' });
                    }}
                    placeholder="Confirm new password"
                    className="pl-10 pr-10 focus-visible:ring-[#81004D] dark:focus-visible:ring-[#fe5182]"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button
                onClick={handleResetPassword}
                className="w-full bg-gradient-to-r from-[#81004D] to-[#fe5182] hover:from-[#81004D]/90 hover:to-[#fe5182]/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Resetting...
                  </>
                ) : (
                  'Reset Password'
                )}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;