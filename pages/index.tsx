import { GetStaticPropsContext } from 'next'
import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import{ motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'

const index = () => {
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h5 className='my-3 font-normal font-Poppins'>
       I am a recent graduate with a BCom in Strategic brand management, I began teaching myself to code while pursuing
       my degree because I noticed that software lies at the core of all my personal intersets.
      Some of which are: philosophy, particularly Technological progress and human nature , Digital brands and DeFi.
        </h5>
        <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className='my-3 text-xl font-bold tracking-wide text-yellow'>
            Skills
            </h6>
          <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
            {services.map(service => (
              <motion.div 
                className='p-2 bg-gray-200 rounded-lg lg:col-span-2 md:col-span-1 dark:bg-dark-200'
                key={service.title}
                variants={fadeInUp}
                >
              <ServiceCard service={service}/>
              </motion.div>
              ))}
          </motion.div>
        </div>
    </motion.div>
  )
}

export default index
