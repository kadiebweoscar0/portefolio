/* eslint-disable @typescript-eslint/no-unused-vars */
import osCode from "../assets/logo/osCode.jpg";
import supportIcon from "../assets/logo/support.png";
import callIcon from "../assets/logo/appel.png";

export default function About() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <h2 className=" text-2xl font-bold text-center uppercase">
          APROPOS DE MOI
        </h2>
        <p className=" text-center text-gray-600">Un aperçus sur moi</p>
      </div>
      <div className=" flex flex-col py-3 justify-center lg:flex-row gap-8">
        <div className=" m-auto">
          <img
            src={osCode}
            className=" w-full sm:w-[100%] md:w-[100%] rounded-3xl m-auto"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-5">
          <p className="py-3 text-justify ">
            Mon expertise me permet de concevoir des solutions complètes,
            alliant performances, esthétique et ergonomie.
          </p>
          <p className=" pl-2 py-3 text-justify border-l-2 border-l-sky-500 ">
            Avec une approche centrée sur l'utilisateur, je développe des
            applications modernes et intuitives, tout en optimisant leur
            expérience et leur accessibilité. Que ce soit pour la création de
            site web, d'applications mobile ou l'amelioration d'interfaces, je
            mets mes comptétences au service de projets innovants et ambitieux.
          </p>
          <div className=" w-[80%] mx-auto flex justify-between items-center border-t border-b border-gray-300 py-4">
            <div className=" flex items-center gap-4">
              <img src={supportIcon} alt="support-icon" className=" w-6 h-6" />
              <div className=" flex flex-col">
                <span className=" font-bold text-sm">Assistance</span>
                <span className=" text-sm">En ligne 24/7</span>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <img src={callIcon} alt="call-icon" className=" w-6 h-6" />
              <div className=" flex flex-col">
                <span className=" font-bold text-sm">Disponibilité</span>
                <span className=" text-sm">Activité Partielle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
