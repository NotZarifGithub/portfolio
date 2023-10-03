"use client"

import { Orbitron } from "next/font/google"
import { Button } from '@/components/ui/button'
import { Code2 } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

// FONT FOR ABOUT ME TITLE
const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const aboutPage = () => {
  return (
    // Wrap the entire page content with a motion.div for page transition
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Adjust the transition duration
      className={`h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-110px)] max-w-[1100px] m-auto px-[30px]`}
    >

    <section className={`h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-110px)] max-w-[1100px] m-auto px-[30px] flex justify-center items-center`}>

      {/* MAIN CONTENT */}
      <div>
        <div className={`${orbitron.className} text-base md:text-xl font-semibold text-black/60 pb-[10px] md:pb-[20px] text-center`}>
          <h1>
            About Me
          </h1>
        </div>
        <div className="text-xs font-semibold md:text-lg lg:text-xl">
          <p>
          Hello! I'm Zarif, a passionate and innovative software engineer with a strong foundation in creating 
          efficient and scalable software solutions. With a year of experience in the field, I've had the privilege 
          to work on a diverse range of projects, from web and mobile applications to complex system architectures.
          </p>
          <br />
          <p>
          My journey in software engineering started with a curiosity for problem-solving and a love for technology. Over 
          the years, I've honed my skills in a variety of programming languages and technologies, including 
          Javascirpt Python and other Javascirpt framework including React.js and Next.js. I enjoy the challenge of staying up-to-date 
          with the ever-evolving tech landscape and embracing new tools and frameworks to enhance my development capabilities.
          </p>
          <br />
          <p>
          What sets me apart is my dedication to delivering high-quality code and exceptional user experiences. I thrive 
          in collaborative environments where I can work closely with cross-functional teams to bring ideas to life. 
          Whether it's optimizing code for performance, architecting robust solutions, or tackling complex bugs, I'm 
          always up for the challenge.
          </p>
          <br />
          <p>
          Outside of coding, I'm a gym enthusiast and have a deep passion on staying fit and healthy. I believe that a 
          well-rounded individual is not only a better engineer but also a better problem solver.
          </p>
          <br />
          <p>
          Feel free to explore my portfolio to see some of the exciting projects I've had the privilege to work on. 
          If you'd like to connect or collaborate, I'm just a message away. Let's build something amazing together!
          </p>
          <br />
          <p>
          Thank you for visiting my portfolio, and I look forward to connecting with you.
          </p>
        </div>
        
        {/* SHADCN UI BUTTON */}
        <div className='flex items-center justify-center py-[40px] hover:scale-125 transition duration-500 ease-in-out'>
          <Button
            variant="outline"
            size="lg"
            className='px-4 py-2 transition duration-500 ease-in-out border rounded-2xl hover:scale-125'
          >
            <Link href="/contact" className='flex'>
              <Code2 
                className='w-5 h-5 mr-2'
              />
                Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
    
    </motion.div>
  )
}

export default aboutPage