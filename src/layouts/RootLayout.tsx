import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
      <div className='min-h-[100dvh] flex flex-col overflow-hidden'>
        <Header />

        <main className='grow'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default RootLayout
