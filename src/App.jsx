import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import amor from "./assets/aym.jpg";
import amor2 from "./assets/aym2.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Estas segura?",
      "Realmente Segura?",
      "Piensalo de nuevo!",
      "Ultima oportunidad!",
      "Realmente No?",
      "¡Podrías arrepentirte de esto estas segura!",
      "¡Piénsalo otra vez!",
      "¿Estás absolutamente segura?",
      "¡Esto podría ser un error de clic!",
      "¡Ten un poco de corazón mi amor!",
      "¡No seas tan fría!",
      "¿Cambio de opinión?",
      "¿No lo reconsiderarías?",
      "¿Es tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "¿Es tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "¿Por favor? :( di que si :( igual te amo <3", 
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Muchas Gracias por aceptar mi amor ❤️!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <div className="flex flex-row space-x-4">
            <img
              className="h-[230px] w-[230px] object-cover rounded-lg shadow-lg"
              src={amor}
            />
            <img
              className="h-[230px] w-[230px] object-cover rounded-lg shadow-lg"
              src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <img
              className="h-[230px] w-[230px] object-cover rounded-lg shadow-lg"
              src={amor2}
            />
          </div>
                    <h1 className="text-4xl md:text-6xl my-4 text-center">
          Quieres ser mi San Valentín? Mi marianne❤️
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Siii
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Nooo" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

// const Footer = () => {
//   return (
//     <a
//       className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
//       href="https://github.com/Xeven777/valentine"
//       target="__blank"
//     >
//       Made with{" "}
//       <span role="img" aria-label="heart">
//         ❤️
//       </span>
//     </a>
//   );
// };
const Footer = () => {};