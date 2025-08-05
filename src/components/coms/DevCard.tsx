import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Verified } from "lucide-react";

export function DeveloperCard({ developer }: { developer: typeof reactDevelopers[0] }) {
  return (
    <Card className="bg-white dark:bg-black shadow-xl border border-gray-200 dark:border-gray-800 text-gray-300 transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Header with avatar */}
       <div className="h-60 rounded-t-lg overflow-hidden">
        <div className="relative z-10 w-full h-full">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage
              src={developer.avatar} 
              className="w-full h-full object-cover -z-10" 
              alt={developer.name}
            />
            <AvatarFallback className="bg-blue-600 text-4xl text-white rounded-none flex items-center justify-center w-full h-full">
              {developer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {developer.verified && (
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              <Verified />
            </Badge>
          )}
          <div className="bg-gradient-to-r from-[#3a0023d3] to-[#000000d3] flex justify-between items-center absolute w-full bottom-0 py-2 px-6">
            <div>
              <h3 className="text-xl font-bold text-white pb-2 truncate max-w-[12rem]">{developer.name}</h3>
              <p className="text-gray-300 truncate max-w-[12rem]">{developer.title}</p>
            </div>
            <Button className="w-[6rem] rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182]">
              View
            </Button>
          </div>
        </div>
      </div>

        {/* Main content */}
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(developer.rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {developer.rating} ({developer.totalReviews} reviews)
              </span>
            </div>
            
          </div>
          <p title={developer.bio} className="text-[0.9rem] text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 truncate">
            {developer.bio}
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {developer.skills.slice(0, 2).map(skill => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs bg-[#ff289e3d] dark:bg-gray-900 text-gray-800 dark:text-gray-300"
                >
                  {skill}
                </Badge>
              ))}

              {developer.skills.length > 2 && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-[#ff289e3d] dark:bg-gray-900 text-gray-800 dark:text-gray-300"
                >
                  +{developer.skills.length - 2} more
                </Badge>
              )}
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-300">
            <div>
              <div className="text-slate-500 dark:text-slate-400">Experience</div>
              <div className="font-medium">{developer.experience}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Availability</div>
              <div className="font-medium">{developer.availability}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Rate</div>
              <div className="font-medium">{developer.hourlyRate}</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">English</div>
              <div className="font-medium">{developer.englishLevel}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}