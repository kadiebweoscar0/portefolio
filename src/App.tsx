import "./App.css";
import About from "./components/about";
import HeroSection from "./components/heroSection";
import Qualification from "./components/qualification";
import TechnoSkills from "./components/technoSkills";

function App() {
  return (
    <body className="p-3 flex flex-col items-center">
      {/* hero section */}
      <HeroSection />
      <About />
      <Qualification />
      <section className=" w-[100%]">
        <div className=" flex flex-col items-center m-26 w">
          <h2 className="text-3xl font-bold text-center"> Mes Skills</h2>
          <p className="text-center text-gray-600">mes competences technique</p>
        </div>
        <div className=" w-[100%] flex flex-wrap items-center justify-center m-auto gap-8">
          <TechnoSkills />
          <TechnoSkills />
          <TechnoSkills />
          <TechnoSkills />
        </div>
      </section>
    </body>
  );
}

export default App;
