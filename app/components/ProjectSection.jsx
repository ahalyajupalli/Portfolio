"use client"
import React,{useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion";

const projectData=[
  {
    id: 1,
    title: "Chat Website",
    description: "Real-time chat application leveraging Socket.io",
    image: "/images/projects/1.png",
    tag: ["All","web"],
    gitUrl: "https://github.com/SaiBhargav30393/node-v3-chat-app",
    previewUrl: "https://kancheti-node-v3-chat-app-a292f6c1ff41.herokuapp.com/"
  },
  {
    id: 2,
    title: "Weather Website",
    description: "Real-time weather application leveraging express and deployed in Heroku",
    image: "/images/projects/2.png",
    tag: ["All","web"],
    gitUrl: "https://github.com/SaiBhargav30393/node-weather-website",
    previewUrl: 'https://kancheti-weather-application-9eb3d646215d.herokuapp.com/'
  },
  {
    id: 3,
    title: "Task App",
    description: "Chat Application where user can login and maintain his tasks used MERN stack and JWT tokens and OAuth",
    image: "/images/projects/3.png",
    tag: ["All","web"],
    gitUrl:'https://github.com/SaiBhargav30393/task-manager-api',
    previewUrl:'/'
  },
  {
    id: 4,
    title: "ECG analysis to detect Atrial Fibrillation for Health gauge watch",
    description: "Implemented a model to detect Afib from the smart watch data",
    image: "/images/projects/4.png",
    tag: ["All","Machine Learning"],
    gitUrl:'https://drive.google.com/file/d/1t2H4UT6JtVOfrkj931kczsFJ1Z8nCxOg/view?usp=sharing',
    previewUrl:'/'
  },
  {
    id: 5,
    title: "Generating Scene Stylization of Photo Realistic Style using GANs",
    description: "Implemented a GAN model to style the models for given picture",
    image: "/images/projects/5.png",
    tag: ["All","Machine Learning"],
    gitUrl:'https://drive.google.com/file/d/1LhEAOM0ZvYXXx1Aj_m7Ip1RgrhQovNzR/view?usp=sharing',
    previewUrl:'/'
  },
  {
    id: 6,
    title: "Inducing Stress using Music and VR in an ICU environment",
    description: "Developed a VR game to create stress among users using unity 3D and C#",
    image: "/images/projects/6.png",
    tag: ["All","AR/VR"],
    gitUrl:'https://drive.google.com/file/d/13NdGIZoWJP8VI-1zypMo2btgaM9LdCkr/view?usp=sharing',
    previewUrl:'https://drive.google.com/file/d/1DD-a4mWm-BF6KzVi9_KSd0-sfcVzak-M/view?usp=sharing'
  },
]

const ProjectSection = () => {
  const [tag, setTag]= useState("All")
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag)=>{
    setTag(newTag)
  }

  const filteredProjects = projectData.filter((project)=>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
    <h2 className='text-4xl font-bold text-white mb-4 text-center'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
      <ProjectTag onClick={handleTagChange} name="web" isSelected={tag === "web"}/>
      <ProjectTag onClick={handleTagChange} name="Machine Learning" isSelected={tag === "Machine Learning"}/>
      <ProjectTag onClick={handleTagChange} name="AR/VR" isSelected={tag === "AR/VR"}/>
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12" >{filteredProjects.map((project, index)=> 
    <motion.li
      key={index}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3, delay: index * 0.4 }}
      >
    <ProjectCard
     key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
     </motion.li>
     )}
     </ul>
    
    </section>
  )
}

export default ProjectSection