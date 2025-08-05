import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, User, Settings, LogOut, X, Sun, Moon, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Logo from '../assets/icons/Logo.webp';
import { useTheme } from "./ThemeProvider";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = "", onClick }) => {
  const [location] = useLocation();
  const isActive = location === to || location.startsWith(to + "/");

  return (
    <Link href={to}>
      <a
        className={`${isActive
          ? "text-white font-bold hover:text-white underline underline-offset-8"
          : "text-white/80 hover:font-bold hover:text-white"
          } relative px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, className, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center space-x-1 sm:space-x-2 text-white/80 hover:text-white transition-all duration-300 px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg hover:scale-105 text-sm sm:text-base"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {icon}
        <span>{title}</span>
        <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-48 sm:w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
          style={{ zIndex: 99999 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const ProfileDropdown: React.FC = () => {
  const { user, logoutUser } = useAuth();
  const isLoggedIn = !!user;
  const userType = "user";

  if (!isLoggedIn) {
    return (
      <div className="hidden lg:flex items-center space-x-2 sm:space-x-3">
        <Link href="/login">
          <Button
            size='sm'
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Login
          </Button>
        </Link>
        <Link href="/register/jobseeker">
          <Button
            size='sm'
            variant="outline"
            className="bg-gradient-to-r from-[#81004D] to-[#DB0083] text-white hover:text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 border-none shadow-lg"
          >
            Register
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <Dropdown
      title=""
      className="ml-2"
      icon={
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
        </div>
      }
    >
      <div className="py-2">
        <Link href={`/profile/${userType}`}>
          <a className="flex items-center space-x-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </a>
        </Link>
        <Link href={`/dashboard/job-seeker`}>
          <a className="flex items-center space-x-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </a>
        </Link>
        <Link href="/settings">
          <a className="flex items-center space-x-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </a>
        </Link>
        <hr className="my-1 border-slate-200 dark:border-slate-700" />
        <button onClick={() => logoutUser()} className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left transition-all duration-200 cursor-pointer">
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </Dropdown>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const [location] = useLocation();
  const isActive = location === to;

  return (
    <Link href={to}>
      <a
        className={`${isActive
          ? "text-white font-semibold bg-white/20 border-l-4 border-white/50"
          : "text-white/80 hover:text-white"
          } block py-3 px-4 text-base hover:bg-white/10 transition-all duration-200`}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const navigationItems = [
    { href: "/home", label: "Home" },
    { href: "/top5", label: "Top 5%" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/hire-developer", label: "Hire Developer" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gradient-to-r from-[#3a0023] to-[#000000] shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/home">
              <div className="flex w-[11rem] items-center space-x-3">
                <img srcSet={Logo} alt='logo' className='w-full' />
              </div>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigationItems.map((item) => (
                <NavLink key={item.href} to={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                ) : (
                  <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                )}
              </Button> */}
              <ProfileDropdown />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                ) : (
                  <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                )}
              </Button> */}

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    aria-label="Toggle menu"
                  >
                    {isOpen ? (
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    ) : (
                      <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    )}
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0 bg-gradient-to-br from-[#81004D] to-[#DB0083] backdrop-blur-lg border-l border-white/20">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-white/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                          <span className="text-white font-bold text-sm">T</span>
                        </div>
                        <span className="text-lg font-bold text-white">TopSkyll</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto py-2">
                      {navigationItems.map((item) => (
                        <MobileNavLink key={item.href} to={item.href} onClick={closeMobileMenu}>
                          {item.label}
                        </MobileNavLink>
                      ))}
                    </div>

                    <div className="p-4 border-t border-white/20 space-y-3">
                      <Link href="/register/jobseeker">
                        <Button
                          variant="outline"
                          className="w-full mb-2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm rounded-full transition-all duration-300"
                          onClick={closeMobileMenu}
                        >
                          Register
                        </Button>
                      </Link>
                      <Link href="/login">
                        <Button
                          className="w-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm rounded-full transition-all duration-300"
                          onClick={closeMobileMenu}
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="h-16" /> Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;