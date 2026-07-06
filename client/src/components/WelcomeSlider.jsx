import { useEffect, useState } from "react";

const posters = [
  "/posters/poster1.png",
  "/posters/poster2.png",
];

export default function WelcomeSlider() {
  const [currentPoster, setCurrentPoster] = useState(0);
  const [showSlider, setShowSlider] = useState(true);
  const [seconds, setSeconds] = useState(8);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const changePoster = setTimeout(() => {
      setCurrentPoster(1);
      setCanSkip(true);
    }, 4000);

    const closeSlider = setTimeout(() => {
      setShowSlider(false);
    }, 8000);

    return () => {
      clearInterval(countdown);
      clearTimeout(changePoster);
      clearTimeout(closeSlider);
    };
  }, []);

  if (!showSlider) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">

      {/* Background Blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* Poster Card */}
      <div className="relative z-10 animate-fade">

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

          <img
            src={posters[currentPoster]}
            alt="Welcome Poster"
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />

          {/* Bottom Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white">

            <div className="flex items-center gap-3">

              <div
                className={`w-3 h-3 rounded-full ${
                  currentPoster === 0 ? "bg-blue-600" : "bg-gray-300"
                }`}
              />

              <div
                className={`w-3 h-3 rounded-full ${
                  currentPoster === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
              />

            </div>

            <div className="text-gray-700 font-semibold">
              Closing in {seconds}s
            </div>

            <button
              disabled={!canSkip}
              onClick={() => setShowSlider(false)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                canSkip
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              {canSkip ? "Skip" : "Please Wait"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}