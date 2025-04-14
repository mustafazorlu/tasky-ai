import Head from '@/components/Head';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  return (
    <>
      <Head title='Login an account - Tasky AI Todo List Project Management App' />

      <section className='container flex justify-center'>
        <SignIn signUpUrl='/register' />
      </section>
    </>
  );
};

export default LoginPage;
