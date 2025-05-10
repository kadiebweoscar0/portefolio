import React from "react";

const Services = () => {
  return (
    <section className=" pt-14 py-10 my-5 flex flex-col gap-10 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center uppercase">
          Mes Services
        </h2>
        <p className="text-center text-gray-600">ce que j‘offre</p>
      </div>
      <div className=" flex flex-wrap items-center">
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Développement web et Mobile
          </p>
          <ul className=" list-disc pl-6">
            <li>Conception des sites et application web et mobile</li>
            <li>Integration des contenus et des fonctionnalités</li>
            <li>Deploiement et hebergement des sites et applications web</li>
            <li>Publication des applications mobile</li>
            <li>Maintenance et mises à jour des sites et applications Web</li>
            <li>Conseil et assistance technique pour les clients</li>
          </ul>
        </div>
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Gestion de Projet
          </p>
          <ul className=" list-disc pl-6">
            <li>
              Planification et coordination des différentes phases du projet
            </li>
            <li>
              Elaboration d‘un cahier de charge incluent les étapes du projet
            </li>
            <li>Suivi des échéancer et gestion des tâches</li>
            <li>
              Coordination des différentes partie prenante impliquées dans le
              projet
            </li>
          </ul>
        </div>
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Web Design et UX&UI
          </p>
          <ul className=" list-disc pl-6">
            <li>
              Conception des maquettes pour les applications Web et des sites
              Web
            </li>
            <li>Conception des maquettes pour les applications mobile</li>
            <li>Amélioration des interfaces utilisateur</li>
            <li>Optimisation des experiance utilisateur</li>
          </ul>
        </div>
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Maintenance et Support
          </p>
          <ul className=" list-disc pl-6">
            <li>
              Surveillance et résolution des problèmes liés au bon
              fonctionnement des applications mobile, applications Web et des
              sites Web
            </li>
            <li>
              Mise à jour régulière des contenus, des fonctionnalités et des
              plugins
            </li>
            <li>
              Optimisation des performances et de la sécurité des applications
              mobile, applications Web et des sites Web
            </li>
            <li>
              Mise à jour de la documentation technique et des manuels
              d‘utilisation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
