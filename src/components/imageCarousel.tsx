import { useEffect, useState, useRef } from "react";
import osCodeImg from "../assets/logo/osCode.jpg";
import imgEsa from "../assets/image/esa.png";
import imgSodeicoAcademi from "../assets/image/sodeicoAcademi.png";
import imgSodeicoHolding from "../assets/image/sodeicoHoldin.png";
import imgDashboardMpqyroll from "../assets/image/dashboard-Mpayroll.png";
import imgMaketFuta from "../assets/image/maket-app-futa.png";

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    image: imgDashboardMpqyroll,
    title: "Logiciel de payement",
    description: `M-payroll est un logiciel de payement en ligne des agents et prestataires de services simple et rapide`,
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    url: "https://mpayroll.net/",
  },
  {
    id: 2,
    image: imgSodeicoAcademi,
    title: "Plateforme de elarning",
    description: `Sodeico Académie est une plateforme d'apprentissage en ligne qui permet d‘apprendre rapidement`,
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    url: "https://sodeico.academy/",
  },
  {
    id: 3,
    image: imgSodeicoHolding,
    title: "site web de presentation",
    description: `Sodeico Holding est un site web de présentation pour le compte du groupe Sodeico Holding`,
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    url: "https://www.sodeicoholding.com/",
  },
  {
    id: 4,
    image: imgMaketFuta,
    title: "Maquette Application mobile",
    description: `une maquette d'une application mobile pour le compte d'un client`,
    technologies: ["figma"],
    url: "https://www.figma.com/design/TIJpZSRC03MqxLVPS4bE0l/Futa-banki-Mobile-App-Ui-Kit-With-light---Dark-Mode-High-Quality-Ui-43--Screen-template--Community-?node-id=1-4&p=f&t=F46GQOSQkr1VOPtE-0",
  },
  {
    id: 5,
    image: osCodeImg,
    title: "find-freelance",
    description: `find-freelance est une plateforme qui met en relation entre les freelance et les personnes qui cherche les freelance.`,
    technologies: ["React", "Node.js", "MongoDB"],
    url: "https://www.find-freelance.com/",
  },
  {
    id: 6,
    image: imgEsa,
    title: "Application mobile ESA",
    description: `ESA est une application disponible sur Android et iPhone qui vous aide à trouver des stages académiques et professionnels.`,
    technologies: ["React native", "Expo", "laravel", "Mysql", "Redux"],
    url: "https://esardc.com/",
  },
];

const ImageCardCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardsPerStep, setCardsPerStep] = useState(1);

  const updateCardsPerStep = () => {
    if (window.innerWidth >= 640) {
      setCardsPerStep(2); // sm et plus = 2 cartes
    } else {
      setCardsPerStep(1); // mobile = 1 carte
    }
  };

  useEffect(() => {
    updateCardsPerStep();
    window.addEventListener("resize", updateCardsPerStep);
    return () => window.removeEventListener("resize", updateCardsPerStep);
  }, []);

  const totalSteps = Math.ceil(projects.length / cardsPerStep);

  const scrollToStep = (step: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelector("div.card");
      if (card) {
        const cardWidth = (card as HTMLElement).offsetWidth + 16; // +gap (tailwind: gap-4 = 16px)
        container.scrollTo({
          left: step * cardWidth * cardsPerStep,
          behavior: "smooth",
        });
      }
    }
  };

  const nextStep = () => {
    const next = (currentStep + 1) % totalSteps;
    setCurrentStep(next);
    scrollToStep(next);
  };

  const prevStep = () => {
    const prev = (currentStep - 1 + totalSteps) % totalSteps;
    setCurrentStep(prev);
    scrollToStep(prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentStep, cardsPerStep]);

  return (
    <div className="w-full relative py-8 px-4">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden transition-all duration-700 p-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="card min-w-full sm:min-w-[48%] bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>
              <a
                href={`${project.url}`}
                className="text-sm text-blue-600 mt-3 inline-block font-medium"
              >
                Voir le Projet →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={prevStep}
          className="text-4xl sm:text-5xl font-bold text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full bg-gray-100 shadow-md"
        >
          ‹
        </button>
        <button
          onClick={nextStep}
          className="text-4xl sm:text-5xl font-bold text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full bg-gray-100 shadow-md"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageCardCarousel;
