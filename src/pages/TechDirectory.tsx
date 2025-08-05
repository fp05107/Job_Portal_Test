import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import FrontendTechStack from "./FrontendTechStack";

// Enhanced tech categories with icons and colors
const techCategories = [
    {
        id: "frontend",
        name: "Frontend Development",
        icon: "💻",
        color: "from-blue-500 to-blue-600",
        technologies: [
            { name: "React", icon: "⚛️", count: 1245 },
            { name: "Vue.js", icon: "🖖", count: 872 },
            { name: "Angular", icon: "🅰️", count: 756 },
            { name: "Svelte", icon: "✨", count: 342 },
            { name: "Next.js", icon: "⏭️", count: 987 },
            { name: "TypeScript", icon: "🔵", count: 1532 },
        ],
    },
    {
        id: "backend",
        name: "Backend Development",
        icon: "🖥️",
        color: "from-purple-500 to-purple-600",
        technologies: [
            { name: "Node.js", icon: "🟢", count: 1876 },
            { name: "Python", icon: "🐍", count: 2145 },
            { name: "Django", icon: "🎸", count: 765 },
            { name: "Ruby on Rails", icon: "💎", count: 543 },
            { name: "Java", icon: "☕", count: 1234 },
            { name: "Spring Boot", icon: "🌱", count: 876 },
        ],
    },
    {
        id: "mobile",
        name: "Mobile Development",
        icon: "📱",
        color: "from-green-500 to-green-600",
        technologies: [
            { name: "React Native", icon: "⚛️", count: 987 },
            { name: "Flutter", icon: "🦋", count: 765 },
            { name: "Swift", icon: "🍏", count: 654 },
            { name: "Kotlin", icon: "🟣", count: 543 },
            { name: "Android", icon: "🤖", count: 876 },
            { name: "iOS", icon: "", count: 765 },
        ],
    },
    {
        id: "devops",
        name: "DevOps & Cloud",
        icon: "☁️",
        color: "from-orange-500 to-orange-600",
        technologies: [
            { name: "AWS", icon: "☁️", count: 1432 },
            { name: "Docker", icon: "🐳", count: 1654 },
            { name: "Kubernetes", icon: "⚓", count: 987 },
            { name: "Azure", icon: "🔷", count: 876 },
            { name: "GCP", icon: "🔶", count: 765 },
            { name: "Terraform", icon: "🏗️", count: 654 },
        ],
    },
    {
        id: "database",
        name: "Database",
        icon: "🗄️",
        color: "from-red-500 to-red-600",
        technologies: [
            { name: "MongoDB", icon: "🍃", count: 987 },
            { name: "PostgreSQL", icon: "🐘", count: 876 },
            { name: "MySQL", icon: "🐬", count: 765 },
            { name: "Redis", icon: "🔴", count: 654 },
            { name: "Firebase", icon: "🔥", count: 543 },
            { name: "SQL", icon: "📊", count: 1432 },
        ],
    },
    {
        id: "design",
        name: "UI/UX Design",
        icon: "🎨",
        color: "from-pink-500 to-pink-600",
        technologies: [
            { name: "Figma", icon: "✏️", count: 1432 },
            { name: "Adobe XD", icon: "🎨", count: 876 },
            { name: "UI Design", icon: "🖌️", count: 987 },
            { name: "UX Design", icon: "🎯", count: 876 },
            { name: "Prototyping", icon: "🔄", count: 654 },
            { name: "User Research", icon: "🔍", count: 543 },
        ],
    },
];

