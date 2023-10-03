import Image from "next/image";
import { Orbitron } from "next/font/google";

// FONT FOR ABOUT ME TITLE
const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

// PROJECT IMAGES
const ProjectPage = () => {
  const projectData = [
    {
      id: 1,
      image: '/project/nextjs.png',
    },
    {
      id: 2,
      image: '/project/shadcn.png',
    },
    {
      id: 3,
      image: '/project/tailwind.png',
    },
    {
      id: 4,
      image: '/project/coursera.png',
    },
    {
      id: 5,
      image: '/project/indiehacker.png',
    },
    {
      id: 6,
      image: '/project/kaggle.png',
    },
    {
      id: 7,
      image: '/project/leetify.png',
    },
    {
      id: 8,
      image: '/project/roadmap.png',
    },
    {
      id: 9,
      image: '/project/trn.png',
    },
  ];

  return (
    <section className={` lg:h-[calc(100vh-110px)] m-auto px-[30px]`}>

      {/* MAIN CONTENT */}
      <div>
        <div className={`${orbitron.className} text-base md:text-xl font-semibold text-black/60 pb-[10px] md:pb-[20px] text-center`}>
            <h1>
              Project
            </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((item) => (
            <div key={item.id} className="w-full h-[200px] md:h-[250px] relative hover:object-scale-down">
              <Image
                src={item.image}
                alt="image"
                layout="fill"
                objectFit="contain"
                className="transition duration-500 ease-in-out hover:scale-95"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
