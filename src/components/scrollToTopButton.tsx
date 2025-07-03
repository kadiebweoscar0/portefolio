import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const showScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", showScroll);
    return () => {
      window.removeEventListener("scroll", showScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 2000;
    const scrollHeight = window.scrollY;
    const startTime = performance.now();

    const scrollStep = (timestamp: number) => {
      const timeElapsed = timestamp - startTime;
      const scrollFraction = Math.min(timeElapsed / scrollDuration, 1);

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
