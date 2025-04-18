import AppSidebar from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { Outlet } from 'react-router';
import { TooltipProvider } from '@radix-ui/react-tooltip';
const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <TooltipProvider
          delayDuration={500}
          disableHoverableContent
        >
          <AppSidebar />
          {/* <SidebarTrigger /> */}
          <main className='flex-1'>
            <Outlet />
          </main>
        </TooltipProvider>
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
