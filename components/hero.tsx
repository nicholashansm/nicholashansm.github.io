import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-36 lg:pl-36">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-500 md:text-xl lg:text-2xl">
              {"Hi! I'm,"}
              <span className="block font-bold text-gray-800 text-4xl mt-1 lg:text-5xl">
                Nicholas Hans Muliawan
              </span>
            </h1>
            <h2 className="font-medium text-gray-600 text-lg mb-5">Student</h2>
            <p className="font-medium text-gray-600 mb-10 leading-relaxed">
              Pursuing Computer Science at Binus University with a focus on AI technology. 
              Enthusiastic learner with a passion for exploring and experimenting with new concepts.
            </p>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image
                src="/images/profile.jpg"
                alt="Nicholas Hans Muliawan"
                width={400}
                height={400}
                className="max-w-full mx-auto rounded-lg"
                priority
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    fill="#14b8a6" 
                    d="M37.1,-55.3C44.8,-52.8,45.6,-37,42.4,-24.9C39.3,-12.9,32.1,-4.7,36.6,9.4C41,23.4,56.9,43.3,56.3,54.9C55.7,66.4,38.6,69.7,23,70.9C7.4,72.1,-6.6,71.3,-16.3,64.4C-26,57.6,-31.4,44.7,-36.1,34.1C-40.9,23.6,-45.1,15.3,-49.9,5C-54.8,-5.3,-60.4,-17.7,-59.1,-29.6C-57.8,-41.6,-49.6,-53.1,-38.6,-54.1C-27.7,-55.1,-13.8,-45.6,0.4,-46.3C14.7,-46.9,29.4,-57.7,37.1,-55.3Z" 
                    transform="translate(100 100) scale(1.7)" 
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
