import React from 'react'

export const SkillCard = (props) => {
  return (
    <>
        <div className='h-fit md:w-40 gap-3 p-5 bg-black/80 shadow-inner shadow-neutral-50 rounded-lg flex flex-col items-center hover:scale-105 hover:bg-amber-700/40 transition-transform'>
          <img className='w-3/5' src={props.img} alt={`${props.name} logo`} loading="lazy" />
          <span className='font-medium text-neutral-50'>{props.name}</span>
        </div>
    </>
  )
}
