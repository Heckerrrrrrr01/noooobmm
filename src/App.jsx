import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

const lovePromises = [
  "Hold hands every chance we get",
  "Be your biggest cheerleader",
  "Share snacks and the last bite",
  "Make you laugh when days feel heavy",
];

const sweetNotes = [
  "Free hugs on demand",
  "Unlimited forehead kisses",
  "Your laugh = favorite sound",
  "You make ordinary days magic",
];

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
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center pt-6 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <div className="fixed inset-0 bg-gradient-to-b from-rose-100 via-pink-100 to-amber-50 opacity-80" />
      <FloatingHearts />
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="relative z-10"
          />
          <div className="relative z-10 text-4xl md:text-6xl font-bold my-4 text-center">
            Yayyyyy!!!!!
          </div>
          <div className="relative z-10 text-lg md:text-xl bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-sm">
            Hehehehehe, I loveeeee youuu Qutuu, Muahhh😘😘😘
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
          <div className="relative z-10 w-full max-w-3xl px-4 flex flex-col items-center">
            <img
              className="h-[230px] rounded-2xl shadow-lg ring-4 ring-white/80"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
            />
            <h1 className="text-4xl md:text-6xl my-4 text-center">
              Will you be my Valentine?
            </h1>
            <p className="text-center text-base md:text-lg bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              Tiny promise: extra cuddles, snacks, and silly memes.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 items-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 shadow-md"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
            <div className="mt-6 w-full grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm">
                <div className="text-lg font-semibold mb-2">
                  Little love promises
                </div>
                <ul className="space-y-2">
                  {lovePromises.map((promise) => (
                    <li key={promise} className="flex items-center gap-2">
                      <span className="text-pink-500">✿</span>
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm">
                <div className="text-lg font-semibold mb-2">
                  Sweet notes
                </div>
                <ul className="space-y-2">
                  {sweetNotes.map((note) => (
                    <li key={note} className="flex items-center gap-2">
                      <span className="text-rose-500">❤</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="badge">cute</span>
                  <span className="badge">soft</span>
                  <span className="badge">cozy</span>
                  <span className="badge">sparkly</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <span className="floaty left-6 top-24">♡</span>
      <span className="floaty left-1/4 top-8 delay-1">✧</span>
      <span className="floaty right-10 top-28 delay-2">♡</span>
      <span className="floaty right-1/3 top-10 delay-3">✦</span>
      <span className="floaty left-10 bottom-24 delay-4">✿</span>
      <span className="floaty right-16 bottom-16 delay-5">♡</span>
    </div>
  );
};

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300 bg-white/70"
      target="__blank"
      rel="noreferrer"
      href="https://www.netlify.com"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
