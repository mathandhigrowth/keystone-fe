import { PlayCircle, ArrowRight, Factory, RailSymbolIcon, Wind, CalendarRange } from "lucide-react";
import ManufacturingSectionImage from "@/assets/images/ManufacturingSection1.jpg"
// import manufacturingVideo from "@/assets/images/About1.mp4" 
import { useState } from 'react';

export default function WhatWeOfferSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    return (
        <section className="bg-primary text-white py-16 mt-36 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Hero Image with Play Button */}
                <div className="relative -translate-y-36">
      {/* {!isVideoPlaying ? ( */}
        {/* <div className="relative cursor-pointer group" onClick={() => setIsVideoPlaying(true)}> */}
          <img
            src={ManufacturingSectionImage}
            alt="Industrial robots in factory"
            className="w-full h-[530px] object-cover rounded-lg shadow-2xl"
          />
          {/* <div className="absolute inset-0 flex justify-center items-center bg-black/30 rounded-lg group-hover:bg-black/40 transition-all duration-300">
            <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <PlayCircle size={48} className="text-white" />
            </div>
          </div> */}
        {/* </div> */}
      {/* ) : ( */}
        <div className="relative w-full h-[530px] rounded-lg shadow-2xl overflow-hidden">
          {/* <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
            autoPlay
            src={manufacturingVideo}
            onEnded={() => setIsVideoPlaying(false)}
          >
            Your browser does not support the video tag.
          </video> */}
        </div>
      {/* )} */}
    </div>

                {/* Text Block */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <p className="uppercase text-sm tracking-wide text-gray-200 mb-2 font-bold">Our Capability</p>
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Elevating Manufacturing<br />
                            with Precision and Innovation
                        </h2>
                    </div>
                    <div className="text-gray-300 text-base leading-relaxed space-y-4">
                        <p>
                            At Keystone, we integrate advanced technologies and streamlined processes to deliver exceptional
                            manufacturing outcomes. Our approach ensures precision, efficiency, and consistency across every stage of production.
                        </p>
                        <p>
                            Whether you're scaling operations or launching new products, we provide agile, cost-effective, and
                            globally competitive manufacturing solutions tailored to your needs.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {[
                        {
                            icon: Factory,
                            label: "Trusted Expertise & Reliability"
                        },
                        {
                            icon: RailSymbolIcon,
                            label: "Scalable Infrastructure"
                        },
                        {
                            icon: Wind,
                            label: "Adaptive & Tailored Engineering"
                        },
                        {
                            icon: CalendarRange,
                            label: "End-to-End Project Execution"
                        }
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
