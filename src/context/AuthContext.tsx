import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { baseUrl } from '@/config/api';

// Create the auth context
const AuthContext = createContext<any>({
  user: null,
  isLoading: true,
  error: null,
  login: async () => { throw new Error('Not implemented'); },
  resetpassword: async () => { throw new Error('Not implemented'); },
  register: async () => { throw new Error('Not implemented'); },
  logout: async () => { throw new Error('Not implemented'); },
  signInWithGoogle: async () => { throw new Error('Not implemented'); },
  updateUser: async () => { throw new Error('Not implemented'); },
  resendVerificationEmail: async () => { throw new Error('Not implemented'); },
  verifyEmail: async () => { throw new Error('Not implemented'); },
  isEmailVerified: true
});

// Helper function to set the authentication token
export const setAuthToken = (token: string): void => {
  localStorage.setItem('top_skyll_auth_token', token);
};

// Helper function to get the authentication token
export const getAuthToken = (): string | null => {
  return localStorage.getItem('top_skyll_auth_token');
};

// Helper function to remove the authentication token (for logout)
export const removeAuthToken = (): void => {
  localStorage.removeItem('top_skyll_auth_token');
};

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Function to fetch the current user
  const fetchCurrentUser = async () => {
    const token = getAuthToken();

    try {
      const res = await fetch(`${baseUrl}/api/v1/user/profile`, {
        credentials: 'include',
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        const userData = await res.json();
        setUser(userData?.data);
        setIsEmailVerified(userData?.user?.emailVerified || false);
      } else {
        setUser(null);
        setIsEmailVerified(false);
      }
    } catch (err) {
      console.error('Error fetching current user:', err);
      setUser(null);
      setIsEmailVerified(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Check for user authentication on initial load
  useEffect(() => {
    const token = getAuthToken()
    if (token) {
      fetchCurrentUser();
    }
  }, []);

  const linkedInLoginUser = async (user: any, token: string) => {
    setIsLoading(true)
    setError(null)
    try {
      setAuthToken(token);
      setUser(user);
      return true
    } catch (err: any) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);

    }
  }

  // Login with email/password
  const loginUser = async (email: string, password: string): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await apiRequest('POST', `${baseUrl}/api/v1/user/auth/login`, { email, password });
      const userData = await res.json();
      setAuthToken(userData?.token);
      await fetchCurrentUser(); // Refresh user data after login
      return userData;
    } catch (err: any) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetpassword = async (email: string, password: string, confirmPassword: string): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await apiRequest('POST', `/api/v1/auth/reset-password`, {
        email,
        newPassword: password,
        confirmPassword: confirmPassword
      });
      const data = await res.json();
      return data;
    } catch (err: any) {
      setError(err.message || 'Reset password failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Register a new user
  const registerUser = async (userData: any): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      // ✅ Fixed: Use correct route /api/v1/auth/signup
      const res = await apiRequest('POST', `${baseUrl}/api/v1/user/auth/register`, userData);
      const newUser = await res.json();

      // Set user and token after registration
      setUser(newUser?.user);
      setAuthToken(newUser?.token);

      // Set email verification status (should be false for new users)
      setIsEmailVerified(false);

      return newUser;
    } catch (err: any) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logoutUser = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await apiRequest('POST', `/api/v1/auth/logout`, undefined);
    } catch (err: any) {
      console.error('Logout error:', err);
    } finally {
      setIsLoading(false);
      setUser(null);
      setIsEmailVerified(false);
      removeAuthToken();
      await queryClient.clear();
    }
  };

  // Update user profile
  const updateUser = async (userData: Partial<any>): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const token = getAuthToken();
      const res = await fetch(`${baseUrl}/api/v1/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(userData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Update failed');
      }

      const updatedUser = await res.json();
      setUser(updatedUser?.data);
      return updatedUser;
    } catch (err: any) {
      setError(err.message || 'Update failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Fixed: Verify email with correct route
  const verifyEmail = async (token: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await apiRequest('GET', `/api/v1/auth/verify-email/${token}`);
      const data = await response.json();

      if (data.success) {
        setIsEmailVerified(true);

        // ✅ Now set the user and token after successful verification
        if (data.user && data.token) {
          setUser(data.user);
          setAuthToken(data.token);
        } else {
          // Fetch current user data
          await fetchCurrentUser();
        }
      }

      // if (data.success) {
      //   setIsEmailVerified(true);
      //   // Refresh user data to get updated emailVerified status
      //   await fetchCurrentUser();
      // }
    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Fixed: Resend verification email with correct route and email parameter
  const resendVerificationEmail = async (email?: string): Promise<void> => {
    try {
      setIsLoading(true);

      // Use provided email or current user's email
      const emailToUse = email || user?.email;

      if (!emailToUse) {
        throw new Error('Email is required to resend verification');
      }

      const response = await apiRequest('POST', '/api/v1/auth/resend-verification', {
        email: emailToUse
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to resend verification email');
      }

    } catch (error: any) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    error,
    loginUser,
    linkedInLoginUser,
    resetpassword,
    registerUser,
    logoutUser,
    updateUser,
    verifyEmail,
    resendVerificationEmail,
    isEmailVerified
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);