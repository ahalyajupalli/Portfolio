"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Movies Clone",
    description:
      "A Hulu-style movies clone built with React.js and Tailwind CSS. The app fetches movies dynamically by genre and displays them in a responsive layout with interactive UI elements.",
    image: "/images/projects/hulu.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/HuluMovies",
    previewUrl: "https://movies-clone-five.vercel.app/?genre=fetchComedyMovies",
  },
  {
    id: 2,
    title: "StayBnb",
    description:
      "A limited functionality Airbnb clone built with Next.js and Tailwind CSS. The homepage uses static site generation, and Mapbox integration displays property locations on a map.",
    image: "/images/projects/aBnb.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/stayBnb",
    previewUrl: "https://where-bnb.vercel.app/",
  },
  {
    id: 3,
    title: "Yoga Master",
    description:
      "A full-stack yoga class booking platform with role-based access. Customers can browse and book classes, teachers manage schedules, and admins oversee users, payments, and class management.",
    image: "/images/projects/yoga.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/Yoga-Master",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Twitter Clone",
    description:
      "A Twitter clone app built with Next.js and Tailwind CSS for the frontend. Sanity CMS is used for data storage, and Next-Auth handles user authentication on the backend. The app uses server-side rendering to fetch tweets.",
    image: "/images/projects/tweeter.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/talker-build",
    previewUrl: "https://talker.vercel.app/",
  },
  {
    id: 5,
    title: "Weather Website",
    description:
      "A React-based weather visualization platform with a Node.js backend. Features include real-time API integration, interactive dashboards, and graphical visualizations for better forecasting insights.",
    image: "/images/projects/weather.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/Climate-Data-Visualization",
    previewUrl:
      "https://climate-data-visualization.vercel.app/",
  },
  {
    id: 6,
    title: "Chat Website",
    description:
      "A real-time chat application built with Socket.io, enabling instant messaging across multiple rooms with persistent connections.",
    image: "/images/projects/1.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/Chat-Application",
    previewUrl:
      "https://chat-application-git-master-jupalli-ahalyas-projects.vercel.app/",
  },
  {
    id: 7,
    title: "Task Manager App",
    description:
      "A MERN stack application for managing personal tasks. Features include user authentication with JWT & OAuth, task CRUD operations, and secure data handling.",
    image: "/images/projects/3.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/ahalyajupalli/Task-Manager-API",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "ECG Afib Detection",
    description:
      "Machine learning model to analyze ECG data from smartwatches and detect atrial fibrillation with high accuracy.",
    image: "/images/projects/4.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://drive.google.com/file/d/1t2H4UT6JtVOfrkj931kczsFJ1Z8nCxOg/view?usp=sharing",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Scene Stylization using GANs",
    description:
      "Deep learning project leveraging Generative Adversarial Networks (GANs) to apply photo-realistic scene stylization.",
    image: "/images/projects/5.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://drive.google.com/file/d/1LhEAOM0ZvYXXx1Aj_m7Ip1RgrhQovNzR/view?usp=sharing",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Stress Induction with Music & VR",
    description:
      "Developed a Unity 3D VR game designed to simulate stress responses in ICU environments by combining immersive visuals with music stimuli.",
    image: "/images/projects/6.png",
    tag: ["All", "AR/VR"],
    gitUrl:
      "https://drive.google.com/file/d/13NdGIZoWJP8VI-1zypMo2btgaM9LdCkr/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1DD-a4mWm-BF6KzVi9_KSd0-sfcVzak-M/view?usp=sharing",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Projects">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="web"
          isSelected={tag === "web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AR/VR"
          isSelected={tag === "AR/VR"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
