import React from 'react'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    
    return (
        <div >
            <Image
            className='w-32 h-32 mx-auto rounded-full'
            src='/../public/portfolio-pic.jpg'
            alt='user avatar'
            width={200}
            height={200}
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-Lobster'>
                <span className='text-green'>Ary </span>
                Vee
                </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
                Full-Stack Developer
            </p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' 
            href='' 
            download='name'>
                <GiTie className='w-6 h-6'/> Download Resume
            </a>
            {/* //social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href=''>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>
            {/* //address */}
            <div 
                className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
                style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation/>
                    <span>Durban, South Africa</span>
                </div>
                <p className='my-2'>aryvee@gmail.com</p>
                <p className='my-2'>1605588167</p>
            </div>
            {/*Email Button */}
            <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' 
            onClick={() => window.open('mailto:aryscene@gmail.com')}>
                Email Me
                </button>
            <button
            onClick={changeTheme}
             className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 '>
                Toggle Theme
                </button>
        </div>
    )
}

export default Sidebar