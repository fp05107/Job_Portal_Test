import { useLocation } from 'wouter';
import HireTalent from './HireTalent';
import { skills } from '../utils/Skills';

interface HiringPageProps {
  skill: string;
}


const HiringPage = ({ skill }: HiringPageProps) => {
  const [, setLocation] = useLocation();
  
  const decodedSkill = decodeURIComponent(skill);
  
  const allSkills = [
    ...skills.developers.flatMap(d => d.skills),
    ...skills.dataScience.flatMap(d => d.skills)
  ];

  const matchedSkill = allSkills.find(s => 
    s.toLowerCase().replace(/[^\w\s]/g, '') === 
    decodedSkill.toLowerCase().replace(/-/g, ' ').replace(/[^\w\s]/g, '')
  );

  if (!matchedSkill) {
    setLocation('/hire');
    return null;
  }

  return <HireTalent initialSkill={matchedSkill} />;
};

export default HiringPage;