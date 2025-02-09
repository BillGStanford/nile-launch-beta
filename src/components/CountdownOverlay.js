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
      </div>
    </div>
  );
};

export default CountdownOverlay;