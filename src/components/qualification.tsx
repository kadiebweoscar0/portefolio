import React from "react";

export default function Qualification() {
  const qualifications = [
    {
      type: "education",
      title: "Bac +5 en Informatique industrielle",
      institution: "ISPT Kinshasa",
      year: "2023 - 2024",
    },
    {
      type: "education",
      title: " Bac +2 en Développement Web et Mobile",
      institution: "KADEA ACADEMY",
      year: "2022 - 2023",
    },
    {
      type: "education",
      title: "SIMPLON",
      institution: "KADEA",
      year: "2023",
    },
    {
      type: "education",
      title: "Bac +3 en Informatique industrielle et reseau",
      institution: "ISPT Kinshasa",
      year: "2021 - 2022",
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-bold text-center uppercase">
        Qualification
      </h2>
      <p className="text-center text-gray-600">Mon parcours personnel</p>

      <div className="flex justify-center space-x-10 my-6">
        <div className="flex items-center space-x-2 font-semibold text-gray-800">
          {/* <FaGraduationCap />  */}
        </div>
        <div className="flex items-center space-x-2 font-semibold text-gray-800">
          {/* <FaBriefcase />  */}
        </div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-gray-300 transform -translate-x-1/2"></div>

        {qualifications.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center w-full mb-6 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-6/12 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.institution}</p>
              <div className="text-gray-500 text-sm mt-1">{item.year}</div>
            </div>

            {/* Point central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white"></div>
          </div>
        ))}
      </div>
    </>
  );
}
