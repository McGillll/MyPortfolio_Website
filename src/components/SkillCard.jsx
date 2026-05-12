import React from 'react'

export const SkillCard = ({ name, img, className = '', style }) => {
  return (
    <div
      className={`card card-hover flex flex-col items-center gap-3 border border-white/10 bg-black/70 text-neutral-50 ${className}`}
      style={style}
    >
      <img className='w-3/5 max-w-[72px]' src={img} alt={`${name} logo`} loading="lazy" />
      <span className='font-medium text-sm tracking-wide'>{name}</span>
    </div>
  )
}
