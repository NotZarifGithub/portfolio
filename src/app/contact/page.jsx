"use client"

import { Dela_Gothic_One, Orbitron } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"

// FONT FOR MAIN CONTENT
const DGO = Dela_Gothic_One({
  weight: ['400'],
  subsets: ['latin']
})

// FONT FOR "CONTACT ME" 
const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const contactPage = () => {
  return (
    // Wrap the entire page content with a motion.div for page transition
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Adjust the transition duration
      className={`h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-110px)] max-w-[1100px] m-auto px-[30px]`}
    >

    <section className={`h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-110px)] max-w-[1100px] m-auto px-[30px]`}>
      <div className="flex gap-9 flex-col items-center justify-center h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-110px)]">

        {/* MAIN TITLE */}
        <div className=''>
          <h1 className={`${DGO.className} text-7xl md:text-[8rem] lg:text-[10rem]`}>
            Get in <span className="pl-[75px] md:pl-[135px]"> touch</span>
          </h1>
        </div>

        {/* INFO */}
        <div>
          <div className="">
            <div className="text-xs font-medium md:text-base">
              <h1 className={`${orbitron.className} text-sm md:text-xl font-semibold text-black/60 pb-[10px] md:pb-[20px] text-center`}>
                Contact details
              </h1>
              <Link
                href="mailto:flacko.programming@gmail.com"
              >
                <p className="border-black hover:border-b">
                  flacko.programming@gmail.com
                </p>
              </Link>
              <Link
                href="mailto:zarif.onlywork@gmail.com"  
              >
                <p className="border-black hover:border-b">
                zarif.onlywork@gmail.com
                </p>
              </Link>
              <p className="cursor-default">
                +60 12 345 6789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </motion.div>
  )
}

export default contactPage