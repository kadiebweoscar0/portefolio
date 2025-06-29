import whatsapp from "../assets/logo/Icônes de Whatsapp en téléchargement gratuit.jpeg";

function Contact() {
  return (
    <div>
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center uppercase">
          Mes Coordonnées
        </h2>
        <p className="text-center text-gray-600">Entrer en Contact</p>
      </div>
      <div className=" w-full flex-col lg:flex-row">
        <div className="justify-center items-center mt-2">
          <div className=" flex flex-col justify-center items-center w-full m-auto bg-white rounded-2xl border-2 border-gray-200 p-3 my-2">
            <img
              src={whatsapp}
              alt="icon-watsapp"
              className="w-[10%] rounded-2xl"
            />
            <p>Email</p>
            <p className=" underline text-gray-400">kadiebweoscar0@gmail.com</p>
            <a href="#">Ecris moi + </a>
          </div>

          <div className=" flex flex-col justify-center items-center w-full m-auto bg-white rounded-2xl border-2 border-gray-200 p-3 my-2">
            <img
              src={whatsapp}
              alt="icon-watsapp"
              className="w-[10%] rounded-2xl"
            />
            <p>Messanger</p>
            <p className=" underline text-gray-400">Oscar Jibi</p>
            <a href="#">Ecris moi + </a>
          </div>

          <div className=" flex flex-col justify-center items-center w-full m-auto bg-white rounded-2xl border-2 border-gray-200 p-3 my-2">
            <img
              src={whatsapp}
              alt="icon-watsapp"
              className="w-[10%] rounded-2xl"
            />
            <p>Whatsapp</p>
            <p className=" underline text-gray-400">+243 82 36 16 356</p>
            <a href="#">Ecris moi + </a>
          </div>
        </div>
        <div>
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
            {/*  <input
              type="text"
              placeholder="Ecrivez votre message"
              name="message"
              className="input h-56 justify-start items-start"
            /> */}
            <textarea
              name="message"
              className="input h-56 justify-start items-start"
              id="message"
              placeholder="Ecrivez votre message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
