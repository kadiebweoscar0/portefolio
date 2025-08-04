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
