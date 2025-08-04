import { useState, useEffect } from "react";
import "../App.css";
import SocialMedia from "./socialMedia";
import whatsapp from "../assets/logo/whatsapp.jpeg";
import gitHub from "../assets/logo/github-logo.jpeg";
import linkdin from "../assets/logo/linkdinLogo.jpeg";
import designImg from "../assets/image/Gemini_Generated_Image_mly529mly529mly5.png";

function openWhatsapp() {
  const phone: string = "243823616356";
  const message: string = encodeURIComponent(
    "Salut, je suis intéressé(e) par votre profil de développeur. Pourrions-nous échanger davantage ?"
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
        setText("");
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
    <>
      <div>
        <div className="py-4 flex gap-2">
          <div className="w-9 bg-black h-3.5"></div>
          <p className="text-3xl text-center font-bold">Oscar KADIEBWE</p>
        </div>
        <div className="gap-2">
          <div className="flex gap-2">
            <p className="text-xl sm:text-2xl">Je suis : </p>
            <Typewriter />
          </div>
          <p className="pl-2 py-3 text-justify border-l-2 border-l-sky-500 ">
            Passionné par la création d’applications performantes et intuitives,
            j’aide les entreprises et entrepreneurs à transformer leurs idées en
            solutions digitales sur mesure.
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-2.5">
        <img
          src={designImg}
          alt="logo"
          className="w-[80%]  sm:w-[100%] md:w-[100%] rounded-3xl"
        />

        <div className="h-[100%] flex flex-col justify-between gap-20 bg-blue-50 p-2.5 rounded-2xl">
          <SocialMedia
            urlImage={gitHub}
            altTxt="logo github"
            linkMedia="https://github.com/kadiebweoscar0"
            disabled={false}
          />
          <SocialMedia
            urlImage={linkdin}
            altTxt="logo linkind"
            linkMedia="https://www.linkedin.com/in/kadiebweoscar0"
            disabled={true}
          />
          <SocialMedia
            urlImage={whatsapp}
            altTxt="logo facebook"
            linkMedia="#"
            onClick={openWhatsapp}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
}
