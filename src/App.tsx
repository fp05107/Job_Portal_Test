import { Route, Switch, useLocation } from "wouter";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// General pages
import Home from "./pages/Home";
import About from "./pages/info-pages/About";
import ContactUs from "./pages/info-pages/ContactUs";
import Blog from "./pages/blog/Blog";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/info-pages/PrivacyPolicy";
import CookiePolicy from "./pages/info-pages/CookiePolicy";
import Security from "./pages/Security";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";

// Job pages
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import JobsByCategory from "./pages/JobsByCategory";
import TechCategories from "./pages/TechCategories";

// Directory and talent pages
import TechDirectory from "./pages/TechDirectory";
import UserDirectory from "./pages/UserDirectory";
import TalentCategory from "./pages/TalentCategory";
import Top5PercentPage from "./pages/Top5PercentPage";

// User pages
import { UserProfile } from "./pages/user/UserProfile";
import JobSeekerRegistration from "./pages/auth/JobSeekerRegistration";

// Employer pages
import { EmployerProfile } from "./pages/EmployerProfile";
import EmployerRegistration from "./pages/auth/EmployerRegistration";
import PostJob from "./pages/PostJob";

// Auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Developers from "./pages/hire/Developers";
import Designers from "./pages/hire/Designers";
import MarketingExperts from "./pages/hire/MarketingExperts";
import ProductManagers from "./pages/hire/ProductManagers";
import ProjectManagers from "./pages/hire/ProjectManagers";
import ManagementConsultants from "./pages/hire/ManagementConsultants";
import Team from "./pages/hire/Team";
import HireDevelopers from "./pages/HireDevelopers";
import SkillDetails from "./pages/SkillDetails";
import { AuthProvider } from "./context/AuthContext";
import EditProfile from "./pages/user/EditProfile";
import BlogPost from "./pages/blog/BlogPost";
import { Component } from "lucide-react";
import HireTalent from "./pages/HireTalent";
import HiringPage from "./pages/HiringPage";
import LandingPage from "./pages/LandingPage";
import NewNavbar from "./components/NewNavbar";
import ScrollToTop from "./components/ScrollToTop";
import ReactDevelopersPage from "./components/users_page/Frontend/ReactDevelopersPage";
import ReactDevs from "./components/users_page/Frontend/ReactDevs";
import WhyTopSkyll from "./pages/info-pages/WhyTopskyll";
import Careers from "./pages/info-pages/Carrers";
import TermsAndConditions from "./pages/info-pages/TermsAndConditions";
import ForgotPassword from "./pages/auth/ForgotPassword";
import JobSeekerDashboard from "./pages/user/JobSeekerDashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [location] = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-background font-sans antialiased">
              <Navbar />
            <main>
              <Switch>
                {/* General */}
                <Route path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/blog/:slug">
                  {(params) => {
                    // const { data: post, isLoading } = useQuery({
                    //   queryKey: ['blog', params.slug],
                    //   queryFn: () => fetchBlogPostBySlug(params.slug),
                    // });

                    // if (isLoading) return <div>Loading...</div>;
                    // if (!post) return <div>Post not found</div>;

                    let post = {
                      id: '6',
                      slug: 'career-change-guide',
                      title: 'The Complete Guide to Changing Careers',
                      excerpt: 'Step-by-step advice for making a successful career transition at any stage of your professional life.',
                      author: {
                        name: 'Alex Wong',
                        avatar: '/avatars/alex-wong.jpg'
                      },
                      publishedAt: '2023-12-15T13:10:00Z',
                      readTime: '8 min read',
                      category: 'Career Growth',
                      imageUrl: '/images/career-change.jpg',
                      views: 1687,
                      likes: 95,
                      featured: false,
                      tags: ['career-change', 'transition', 'growth']
                    }

                    return <BlogPost post={post} />;
                  }}
                </Route>
                <Route path="/community" component={Community} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/faq" component={FAQ} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/careers" component={Careers} />
                <Route path="/terms-and-conditions" component={TermsAndConditions} />
                <Route path="/cookie-policy" component={CookiePolicy} />
                <Route path="/why-topskyll" component={WhyTopSkyll} />
                <Route path="/security" component={Security} />
                <Route path="/help-center" component={HelpCenter} />
                <Route path="/hire-developer" component={HireDevelopers} />
                <Route path="/skill-details" component={SkillDetails} />
                {/* <Route path="/hire/developers" component={Developers} /> */}
                <Route path="/hire/designers" component={Designers} />
                <Route path="/hire/marketing-experts" component={MarketingExperts} />
                <Route path="/hire/product-managers" component={ProductManagers} />
                <Route path="/hire/project-managers" component={ProjectManagers} />
                <Route path="/hire/management-consultants" component={ManagementConsultants} />
                <Route path="/hire/team" component={Team} />

                {/* Dashboard */}
                <Route path="/dashboard/job-seeker" component={JobSeekerDashboard} />

                {/* Jobs */}
                <Route path="/jobs" component={Jobs} />
                <Route path="/jobs/:id" component={JobDetails} />
                <Route path="/jobs-by-category" component={JobsByCategory} />
                <Route path="/tech-categories" component={TechCategories} />
                <Route path="/top5" component={Top5PercentPage} />

                {/* Directory and Talent */}
                <Route path="/user-directory" component={TechDirectory} />
                <Route path="/directory" component={UserDirectory} />
                <Route path="/talents/:category" component={TalentCategory} />
                {/* <Route path="/profile/:id" component={ProfileDetails} />  */}

                {/* User Routes */}
                <Route path="/profile/user" component={UserProfile} />
                <Route path="/edit-profile/user" component={EditProfile} />

                {/* Employer Routes */}
                <Route path="/profile/employer" component={EmployerProfile} />
                <Route path="/employer/post-job" component={PostJob} />
                <Route path="/hire" component={HireTalent} />
                <Route path="/hire/:skill">{(params: { skill: string }) => <HiringPage skill={params.skill} />}</Route>

                {/* Auth */}
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                {/* <Route path="/register/jobseeker" component={JobSeekerRegistration} /> */}
                {/* <Route path="/register/employer" component={EmployerRegistration} /> */}
                {/* <Route path="/signup" component={Signup} /> */}
                <Route path="/register/jobseeker" component={JobSeekerRegistration} />

                {/* Frontend Developer screens */}
                <Route path="/react-developers" component={ReactDevs} />

                {/* 404 */}
                <Route component={NotFound} />
              </Switch>
            </main>
              <Footer />
            <Toaster />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;