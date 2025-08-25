import Type from "./type";

import Skill from "./Skill"
import Testimonial from "./Testimonial";
import Experience from "./Experience"

function Home(){
    return (
        <>
        <section className="bg-white px-8 py-12 md:px-20 dark:bg-gray-800 dark:text-white">
            <div className="grid grid-flow-row-dense md:grid-cols-2 gap-10 md:40">
                <div className="md:w-auto  order-2 md:order-1">
                    <div className="flex justify-center  px-4 py-4 flex-col  ">
                    <h1 className="text-4xl  font-semibold mb-4">Hi, I'm <span className="text-violet-500">Rajanish Kumar</span> 👋</h1>
                    <div className="flex text-lg text-gray-500 dark:text-gray-300 items-center gap-4 ">
                        A passionate <span className="text-[#c770f0] text-[18px] md:text-2xl font-semibold "> <Type /></span>
                    </div>
                    <p className="max-w-xl  w-auto text-lg dark:text-gray-300 text-gray-600 mb-4">with expertise in <span className="font-semibold text-black dark:text-white">(React.js & Node.js)</span>,  
                       specializing in building fast, accessible, and responsive web applications.
                    </p>
                    </div>

                <div className="text-sm px-4 py-4 dark:text-gray-300 text-gray-600">
                    <div className="flex  items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                        <p>Siwan(Bihar),India</p>
                    </div>
                    <span>Available for new projects</span>
                </div>

            <div className="flex  items-center gap-4 dark:text-gray-300 mt-4 pl-4">                    <a href="https://github.com/Rajanish-code">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                    </a>
                    <a href="https://www.linkedin.com/in/rajanish-kumar-9a8b59238/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                    </a>
                </div>

                </div>

                <div  className="flex justify-center items-center mb-9  order-1 md:order-2">
                    <img className="rounded cover   transition"  src="/images/Home.png" alt="" style={{ width: "300px", height: "auto" }} />
                    
                </div>
            </div>
        </section>
         <Experience/>
         <Skill/>
         
        
        
       
        <Testimonial/>
        
        
        
        
        </>
    )
}


export default Home;