import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

interface StepButtonProps {
  direction: 'next' | 'prev';
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({ direction, onClick }) => {
  const isNext = direction === 'next';

  return (
    <Button
      onClick={onClick}
      className={`
        group flex items-center gap-2 px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300
        ${
          isNext 
            ? 'bg-gradient-to-r from-[#81004D] to-[#fe5182] text-white hover:shadow-[0_5px_20px_-5px_rgba(254,81,130,0.3)]'
            : 'bg-white/10 dark:bg-black/10 text-gray-800 dark:text-white border-2 border-[#e9e9e9] dark:border-[#81004d4f] hover:bg-white/20 dark:hover:bg-black/20'
        }
      `}
    >
      {!isNext && <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />}
      {isNext ? 'Next' : 'Previous'}
      {isNext && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </Button>
  );
};

export default StepButton;