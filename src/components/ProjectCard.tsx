import { Project } from "@/data/projects";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = (project.link && project.link !== "#" && project.link !== "") ||
    (project.github && project.github !== "#" && project.github !== "") ||
    (project.githubBackend && project.githubBackend !== "");

  return (
    <div className="border border-gray-300 p-4 mt-1 flex flex-col justify-between" >
      <div>
        {/* timeline */}
        <div className="relative p-0">
          <div className="flex justify-between mb-4" >
            <div className="flex items-center gap-2 flex-wrap" >
              <p className="text-md text-gray-800 font-bold leading-none" >{project.title}</p>
              {hasLinks && (
                <span className="w-1 h-1 rounded-full bg-gray-600 inline-block shrink-0" ></span>
              )}
              <div className="flex gap-2 flex-wrap" >
                {project.link && project.link !== "#" && project.link !== "" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200"
                    title="Live site"
                  >
                    <FaLink />
                  </a>
                )}
                {project.github && project.github !== "#" && project.github !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200 flex items-center gap-1"
                    title={project.githubBackend ? "Frontend repository" : "GitHub repository"}
                  >
                    <FaGithub />
                    {project.githubBackend && <span className="text-[10px]">Frontend</span>}
                  </a>
                )}
                {project.githubBackend && project.githubBackend !== "" && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-800/80 hover:text-gray-800 cursor-pointer p-1 border border-gray-200 flex items-center gap-1"
                    title="Backend repository"
                  >
                    <FaGithub />
                    <span className="text-[10px]">Backend</span>
                  </a>
                )}
              </div>
            </div>
            {project.duration && (
              <p className="text-xs text-gray-700 font-normal shrink-0" >{project.duration}</p>
            )}
          </div>
        </div>

        {project.description && (
          <p className="text-xs text-gray-800/80 font-light tracking-wide leading-relaxed mb-4" >
            {project.description}
          </p>
        )}
      </div>

      <div className="flex items-center flex-wrap gap-2 mt-auto pt-2" >
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="text-xs text-gray-800/80 p-1 border border-gray-200" >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}
