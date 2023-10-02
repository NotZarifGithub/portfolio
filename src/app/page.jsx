import ChangingText from '@/components/feature/ChangingText'
import Image from 'next/image'
import { Dela_Gothic_One, Orbitron } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Code2 } from 'lucide-react'
import { buttonVariants } from "@/components/ui/button"

// FONT FOR MAIN CONTENT
const DGO = Dela_Gothic_One({
  weight: ['400'],
  subsets: ['latin']
})

// FONT FOR TECH STACK
const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function Home() {

  // SKILLS DATA
  const skills = [
    {
      id: 1,
      image: '/css-3.svg',
    },
    {
      id: 2,
      image: '/html-5.svg',
    },
    {
      id: 3,
      image: '/js.svg',
    },
    {
      id: 4,
      image: '/react.svg',
    },
    {
      id: 5,
      image: '/nextjs.svg',
    },
    {
      id: 6,
      image: '/sass.svg',
    },
    {
      id: 7,
      image: '/tailwind.svg',
    },
  ]

  return (
    <main className={`h-[calc(100vh-20px)] md:h-[calc(100vh-30px)] lg:h-[calc(100vh-40px)] max-w-[1100px] m-auto px-[30px]`}>
      <section>
        <div className='py-[20px]'>

          {/* MAIN CONTENT */}
          <div className=''>
            <h1 className={`${DGO.className} text-7xl md:text-[7rem] lg:text-9xl transition-all duration-500 ease-in-out`}>
              Zarif
              Zarif
              Zarif
            </h1>
          </div>

          {/* SKILLS */}
          <ChangingText />
          <div className=''>
            <h1 className={`${DGO.className} text-7xl md:text-[7rem] lg:text-9xl transition-all duration-500 ease-in-out `}>
              Zarif
              Zarif
              Zarif
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col items-center justify-center sm:py-[20px] md:py-[70px] lg:py-0'>

          {/* TECH STACK */}
          <h1 className={`${orbitron.className} text-base md:text-xl font-semibold text-black/60 pb-[10px] md:pb-[20px]`}>
            Tech Stack
          </h1>
          <div className='flex gap-8 pb-[10px] md:pb-[20px] md:gap-16'>
            {skills.slice(0,4).map(item => (
              <div 
                key={item.id}              
              >
                <Image 
                  src={item.image} 
                  alt='' 
                  width={50} 
                  height={50}
                  className='transition duration-500 ease-in-out hover:scale-125'  
                />
              </div>
            ))}            
          </div>
          <div className='flex gap-7 md:gap-16'>
            {skills.slice(4,8).map(item => (
              <div 
                key={item.id}              
              >
                <Image 
                  src={item.image} 
                  alt='' 
                  width={50} 
                  height={50} 
                  className='transition duration-500 ease-in-out hover:scale-125'
                />
              </div>
            ))}            
          </div>
        </div>
      </section>
      <section>

        {/* SHADCN UI BUTTON */}
        <div className='flex items-center justify-center py-[40px] hover:scale-125 transition duration-500 ease-in-out'>
          <Button
            variant="outline"
            size="lg"
            className='px-4 py-2 transition duration-500 ease-in-out border rounded-2xl hover:scale-125'
          >
            <Code2 
              className='w-5 h-5 mr-2'
            />
              Contact Me
          </Button>
        </div>
      </section>
    </main>
  )
}
