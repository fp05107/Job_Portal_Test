import { Link } from "wouter";
import Logo from '../assets/icons/Logo.webp';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3a0023] to-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Hire Talent Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Hire Talent</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/hire-developers" className="hover:text-white transition-colors">Hire Freelance Developers</Link></li>
              <li><Link href="/hire-designers" className="hover:text-white transition-colors">Hire Freelance Data Scientist</Link></li>
            </ul>
          </div>

          {/* Featured Skills Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Featured Skills</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/developers/software" className="hover:text-white transition-colors">Software Developers</Link></li>
              <li><Link href="/developers/web" className="hover:text-white transition-colors">Web Developers</Link></li>
              <li><Link href="/developers/mobile" className="hover:text-white transition-colors">Mobile App Developers</Link></li>
              <li><Link href="/developers/ios" className="hover:text-white transition-colors">iOS Developers</Link></li>
              <li><Link href="/engineers/ai" className="hover:text-white transition-colors">AI Engineers</Link></li>
              <li><Link href="/developers/nodejs" className="hover:text-white transition-colors">Node.js Developers</Link></li>
              <li><Link href="/developers/php" className="hover:text-white transition-colors">PHP Developers</Link></li>
              <li><Link href="/developers/reactjs" className="hover:text-white transition-colors">React.js Developers</Link></li>
              <li><Link href="/developers/angularjs" className="hover:text-white transition-colors">AngularJS Developers</Link></li>
              <li><Link href="/developers/python" className="hover:text-white transition-colors">Python Developers</Link></li>
            </ul>
          </div>

          {/* Skills by Type Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Skills by Type</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/developers/fullstack" className="hover:text-white transition-colors">Full-stack Developers</Link></li>
              <li><Link href="/developers/frontend" className="hover:text-white transition-colors">Front-end Developers</Link></li>
              <li><Link href="/designers/ux" className="hover:text-white transition-colors">Back-end Developers</Link></li>
              <li><Link href="/designers/ui" className="hover:text-white transition-colors">ML Engineer</Link></li>
              <li><Link href="/designers/web" className="hover:text-white transition-colors">Web Designers</Link></li>
              <li><Link href="/designers/mobile" className="hover:text-white transition-colors">Android App Developers</Link></li>
              <li><Link href="/designers/graphic" className="hover:text-white transition-colors">Devops Engineer</Link></li>
              <li><Link href="/designers/brand" className="hover:text-white transition-colors"> Cross-Platform Mobile Developer</Link></li>
              <li><Link href="/experts/seo" className="hover:text-white transition-colors">Data Scientist</Link></li>
              <li><Link href="/creators/content" className="hover:text-white transition-colors">Data Analyst</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">About</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/why-topskyll" className="hover:text-white transition-colors">Why TopSkyll</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press Center</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Logo and Social */}
        <div className="border-t border-[#ff98d660] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="flex items-center space-x-3">
                <div className="flex w-[11rem] items-center space-x-3">
                          <img srcSet={Logo} alt='logo' className='w-full' />
                      </div>
                <div className="flex flex-col">
                  <span className="text-xs text-blue-200">India's Top 5% Talent, On Demand®</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#81004D] to-[#fe5182] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="mt-8 pt-6 border-t border-[#ff98d660] flex flex-col md:flex-row items-center justify-between text-sm text-blue-200">
            <div className="mb-4 md:mb-0">
              <span>Copyright 2024 - 2025 TopSkyll, LLC</span>
              <span className="mx-2">|</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Website Terms</Link>
              <span className="mx-2">|</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>

            <div className="text-blue-200">
              🇮🇳 Made in India for Global Success
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}