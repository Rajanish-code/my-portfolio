import Footer from "./Footer";

function Work() {
  return (
   <>
    <section className="bg-gray-200 px-8 py-8 md:px-20 dark:bg-gray-600 dark:text-white">
      <h1 className="text-xl font-semibold text-center underline mb-4 ">Work</h1>
      <p className="text-sm text-gray-700 text-center mb-4 dark:text-gray-300">
        Some of the noteworthy projects I have built:
      </p>
       <div className="grid grid-cols-1 gap-10 ">
        <div className="flex justify-between flex-col md:flex-row gap-10 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="w-auto ">
            <img src="/images/Bihardiwas.JPG" alt="Bihar Diwas" />
          </div>
          <div className="px-4 py-4">
            <h1 className="text-xl font-semibold mb-4 mt-2">https://bihardiwash.vercel.app/</h1>
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-4">
              A Bihar Diwas website made with HTML, CSS, and JavaScript highlights Bihar’s culture, history, and events. It includes an interactive ChatGPT-powered chatbot that answers visitor questions, making the site engaging and informative.
            </p>
            <div className="flex  justify-between gap-5 flex-wrap">
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                HTML
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                CSS
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                Js
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                API
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">Git</span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                Tailwind
              </span>
              
            </div>
          </div>
        </div>





        <div className="flex justify-between flex-col   md:flex-row-reverse gap-10 bg-white dark:bg-gray-800 rounded-lg  overflow-hidden">
          <div className="h-auto w-auto ">
            <img 
              src="/images/movies.JPG"
              alt=""
            />
          </div>
          <div className="px-4 py-4">
            <h1 className="text-xl font-semibold mb-4 mt-2">https://rrr-movie.vercel.app/</h1>
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-4">
              RR Movies is your one-stop destination for the latest films, trailers, reviews, and entertainment news. Explore upcoming releases, discover trending movies, and enjoy an engaging experience with a clean and user-friendly design.
            </p>
            <div className="flex justify-between gap-5 flex-wrap">
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                HTML
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                CSS
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                Js
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                API
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">Git</span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                Chatbot
              </span>
              
            </div>
          </div>
        </div>


        <div className="flex justify-between flex-col md:flex-row gap-10 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="h-auto w-auto ">
            <img 
              src="/images/Tutorial.JPG"
              alt=""
            />
          </div>
          <div className="px-4 py-4">
            <h1 className="text-xl font-semibold mb-4 mt-2">https://rklearning-tutorial.vercel.app/</h1>
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-4">
              Welcome to our Learning Tutorial Hub! Here you can explore step-by-step tutorials on C, C++, Python, JavaScript, Java, and more. We provide easy examples, practice programs, and explanations so you can learn programming with confidence. Start coding today with simple HTML, CSS, and JavaScript powered lessons!
            </p>
            <div className="flex justify-between gap-5 flex-wrap">
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                HTML
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                CSS
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                Js
              </span>
              
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">Git</span>
             
              
            </div>
          </div>
        </div>


        <div className="flex justify-between flex-col   md:flex-row-reverse gap-10 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="h-auto w-auto ">
            <img 
              src="/images/CV.JPG"
              alt=""
            />
          </div>
          <div className="px-4 py-4">
            <h1 className="text-xl font-semibold mb-4 mt-2">https://rajanish-cv.vercel.app/</h1>
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-4">
           I created my own CV as a website using HTML, CSS, and JavaScript, showcasing my web development skills and passion for learning new technologies.
            </p>
            <div className="flex justify-between gap-5 flex-wrap">
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                HTML
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                CSS
              </span>
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">
                Js
              </span>
              
              <span className="w-30 py-1 px-6 rounded-xl bg-gray-300 dark:bg-gray-700">Git</span>
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
   <Footer/>
   </>
  );
}

export default Work;
