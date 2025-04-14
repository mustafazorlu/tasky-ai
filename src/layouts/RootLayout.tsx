import { logo } from '@/assets';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Loader2 } from 'lucide-react';
import { Outlet, useNavigation } from 'react-router';

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' && !navigation.formData;
  return (
    <>
      <div className='relative isolate min-h-[100dvh] flex flex-col overflow-hidden'>
        <Header />

        <main className='grow grid grid-cols-1 items-center pt-36 pb-16'>
          <Outlet />
        </main>

        <Footer />

        <div className='bg-primary/20 absolute top-20 left-0 w-80 h-10 rotate-45 origin-top-left blur-3xl'></div>
        <div className='bg-primary/20 absolute top-20 left-0 w-80 h-10 -rotate-45 origin-top-left blur-3xl'></div>

        {isLoading && (
          <div className='fixed top-0 left-0 z-50 h-[100dvh] w-full bg-background flex flex-col justify-center items-center gap-5'>
            <img
              src={logo}
              alt=''
              width={64}
              height={64}
            />
            <Loader2 className='text-muted-foreground animate-spin' />
          </div>
        )}
      </div>
    </>
  );
};

export default RootLayout;
