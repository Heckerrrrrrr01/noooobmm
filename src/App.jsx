import { useState, useRef, useCallback } from "react";
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

const noButtonPhrases = [
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
  "Plsss? :(",
  "I'll be sad forever...",
  "But whyyy??",
  "Pretty please?",
  "One more chance?",
  "Don't do this!",
  "My heart hurts!",
  "You're so mean!",
  "I'll cry :(",
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [hasRunAway, setHasRunAway] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);

  const handleNoClick = () => {
    setNoCount((c) => c + 1);
    if (!hasRunAway) {
      setHasRunAway(true);
    }
    runAway();
  };

  const runAway = useCallback(() => {
    const container = containerRef.current;
    const btn = noButtonRef.current;
    if (!container || !btn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoPos({ x: newX, y: newY });
  }, []);

  const handleNoMouseEnter = () => {
    setHoverCount((c) => c + 1);
    if (!hasRunAway) {
      setHasRunAway(true);
    }
    runAway();
  };

  const getNoButtonText = () => {
    // Use whichever counter is higher to pick the phrase
    const index = Math.max(noCount, hoverCount);
    if (index === 0) return "No";
    return noButtonPhrases[((index - 1) % (noButtonPhrases.length - 1)) + 1];
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center pt-6 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <div className="animated-bg" />
      <AnimatedBackground />
      <FloatingHearts />
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="relative z-10"
          />
          <div className="relative z-10 text-4xl md:text-6xl font-bold my-4 text-center shimmer-text">
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
            <h1 className="text-4xl md:text-6xl my-4 text-center shimmer-text">
              Will you be my Valentine?
            </h1>
            <p className="text-center text-base md:text-lg bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              Tiny promise: extra cuddles, snacks, and silly memes.
            </p>
            <div
              ref={containerRef}
              className="mt-5 relative"
              style={{ minHeight: "160px", width: "100%" }}
            >
              <div className="flex justify-center gap-4 items-center">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  ref={noButtonRef}
                  onClick={handleNoClick}
                  onMouseEnter={handleNoMouseEnter}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (!hasRunAway) {
                      setHasRunAway(true);
                    }
                    setHoverCount((c) => c + 1);
                    runAway();
                  }}
                  className={`bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 shadow-md cursor-pointer select-none whitespace-nowrap transition-transform duration-300 ${hasRunAway ? "absolute" : "relative"}`}
                  style={
                    hasRunAway
                      ? {
                          transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                          top: "50%",
                          left: "50%",
                        }
                      : {}
                  }
                >
                  {getNoButtonText()}
                </button>
              </div>
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

const AnimatedBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 6,
    color:
      i % 3 === 0
        ? "rgba(244, 114, 182, 0.6)"
        : i % 3 === 1
        ? "rgba(251, 191, 36, 0.4)"
        : "rgba(255, 255, 255, 0.5)",
  }));

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 14 + 8,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 2,
  }));

  const risingHearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 8,
    delay: Math.random() * 8,
    symbol: ["♡", "❤", "💕", "💗", "✿", "💖", "♥", "💘"][i],
  }));

  const orbs = [
    {
      top: "20%",
      left: "10%",
      size: 200,
      color: "rgba(244, 114, 182, 0.3)",
      delay: 0,
    },
    {
      top: "60%",
      right: "10%",
      size: 250,
      color: "rgba(168, 85, 247, 0.25)",
      delay: 3,
    },
    {
      bottom: "10%",
      left: "40%",
      size: 180,
      color: "rgba(251, 191, 36, 0.2)",
      delay: 5,
    },
  ];

  return (
    <>
      {/* Glowing orbs */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="glow-orb"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={`p-${p.id}`}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Sparkle stars */}
      {sparkles.map((s) => (
        <div
          key={`s-${s.id}`}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          ✦
        </div>
      ))}

      {/* Rising hearts */}
      {risingHearts.map((h) => (
        <div
          key={`rh-${h.id}`}
          className="rising-heart"
          style={{
            left: h.left,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.symbol}
        </div>
      ))}
    </>
  );
};

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
