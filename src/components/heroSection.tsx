import { useState, useEffect } from "react";
import "../App.css";
import SocialMedia from "./socialMedia";
import whatsapp from "../assets/logo/Icônes de Whatsapp en téléchargement gratuit.jpeg";
import gitHub from "../assets/logo/Download GitHub Logo, Git Hub Icon On White Background.jpeg";
import linkdin from "../assets/logo/linkdinLogo.jpeg";
import osCode from "../assets/logo/osCode.jpg";

function openWhatsapp() {
  const phone: string = "243823616356";
  const message: string = encodeURIComponent(
    "Bonjour, j'aimerais en savoir plus !"
  );
  const url: string = `https://wa.me/${phone}?text=${message}`;

  window.location.href = url;
}

const textArray: string[] = [
  "Développeur web full stack.",
  "Développeur Mobile.",
  "UI/UX Design.",
  "Web Master.",
];

const Typewriter = () => {
  const [text, setText] = useState(""); // Texte en cours d'affichage
  const [textIndex, setTextIndex] = useState(0); // Index du texte affiché
  const [charIndex, setCharIndex] = useState(0); // Index du caractère affiché

  useEffect(() => {
    if (charIndex < textArray[textIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + textArray[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 200);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText(""); // Réinitialise le texte
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % textArray.length); // Passe au texte suivant
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <p className=" underline underline-offset-8 text-xl decoration-sky-500 font-medium lg:text-2xl">
      {text}
      <span aria-hidden="true" className=" text-sky-500">
        |
      </span>
    </p>
  );
};

export default function HeroSection() {
  return (
    <section className="py-3 flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center m-auto w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] gap-5">
      <div>
        <div className="py-4 flex gap-2">
          <div className="w-9 bg-black h-3.5"></div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Oscar KADIEBWE
          </p>
        </div>
        <div className="gap-2">
          <div className="flex gap-2">
            <p className="text-xl sm:text-2xl">Je suis : </p>
            <Typewriter />
          </div>
          <p className="pl-2 py-3 text-justify border-l-2 border-l-sky-500 text-sm sm:text-base md:text-lg">
            Passionné par la création d’applications performantes et intuitives,
            j’aide les entreprises et entrepreneurs à transformer leurs idées en
            solutions digitales sur mesure.
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-2.5">
        <img
          src={osCode}
          alt="logo"
          className="w-[80%]  sm:w-[100%] md:w-[100%] rounded-3xl"
        />
        {/* </div> */}
        <div className="h-[100%] flex flex-col justify-between gap-20 bg-blue-50 p-2.5 rounded-2xl">
          <SocialMedia
            urlImage={gitHub}
            altTxt="logo github"
            linkMedia="https://github.com/kadiebweoscar0"
          />
          <SocialMedia
            urlImage={linkdin}
            altTxt="logo facebook"
            linkMedia="https://www.linkedin.com/login/fr"
          />
          <SocialMedia
            urlImage={whatsapp}
            altTxt="logo facebook"
            linkMedia="#"
            onClick={openWhatsapp}
          />
        </div>
      </div>
    </section>
  );
}
