import React from 'react'
import { SkillCard } from './SkillCard'

export const SkillSection = () => {
  const skills = [
    {
      name: 'NuxtJS',
      img: 'https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000'  
    },
    {
      name: 'Tailwind CSS',
      img: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000'  
    },
    {
      name: 'Laravel',
      img: 'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000'  
    },
    {
      name: 'MySQL',
      img: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
    },
    {
      name:'HTML5', 
      img: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'  
    },
    {
      name: 'Java',
      img: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000'  
    },
    {
      name: 'Canva',
      img: 'https://img.icons8.com/?size=100&id=EZQdGLNeo7JI&format=png&color=000000'  
    },
    {
      name: 'Figma',
      img: 'https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000'  
    },
    {
      name: 'Wix',
      img: 'https://img.icons8.com/?size=100&id=cQfKnWABsKk9&format=png&color=fafafa'  
    },
  ]

  return (
    <>
      <div className='mb-10 w-full'>
        <div className='text-center mb-10 motion-safe:animate-slide-up'>
          <h2 className='text-neutral-50 font-semibold text-3xl sm:text-4xl'>My Skills</h2>
          <p className='text-neutral-200 mt-3 max-w-2xl mx-auto'>Tools and technologies I use to build polished, responsive, and reliable digital experiences.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center w-full'>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name + index}
              name={skill.name}
              img={skill.img}
              className="motion-safe:animate-slide-up"
              style={{ animationDelay: `${index * 70}ms` }}
            />
          ))}
        </div>
      </div>
    </>
)
}
