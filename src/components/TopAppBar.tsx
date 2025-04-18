import React, { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { SidebarTrigger } from './ui/sidebar';
import Kbd from './Kbd';
import { cn } from '@/lib/utils';

type TopAppBarProps = {
  title: string;
  taskCount?: number;
};

const TopAppBar: React.FC<TopAppBarProps> = ({ title, taskCount }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(window.scrollY > 70);

    window.addEventListener('scroll', () => {
      setShowTitle(window.scrollY > 70);
    });
  }, []);

  return (
    <div
      className={cn(
        'sticky z-40 top-0 h-14 grid-cols-[40px, minmax(0,1fr), 40px]',
        showTitle && 'border-b',
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarTrigger />
        </TooltipTrigger>

        <TooltipContent className='flex items-center'>
          <p>Toggle Sidebar</p>

          <Kbd kbdList={['Ctrl', 'B']} />
        </TooltipContent>
      </Tooltip>

      <div
        className={cn(
          'max-w-[480px] mx-auto text-center transition-[transform, opacity]',
          showTitle ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        )}
      >
        <h1 className='font-semibold truncate'>{title}</h1>
        {Boolean(taskCount) && (
          <div className='text-xs text-muted-foreground'>{taskCount} tasks</div>
        )}
      </div>
    </div>
  );
};

export default TopAppBar;
