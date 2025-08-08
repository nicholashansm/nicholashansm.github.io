import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "Portfolio Page",
    description: "I've crafted this portfolio page to reflect my journey and accomplishments, drawing inspiration from a range of YouTube tutorials. This compilation serves as a testament to my progress and the skills I've acquired as I showcase my work.",
    image: "/images/portfolio-1.png",
    href: "/"
  },
  {
    id: 2,
    title: "Age Prediction Algorithm Research",
    description: "I conducted a research project titled \"Age Estimation Through Facial Images using Deep CNN Pretrained Model and Particle Swarm Optimization,\" which was both submitted and presented at ICOBAR 2023. This project delved into the innovative realm of utilizing deep CNN pretrained models and the power of Particle Swarm Optimization for accurate age estimation from facial images.",
    image: "/images/portfolio-3.png",
    href: "/research"
  },
  {
    id: 3,
    title: "Age Prediction Discord Bot",
    description: "Building upon the findings of my research, I took the initiative to bring it to life by creating a functional Discord bot. This bot utilizes the insights gained from the research to predict a person's age through uploaded pictures using the models that I've used in my research. It's an exciting fusion of theory and practical implementation that showcases the real-world applications of my work.",
    image: "/images/portfolio-2.png",
    href: "/agebot"
  },
  {
    id: 4,
    title: "Loakpedia",
    description: "During my software engineering class, our group collectively made the exciting decision to embark on the development of a website named \"Loakpedia.\" Our primary objective was to create a platform that would streamline the process of giving away used goods. In pursuit of this goal, we meticulously chose Laravel as our preferred framework for constructing the website, leveraging its robust features and capabilities to ensure a seamless and user-friendly experience for our platform's users.",
    image: "/images/portfolio-4.png",
    href: "/loakpedia"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">Portfolio</h4>
            <h2 className="font-bold text-gray-800 text-3xl mb-4">Recent Projects</h2>
            <p className="font-medium text-md text-gray-600">
              The Projects that I have done inside and outside of my studies.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="mb-12 p-4 md:w-1/2 hover:bg-teal-500 hover:bg-opacity-20 transition-colors rounded-lg">
              <Link href={project.href}>
                <div className="rounded-md shadow-md overflow-hidden mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mt-5 mb-3">
                  {project.title}
                </h3>
                <p className="font-medium text-base text-gray-600 text-justify">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
