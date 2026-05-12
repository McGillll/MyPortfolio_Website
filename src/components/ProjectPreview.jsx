import React from 'react'

export const ProjectPreview = ({ title, url, fallbackLabel = 'Open live site' }) => {
  return (
    <div className='overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-xl'>
      <div className='flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral-200'>
        <span className='font-medium tracking-wide'>{title}</span>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-white/10 px-3 py-1 text-neutral-50 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
        >
          {fallbackLabel}
        </a>
      </div>

      <div className='relative aspect-video bg-[#111]'>
        <iframe
          title={title}
          src={url}
          loading='lazy'
          className='h-full w-full'
          referrerPolicy='no-referrer'
        />
      </div>
    </div>
  )
}
