import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import icon from "../assets/logo/Download GitHub Logo, Git Hub Icon On White Background.jpeg";

const TechnoSkills: React.FC = () => {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 relative overflow-hidden bg-blue-50 shadow-lg rounded-xl p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between border transition-all duration-500 group">
      {/* Icône */}
      <div className="hidden sm:flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 m-2 sm:m-4 bg-gray-100 rounded-full z-10">
        <img src={icon} alt="React" className=" rounded-full p-4 w-full" />
      </div>

      {/* Effet d'animation du bg */}
      <div className="absolute inset-0 bg-gray-800 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>

      {/* Contenu texte */}
      <div className="z-10 mt-4 sm:mt-6 w-full sm:w-auto">
        <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500 flex flex-col gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
            ✅ Front-End
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-300">
            MA BOÎTE À OUTILS
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-1 group-hover:text-gray-300">
            ReactJS, HTML, CSS, Sass, JavaScript, Bootstrap, Tailwind CSS,
            Material UI
          </p>
        </div>

        {/* Icônes des technologies en colonne (de bas en haut) */}
        <div className="flex mt-2 justify-end gap-2">
          <img
            src={icon}
            alt="React"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2"
          />
          <img
            src={icon}
            alt="HTML5"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
          <img
            src={icon}
            alt="CSS3"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
          <img
            src={icon}
            alt="Sass"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
          <img
            src={icon}
            alt="JavaScript"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
          <img
            src={icon}
            alt="Bootstrap"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
          <img
            src={icon}
            alt="Tailwind CSS"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
          <img
            src={icon}
            alt="Material UI"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnoSkills;
