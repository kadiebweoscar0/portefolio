const TechnoSkills = (props: {
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
  icon7?: string;
  icon8?: string;
  icon9?: string;
  icon10?: string;
  title1: string;
  title2: string;
  iconCard: string;
  skills: string;
}) => {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 relative overflow-hidden bg-blue-50 shadow-lg rounded-xl p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between border transition-all duration-500 group">
      {/* Icône */}
      <div className="hidden sm:flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 m-2 sm:m-4 bg-gray-100 rounded-full z-10">
        <img
          src={props.iconCard}
          alt="React"
          className=" rounded-full p-4 w-full"
        />
      </div>

      {/* Effet d'animation du bg */}
      <div className="absolute inset-0 bg-gray-800 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>

      {/* Contenu texte */}
      <div className="z-10 mt-4 sm:mt-6 w-full sm:w-auto">
        <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500 flex flex-col gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
            ✅ {props.title1}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-300">
            {props.title2}
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-1 group-hover:text-gray-300">
            {props.skills}
          </p>
        </div>

        {/* Icônes des technologies en colonne (de bas en haut) */}
        <div className="flex mt-2 justify-end gap-2">
          {props.icon1 && (
            <img
              src={props.icon1}
              alt="React"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 bg-neutral-950"
            />
          )}
          {props.icon2 && (
            <img
              src={props.icon2}
              alt="HTML5"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon3 && (
            <img
              src={props.icon3}
              alt="CSS3"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon4 && (
            <img
              src={props.icon4}
              alt="Sass"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon5 && (
            <img
              src={props.icon5}
              alt="JavaScript"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon6 && (
            <img
              src={props.icon6}
              alt="Bootstrap"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon7 && (
            <img
              src={props.icon7}
              alt="Tailwind CSS"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon8 && (
            <img
              src={props.icon8}
              alt="Material UI"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon9 && (
            <img
              src={props.icon9}
              alt="Material UI"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
          {props.icon10 && (
            <img
              src={props.icon10}
              alt="Material UI"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 -ml-5 sm:ml-02 bg-neutral-950"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnoSkills;

/* import React, { useState } from 'react';

const TechnoSkills = (props: {
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
  icon7?: string;
  icon8?: string;
  icon9?: string;
  icon10?: string;
  title1: string;
  title2: string;
  iconCard: string;
  skills: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 relative overflow-hidden bg-blue-50 shadow-lg rounded-xl p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between border transition-all duration-500 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hidden sm:flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 m-2 sm:m-4 bg-gray-100 rounded-full z-10">
        <img
          src={props.iconCard}
          alt="React"
          className="rounded-full p-4 w-full"
        />
      </div>

      <div className="absolute inset-0 bg-gray-800 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>

      <div className="z-10 mt-4 sm:mt-6 w-full sm:w-auto">
        <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500 flex flex-col gap-2 sm:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
            ✅ {props.title1}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-300">
            {props.title2}
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-1 group-hover:text-gray-300">
            {props.skills}
          </p>
        </div>

        <div className="flex mt-2 justify-end gap-2">
          {props.icon1 && (
            <img
              src={props.icon1}
              alt="React"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-sky-500 border-2 bg-neutral-950"
            />
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <p className="text-sm text-gray-600">{props.skills}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnoSkills;
 */
