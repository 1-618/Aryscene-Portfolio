import { GetStaticPropsContext } from 'next'
import { services } from '../data'
import ServiceCard from '../components/ServiceCard'

const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>
      I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development.
        </h5>
        <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>
            What I Offer
            </h6>
          <div className='grid gap-6 lg:grid-cols-2'>
            {services.map(service => (
              <div 
                className='p-2 bg-gray-200 rounded-lg lg:col-span-2 md:col-span-1 dark:bg-dark-200'
                key={service.title}
                >
              <ServiceCard service={service}/>
              </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default index
