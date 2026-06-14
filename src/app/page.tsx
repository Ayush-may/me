"use client"
import Link from "next/link"
import { GitHubCalendar } from "react-github-calendar"
import { FaGithub, FaLink } from "react-icons/fa"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function Home() {

  const [year, setYear] = useState(new Date().getFullYear())

  return (

    <div className="md:w-6/12 w-11/12 mx-auto relative mb-20" >

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
      </div>

      {/* experience */}
      <div className="mt-10" >

        <p className="text-md text-gray-700" >Experience</p>

        {/* TCS  */}
        <div className="border border-gray-300 p-4 mt-1" >

          <p className="text-xs text-gray-700 font-normal" >Tata Consultancy Services</p>


          {/* timeline */}
          <div className="relative p-0">
            <div className="flex justify-between my-4" >
              <p className="text-md text-gray-800 font-bold leading-none" >System Engineer (Digital)</p>
              <p className="text-xs text-gray-700 font-normal" >June 2026 - Present</p>
            </div>
          </div>

          <p className="text-xs text-gray-800/80 font-light tracking-wide leading-relaxed" >Hired as a System Engineer (Digital) at Tata Consultancy Services, I am part of a team delivering innovative technology solutions to clients. I work on building and maintaining scalable web applications using modern tools and frameworks. My focus is on developing clean, efficient code while ensuring high performance and reliability. I collaborate with cross-functional teams to deliver end-to-end solutions, from planning and design to deployment and support. I am passionate about continuous learning and committed to delivering excellence in every project I work on.</p>

          {/* <div className="flex items-center gap-2 mt-4" >
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MERN</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >Razorpay</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >WebSockets</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS EC2</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SES</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SNS</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MongoDB</span>
          </div> */}

        </div>

        {/* kommon school  */}
        <div className="border border-gray-300 p-4 mt-2" >

          <p className="text-xs text-gray-700 font-normal" >Kommonify Venture Pvt Ltd.</p>


          {/* timeline */}
          <div className="relative p-0">
            {/* <p className="text-md text-gray-800 font-bold leading-none my-4 ms-5" >Associate Software Engineer</p> */}
            <div className="flex justify-between mt-5" >
              <p className="text-md text-gray-800 font-bold leading-none ms-5" >Associate Software Engineer</p>
              <p className="text-xs text-gray-700 font-normal" >May 2026 - Present</p>
            </div>
            <div className="flex justify-between my-5" >
              <p className="text-md text-gray-800 font-bold leading-none ms-5" >Full Stack Developer Fellow</p>
              <p className="text-xs text-gray-700 font-normal" >Jul 2025 - May 2026</p>
            </div>

            <div className="absolute inset-y-0 bottom-0 top-0 left-0 w-0.5 bg-gray-700">

              <div className="w-3 h-3 rounded-full bg-gray-700 absolute -left-1 top-0" ></div>
              <div className="w-3 h-3 rounded-full bg-gray-700 absolute -left-1 bottom-0" ></div>
            </div>
          </div>

          <p className="text-xs text-gray-800/80 font-normal leading-relaxed" >Worked as a Full Stack Developer, building end-to-end features from frontend to backend. Developed a subscription management module, integrated Razorpay payment gateway, implemented real-time user tracking using WebSockets, built secure payment APIs with idempotency support, and developed an admin console using MongoDB aggregation pipelines to generate data from multiple collections.</p>

          <div className="flex items-center gap-2 mt-4" >
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MERN</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >Razorpay</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >WebSockets</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS EC2</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SES</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SNS</span>
            <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MongoDB</span>
          </div>

        </div>


      </div >

      {/* Projects */}
      <div className="mt-10" >

        <p className="text-md text-gray-700" >Github</p>


        <div className="mx-auto w-full  mt-1" >

          <Select defaultValue="2026" onValueChange={(e: any) => setYear(e)}>
            <SelectTrigger className="w-fit ms-auto text-gray-700">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <GitHubCalendar
            year={year}
            username="ayush-may"
            colorScheme="light"
            className="text-gray-800 w-full mx-auto"
            fontSize={14}
            blockSize={14}
            blockMargin={4}
            showMonthLabels={true}
            showWeekdayLabels={true}
            showTotalCount={true}
          />
        </div>


      </div >


      {/* Projects */}
      <div className="mt-10" >

        <p className="text-md text-gray-700" >Projects</p>

        <div className="grid grid-cols-2 gap-3" >

          <div className="border border-gray-300 p-4 mt-1" >

            {/* timeline */}
            <div className="relative p-0">
              <div className="flex justify-between mb-4" >
                <div className="flex items-center gap-2" >
                  <p className="text-md text-gray-800 font-bold leading-none" >AI Form Generator</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600 inline-block" ></span>
                  <div className="flex gap-2" >
                    <span className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200" ><FaLink /></span>
                    <span className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200" ><FaGithub /></span>
                  </div>
                </div>
                <p className="text-xs text-gray-700 font-normal" >June 2026 - Present</p>
              </div>
            </div>

            {/* <p className="text-xs text-gray-800/80 font-light tracking-wide leading-relaxed" >Hired as a System Engineer (Digital) at Tata Consultancy Services, I am part of a team delivering innovative technology solutions to clients. I work on building and maintaining scalable web applications using modern tools and frameworks. My focus is on developing clean, efficient code while ensuring high performance and reliability. I collaborate with cross-functional teams to deliver end-to-end solutions, from planning and design to deployment and support. I am passionate about continuous learning and committed to delivering excellence in every project I work on.</p> */}

            <div className="flex items-center flex-wrap gap-2 mt-4" >
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MERN</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >Razorpay</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >WebSockets</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS EC2</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SES</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SNS</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MongoDB</span>
            </div>

          </div>

          <div className="border border-gray-300 p-4 mt-1" >

            {/* timeline */}
            <div className="relative p-0">
              <div className="flex justify-between mb-4" >
                <div className="flex items-center gap-2" >
                  <p className="text-md text-gray-800 font-bold leading-none" >AI Form Generator</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600 inline-block" ></span>
                  <div className="flex gap-2" >
                    <span className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200" ><FaLink /></span>
                    <span className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200" ><FaGithub /></span>
                  </div>
                </div>
                <p className="text-xs text-gray-700 font-normal" >June 2026 - Present</p>
              </div>
            </div>

            {/* <p className="text-xs text-gray-800/80 font-light tracking-wide leading-relaxed" >Hired as a System Engineer (Digital) at Tata Consultancy Services, I am part of a team delivering innovative technology solutions to clients. I work on building and maintaining scalable web applications using modern tools and frameworks. My focus is on developing clean, efficient code while ensuring high performance and reliability. I collaborate with cross-functional teams to deliver end-to-end solutions, from planning and design to deployment and support. I am passionate about continuous learning and committed to delivering excellence in every project I work on.</p> */}

            <div className="flex items-center flex-wrap gap-2 mt-4" >
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MERN</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >Razorpay</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >WebSockets</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS EC2</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SES</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >AWS SNS</span>
              <span className="text-xs text-gray-800/80 p-1 border border-gray-200" >MongoDB</span>
            </div>

          </div>


        </div>


      </div >

    </div >
  )
}
