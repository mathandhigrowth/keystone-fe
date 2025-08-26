import { contactBannerImage } from "@/assets/images";
import { xLogo } from "@/assets/svg";
import { LINKEDIN, TWITTER } from "@/config/config";
import { Factory } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {
const launchDate = new Date("2025-08-26T14:00:00");
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center overflow-hidden font-['Inter']" style={{ backgroundImage: `url(${contactBannerImage})` }}>
      <div className="absolute min-h-screen inset-0 bg-gray-900 opacity-90"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        {/* 3D Logo */}
        <div className="mb-8 glass-card p-6 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500">
          <Factory className="h-16 w-16 mx-auto text-white" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">Keystone Is Building the Future for You</h1>

        {/* Subheading */}
        <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10">
          Keystone Industrial is bringing you smarter solutions in industrial control, sensing, instrumentation, and automation products — all in one place.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 mb-9">
          {countdownItems.map((item, i) => (
            <div key={i} className="glass-card p-4 rounded-xl text-center transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-3xl font-bold text-white transition-all duration-500">{item.value}</div>
              <div className="text-white/70 text-xs md:text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link to={LINKEDIN} className="glass-card w-12 h-12 rounded-full flex items-center justify-center transform hover:-translate-y-2 transition-all">
            {/* LinkedIn SVG */}
            <svg className="size-8 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                fill="#ffffff"
              />
            </svg>
          </Link>
          <Link to={TWITTER} className="glass-card w-12 h-12 rounded-full flex items-center justify-center transform hover:-translate-y-2 transition-all">
            <img src={xLogo} alt="X Logo" className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3) 0 0 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
