import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Link2, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const employer = {
    companyName: "Acme Corp",
    logo: "https://via.placeholder.com/100x100.png?text=Acme+Logo",
    isVerified: true,
    industry: "Technology",
    companySize: "200-500",
    companyType: "Private",
    foundedYear: 2012,
    activeJobPosts: 2,
    companyDescription:
        "Acme Corp is a leading provider of cutting-edge technology solutions focused on innovation, growth, and sustainability. We build software products that help teams collaborate better and move faster.",
    headquarters: {
        city: "San Francisco",
        state: "CA",
        country: "USA",
        isRemote: true,
    },
    contactPerson: {
        firstName: "Jane",
        lastName: "Doe",
        title: "Talent Acquisition Lead",
        email: "jane.doe@acmecorp.com",
        phone: "+1 555-123-4567",
    },
    website: "https://www.acmecorp.com",
    linkedIn: "https://linkedin.com/company/acme-corp",
    twitter: "https://twitter.com/acmecorp",
    facebook: "https://facebook.com/acmecorp",
    instagram: "https://instagram.com/acmecorp",
    companyImages: [
        "https://via.placeholder.com/400x300.png?text=Office+1",
        "https://via.placeholder.com/400x300.png?text=Team+Photo",
        "https://via.placeholder.com/400x300.png?text=Office+2",
    ],
};

export function EmployerProfile() {
    const initials = employer.companyName.split(" ")
        .map((word: string) => word.charAt(0))
        .join("");

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Company Summary */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border border-slate-200 dark:border-slate-700">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <Avatar className="w-24 h-24">
                                        <AvatarImage src={employer.logo} alt={employer.companyName} />
                                        <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl">
                                            {initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    {employer.isVerified && (
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <Check className="text-white w-3 h-3" />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                                        {employer.companyName}
                                    </h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-400">
                                        {employer.industry}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                                    <MapPin className="w-4 h-4" />
                                    <span>
                                        {employer.headquarters.city}, {employer.headquarters.country}
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                                    <Users className="w-4 h-4" />
                                    <span>
                                        {employer.companySize} employees • {employer.companyType}
                                    </span>
                                </div>

                                <div className="w-full pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                                Founded
                                            </div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                                {employer.foundedYear || "N/A"}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                                Active Jobs
                                            </div>
                                            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                                {employer.activeJobPosts}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full space-y-3">
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                        Post a Job
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Contact Company
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Card */}
                    <Card className="border border-slate-200 dark:border-slate-700">
                        <CardHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                Contact Information
                            </h3>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                                        {employer.contactPerson.firstName}{" "}
                                        {employer.contactPerson.lastName}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {employer.contactPerson.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Email
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300">
                                        {employer.contactPerson.email}
                                    </p>
                                </div>
                                {employer.contactPerson.phone && (
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            Phone
                                        </p>
                                        <p className="text-slate-700 dark:text-slate-300">
                                            {employer.contactPerson.phone}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Links Card */}
                    {(employer.website ||
                        employer.linkedIn ||
                        employer.twitter ||
                        employer.facebook ||
                        employer.instagram) && (
                            <Card className="border border-slate-200 dark:border-slate-700">
                                <CardHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                        Company Links
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-3">
                                        {employer.website && (
                                            <div className="flex items-center">
                                                <Link2 className="w-4 h-4 mr-2 text-slate-500" />
                                                <a
                                                    href={employer.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Website
                                                </a>
                                            </div>
                                        )}
                                        {employer.linkedIn && (
                                            <div className="flex items-center">
                                                <Link2 className="w-4 h-4 mr-2 text-slate-500" />
                                                <a
                                                    href={employer.linkedIn}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    LinkedIn
                                                </a>
                                            </div>
                                        )}
                                        {employer.twitter && (
                                            <div className="flex items-center">
                                                <Link2 className="w-4 h-4 mr-2 text-slate-500" />
                                                <a
                                                    href={employer.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Twitter
                                                </a>
                                            </div>
                                        )}
                                        {employer.facebook && (
                                            <div className="flex items-center">
                                                <Link2 className="w-4 h-4 mr-2 text-slate-500" />
                                                <a
                                                    href={employer.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Facebook
                                                </a>
                                            </div>
                                        )}
                                        {employer.instagram && (
                                            <div className="flex items-center">
                                                <Link2 className="w-4 h-4 mr-2 text-slate-500" />
                                                <a
                                                    href={employer.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    Instagram
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                </div>

                {/* Right Column - Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                    {/* About Card */}
                    <Card className="border border-slate-200 dark:border-slate-700">
                        <CardHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                About {employer.companyName}
                            </h3>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-700 dark:text-slate-300">
                                {employer.companyDescription}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Company Images */}
                    {employer.companyImages && employer.companyImages.length > 0 && (
                        <Card className="border border-slate-200 dark:border-slate-700">
                            <CardHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                    Company Gallery
                                </h3>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {employer.companyImages.map((image: any, index: number) => (
                                        <div
                                            key={index}
                                            className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={image}
                                                alt={`${employer.companyName} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Location Card */}
                    <Card className="border border-slate-200 dark:border-slate-700">
                        <CardHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                Location
                            </h3>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-start">
                                <div className="mr-4 mt-1">
                                    <MapPin className="w-5 h-5 text-slate-500" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                                        Headquarters
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300">
                                        {employer.headquarters.city && (
                                            <>{employer.headquarters.city}, </>
                                        )}
                                        {employer.headquarters.state && (
                                            <>{employer.headquarters.state}, </>
                                        )}
                                        {employer.headquarters.country}
                                    </p>
                                    {employer.headquarters.isRemote && (
                                        <div className="mt-2">
                                            <Badge variant="outline" className="text-green-600">
                                                Remote-friendly company
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Jobs Card */}
                    <Card className="border border-slate-200 dark:border-slate-700">
                        <CardHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                    Open Positions
                                </h3>
                                <Button size="sm" variant="outline">
                                    View All
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {/* Sample job - in a real app, you would map through employer.jobs */}
                                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                        Senior Frontend Developer
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
                                        <span>Full-time</span>
                                        <span>•</span>
                                        <span>Remote</span>
                                        <span>•</span>
                                        <span>$60k - $80k</span>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <Badge variant="secondary">React</Badge>
                                        <Badge variant="secondary">TypeScript</Badge>
                                        <Badge variant="secondary">Next.js</Badge>
                                    </div>
                                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                                        Posted 3 days ago • 12 applicants
                                    </div>
                                </div>

                                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                        UX Designer
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
                                        <span>Contract</span>
                                        <span>•</span>
                                        <span>Hybrid</span>
                                        <span>•</span>
                                        <span>$45/hr</span>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <Badge variant="secondary">Figma</Badge>
                                        <Badge variant="secondary">UI/UX</Badge>
                                        <Badge variant="secondary">Prototyping</Badge>
                                    </div>
                                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                                        Posted 1 week ago • 8 applicants
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}