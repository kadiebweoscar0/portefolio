import React from "react";

const Services = () => {
  return (
    <>
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
            {/* <li>Création de sites internet et d'applications web et mobiles</li>
            <li>Intégration de contenus et de fonctionnalités sur mesure</li>
            <li>Déploiement et hébergement des solutions web et mobiles</li>
            <li>Publication d'applications mobiles sur les stores</li>
            <li>Maintenance et mises à jour régulières</li>
            <li>Accompagnement technique et conseils personnalisés</li> */}
            <li>Conception de sites et d’applications</li>
            <li>Intégration de contenus et fonctionnalités</li>
            <li>Déploiement des solutions web et mobiles</li>
            <li>Hébergement adapté et sécurisé</li>
            <li>Publication sur les stores mobiles</li>
            <li>Maintenance et support technique</li>
          </ul>
        </div>
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Gestion de Projet
          </p>
          <ul className=" list-disc pl-6">
            {/*  <li>
              Planification et coordination des différentes phases du projet
            </li>
            <li>
              Elaboration d‘un cahier de charge incluent les étapes du projet
            </li>
            <li>Suivi des échéancer et gestion des tâches</li>
            <li>
              Coordination des différentes partie prenante impliquées dans le
              projet
            </li> */}

            <li>Planification et coordination des étapes clés</li>
            <li>Rédaction du cahier des charges</li>
            <li>Suivi des délais et gestion des tâches</li>
            <li>Collaboration avec les parties prenantes</li>
          </ul>
        </div>
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Web Design et UX&UI
          </p>
          <ul className=" list-disc pl-6">
            {/*   <li>
              Conception des maquettes pour les applications Web et des sites
              Web
            </li>
            <li>Conception des maquettes pour les applications mobile</li>
            <li>Amélioration des interfaces utilisateur</li>
            <li>Optimisation des experiance utilisateur</li> */}
            <li>Maquettes d'applications web et sites</li>
            <li>Maquettes d'applications mobiles</li>
            <li>Amélioration des interfaces</li>
            <li>Optimisation de l’expérience utilisateur</li>
          </ul>
        </div>
        <div className=" w-full sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <p className=" text-2xl font-medium text-gray-400">
            Maintenance et Support
          </p>
          <ul className=" list-disc pl-6">
            {/*  <li>
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
            </li> */}

            <li>Suivi et résolution des problèmes techniques</li>
            <li>Mises à jour des contenus, fonctionnalités et plugins</li>
            <li>Optimisation des performances et de la sécurité</li>
            <li>
              Actualisation de la documentation et des guides d’utilisation
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
