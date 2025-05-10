import React from "react";
import ImageCarousel from "./imageCarousel";
/* import osCode from "../assets/logo/osCode.jpg";
 */
function Projet() {
  return (
    <section className=" pt-14 py-10 my-5 flex flex-col items-center gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center uppercase">
          Réalisation
        </h2>
        <p className="text-center text-gray-600">Quelques projet réalisé</p>
      </div>
      <ImageCarousel />
      {/*  <div className=" flex flex-wrap items-center">
        <div className=" relative group rounded-3xl w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 mt-16">
          <img
            src={osCode}
            alt="logo"
            className="w-[100%] rounded-3xl object-cover"
          />
          <div className=" object-cover flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80  delay-150 duration-300 rounded-3xl">
            <p className="text-white text-xl">mon texte</p>
          </div>
        </div>
        <div className=" relative group rounded-3xl w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5">
          <img
            src={osCode}
            alt="logo"
            className="w-[100%] rounded-3xl object-cover"
          />
          <div className=" object-cover flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80  delay-150 duration-300 rounded-3xl">
            <p className="text-white text-xl">mon texte</p>
          </div>
        </div>
        <div className=" relative group rounded-3xl w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5">
          <img
            src={osCode}
            alt="logo"
            className="w-[100%] rounded-3xl object-cover"
          />
          <div className=" object-cover flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80  delay-150 duration-300 rounded-3xl">
            <p className="text-white text-xl">mon texte</p>
          </div>
        </div>
        <div className=" relative group rounded-3xl w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 mb-28">
          <img
            src={osCode}
            alt="logo"
            className="w-[100%] rounded-3xl object-cover"
          />
          <div className=" object-cover flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80  delay-150 duration-300 rounded-3xl">
            <p className="text-white text-xl">mon texte</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Projet;
