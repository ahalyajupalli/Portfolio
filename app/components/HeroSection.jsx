"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-red-500'>Hello, I&apos;m{" "}</span>
                    <div>
                    <TypeAnimation
                    sequence={[
                    'Sai',
                    1000,
                    'Web Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Software Engineer',
                    1000,
                    'ML Engineer',
                    1000
                    ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </div>
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    I&apos;m currently software Engineer Intern at SAP. Ready fro my new adventure!!
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-bg-primary-500 to-secondary-500 bg-white hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-bg-primary-500 to-secondary-500  bg-transparent hover:bg-slate-800 text-white border mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4   place-content-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/home_pic.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection