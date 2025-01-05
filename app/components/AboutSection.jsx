"use client"
import React,{useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA=[
    {
        title: 'skills',
        id:'skills',
        content: (
            <ul className='list-disc pl-2'>
              <li>Node.js</li>  
              <li>Express</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>Machine Learning</li>
              <li>Web sockets</li>
            </ul>
        )
    },{
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>University of Alberta</li>
                <li>KL University</li>
            </ul>
        )
    },{
        title:"certifications",
        id:"certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Big Data Specialization</li>
                <li>Web Developer Bootcamp</li>
            </ul>
        )
    }
]

function AboutSection() {
  const [tab, setTab]= useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange =(id)=>{
    startTransition(()=>{
        setTab(id)
    })
  }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={700} alt=""/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className="text-base lg:text-lg">
        As an SAP Software Developer Intern, I led a MERN stack project, achieving a significant 20% boost in efficiency. At Sawback Technologies, I developed an AI pipeline detection tool using Vertex AI and GCP, improving accuracy by 5%. Collaborating with Alberta Health Services, I played a key role in enhancing a healthcare web app&apos;s UI and system performance. My tenure at Informatica was marked by optimizing data processing workflows, leading to a 25% increase in operational efficiency. My diverse project experience spans from developing a real-time weather application to implementing an innovative harmful object detection algorithm in X-ray images.
        </p>
        <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={()=> handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
            <TabButton selectTab={()=> handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
            <TabButton selectTab={()=> handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
        </div>
        <div className='mt-8'>
            {TAB_DATA.find((t)=>t.id === tab).content}
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection