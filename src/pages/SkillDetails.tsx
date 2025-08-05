// import DeveloperProfileCard from '@/components/DeveloperProfileCard'
// import React from 'react'
// import DevProfiles from '@/jsonData/DevProfiles.json';

// export default function SkillDetails() {
//   return (
//     <div className='max-w-7xl mx-auto'>
//         <div className="text-center py-16 px-4 text-white mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                 Hire Top React Developers
//             </h1>
//             <h2 className="text-2xl sm:text-3xl/[3.5rem] md:text-4xl/[3.6rem] lg:text-5xl/[4rem] xl:text-4xl/[5.4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
//                 Build Scalable, High-Performance Frontends
//             </h2>
//             <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
//                 Get access to pre-vetted React.js experts for fast, interactive, and optimized UI development. 
//                 Trusted by startups and enterprises to scale modern web applications with confidence.
//             </p>
//             <div className="flex justify-center gap-4 flex-wrap">
//                 <button className="blue-grad-btn">
//                 🔍 Hire React Devs
//                 </button>
//                 <button className="white-btn">
//                 👩‍💻 Join as React Dev
//                 </button>
//             </div>
//             </div>

//         <div className='w-full flex gap-8'>
//             <div className='flex flex-col w-[70%] gap-4'>
//                 {DevProfiles.map((profile, index) => (
//                     <DeveloperProfileCard key={index} {...profile} />
//                 ))}
//             </div>
//             <div className='w-[30%] bg-white/10 border border-gray-500 rounded-md'>Text</div>
//         </div>
//     </div>
//   )
// }


// src/pages/SkillDetails.tsx
import skillComponentMap from '@/components/skillComponentMap';
import React from 'react';
import { useParams } from 'wouter';

export default function SkillDetails() {

    const params = useParams();
    const slug = params.slug;


    // Get the component for the current slug or a default one
    const SkillComponent = skillComponentMap[slug || 'angular-developers'] || skillComponentMap['react-developers'];
    console.log('SkillComponent:', SkillComponent);
    return (
        <div className="max-w-7xl mx-auto">
            <SkillComponent />
        </div>
    );
}
