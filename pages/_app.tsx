import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

import {ThemeProvider} from 'next-themes'
import {AnimatePresence} from 'framer-motion'
import router from 'next/router'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20'>
            <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:shadow-custom-dark shadow-custom-light lg:col-span-3 rounded-2xl dark:bg-dark-500'>
               <Sidebar/>
            </div>
            <div className='flex flex-col col-span-12 overflow-hidden bg-white dark:shadow-custom-dark shadow-custom-light lg:col-span-9 rounded-2xl dark:bg-dark-500'>
              <Navbar/>
              <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route}/>
              </AnimatePresence>
           </div>
         </div>
    </ThemeProvider>
  )
}

export default MyApp
