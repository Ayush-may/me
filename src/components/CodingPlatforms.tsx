import { codingPlatforms } from "@/data/codingPlatforms";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export function CodingPlatforms() {
  return (
    <div className="mt-10" id="coding-profiles">
      <p className="text-md text-gray-700 mb-2">Coding Profiles</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        {codingPlatforms.map((platform) => {
          const isLeetCode = platform.name.toLowerCase() === "leetcode";
          const PlatformIcon = isLeetCode ? SiLeetcode : SiGeeksforgeeks;

          return (
            <div
              key={platform.name}
              className="border border-gray-300 p-4 flex flex-col justify-between hover:border-gray-400 transition-all duration-200 bg-white"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <PlatformIcon className="w-5 h-5 text-gray-700" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 leading-none">
                        {platform.name}
                      </h4>
                      <span className="text-[10px] text-gray-500 font-mono">
                        @{platform.username}
                      </span>
                    </div>
                  </div>
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors"
                    title={`View ${platform.name} Profile`}
                  >
                    <span>Profile</span>
                    <FiExternalLink size={11} />
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-baseline justify-between mt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">
                      Problems Solved
                    </span>
                    <span className="text-xl font-bold text-gray-800">
                      {platform.totalSolved}+
                    </span>
                  </div>
                  {platform.instituteRank !== undefined && (
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">
                        Institute Rank
                      </span>
                      <span className="text-xl font-bold text-gray-800">
                        #{platform.instituteRank}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
