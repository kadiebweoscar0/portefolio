import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  /* const [showButton, setShowButton] = useState(false);

  // Afficher ou masquer le bouton en fonction du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed text-4xl focus:outline-none bottom-5 right-5 sm:text-5xl font-bold text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full bg-gray-100 shadow-md"
      >
        ↑
      </button>
    )
  );
};
 */

  const [showButton, setShowButton] = useState(false);

  // Afficher ou masquer le bouton en fonction du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour remonter en haut de la page avec un défilement lent
  const scrollToTop = () => {
    const scrollDuration = 2000; // Durée du défilement en millisecondes
    const scrollHeight = window.scrollY;
    const startTime = performance.now();

    const scrollStep = (timestamp: number) => {
      const timeElapsed = timestamp - startTime;
      const scrollFraction = Math.min(timeElapsed / scrollDuration, 1); // Assurez-vous de ne pas dépasser 1

      window.scrollTo(0, scrollHeight * (1 - scrollFraction));

      if (timeElapsed < scrollDuration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed text-4xl focus:outline-none bottom-5 right-5 sm:text-5xl font-bold text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full bg-gray-100 shadow-md transition-opacity duration-300"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
