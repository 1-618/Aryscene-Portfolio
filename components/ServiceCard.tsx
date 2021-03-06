import { FunctionComponent } from 'react'
import { IService } from '../type'
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: IService }> = ({
   service: { Icon, title, about },
}) => {
   //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
   function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 text-orange' />
         <div className=''>
            <h6 className='font-bold text-red font-Poppins'>{title}</h6>
            <p className="text-sm font-Roboto"dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
