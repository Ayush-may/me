import { certifications } from "@/data/certifications";
import { FiAward, FiExternalLink } from "react-icons/fi";

export function Certifications() {
  return (
    <div className="mt-10" id="certifications">
      <p className="text-md text-gray-700 mb-2">Certifications</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        {certifications.map((cert, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 p-4 flex flex-col justify-between hover:border-gray-400 transition-all duration-200 bg-white"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-2">
                    <FiAward className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {cert.issuer} • {cert.issueDate}
                      </p>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 shrink-0 transition-colors"
                      title="View Credential"
                    >
                      <span>Verify</span>
                      <FiExternalLink size={11} />
                    </a>
                  )}
                </div>
                {cert.description && (
                  <p className="text-xs text-gray-600 mt-3 font-mono text-[10px] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
