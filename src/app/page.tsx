import { GitHubCalendar } from "react-github-calendar"

export default function Home() {

  return (

    <div className="w-1/3 mx-auto relative" >

      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 pl-2 pr-4 py-2 border border-gray-200 bg-white rounded-full w-fit max-w-100 transition-all duration-300" >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 bg-gray-50 shrink-0" >
            <img src="/ayush.jpg" alt="Ayush Sharma" className="w-full h-full object-cover transition-transform duration-500 hover:scale-115" />
          </div>
          <span className="text-sm font-semibold text-black tracking-normal">Ayush Sharma</span>
        </div>

        <div className="flex items-center gap-1">
          <a href="#projects" className="text-[13px] font-normal text-gray-800/80 hover:text-gray-800 border-0  hover:border-b">
            Projects
          </a>
        </div>
      </nav>

      {/* header name */}
      <div className="mt-28" >

        <h4 className="text-5xl font-normal my-5 leading-tight" >I'm Ayush Sharma,<br /> A Software Engineer.</h4>
        {/* <h4 className="text-5xl font-normal my-5" >A Software Engineer.</h4> */}
        <p className="text-sm text-gray-700 leading-relaxed tracking-wide" >I'm a full-stack developer passionate about building fast, reliable, and user-focused web applications. I combine solid engineering fundamentals with modern tools and clean design to deliver seamless digital experiences.</p>

        {/* get in touch */}
        <p className="text-sm font-normal text-gray-700 leading-relaxed tracking-wide mt-5" >Get in touch: <span className="cursor-pointer text-gray-700 border-0  hover:border-b" >ayushsharma014may@gmail.com</span></p>



      </div>

      {/* Github */}
      {/* <GitHubCalendar
        username="ayush-may"
        colorScheme="dark"
        className="text-gray-100"
      /> */}
    </div>
  )
}
