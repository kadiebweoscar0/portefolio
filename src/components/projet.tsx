import React from "react";
import ImageCarousel from "./imageCarousel";

function Projet() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center uppercase">
          Réalisation
        </h2>
        <p className="text-center text-gray-600">Quelques projet réalisé</p>
      </div>
      <ImageCarousel />
    </>
  );
}

export default Projet;
