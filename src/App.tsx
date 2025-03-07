import { useState, useEffect } from "react";
import "./App.css";
import SocialMedia from "./components/socialMedia";
import whatsapp from "../src/assets/logo/Icônes de Whatsapp en téléchargement gratuit.jpeg";
import gitHub from "../src/assets/logo/Download GitHub Logo, Git Hub Icon On White Background.jpeg";
import linkdin from "../src/assets/logo/linkdinLogo.jpeg";

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
  "Web Master",
];

const Typewriter: React.FC = () => {
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
    <p className=" underline underline-offset-8 text-2xl decoration-sky-500 font-medium">
      {text}
      <span aria-hidden="true" className=" text-sky-500">
        |
      </span>
    </p>
  );
};

function App() {
  return (
    <body className=" p-3 flex flex-col items-center flex flex-col items-center">
      {/* hero section */}
      <section className=" py-3 flex flex-col-reverse lg:flex-row lg:items-center lg:m-auto lg:w-[60%] lg:gap-3">
        <div>
          <div className=" py-4 flex gap-2">
            <div className=" w-9 bg-black h-3.5"></div>
            <p className=" text-4xl font-bold">Oscar Kadiebwe</p>
          </div>
          <div className=" gap-2">
            <div className=" flex gap-2">
              <p className=" text-2xl">Je suis : </p>
              <Typewriter />
            </div>
            <p className=" pl-2 py-3 text-justify border-l-2 border-l-sky-500">
              Passionné par la création d’applications performantes et
              intuitives, j’aide entreprises et entrepreneurs à transformer
              leurs idées en solutions digitales sur mesure.
            </p>
          </div>
        </div>
        <div className=" flex flex-row w-full gap-2.5">
          <div id="radiusImg">
            <img src={whatsapp} alt="logo" id="radiusImg" />
          </div>
          <div
            className=" h-[100%] flex flex-col justify-between gap-20 bg-blue-50
          p-2.5 rounded-2xl"
          >
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

      {/* About me */}
      {/* <div className=" flex flex-col items-center">
        <div>
          <img src={whatsapp} alt="logo" className=" rounded-2xl" />
        </div>
        <div>
          <div>
            <p className=" p-2.5">
              Je suis un développeur spécialisé dans les applications et les
              sites web. Mes compétences en développement web me permettent de
              m'impliquer dans toutes les étapes du cycle de vie d'un projet, de
              la conception à la mise en œuvre, et jusqu'à la maintenance.
            </p>
            <p className=" p-4 border-l-2 border-l-blue-400 text-2xl">
              Donnez vie à vos projets numériques
            </p>
            <p className=" p-1">
              Que ce soit pour un site vitrine, une application web interactive,
              une application mobile ou un portail en ligne, je vous accompagne
              dans la concrétisation de vos idées numériques.
            </p>
          </div>
        </div>
      </div> */}
    </body>
  );
}

export default App;
