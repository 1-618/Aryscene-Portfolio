import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { IProject } from "../type"
import Image from 'next/image' 
import {motion} from 'framer-motion'
import { fadeInUp, stagger } from '../animations'
import { FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard: FunctionComponent<{ project: IProject }> = ({project:{
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    tech_stack,
    id,
},


}) => {
  const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
          <Image
            src={image_path}
            alt={name}
            className="cursor-pointer"
            onClick={() => setShowDetail(true)}
            layout="responsive"
            height="150"
            width="300"
          />
          {/* <img
            src={image_path}
            alt={name}
            className="cursor-pointer"
            onClick={() => setShowDetail(true)}
          /> */}
          <p className="my-2 text-center">{name}</p>
    
          {showDetail && (
            <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
              <motion.div variants={stagger} initial="initial" animate="animate">
                
              <motion.div variants={fadeInUp}>
                <Image
                  src={image_path}
                  alt={name}
                  layout="responsive"
                  height="150"
                  width="300"
                />
                </motion.div>
                
                <div className="flex justify-center my-4 space-x-3">
                  <a
                    href={github_url} target="_blank" rel="noreferrer"
                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 hover:text-orange"
                  >
                    <AiFillGithub /> <span>Github</span>
                  </a>
                  <a
                    href={deployed_url} target="_blank" rel="noreferrer"
                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 hover:text-orange"
                  >
                    <FaExternalLinkAlt /> <span>Project</span>
                  </a>
                </div>
              </motion.div>
    
              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-thin font-Patua md:text-2xl text-orange">{name}</motion.h2>
                <motion.h3 variants={fadeInUp} className="mb-3 font-light font-Poppins">{description}</motion.h3>
    
                <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                  {tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm font-Roboto"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
    
              <button
                onClick={() => setShowDetail(false)}
                className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 hover:text-red"
              >
                <MdClose size={30} />
              </button>
            </div>
          )}
        </div>
      );
    };
    
    export default ProjectCard;