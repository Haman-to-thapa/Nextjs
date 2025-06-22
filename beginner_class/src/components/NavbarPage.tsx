import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="absolute z-10 text-gray-900 w-full">
      <nav className="container flex items-center justify-between mx-auto h-14">
        <Link href='/' className='text-xl font-bold'>Home</Link>
        <div className="flex gap-2">
          <Link href='/performance'>Performance</Link>
          <Link href='/reliability'>Relibility</Link>
        </div>

      </nav>
    </div>


  )
}

export default Home