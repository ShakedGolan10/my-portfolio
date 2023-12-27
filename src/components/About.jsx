import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { resume } from '../assets'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] 
      rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
           min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0, 1, 1)}
        className='mt-4 text-secondary text-[17px] max-2-3xl 
        leading-[30px]'
      >
        experienced as a freelancer in building smooth, and responsive web applications
        and interfaces that emphasize scalable code, using the latest up-to-date Frameworks,
        libraries, and Web technologies. I'm currently taking a course in advanced design patterns at Udemy, and I'm always looking to increase my knowledge.
        Friendly and a good collaborator.
        In search of my first job.
      </motion.p>
      <motion.a
        href={resume}
        download={"Shaked Golan - CV"}
        variants={fadeIn('', '', 0, 1, 1)}
        className='bg-white inline-block mt-4 text-black p-3 rounded-xl text-[17px] max-2-3xl 
        leading-[30px]'
      >
        Download CV
      </motion.a>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')