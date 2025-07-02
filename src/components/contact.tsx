import whatsapp from "../assets/logo/Icônes de Whatsapp en téléchargement gratuit.jpeg";
import messanger from "../assets/logo/messager.png";
import email from "../assets/logo/e-mail.png";
import envoyer from "../assets/logo/envoyer.png";

function Contact() {
  function openWhatsapp() {
    const phone: string = "243823616356";
    const message: string = encodeURIComponent(
      "Salut, je suis intéressé(e) par votre profil de développeur. Pourrions-nous échanger davantage ?"
    );
    const url: string = `https://wa.me/${phone}?text=${message}`;

    window.location.href = url;
  }

  const messengerButton = () => {
    // Remplace 'oscar.kadiebwe' par ton nom d’utilisateur ou ID de page
    window.location.href = "https://m.me/ross.jibi";
  };

  const GmailButton = () => {
    // Remplace l'adresse email ci-dessous par la tienne
    window.location.href =
      "mailto:kadiebweoscar0@gmail.com?subject=Contact&body=Bonjour, je souhaite vous contacter...";
  };

  return (
    <div className="w-full flex flex-col lg:flex-row lg:gap-4 justify-between items-center">
      <div className="justify-center items-center mt-2 lg:w-[45%]">
        <p className=" text-2xl m-auto text-center">Parle avec moi</p>
        <div
          className=" flex flex-col justify-center items-center w-full m-auto bg-white rounded-2xl border-2 border-gray-200 p-3 my-2"
          onClick={GmailButton}
        >
          <img src={email} alt="icon-watsapp" className="w-[10%] rounded-lg" />
          <p>Email</p>
          <p className=" underline text-gray-400">kadiebweoscar0@gmail.com</p>
          <a href="#">Ecris moi + </a>
        </div>

        <div
          className=" flex flex-col justify-center items-center w-full m-auto bg-white rounded-2xl border-2 border-gray-200 p-3 my-2"
          onClick={messengerButton}
        >
          <img
            src={messanger}
            alt="icon-watsapp"
            className="w-[10%] rounded-lg"
          />
          <p>Messanger</p>
          <p className=" underline text-gray-400">Oscar Jibi</p>
          <a href="#">Ecris moi + </a>
        </div>

        <div
          className=" flex flex-col justify-center items-center w-full m-auto bg-white rounded-2xl border-2 border-gray-200 p-3 my-2"
          onClick={openWhatsapp}
        >
          <img
            src={whatsapp}
            alt="icon-watsapp"
            className="w-[10%] rounded-lg"
          />
          <p>Whatsapp</p>
          <p className=" underline text-gray-400">+243 82 36 16 356</p>
          <a href="#">Ecris moi + </a>
        </div>
      </div>
      <form className=" w-full lg:w-[48%] pt-14 lg:pt-0">
        <p className=" text-2xl m-auto text-center">Ecrivez moi votre Projet</p>
        <div className="coolinput">
          <label htmlFor="input" className="text">
            Nom Complet
          </label>
          <input
            type="text"
            placeholder="nom complet..."
            name="nom"
            className="input"
          />
        </div>

        <div className="coolinput">
          <label htmlFor="input" className="text">
            Email
          </label>
          <input
            type="email"
            placeholder="Inserer votre email."
            name="email"
            className="input"
          />
        </div>

        <div className="coolinput">
          <label htmlFor="input" className="text">
            Message
          </label>
          <textarea
            name="message"
            className="input h-56 justify-start items-start"
            id="message"
            placeholder="Ecrivez votre message"
          ></textarea>
        </div>

        <div className=" my-2 p-3.5 w-[100%] lg:w-[60%] bg-black rounded-2xl text-center text-white flex justify-center items-center gap-6">
          <p className=" font-bold">Envoyer le message</p>
          <img src={envoyer} alt="icon-envoyer" className="w-[5%]" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
