import { PlayCircle, ArrowRight, Factory, RailSymbolIcon, Wind, CalendarRange } from "lucide-react";
import ManufacturingSectionImage from "@/assets/images/ManufacturingSection1.jpg";
// import manufacturingVideo from "@/assets/images/About1.mp4"
import { useState } from "react";
import { keyStoneLogo } from "@/assets/images";
import { Link } from "react-router-dom";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function WhatWeOfferSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <section className="bg-primary text-white py-16 mt-36 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Image with Play Button */}
        <div className="relative -translate-y-36">
          <div className="relative cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
            <img src={ManufacturingSectionImage} alt="Industrial robots in factory" className="w-full h-[530px] object-cover rounded-lg shadow-2xl" />
            <div className="absolute inset-0 flex justify-center items-center bg-black/30 rounded-lg group-hover:bg-black/40 transition-all duration-300">
              <div className="size-46 rounded-full mb-2 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <MagneticButton>
                  <Link to="/brands">
                    <button className="bg-background/60 ring heading-4 font-black uppercase rounded-full text-primary text-shadow-[0_1px_2px_rgba(0,0,0,0.3)] px-4 py-4">Expolre More</button>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-200 mb-2 font-bold">Our Capability</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Elevating Manufacturing
              <br />
              with Precision and Innovation
            </h2>
          </div>
          <div className="text-gray-300 text-base leading-relaxed space-y-4">
            <p>
              At Keystone, we integrate advanced technologies and streamlined processes to deliver exceptional manufacturing outcomes. Our approach ensures precision, efficiency, and consistency
              across every stage of production.
            </p>
            <p>Whether you're scaling operations or launching new products, we provide agile, cost-effective, and globally competitive manufacturing solutions tailored to your needs.</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: Factory,
              label: "Trusted Expertise & Reliability",
            },
            {
              icon: RailSymbolIcon,
              label: "Scalable Infrastructure",
            },
            {
              icon: Wind,
              label: "Adaptive & Tailored Engineering",
            },
            {
              icon: CalendarRange,
              label: "End-to-End Project Execution",
            },
          ].map((item, i) => (
            <div key={i} className="border-r border-white/10 pt-6">
              <item.icon size={48} className="mx-auto mb-2 text-[var(--color-accent)]" />
              <p className="font-semibold text-white mb-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
