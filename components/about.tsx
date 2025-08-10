import { Github, Instagram, Linkedin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="pt-36 pb-32 lg:pl-36">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-teal-500 text-lg mb-3">About Me</h4>
            <h2 className="font-bold text-gray-800 text-3xl mb-5 max-w-md lg:text-4xl">Skills</h2>
            <p className="font-medium text-base text-gray-600 max-w-xl lg:text-lg">
              C, Java, Python, Web Programming, Machine Learning
            </p>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-gray-800 text-2xl mb-4 lg:text-3xl lg:pt-7">
              Follow Me!
            </h3>
            <p className="font-medium text-base text-black mb-3">
              You can follow me through various social media platforms.
            </p>
            <div className="space-y-1 mb-4">
              <p className="font-medium text-base text-gray-600">
                Email: nicholashm987@gmail.com
              </p>
              <p className="font-medium text-base text-gray-600">
                Line: nicholashansm
              </p>
              <p className="font-medium text-base text-gray-600">
                Phone Number: +62 81295584628
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/nicholashansm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-slate-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Pookinston"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-slate-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/n_hansm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-slate-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
