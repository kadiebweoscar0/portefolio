import { useRef, useState } from "react";
import whatsapp from "../assets/logo/whatsapp.jpeg";
import messanger from "../assets/logo/messager.png";
import email from "../assets/logo/e-mail.png";
import envoyer from "../assets/logo/envoyer.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_q4tmsbu", "template_b511fd6", form.current!, {
        publicKey: "gzemc-QZceQO19v2R",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  function openWhatsapp() {
    const phone: string = "243823616356";
    const message: string = encodeURIComponent(
      "Salut, je suis intéressé(e) par votre profil de développeur. Pourrions-nous échanger davantage ?"
    );
    const url: string = `https://wa.me/${phone}?text=${message}`;

    window.location.href = url;
  }

  const messengerButton = () => {
    window.location.href = "https://m.me/ross.jibi";
  };

  const GmailButton = () => {
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
          <a
            href="#"
            className=" text-sm text-blue-600 mt-3 inline-block font-medium"
          >
            Ecris moi →{" "}
          </a>
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
          <a
            href="#"
            className=" text-sm text-blue-600 mt-3 inline-block font-medium"
          >
            Ecris moi →{" "}
          </a>
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
          <a
            href="#"
            className=" text-sm text-blue-600 mt-3 inline-block font-medium"
          >
            Ecris moi →{" "}
          </a>
        </div>
      </div>
      <form
        className=" w-full lg:w-[48%] pt-14 lg:pt-0"
        ref={form}
        onSubmit={sendEmail}
      >
        <p className=" text-2xl m-auto text-center">Ecrivez moi votre Projet</p>
        <div className="coolinput">
          <label htmlFor="input" className="text">
            Nom Complet
          </label>
          <input
            type="text"
            placeholder="nom complet..."
            name="name"
            className="input"
            required
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
            required
            id="input"
          />
        </div>

        <div className="coolinput">
          <label htmlFor="input" className="text">
            Projet
          </label>
          <textarea
            name="message"
            className="input h-56 justify-start items-start"
            id="message"
            placeholder="Ecrivez votre message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`my-2 p-3.5 w-full lg:w-[60%] rounded-2xl text-center text-white flex justify-center items-center gap-4 cursor-pointer 
            ${loading ? "bg-gray-500" : "bg-black"}`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                />
              </svg>
              <span className="font-medium">Envoi en cours...</span>
            </>
          ) : (
            <>
              <p className="font-bold">Envoyer le projet</p>
              <img src={envoyer} alt="icon-envoyer" className="w-[5%]" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;
