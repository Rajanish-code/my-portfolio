

function Experience(){
    return (
         <section className="bg-gray-200 py-8 px-8 md:px-20 dark:bg-gray-500 dark:text-white">
            <h1  className="text-center font-semibold underline text-2xl mb-4">Experience</h1>
            <p className="text-lg md:text-xl  text-center mb-4">Here is a quick summary of my most recent experience</p>
            <div className="flex justify-center items-center gap-8 flex-col">
                <div  className="grid grid-cols-1  grid-flow-row-dense md:grid-cols-3 max-w-4xl gap-4 md:gap-40 bg-white dark:bg-gray-700 py-6 px-3 rounded-lg shadow-2xl">
                <h2 className="order-1 text-center md:py-5 py-2 px-4 text-green-800 font-bold text-2xl dark:text-green-400">Celebal Technologies</h2>
                <div className=" md:w-80 order-3 md:order-2 px-1">
                    <h3 className="text-xl  font-semibold ">Data Engineer</h3>
                    <ul className="list-disc pl-5  text-sm px-3 dark:text-gray-300">
                        <li><p>Completed 2-month internship focused on Data Engineering & Cloud Technologies.</p></li>
                        <li><p>Gained hands-on experience with <b className="dark:text-gray-100">Azure Data Factory (ADF)</b> for building and scheduling <b className="dark:text-gray-100">ETL pipelines</b>.</p></li>
                        <li><p>Worked on <b className="dark:text-gray-100">Azure Data Lake Storage (ADLS)</b> to manage and organize data files.</p></li>
                        <li><p>Learned to develop and run <b className="dark:text-gray-100">PySpark scripts in Databricks</b> for data cleaning and transformation.</p></li>
                        <li><p>Assisted in designing incremental and truncate-load pipelines using ADF.</p></li>
                        <li><p>Worked with SQL Server for querying, transformations, and data validation.</p></li>
                        
                        <li><p>Developed strong understanding of real-world data engineering workflows.</p></li>

                    </ul>
                   
                </div>
                 <p className="order-2 md:order-3 text-center py-2 px-2">May 2025 - July 2025</p>
            </div>


<div  className="grid grid-cols-1  grid-flow-row-dense md:grid-cols-3 max-w-4xl gap-4 md:gap-40 bg-white dark:bg-gray-700 py-6 px-3 rounded-lg shadow-2xl">
                <h2 className="order-1 text-center md:py-5 py-2 px-4 text-green-800 dark:text-green-400 font-bold text-2xl">Infotechguide</h2>
                <div className=" md:w-80 order-3 md:order-2 px-1">
                    <h3 className="text-xl  font-semibold "> Full Stack Developer Freelancer</h3>
                    <ul className="list-disc pl-5  text-sm px-3 dark:text-gray-300">
                        <li><p>Developed and customized WordPress plugins to add new features and functionalities.</p></li>
                        <li><p>Built and maintained multiple responsive WordPress websites for clients.</p></li>
                        <li><p>Designed custom themes using <b className="dark:text-gray-100">HTML, CSS, and JavaScript</b>.</p></li>
                        <li><p>Integrated PHP code with WordPress hooks and shortcodes to extend site functionality.</p></li>
                        <li><p>Gained hands-on experience in front-end <b className="dark:text-gray-100">(HTML, CSS, JS)</b> and <b  className="dark:text-gray-100">PHP</b> development.</p></li>
                        
                    </ul>
                   
                </div>
                 <p className="order-2 md:order-3 text-center py-2 px-2">Oct 2022 - Present</p>
            </div>



            <div  className="grid grid-cols-1  grid-flow-row-dense md:grid-cols-3 max-w-4xl gap-4 md:gap-40 bg-white dark:bg-gray-700 py-6 px-3 rounded-lg shadow-2xl">
                <h2 className="order-1 text-center md:py-5 py-2 px-4 text-green-800 dark:text-green-400 font-bold text-2xl">Infosys</h2>
                <div className=" md:w-80 order-3 md:order-2 px-1">
                    <h3 className="text-xl  font-semibold ">Fronted Developer </h3>
                    <ul className="list-disc pl-5  text-sm px-3 dark:text-gray-300">
                        <li><p>Developed and maintained web applications using <b className="dark:text-gray-100">PHP, HTML, CSS, and JavaScript.</b></p></li>
                        <li><p>Designed responsive front-end interfaces for better user experience.</p></li>
                        <li><p>Worked with <b className="dark:text-gray-100">MySQL/SQL databases</b> for data storage, retrieval, and reporting.</p></li>
                        <li><p>Implemented CRUD operations and dynamic features using <b className="dark:text-gray-100">PHP & SQL</b>.</p></li>
                        <li><p>Fixed bugs and optimized code for performance and scalability.</p></li>
                        <li><p>Collaborated with team members to deliver client-based web solutions.</p></li>
                    </ul>
                   
                </div>
                 <p className="order-2 md:order-3 text-center py-2 px-2">Sept 2021 - Nov 2021</p>
            </div>


            </div>
         </section>
    )
}

export default Experience;