import { FiBookOpen } from "react-icons/fi";

export function CSFundamentals() {
  const subjects = [
    { name: "Data Structures & Algorithms", short: "DSA" },
    { name: "Object-Oriented Programming", short: "OOPs" },
    { name: "Database Management Systems", short: "DBMS" },
    { name: "Computer Networks", short: "CN" },
    { name: "Operating Systems", short: "OS" },
  ];

  return (
    <div className="mt-10" id="cs-fundamentals">
      <p className="text-md text-gray-700 mb-4">CS Fundamentals</p>
      <div className="flex flex-wrap gap-2 justify-start items-center">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold text-gray-800 border border-gray-300 rounded-xs uppercase tracking-wider transition-all duration-300  bg-white"
            title={subject.name}
          >
            <FiBookOpen className="text-gray-500 w-3.5 h-3.5" />
            <span>
              {subject.name} <span className="text-[10px] text-gray-400 font-normal">({subject.short})</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
