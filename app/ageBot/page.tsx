import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function AgeBotPage() {
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
                  Age Prediction Bot
                </span>
              </h1>
              <h2 className="font-medium text-gray-600 text-lg mb-5">on Discord</h2>
              <p className="font-medium text-gray-600 mb-10 leading-relaxed">
                {"Building upon the findings of my research, I took the initiative to bring it to life by creating a functional Discord bot. This bot utilizes the insights gained from the research to predict a person's age through uploaded pictures using the models that I've used in my research. It's an exciting fusion of theory and practical implementation that showcases the real-world applications of my work."}
              </p>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image
                  src="/images/portfolio-2.png"
                  alt="Age Prediction Discord Bot"
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
              <h4 className="font-semibold text-lg text-teal-500 mb-2">How It Works</h4>
              <h2 className="font-bold text-gray-800 text-3xl mb-4">Age Prediction Bot</h2>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="w-full mb-8">
              <video 
                controls 
                muted 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                poster="/discord-bot-age-prediction.png"
              >
                <source src="/videos/age-prediction.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <p className="text-lg text-justify pt-12">
              {"This Python-based bot employs a sophisticated deep learning model that I developed during my extensive research on Age Prediction Algorithms. The bot's functionality revolves around a single command: '!predict'. To initiate the age prediction process, simply input '!predict' accompanied by an attached picture."}
            </p>

            <p className="text-lg text-justify pt-10">
              {"For optimal accuracy, it's advisable to upload a close-up image focusing solely on the face. However, it's important to note that the model's predictions are not infallible, and they come with a margin of error. On average, the model exhibits an error rate of approximately 6 units."}
            </p>

            <p className="text-lg text-justify pt-10">
              Also, this bot is only used for personal purposes and will not be published to the public.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
