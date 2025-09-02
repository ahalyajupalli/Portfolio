"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <div className="flex flex-col md:flex-row gap-6">
        {/* Column 1 - Frontend */}
        <ul className="list-disc pl-4 flex-1">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Vue.js</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>HTML5 & CSS3</li>
          <li>Tailwind CSS</li>
          <li>Redux & Context API</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>.NET ASP</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
        </ul>

        {/* Column 2 - Backend, Cloud, DevOps */}
        <ul className="list-disc pl-4 flex-1">
          
          <li>Python</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
          <li>Redis</li>
          <li>AWS </li>
          <li>Azure (Function Apps, DevOps, Repos)</li>
          <li>Docker & Kubernetes</li>
          <li>CI/CD with Jenkins & ADO Pipelines</li>
          <li>REST APIs & GraphQL</li>
          <li>WebSockets</li>
          
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Alberta — MSc in Computing Science (3.7/4 GPA)</li>
        <li>KL University — B.Tech</li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Amazon Web Services Certified Cloud Practitioner</li>
        <li>Meta Certified Full Stack Developer</li>
        <li>Certified JavaScript Developer (W3Schools)</li>
        <li>Complete Full Stack Web Development Bootcamp</li>
        <li>Big Data Specialization</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={700}
          alt="About me image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a software developer with experience in full-stack development
            and cloud technologies. At Cognizant, I improved release pipelines
            and built automation utilities. At ARC Center, I developed AppBot
            and a monitoring dashboard using ReactJS and AWS, improving
            scalability and reliability. Currently at Accountium, I implement
            front-end solutions with React js and backend integration with .NET
            ASP, delivering efficient business workflows.
          </p>

          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
