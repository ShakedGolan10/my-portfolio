import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import {  experiences } from '../constants'

const ExperienceCard = ({ index, title, company_name,
  points, icon, date }) => {
  return (
    <motion.div>
        <div className='relatve w-full h-[230px]'>
          <img src={icon} alt={company_name}
            className='w-full h-full object-cover rounded-2xl' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[28px]'>{title}</h3>
        </div>
        <div className='mt-5 flex justify-between'>
          <h3 className='text-white font-bold text-[24px]'>{company_name}</h3>
          <h3 className='text-white font-bold text-[14px]'>{date}</h3>
        </div>

        <div className='mt-4 flex gap-2'>
          {points.map((point, idx) => (
            <p key={idx} className={styles.sectionSubText}>
              {point}
            </p>
          ))}
        </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>
        Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {experiences.map((experience, idx) => (
          <ExperienceCard
            key={`project-${idx}`}
            index={idx}
            {...experience} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')