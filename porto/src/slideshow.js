import React from "react";
import './App.css';
import 'devicon/devicon.min.css';


function Slideshow() {
  return (
    <div className="py-4 bg-white" >
        <
        <div className="flex gap-x-4">
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...  container space-y-10 px-auto text-5xl shadow-xl  shadow-cyan-500/50 font-mono hover:' >Web Development
            <p className="text-sm font-sans">
Experienced web developer proficient in React, HTML, CSS, JavaScript, and Tailwind CSS. Skilled in crafting dynamic and responsive interfaces using React, with a keen eye for visually appealing layouts through HTML and CSS. Efficiently utilizes Tailwind CSS for streamlined styling, contributing to polished and user-friendly digital experiences.</p>
        </div>
        <div className='container space-y-10 px-auto text-5xl shadow-xl shadow-red-600/100 font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>UI/UX Design
            <p className="text-sm font-sans">As a UI/UX designer, I bring a wealth of expertise in crafting visually stunning and intuitive user interfaces. Proficient in utilizing design tools and techniques, I specialize in creating engaging user experiences. My skills extend across wireframing, prototyping, and implementing modern design principles, ensuring aesthetically pleasing and user-centric digital solutions.</p>
        </div>
        <div className='container space-y-3 px-auto text-5xl shadow-xl font-mono shadow-orange-600/100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>Cloud Computing
            <p className="text-sm font-sans">
        Proficient in cloud computing, I specialize in deploying and managing scalable applications on cloud platforms. I am skilled in utilizing cloud services, such as AWS, to optimize application performance and reliability. My expertise extends to cloud security, ensuring robust and secure cloud infrastructure. I am also adept in cloud automation, streamlining cloud operations for efficient and cost-effective cloud solutions.Currently, I am working on AWS Certified Associate Certificate
        </p>
        </div>
    </div>
    </div>
     
  )
}

export default Slideshow;