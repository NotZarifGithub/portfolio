import Link from 'next/link'
import React from 'react'

const Navbar = () => {


  // NAVBAR DATA
  
  const navLinks = [
    {
      id: 1,
      title: 'home',
      link: '/',
    },
    {
      id: 2,
      title: 'about',
      link: '/about',
    },
    {
      id: 3,
      title: 'project',
      link: '/project',
    },
    {
      id: 4,
      title: 'contact',
      link: '/contact',
    },
  ]
  return (
    <section>
      <div className='flex flex-row gap-5 md:gap-8 lg:gap-12 justify-center items-center p-[20px] md:p-[30px] lg:p-[40px]'>
        {navLinks.map(item =>(

          // MAIN CONTENT
          
          <Link 
            key={item.id}
            href={item.link}
            className='capitalize font-semibold text-sm md:text-lg hover:text-lg hover:md:text-2xl transition-all duration-300 ease-in-out hover:border-b-4 border-black'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Navbar