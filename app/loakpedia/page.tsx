import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function LoakpediaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-36 pb-36 lg:pl-36">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-teal-500 md:text-xl lg:text-2xl">
                Project:
                <span className="block font-bold text-gray-800 text-4xl mt-1 lg:text-5xl">
                  Loakpedia
                </span>
              </h1>
              <h2 className="font-medium text-gray-600 text-lg mb-5">Website using Laravel</h2>
              <p className="font-medium text-gray-600 mb-10 leading-relaxed">
                {"During my software engineering class, our group collectively made the exciting decision to embark on the development of a website named \"Loakpedia.\" Our primary objective was to create a platform that would streamline the process of giving away used goods. In pursuit of this goal, we meticulously chose Laravel as our preferred framework for constructing the website, leveraging its robust features and capabilities to ensure a seamless and user-friendly experience for our platform's users."}
              </p>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image
                  src="/images/portfolio-4.png"
                  alt="Loakpedia Project"
                  width={500}
                  height={400}
                  className="max-w-full mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="pt-36 pb-16 bg-slate-100">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-teal-500 mb-2">Preview</h4>
              <h2 className="font-bold text-gray-800 text-3xl mb-4">Loakpedia</h2>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="w-full mb-8">
              <video 
                controls 
                muted 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                poster="/loakpedia-website-preview.png"
              >
                <source src="/videos/loakpedia.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <p className="text-lg text-justify pt-12">
              This website is built on the Laravel framework, with MySQL serving as its database backend. In this project, my role primarily revolves around the backend development, encompassing tasks such as creating the login and registration pages, as well as implementing various other essential logic components.
            </p>

            <p className="text-lg text-justify pt-12">
              This project has been an invaluable educational journey for me, greatly enriching my understanding of web programming. It has provided me with a remarkable opportunity to delve into the intricacies of web development, particularly through the utilization of a powerful framework like Laravel.
            </p>

            <p className="text-lg text-justify pt-12">
              {"Beyond the technical aspects, this project has also served as a comprehensive introduction to the field of software engineering. I've had the chance to explore the entire software development lifecycle, from initial planning and design to implementation and testing. This holistic exposure has not only broadened my knowledge but also instilled in me a deeper appreciation for the structured and methodical approach that software engineering demands."}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
