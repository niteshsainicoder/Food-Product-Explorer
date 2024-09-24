import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='min-h-screen/2 bg-red-500'>
      <Image src={'/hero.jpg'} alt={'hero'} fill  />
    </div>
  )
}

export default HeroSection
