import osCode from "../assets/logo/osCode.jpg";
import git from "../assets/logo/Download GitHub Logo, Git Hub Icon On White Background.jpeg";

export default function About() {
  return (
    <section className=" pt-14 py-10 my-5 flex flex-col gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
      <div className=" flex flex-col items-center">
        <h2 className=" text-3xl font-bold text-center uppercase">
          {" "}
          APROPOS DE MOI
        </h2>
        <p className=" text-center text-gray-600">Un aperçus sur moi</p>
      </div>
      <div className=" flex flex-col py-3 items-center lg:flex-row gap-8">
        <div className=" m-auto">
          <img
            src={osCode}
            className=" w-full sm:w-[100%] md:w-[100%] rounded-3xl m-auto"
            alt=""
          />
        </div>
        <div className=" m-auto flex flex-col gap-5">
          <p className="py-3 text-justify text-sm sm:text-base md:text-lg">
            Mon expertise me permet de concevoir des solutions complètes,
            alliant performances, esthétique et ergonomie.
          </p>
          <p className=" pl-2 py-3 text-justify border-l-2 border-l-sky-500 text-sm sm:text-base md:text-lg">
            Avec une approche centrée sur l'utilisateur, je développe des
            applications modernes et intuitives, tout en optimisant leur
            expérience et leur accessibilité. Que ce soit pour la création de
            site web, d'applications mobile ou l'amelioration d'interfaces, je
            mets mes comptétences au service de projets innovants et ambitieux.
          </p>
          <div className=" flex gap-10">
            <div className="  w-[30%] rounded-2xl bg-blue-50 p-2 gap-3 flex flex-col">
              <img src={git} alt="git" className=" w-full rounded-2xl" />
              <p className=" font-medium">Contact 24/7</p>
            </div>
            <div className="  w-[30%] rounded-2xl bg-blue-50 p-2 gap-3 flex flex-col">
              <img src={git} alt="git" className=" w-full rounded-2xl" />
              <p className=" font-medium">Support 24/7</p>
            </div>
          </div>
          <a
            id="btnCv"
            className=" bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-full sm:w-[50%] md:w-[50%] text-center hover:text-white"
            href="src/assets/fichier/cvFullStack&MobileOscar.pdf.pdf"
            download={"cvFullStack&MobileOscar.pdf.pdf"}
          >
            Télécharger mon cv
          </a>
        </div>
      </div>
    </section>
  );
}
