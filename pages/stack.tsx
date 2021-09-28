import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'

const resume = () => {
   
    
    return (
        <motion.div className='px-6 py-2' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
                {/*education and exp*/}    

                <div className='grid gap-6 md:grid-cols-2'>

                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h5 className='my-3 text-2xl font-bold text-orange'>Proficient</h5>    
                        <h6 className='my-3 text-sm italic font-Poppins'>I am comfortale working with these on a daily basis:</h6> 
                    </motion.div> 
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h5 className='my-3 text-2xl font-bold text-yellow'>Actively learning</h5>
                        <h6 className='my-3 text-sm italic font-Poppins'>I am currenly investing time daily to learn the following:</h6> 
                    </motion.div> 
                </div>
                  {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
         <div>
             <h5 className="my-3 text-2xl font-bold"></h5>
            <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div> 
        <div>
            <h5 className="my-3 text-2xl font-bold"></h5>
          <div className='my-2'>
              {tools.map((tool, i) => (
                 <Bar value={tool} key={i} />
              ))}
          </div>
      </div> 
    </div>
    <h6 className="my-4 text-xs tracking-wider font-extralight">
        <span className="italic text-center font-Roboto"><b>*Disclaimer:</b> Ratings are a self evaluation, 
        their accuracy is subject to my current awareness of the scope the above technologies as relatively new developer.</span>
    </h6>
        </motion.div>
    )
}

export default resume
