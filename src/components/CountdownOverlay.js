import React, { useState, useEffect } from 'react';

const CountdownOverlay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const endDate = new Date('2025-03-21T00:00:00');
    const now = new Date();
    const difference = endDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-amber-50/90 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/20 text-center animate-fade-in">
        <h2 className="text-5xl font-bold text-amber-900 mb-8 animate-slide-down">
          Countdown to Launch 🌸
        </h2>
        <div className="flex space-x-8">
          {/* Days */}
          <div className="text-center animate-pop-in">
            <span className="text-8xl font-bold text-amber-900 drop-shadow-lg">
              {timeLeft.days}
            </span>
            <span className="block text-xl text-amber-700 mt-2">Days</span>
          </div>
          {/* Hours */}
          <div className="text-center animate-pop-in delay-100">
            <span className="text-8xl font-bold text-amber-900 drop-shadow-lg">
              {timeLeft.hours}
            </span>
            <span className="block text-xl text-amber-700 mt-2">Hours</span>
          </div>
          {/* Minutes */}
          <div className="text-center animate-pop-in delay-200">
            <span className="text-8xl font-bold text-amber-900 drop-shadow-lg">
              {timeLeft.minutes}
            </span>
            <span className="block text-xl text-amber-700 mt-2">Minutes</span>
          </div>
          {/* Seconds */}
          <div className="text-center animate-pop-in delay-300">
            <span className="text-8xl font-bold text-amber-900 drop-shadow-lg">
              {timeLeft.seconds}
            </span>
            <span className="block text-xl text-amber-700 mt-2">Seconds</span>
          </div>
        </div>
        <p className="text-lg text-amber-700 mt-8 animate-slide-up">
          The wait is almost over! Stay tuned for something magical. ✨
        </p>

        {/* Buttons for Discord and Twitter */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://discord.gg/k7T7mhNV" // Replace with your Discord link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.3 4.1c-1.5-.7-3.1-1.2-4.8-1.5-.2.4-.4.8-.6 1.2-1.8-.3-3.6-.3-5.4 0-.2-.4-.4-.8-.6-1.2-1.7.3-3.3.8-4.8 1.5C1.6 9.6 1 14.5 1 19.4c1.9 1.4 4.1 2.3 6.4 2.8.5-.7 1-1.5 1.4-2.3-.8-.3-1.5-.7-2.2-1.2.2-.1.4-.3.6-.5 4.4 2.1 9.2 2.1 13.6 0 .2.2.4.4.6.5-.7.5-1.4.9-2.2 1.2.4.8.9 1.6 1.4 2.3 2.3-.5 4.5-1.4 6.4-2.8 0-4.9-.6-9.8-2.7-15.3zM8 17c-1.1 0-2-1.1-2-2.5 0-1.4.9-2.5 2-2.5s2 1.1 2 2.5c0 1.4-.9 2.5-2 2.5zm8 0c-1.1 0-2-1.1-2-2.5 0-1.4.9-2.5 2-2.5s2 1.1 2 2.5c0 1.4-.9 2.5-2 2.5z" />
            </svg>
            Join Discord
          </a>
          <a
            href="https://x.com/OvaSupport" // Replace with your Twitter link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 5.924c-.8.35-1.65.58-2.55.69.9-.54 1.6-1.4 1.93-2.42-.85.5-1.8.86-2.8 1.06-.8-.85-1.95-1.38-3.23-1.38-2.45 0-4.43 1.98-4.43 4.43 0 .35.04.7.1 1.03-3.68-.18-6.94-1.95-9.13-4.63-.38.65-.6 1.4-.6 2.2 0 1.53.78 2.88 1.96 3.68-.72-.02-1.4-.22-2-.55v.06c0 2.15 1.53 3.94 3.56 4.35-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.75 2.2 3.03 4.14 3.06-1.52 1.2-3.43 1.92-5.5 1.92-.36 0-.72-.02-1.07-.06 1.95 1.25 4.28 1.98 6.77 1.98 8.13 0 12.58-6.73 12.58-12.58 0-.19 0-.38-.01-.57.86-.63 1.6-1.42 2.2-2.32z" />
            </svg>
            Follow on Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownOverlay;
