import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Check, Verified } from 'lucide-react';
import HireDev from '@/assets/images/HireDevCTA.webp'

interface DeveloperProfileProps {
  name: string;
  role: string;
  isVerified: boolean;
  expertise: string;
  timezone: string;
  location: string;
  memberSince: string;
  fullDescription: string;
  skills: string[];
}

const MAX_LENGTH = 180;

const VISIBLE_COUNT = 5;

export default function DeveloperProfileCard({
  name,
  role,
  isVerified,
  expertise,
  timezone,
  location,
  memberSince,
  fullDescription,
  skills
}: DeveloperProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongContent = fullDescription.length > MAX_LENGTH;
  const [expandedCategories, setExpandedCategories] = useState<{ [key: number]: boolean }>({});

  const truncatedText = fullDescription.slice(0, fullDescription.slice(0, MAX_LENGTH).lastIndexOf(" "));
  const displayText = isExpanded ? fullDescription : `${truncatedText}...`;

  return (
    <div className="bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-lg text-white shadow-xl w-full mx-auto rounded-lg overflow-hidden">
      <div className="p-6">
        {/* Top Section */}
        <div className="flex gap-4 items-start justify-between mb-4">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative">
            <img 
              src={HireDev} 
              alt={name}
              className="w-32 h-32 rounded-lg object-cover"
            />
            <Verified className='bg-green-600 absolute -bottom-2 -right-2 rounded-full p-1 w-8 h-8' />
          </div>

          {/* Header Content */}
          <div className="flex-grow min-w-0">
            <h2 className="text-xl font-semibold text-white mb-3">
              {name}
            </h2>
            <p className="text-gray-200 text-sm mb-2">{role}</p>

            {/* Info Row */}
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{timezone}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined On {memberSince}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
                {/* {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors cursor-default backdrop-blur-sm"
                    >
                    {skill}
                    </span>
                ))} */}
                {/* Conditionally display first 5 skills and a "+X more" */}
                <div className="flex flex-wrap gap-2">
                {(isExpanded ? skills : skills.slice(0, VISIBLE_COUNT)).map((skill, index) => (
                    <span 
                    key={index}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors cursor-default backdrop-blur-sm"
                    >
                    {skill}
                    </span>
                ))}

                {!isExpanded && skills.length > VISIBLE_COUNT && (
                    <button
                    onClick={() => setIsExpanded(true)}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors cursor-default backdrop-blur-sm"
                    >
                    +{skills.length - VISIBLE_COUNT} more
                    </button>
                )}
                </div>

            </div>
          </div>

          {/* View Button */}
          <button className="bg-green-500 w-[10rem] absolute top-5 right-5 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors flex-shrink-0">
            View Profile
          </button>
        </div>

        {/* Description */}
        <div className="mb-4">
            <p className="text-gray-200 text-sm leading-relaxed">
                {displayText}
            </p>

            {isLongContent && (
                <button
                    className="text-yellow-200 font-semibold hover:underline text-sm mt-1"
                onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Show Less" : "Show More"}
                </button>
            )}
        </div>

        {/* Skills Tags */}
        {/* <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors cursor-default backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
