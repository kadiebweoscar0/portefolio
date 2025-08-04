import "./App.css";
import About from "./components/about";
import HeroSection from "./components/heroSection";
import Qualification from "./components/qualification";
import TechnoSkills from "./components/technoSkills";
import icons from "./assets/logo/github-logo.jpeg";
import htmlIcon from "./assets/logo/HTML.jpeg";
import cssIcon from "./assets/logo/CSS.jpeg";
import tailwindIcon from "./assets/logo/TailwindCSS.jpeg";
import bootstrapIcon from "./assets/logo/Bootstrap.jpeg";
import materialIcon from "./assets/logo/MaterialUI.jpeg";
import javascripIcon from "./assets/logo/Javascript.jpeg";
import typescripIcon from "./assets/logo/TypeScript.jpeg";
import reactJsIcon from "./assets/logo/ReactJS .jpeg";
import reactNativeIcon from "./assets/logo/ReactNative.jpeg";
import phpIcon from "./assets/logo/PHP Logo.jpeg";
import laravelIcon from "./assets/logo/Laravel Logo Sticker.jpeg";
import nodeIcon from "./assets/logo/NodeJS.jpeg";
import expressIcon from "./assets/logo/ExpressJs.jpeg";
import restApiIcon from "./assets/logo/REST_API.jpeg";
import sqlIcon from "./assets/logo/SQL.jpeg";
import postgreIcon from "./assets/logo/PostgreSql.jpeg";
import mySqlIcon from "./assets/logo/MySql.jpeg";
import wordpressIcon from "./assets/logo/wordpress.jpeg";
import shopifyIcon from "./assets/logo/Shopify.jpeg";
import uiUxIcon from "./assets/logo/UI&UX.jpg";
import figmaIcon from "./assets/logo/figma.jpeg";
import postManIcon from "./assets/logo/Postman.jpeg";
import thunderClientIcon from "./assets/logo/thunderClient.jpeg";
import gitIcon from "./assets/logo/Git.jpeg";
import Services from "./components/services";
import Projet from "./components/projet";
import androidStudioIcon from "./assets/logo/android-studio.jpeg";
import vscodeIcon from "./assets/logo/vscode.jpeg";
import codeIcon from "./assets/logo/code.jpeg";
import canvaIcon from "./assets/logo/canva.jpeg";
import frontEndIcon from "./assets/logo/frontend.png";
import backendIcon from "./assets/logo/backend.png";
import webDesignIcon from "./assets/logo/ux.png";
import outilDevIcon from "./assets/logo/outildev.png";
import ScrollToTopButton from "./components/scrollToTopButton";
import NavBar from "./components/navBar";
import Contact from "./components/contact";

const navItems = [
  { id: "apropos", label: "À propos" },
  { id: "qualification", label: "Qualification" },
  { id: "skills", label: "Mes Skills" },
  { id: "services", label: "Mes Services" },
  { id: "realisations", label: "Réalisation" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <>
      <main className="p-3 flex flex-col items-center overflow-hidden lg:gap-10">
        <NavBar items={navItems} />
        <section
          id="hero"
          className="py-10 flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center m-auto w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] gap-5"
        >
          <HeroSection />
        </section>
        <section
          id="apropos"
          className=" pt-14 py-10 my-5 flex flex-col gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]"
        >
          <About />
        </section>
        <section id="qualification" className="max-w-3xl mx-auto py-10">
          <Qualification />
        </section>

        <section id="skills" className=" w-[100%] py-10">
          <div className=" flex flex-col items-center m-26 w">
            <h2 className="text-2xl font-bold text-center uppercase">
              Mes Skills
            </h2>
            <p className="text-center text-gray-600">
              mes competences technique
            </p>
          </div>
          <div className=" w-[100%] flex flex-wrap items-center justify-center m-auto gap-8">
            <TechnoSkills
              icon1={htmlIcon}
              icon2={cssIcon}
              icon3={tailwindIcon}
              icon4={bootstrapIcon}
              icon5={materialIcon}
              icon6={javascripIcon}
              icon7={typescripIcon}
              icon8={reactJsIcon}
              icon9={reactNativeIcon}
              title1="Front-End"
              title2="INTERFACES & INTERACTIONS"
              iconCard={frontEndIcon}
              skills=" HTML5, CSS, Tailwind Css, Bootstrap, Material Ui, JavaScript, TypeScript, React js, React Native"
            />
            <TechnoSkills
              icon1={phpIcon}
              icon2={laravelIcon}
              icon3={nodeIcon}
              icon4={expressIcon}
              icon5={restApiIcon}
              icon6={sqlIcon}
              icon7={postgreIcon}
              icon8={mySqlIcon}
              title1="Back-End"
              title2="LOGIQUES & DONNEES"
              iconCard={backendIcon}
              skills=" Php, Laravel, Node js, Express js, Rest Api, Sql, PostgreSql,
            MySql"
            />
            <TechnoSkills
              icon1={wordpressIcon}
              icon2={shopifyIcon}
              icon3={uiUxIcon}
              icon4={figmaIcon}
              icon5={canvaIcon}
              title1="Cms & Web Design"
              title2="FONCTIONNALITÉ & ESTHÉTIQUE"
              iconCard={webDesignIcon}
              skills=" Wordpress, Shopify, UI & UX, Figma, Canvas "
            />
            <TechnoSkills
              icon1={vscodeIcon}
              icon2={codeIcon}
              icon3={androidStudioIcon}
              icon4={postManIcon}
              icon5={thunderClientIcon}
              icon6={gitIcon}
              icon7={icons}
              title1="Outils Dev"
              title2="STRUCURER, TESTER, COLLABORER & PUBLIER"
              iconCard={outilDevIcon}
              skills=" VsCode, XCode, Android Studio, PostMan, Thunder Client, Git, Gihub"
            />
          </div>
        </section>
        <section
          id="services"
          className=" pt-14 py-10 my-5 flex flex-col gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]"
        >
          <Services />
        </section>
        <section
          id="realisations"
          className=" pt-14 py-10 my-5 flex flex-col items-center gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]"
        >
          <Projet />
        </section>
        <section
          className=" min-h-screen flex flex-col items-center gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]"
          id="contact"
        >
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center uppercase">
              Mes Coordonnées
            </h2>
            <p className="text-center text-gray-600">Entrer en Contact</p>
          </div>
          <Contact />
        </section>
        <ScrollToTopButton />
      </main>
      <footer className=" w-full justify-center items-center flex bg-black p-5">
        <p className=" text-white">© 2025 | By Oscar KADIEBWE JIBIKILAYI</p>
      </footer>
    </>
  );
}

export default App;