// Enhanced profile data
const techProfiles = [
    {
        id: 1,
        name: "Rajesh Kumar",
        title: "Senior React Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        location: "Mumbai, India",
        hourlyRate: "$45/hr",
        rating: 4.9,
        totalReviews: 127,
        skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL", "Jest"],
        bio: "8+ years building scalable React applications for global clients. Specialized in performance optimization and complex state management.",
        verified: true,
        responseTime: "1 hour",
        availability: "Available now",
        experience: "8 years",
        projects: 42,
        techStack: "Frontend",
        badge: "Top Rated",
    },
    {
        id: 2,
        name: "Priya Sharma",
        title: "UX/UI Designer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=100&h=100&fit=crop&crop=face",
        location: "Bangalore, India",
        hourlyRate: "$38/hr",
        rating: 4.8,
        totalReviews: 89,
        skills: ["Figma", "User Research", "Prototyping", "UI Design", "UX Design", "Design Systems"],
        bio: "Creating beautiful and intuitive user experiences for SaaS products. 6+ years in design thinking and user-centered design.",
        verified: true,
        responseTime: "2 hours",
        availability: "Available now",
        experience: "6 years",
        projects: 35,
        techStack: "Design",
        badge: "Expert",
    },
    {
        id: 3,
        name: "Amit Patel",
        title: "DevOps Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        location: "Pune, India",
        hourlyRate: "$42/hr",
        rating: 4.9,
        totalReviews: 95,
        skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform", "Cloud Architecture"],
        bio: "Infrastructure automation specialist with 7+ years in cloud technologies. Helped scale startups to handle millions of users.",
        verified: true,
        responseTime: "30 minutes",
        availability: "Available now",
        experience: "7 years",
        projects: 28,
        techStack: "DevOps",
        badge: "Top Rated",
    },
    {
        id: 4,
        name: "Neha Gupta",
        title: "React Native Developer",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
        location: "Hyderabad, India",
        hourlyRate: "$40/hr",
        rating: 4.7,
        totalReviews: 64,
        skills: ["React Native", "TypeScript", "Redux", "Android", "iOS", "Firebase"],
        bio: "Cross-platform mobile app developer with 5+ years experience building performant apps for startups and enterprises.",
        verified: true,
        responseTime: "1 hour",
        availability: "Available now",
        experience: "5 years",
        projects: 19,
        techStack: "Mobile",
        badge: "Rising Talent",
    },
    {
        id: 5,
        name: "Vikram Singh",
        title: "Python Developer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        location: "Delhi, India",
        hourlyRate: "$50/hr",
        rating: 4.8,
        totalReviews: 73,
        skills: ["Python", "Django", "Flask", "REST APIs", "PostgreSQL", "AWS"],
        bio: "Backend developer with 5+ years experience building scalable APIs and microservices. Worked with Fortune 500 companies.",
        verified: true,
        responseTime: "2 hours",
        availability: "Available now",
        experience: "5 years",
        projects: 31,
        techStack: "Backend",
        badge: "Expert",
    },
    {
        id: 6,
        name: "Arjun Menon",
        title: "Vue.js Specialist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        location: "Chennai, India",
        hourlyRate: "$43/hr",
        rating: 4.9,
        totalReviews: 58,
        skills: ["Vue.js", "Nuxt.js", "TypeScript", "Vuex", "Vuetify", "Jest"],
        bio: "Vue.js expert with 6+ years building complex single-page applications. Contributor to open-source Vue ecosystem.",
        verified: true,
        responseTime: "1 hour",
        availability: "Available now",
        experience: "6 years",
        projects: 27,
        techStack: "Frontend",
        badge: "Top Rated",
    },
];

