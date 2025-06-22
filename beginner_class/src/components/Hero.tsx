import React from 'react'
import Image from 'next/image'
import hero from '../../public/image.png'

const Hero = () => {
  return (
    <div className='relative h-screen'>
      <div className="absolute inset-0 z-10`">
        <Image
          src={hero}
          alt='add wallpaper'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='flex items-center justify-center w-full h-screen pt-64'>
        <h1 className="font-bold text-4xl text-red-900">

          Personal Tainer
        </h1>

      </div>

    </div>
  )
}

export default Hero