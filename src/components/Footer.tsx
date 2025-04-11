import React from 'react'

import { Separator } from './ui/separator'
import { SOCIAL_LINKS } from '@/constants/constant'

const Footer = () => {
  return (
    <div>
      <div className=''>
        <p className=''>&copy; 2025 mustafazorlu</p>

        <ul className=''>
          {SOCIAL_LINKS.map(({ href, label }, index) => (
            <li key={index}>
              <a
                href={href}
                target='_blank'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
