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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FiArrowUp, FiMenu, FiX } from "react-icons/fi"

export default function Home() {

  const [year, setYear] = useState(new Date().getFullYear())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    <div className="md:w-7/12 w-11/12 mx-auto relative mb-20" id="_home-top" >
      {/* 
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 pl-1 pr-1 py-1 bg-black text-white border border-gray-200  rounded-full w-fit transition-all duration-300" >
        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full overflow-hidden " >
            <Avatar>
              <AvatarImage src="/ayush.jpg" className="rounded-none border border-gray-200 object-cover scale-[1.05]" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-sm tracking-normal text-nowrap">Ayush Sharma</span>

        </div>

        <div className="flex items-center gap-5">
          <Link href="#experience" className="text-[13px] font-normal text-white  border-0  hover:border-b">
            Experience
          </Link>
          <Link href="#github" className="text-[13px] font-normal text-white  border-0  hover:border-b">
            Github
          </Link>
          <Link href="#projects" className="text-[13px] font-normal text-white  border-0  hover:border-b">
            Projects
          </Link>
        </div>

        <Link href="#_home-top" className="text-gray-300 w-fit hover:bg-gray-700 transition-colors duration-150 rounded-full p-2" >
          <FiArrowUp size={15} className="" />
        </Link>
      </nav> */}

      {/* bottom position */}
      {/* <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 pl-1 pr-1 py-1 bg-white text-black border border-gray-300  rounded-full w-fit transition-all duration-300" > */}

      {/* top position and white theme */}
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-3 md:gap-6 pl-2 pr-2 md:pl-1 md:pr-1 py-1 bg-white/80 backdrop-blur-md text-black border border-gray-300/80 rounded-full w-[90%] sm:w-fit max-w-lg transition-all duration-300 shadow-sm" >
        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0" >
            <Avatar>
              <AvatarImage src="/ayush.jpg" className="rounded-none border border-gray-200 object-cover scale-[1.05]" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-sm font-medium tracking-normal text-nowrap">Ayush Sharma</span>

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="#experience" className="text-[13px] font-normal  border-0  hover:border-b">
            Experience
          </Link>
          <Link href="#github" className="text-[13px] font-normal border-0  hover:border-b">
            Github
          </Link>
          <Link href="#projects" className="text-[13px] font-normal border-0  hover:border-b">
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-1">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:bg-gray-200/50 transition-colors duration-150 rounded-full p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>

          <Link href="#_home-top" className="text-gray-500 w-fit hover:bg-gray-200/50 transition-colors duration-150 rounded-full p-2" >
            <FiArrowUp size={15} className="" />
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 right-0 mx-auto w-full bg-white/95 backdrop-blur-md text-black border border-gray-200 rounded-2xl shadow-lg p-3 flex flex-col gap-1 md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="#experience"
              onClick={() => setIsMenuOpen(false)}
              className="text-[13px] font-medium py-2.5 px-4 hover:bg-gray-100/80 rounded-xl transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#github"
              onClick={() => setIsMenuOpen(false)}
              className="text-[13px] font-medium py-2.5 px-4 hover:bg-gray-100/80 rounded-xl transition-colors"
            >
              Github
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-[13px] font-medium py-2.5 px-4 hover:bg-gray-100/80 rounded-xl transition-colors"
            >
              Projects
            </Link>
          </div>
        )}
      </nav>

      {/* header name */}
      <div className="mt-28" id="home"  >

        <h4 className="text-4xl md:text-7xl font-semibold my-5 leading-tight" >
          I'm <br />
          <span className="bg-gray-800 text-white p-1" >Software Engineer.</span>
        </h4>
        {/* <h4 className="text-5xl font-normal my-5" >A Software Engineer.</h4> */}
        <p className="text-sm text-gray-700 leading-relaxed tracking-wide" >I'm a full-stack developer passionate about building fast, reliable, and user-focused web applications. I combine solid engineering fundamentals with modern tools and clean design to deliver seamless digital experiences.</p>

        {/* get in touch */}
        <p className="text-sm font-normal text-gray-700 leading-relaxed tracking-wide mt-5">
          Get in touch: <Link
            href="mailto:ayushsharma014may@gmail.com"
            className="cursor-pointer text-gray-700 hover:border-b hover:border-solid hover:border-gray-700 active:border-b active:border-solid active:border-gray-700"
          >
            ayushsharma014may@gmail.com
          </Link>
        </p>


        <div className="flex gap-2 flex-wrap mt-4" >
          <Link href={"#"} className="text-sm text-gray-700  border border-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white p-2 cursor-pointer flex items-center gap-2"><FaFilePdf /> Download Resume</Link>
          <Link href={"#"} className="text-sm text-gray-700  border border-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white p-2 cursor-pointer flex items-center gap-2"><FaLinkedin /> LinkedIn</Link>
          <Link href={"#"} className="text-sm text-gray-700  border border-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white p-2 cursor-pointer flex items-center gap-2"><FaGithub /> Github</Link>
          {/* <span className="text-sm text-gray-700" >+91 6302594846</span> */}
        </div>
      </div>

      {/* Tech Stacks */}
      <TechStacks />


      {/* experience */}
      <div className="mt-10" id="experience" >
        <p className="text-md text-gray-700" >Experience</p>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} index={index} experience={experience} />
        ))}
      </div >

      {/* Github */}
      <div className="mt-10" id="github" >
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
