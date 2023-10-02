import Link from "next/link"

const footer = () => {


  // FOOTER DATA

  const footerData = [
    {
      id: 1,
      title: 'Get in touch',
      option: [
        {
          id: 1,
          title: 'flacko.programming@gmail.com',
          href: 'mailto:flacko.programming@gmail.com',
        },
        {
          id: 2,
          title: 'zarif.onlywork@gmail.com',
          href: 'mailto:zarif.onlywork@gmail.com',
        },
      ],
    },
    {
      id: 2,
      title: 'Connect',
      option: [
        {
          id: 1,
          title: 'instagram',
          href: 'https://www.instagram.com/',
        },
        {
          id: 2,
          title: 'twitter',
          href: 'https://twitter.com/home',
        },
        {
          id: 3,
          title: 'linkedIn',
          href: 'https://www.linkedin.com/',
        },
        {
          id: 4,
          title: 'github',
          href: 'https://github.com/',
        },
      ],
    },
    {
      id: 3,
      title: 'About me',
      option: [
        {
          id: 1,
          title: 'Project',
          href: '/project',
        },
        {
          id: 2,
          title: 'Details',
          href: '',
        },
      ],
    },
  ]

  return (
    <footer className=''>
      <div className='max-w-[1100px] m-auto flex md:flex-row justify-center flex-col text-xs font-medium text-center md:text-start'>
        {footerData.map(item =>(

          // FOOTER MAIN CONTENT
          
          <div
            key={item.id}
            className={`flex flex-col py-6 text-center md:text-start md:w-[200px] lg:w-[300px] ${item.id === 2 || item.id === 3 ? "items-center" : ""}`}
          >
            <h1 className="cursor-default text-black/60">
              {item.title}
            </h1>
            {item.option.map(item => (
              <Link 
                key={item.id}
                href={item.href}
                className="transition-transform border-black hover:border-b"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default footer