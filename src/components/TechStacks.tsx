import { techstacks } from "@/data/techstacks";
import * as SiIcons from "react-icons/si";

export function TechStacks() {
  return (
    <div className="mt-10" >
      <p className="text-md text-gray-700 mb-4" >Tech Stacks I Use</p>
      <div className="flex flex-wrap gap-2 justify-start items-center" >
        {techstacks.map((tech, index) => {
          // Dynamically lookup simple icon if configured
          const IconComponent = tech.icon ? (SiIcons as any)[tech.icon] : null;
          const textCol = tech.textColor || "#ffffff";
          const spanTextCol = tech.spanTextColor || textCol;

          return (
            <div
              key={index}
              className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-extrabold rounded-xs uppercase tracking-wider select-none shadow-sm cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ${tech.borderClass || ""}`}
              style={{
                backgroundColor: tech.backgroundColor,
                color: textCol,
              }}
              title={tech.name}
            >
              {IconComponent && (
                <IconComponent
                  className="w-3.5 h-3.5"
                  style={{ color: tech.textColor || undefined }}
                />
              )}
              <span style={{ color: spanTextCol }}>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
