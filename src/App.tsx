import "./App.css";
import About from "./components/about";
import HeroSection from "./components/heroSection";

function App() {
  return (
    <body className="p-3 flex flex-col items-center">
      {/* hero section */}
      <HeroSection />
      <About />
    </body>
  );
}

export default App;
