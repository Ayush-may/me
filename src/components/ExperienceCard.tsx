import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isMultipleRoles = experience.roles.length > 1;

  return (
    <div className={`border border-gray-300 p-4 ${index > 0 ? "mt-2" : "mt-1"}`} >
      <p className="text-xs text-gray-700 font-normal" >{experience.company}</p>

      {/* timeline */}
      <div className="relative p-0">
        {experience.roles.map((role, rIndex) => {
          if (isMultipleRoles) {
            return (
              <div
                key={rIndex}
                className={`flex justify-between ${
                  rIndex === 0
                    ? "mt-5 mb-5"
                    : rIndex === experience.roles.length - 1
                    ? "mb-5"
                    : "my-5"
                }`}
              >
                <p className="text-md text-gray-800 font-bold leading-none ms-5" >{role.title}</p>
                <p className="text-xs text-gray-700 font-normal" >{role.duration}</p>
              </div>
            );
          } else {
            return (
              <div key={rIndex} className="flex justify-between my-4" >
                <p className="text-md text-gray-800 font-bold leading-none" >{role.title}</p>
                <p className="text-xs text-gray-700 font-normal" >{role.duration}</p>
              </div>
            );
          }
        })}

        {isMultipleRoles && (
          <div className="absolute inset-y-0 bottom-0 top-0 left-0 w-0.5 bg-gray-700">
            <div className="w-3 h-3 rounded-full bg-gray-700 absolute -left-1 top-0" ></div>
            <div className="w-3 h-3 rounded-full bg-gray-700 absolute -left-1 bottom-0" ></div>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-800/80 font-normal leading-relaxed" >{experience.description}</p>

      {experience.tags && experience.tags.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 mt-4" >
          {experience.tags.map((tag, tIndex) => (
            <span key={tIndex} className="text-xs text-gray-800/80 p-1 border border-gray-200" >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
