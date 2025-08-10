import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-36 pb-36 lg:pl-36">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-teal-500 md:text-xl lg:text-2xl pb-5 pt-5">
                Project:
                <span className="block font-bold text-gray-800 text-4xl mt-1 lg:text-5xl">
                  Age Estimation Through Facial Images using Deep CNN Pretrained Model and Particle Swarm Optimization
                </span>
              </h1>
              <p className="font-medium text-gray-600 mb-10 leading-relaxed">
                I conducted a research project titled "Age Estimation Through Facial Images using Deep CNN Pretrained Model and Particle Swarm Optimization," which was both submitted and presented at ICOBAR 2023. This project delved into the innovative realm of utilizing deep CNN pretrained models and the power of Particle Swarm Optimization for accurate age estimation from facial images.
              </p>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image
                  src="/images/portfolio-3.png"
                  alt="Age Prediction Research"
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
              <h4 className="font-semibold text-lg text-teal-500 mb-2">Description</h4>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto pt-0">
            <p className="text-lg text-justify pt-3">
              My colleague and I worked together on this research project in a machine learning class under the direction of our professor. With the use of well-known Convolutional Neural Networks (CNNs) and the hyperparameter tuning method known as Particle Swarm Optimization (PSO), we aimed to improve the performance of age prediction models.
            </p>

            <p className="text-lg text-justify pt-10">
              {"It's important to note that our understanding of machine learning and deep learning at the beginning of this project was rather minimal. But despite its natural allure, we were drawn to this subject because we saw it as a great chance to deepen our grasp of these complicated subjects. Even while we admit that our study isn't perfect, the journey has been incredibly instructive. We have gained insightful knowledge about machine learning and deep learning approaches through this research, which has further enhanced our appreciation for these fields. Despite the difficulties and flaws, this research has been an important step in our learning process, opening the door for further development and discovery in the field of AI and ML."}
            </p>

            <p className="text-lg text-justify pt-10">
              This research was then submitted to ICOBAR 2023 and was accepted for presentation. The research was then published{' '}
              <span className="text-teal-500 underline">
                <a 
                  href="https://www.e3s-conferences.org/articles/e3sconf/abs/2023/63/e3sconf_icobar23_01041/e3sconf_icobar23_01041.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}