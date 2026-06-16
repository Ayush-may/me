"use client"
import Link from "next/link"
import { GitHubCalendar } from "react-github-calendar"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { experiences } from "@/data/experience"
import { ExperienceCard } from "@/components/ExperienceCard"
import { TechStacks } from "@/components/TechStacks"

export default function Home() {

  const [year, setYear] = useState(new Date().getFullYear())

  return (

    <div className="md:w-7/12 w-11/12 mx-auto relative mb-20" >

      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 pl-1 pr-4 py-1 bg-black text-white border border-gray-200  rounded-full w-fit max-w-100 transition-all duration-300" >
        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 bg-gray-50 shrink-0" >
            <img src="/ayush.jpg" alt="Ayush Sharma" className="w-full h-full object-cover transition-transform duration-500 hover:scale-115" />
          </div>
          <span className="text-sm tracking-normal">Ayush Sharma</span>

        </div>

        <div className="flex items-center gap-1">
          <a href="#projects" className="text-[13px] font-normal text-white  border-0  hover:border-b">
            Projects
          </a>
        </div>
      </nav>

      {/* header name */}
      <div className="mt-28" >

        <h4 className="text-5xl font-normal my-5 leading-tight" >I'm Software Engineer.</h4>
        {/* <h4 className="text-5xl font-normal my-5" >A Software Engineer.</h4> */}
        <p className="text-sm text-gray-700 leading-relaxed tracking-wide" >I'm a full-stack developer passionate about building fast, reliable, and user-focused web applications. I combine solid engineering fundamentals with modern tools and clean design to deliver seamless digital experiences.</p>

        {/* get in touch */}
        <p className="text-sm font-normal text-gray-700 leading-relaxed tracking-wide mt-5" >Get in touch: <Link href={"mailto:ayushsharma014may@gmail.com"} className="cursor-pointer text-gray-700 border-0  hover:border-b" >ayushsharma014may@gmail.com</Link></p>

        <div className="flex gap-2 flex-wrap mt-4" >
          <span className="text-sm text-gray-700  border border-gray-400 hover:bg-gray-800 hover:text-white p-2 cursor-pointer flex items-center gap-2"><FaFilePdf /> Download Resume</span>
          <span className="text-sm text-gray-700  border border-gray-400 hover:bg-gray-800 hover:text-white p-2 cursor-pointer flex items-center gap-2"><FaLinkedin /> LinkedIn</span>
          <span className="text-sm text-gray-700  border border-gray-400 hover:bg-gray-800 hover:text-white p-2 cursor-pointer flex items-center gap-2"><FaGithub /> Github</span>
          {/* <span className="text-sm text-gray-700" >+91 6302594846</span> */}
        </div>
      </div>

      {/* Tech Stacks */}
      <TechStacks />


      {/* experience */}
      <div className="mt-10" >
        <p className="text-md text-gray-700" >Experience</p>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} index={index} experience={experience} />
        ))}
      </div >

      {/* Github */}
      <div className="mt-10" >
        <p className="text-md text-gray-700" >Github</p>
        <div className="mx-auto w-full  mt-1" >
          <Select defaultValue="2026" onValueChange={(e: any) => setYear(e)}>
            <SelectTrigger className="w-fit ms-auto text-gray-700">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {[...Array(5)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

          <GitHubCalendar
            year={year}
            username="ayush-may"
            colorScheme="light"
            className="text-gray-800 w-full mx-auto"
            fontSize={13}
            blockSize={14}
            blockMargin={4}
            showMonthLabels={true}
            showWeekdayLabels={true}
            showTotalCount={true}
          />
        </div>

      </div >


      {/* Projects */}
      <div className="mt-10" id="projects">
        <p className="text-md text-gray-700" >Projects</p>
        <div className="grid grid-cols-2 gap-3" >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div >

    </div >
  )
}
