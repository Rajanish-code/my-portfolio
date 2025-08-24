

function About(){
    return (
     <section className="bg-gray-100 py-16 px-6 md:px-20 dark:bg-gray-500 dark:text-white ">
        
            <h1 className="text-xl font-semibold flex justify-center items-center underline mb-10">About me</h1>
        <article className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className=" flex justify-center">
                <img src="https://vishalkumar-engr.netlify.app/static/media/about.aee0f771fbfc1e7b8fa8.png" alt=""  className="rounded-2xl shadow-lg border-4 hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="text-gray-600 leading-relaxed mb-4">
                <h2 className="text-black font-semibold text-center mb-5 dark:text-white">Curious about me?Here you have it:</h2>
                <p className="mb-2 dark:text-white">I am a passionate Full Stack MERN Developer and Data Engineer with hands-on experience in building modern, scalable, and data-driven solutions.</p>
                <p className="mb-2 dark:text-white">I completed a 2-month internship as a Data Engineer, where I worked on Azure Cloud, Data Pipelines, and ETL workflows, gaining real-world experience in managing and transforming data for analytics.</p>
                <p className="mb-2 dark:text-white">I also worked as a Full Stack MERN Developer at Infosys, where I contributed to developing responsive and dynamic applications using MongoDB, Express.js, React.js, and Node.js, ensuring seamless user experience and performance optimization.</p>
                <p className="mb-2 dark:text-white">Currently, I am pursuing my BCA (Bachelor of Computer Applications) and continuously sharpening my skills in MERN stack, Azure, and data engineering tools to grow as a versatile engineer.</p>
            </div>
        </article>

     </section>
    )
}

export default About;