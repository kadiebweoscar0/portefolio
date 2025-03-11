import "./App.css";
import About from "./components/about";
import HeroSection from "./components/heroSection";
import Qualification from "./components/qualification";

function App() {
  return (
    <body className="p-3 flex flex-col items-center">
      {/* hero section */}
      <HeroSection />
      <About />
      <Qualification />

      {/* <div className=" flex flex-col items-center m-26">
        <h2 className=" text-2xl font-medium"> QUALIFICATION</h2>
        <p className=" text-center">mon parcours d'educatif</p>
      </div> */}
    </body>
  );
}

export default App;