function TechProfileCard({ profile }) {
    return (
        <Card className="hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 group">
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="relative shrink-0">
                        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 group-hover:scale-105 transition-transform duration-200">
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                {profile.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                        {profile.verified && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                                <i className="fas fa-check text-white text-xs"></i>
                            </div>
                        )}
                    </div>

                    {/* Profile Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                        {profile.name}
                                    </h3>
                                    {profile.badge && (
                                        <Badge variant="premium" className="text-xs">
                                            {profile.badge}
                                        </Badge>
                                    )}
                                </div>

                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                    {profile.title}
                                </p>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                                    <span className="flex items-center gap-1">
                                        <i className="fas fa-map-marker-alt text-xs"></i>
                                        <span>{profile.location}</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                                        <span>{profile.rating} ({profile.totalReviews} reviews)</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <i className="fas fa-briefcase text-xs"></i>
                                        <span>{profile.experience} experience</span>
                                    </span>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                    {profile.hourlyRate}
                                </div>
                                <Badge variant="success" className="mt-1">
                                    {profile.availability}
                                </Badge>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                            {profile.bio}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {profile.skills.slice(0, 6).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <i className="fas fa-clock text-xs"></i>
                                <span>Responds in {profile.responseTime}</span>
                            </div>

                            <div className="flex gap-2 w-full sm:w-auto">
                                <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                                    <i className="far fa-heart mr-2"></i>
                                    Save
                                </Button>
                                <Button size="sm" className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-purple-600">
                                    Hire Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function TechCategoryCard({ category, selectedTech, onSelectTech }) {
    return (
        <div className="border rounded-xl overflow-hidden border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-200">
            <div className={`bg-gradient-to-r ${category.color} p-4`}>
                <h3 className="font-semibold text-white flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    {category.name}
                </h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2">
                {category.technologies.map((tech) => (
                    <Button
                        key={tech.name}
                        variant={selectedTech === tech.name ? "default" : "ghost"}
                        className={`justify-start text-sm h-auto py-2 px-3 transition-all ${selectedTech === tech.name ? "bg-slate-100 dark:bg-slate-800" : ""}`}
                        onClick={() => onSelectTech(tech.name)}
                    >
                        <span className="mr-2">{tech.icon}</span>
                        <span className="truncate">{tech.name}</span>
                        <span className="ml-auto text-xs text-slate-500 dark:text-slate-400">
                            {tech.count.toLocaleString()}
                        </span>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default function TechDirectory() {
    const [location, setLocation] = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTech, setSelectedTech] = useState("");
    const [experienceFilter, setExperienceFilter] = useState("all");
    const [rateFilter, setRateFilter] = useState("all");
    const [activeCategory, setActiveCategory] = useState("all");

    // Get tech from URL if present
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const techParam = params.get("tech");
        if (techParam) {
            setSelectedTech(techParam);
        }
    }, [location]);

    const filteredProfiles = techProfiles.filter((profile) => {
        // Filter by selected technology
        if (selectedTech && !profile.skills.includes(selectedTech)) {
            return false;
        }

        // Filter by active category
        if (activeCategory !== "all" && profile.techStack.toLowerCase() !== activeCategory.toLowerCase()) {
            return false;
        }

        // Filter by search query
        if (searchQuery && !profile.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !profile.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !profile.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))) {
            return false;
        }

        // Filter by experience
        if (experienceFilter !== "all") {
            const expYears = parseInt(profile.experience);
            if (experienceFilter === "junior" && expYears >= 3) return false;
            if (experienceFilter === "mid" && (expYears < 3 || expYears >= 7)) return false;
            if (experienceFilter === "senior" && expYears < 7) return false;
        }

        // Filter by rate
        if (rateFilter !== "all") {
            const rate = parseInt(profile.hourlyRate.replace("$", "").replace("/hr", ""));
            if (rateFilter === "low" && rate >= 30) return false;
            if (rateFilter === "medium" && (rate < 30 || rate >= 45)) return false;
            if (rateFilter === "high" && rate < 45) return false;
        }

        return true;
    });

    const handleSelectTech = (tech) => {
        setSelectedTech(tech);
        setLocation(`/tech?tech=${encodeURIComponent(tech)}`);
    };

    const clearFilters = () => {
        setSelectedTech("");
        setSearchQuery("");
        setExperienceFilter("all");
        setRateFilter("all");
        setActiveCategory("all");
        setLocation("/tech");
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Find Top Tech Talent
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Browse our exclusive network of pre-vetted Indian tech professionals
                    </p>

                    <div className="max-w-2xl mx-auto relative">
                        <Input
                            type="text"
                            placeholder="Search by skill, technology, or role..."
                            className="pl-12 pr-4 py-6 text-base rounded-xl border-0 shadow-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"></i>
                        <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-700 to-purple-700">
                            Search
                        </Button>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <div className="max-w-7xl mx-auto px-4 -mt-8 mb-8">
                <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex space-x-2">
                        <Button
                            variant={activeCategory === "all" ? "default" : "outline"}
                            className={`whitespace-nowrap rounded-full ${activeCategory === "all" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}`}
                            onClick={() => setActiveCategory("all")}
                        >
                            All Categories
                        </Button>
                        {techCategories.map((category) => (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                className={`whitespace-nowrap rounded-full ${activeCategory === category.id ? `bg-gradient-to-r ${category.color} text-white` : ""}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <FrontendTechStack />
            
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 pb-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-1/4 space-y-6">
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">
                                Filter Professionals
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Technology Specialization
                                    </label>
                                    <Input
                                        placeholder="Filter by technology..."
                                        value={selectedTech}
                                        onChange={(e) => setSelectedTech(e.target.value)}
                                        className="pl-3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Experience Level
                                    </label>
                                    <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select experience" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="all">All Experience Levels</SelectItem>
                                                <SelectItem value="junior">Junior (0-3 years)</SelectItem>
                                                <SelectItem value="mid">Mid-Level (3-7 years)</SelectItem>
                                                <SelectItem value="senior">Senior (7+ years)</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Hourly Rate
                                    </label>
                                    <Select value={rateFilter} onValueChange={setRateFilter}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select rate range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="all">All Rates</SelectItem>
                                                <SelectItem value="low">Below $30/hr</SelectItem>
                                                <SelectItem value="medium">$30 - $45/hr</SelectItem>
                                                <SelectItem value="high">Above $45/hr</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {(selectedTech || searchQuery || experienceFilter !== "all" || rateFilter !== "all" || activeCategory !== "all") && (
                                    <Button
                                        variant="outline"
                                        className="w-full mt-2"
                                        onClick={clearFilters}
                                    >
                                        Clear All Filters
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">
                                Popular Technologies
                            </h3>

                            <div className="space-y-4">
                                {techCategories.map((category) => (
                                    <TechCategoryCard
                                        key={category.id}
                                        category={category}
                                        selectedTech={selectedTech}
                                        onSelectTech={handleSelectTech}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Results */}
                    <div className="w-full lg:w-3/4">
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 mb-6 border border-slate-200 dark:border-slate-700">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                        {selectedTech
                                            ? `${selectedTech} Professionals`
                                            : activeCategory !== "all"
                                                ? `${techCategories.find(c => c.id === activeCategory)?.name || ''} Professionals`
                                                : "Top Tech Professionals"}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Showing {filteredProfiles.length} of {techProfiles.length} professionals
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">Sort by:</span>
                                    <Select defaultValue="relevance">
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Sort by" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="relevance">Relevance</SelectItem>
                                                <SelectItem value="rating">Highest Rating</SelectItem>
                                                <SelectItem value="experience">Most Experience</SelectItem>
                                                <SelectItem value="rate-low">Rate (Low to High)</SelectItem>
                                                <SelectItem value="rate-high">Rate (High to Low)</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {selectedTech && (
                            <div className="mb-6 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary">
                                        {selectedTech}
                                    </Badge>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                        Showing professionals with this specialization
                                    </span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleSelectTech("")}
                                    className="text-blue-600 dark:text-blue-400"
                                >
                                    Clear filter
                                </Button>
                            </div>
                        )}

                        {filteredProfiles.length > 0 ? (
                            <div className="space-y-6">
                                {filteredProfiles.map((profile) => (
                                    <TechProfileCard key={profile.id} profile={profile} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-12 text-center border border-slate-200 dark:border-slate-700">
                                <div className="text-5xl mb-4 text-slate-300 dark:text-slate-600">🔍</div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                    No professionals found
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Try adjusting your search or filters
                                </p>
                                <Button onClick={clearFilters} className="bg-gradient-to-r from-blue-600 to-purple-600">
                                    Reset All Filters
                                </Button>
                            </div>
                        )}

                        {filteredProfiles.length > 0 && (
                            <div className="mt-8 flex justify-center">
                                <Button variant="outline" className="mx-auto">
                                    Load More Professionals
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}