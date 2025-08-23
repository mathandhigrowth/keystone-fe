import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DigitalSolutionsSectionImage2, keyStoneLogo } from "@/assets/images";
import { DigitalSolutionsSectionImage3 } from "@/assets/images";
import { DigitalSolutionsSectionImage4 } from "@/assets/images";

export default function WhyChooseKeystone() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "KeyStone",
      image: DigitalSolutionsSectionImage2,
      content: [
        "Authorized distributor of leading automation brands",
        "10+ years serving diverse industrial sectors",
        "Skilled technical support from in-house engineers",
        "Ready stock with fast nationwide delivery",
        "Trusted by top manufacturers across India",
      ],
    },
    {
      title: "Our Solutions",
      image: DigitalSolutionsSectionImage3,
      content: ["End-to-end automation solutions", "Customized system integration", "24/7 technical support", "On-site maintenance and repair", "Training and knowledge transfer"],
    },
    {
      title: "",
      image: DigitalSolutionsSectionImage4,
      content: ["Customer-centric approach", "Commitment to quality", "Innovation and technology leadership", "Ethical business practices", "Sustainable solutions"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <section className="relative w-full bg-[var(--color-primary)] text-white pt-16 pb-20 overflow-hidden">
      <div className="absolute top-10 left-10 w-4 h-4 bg-secondary rounded-full opacity-70"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-secondary rounded-full opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-secondary rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-secondary rounded-full opacity-70"></div>

      <div className="absolute top-20 right-20 text-secondary text-xl opacity-70 transform rotate-45">+</div>
      <div className="absolute top-1/3 right-10 text-secondary text-xl opacity-70 transform -rotate-45">x</div>
      <div className="absolute bottom-20 left-20 text-secondary text-xl opacity-70 transform -rotate-45">x</div>
      <div className="absolute bottom-1/3 left-10 text-secondary text-xl opacity-70 transform rotate-45">+</div>

      <div className="container text-center">
        <h2 className="heading-2 text-[var(--color-white)] uppercase mb-4">Why Choose Keystone?</h2>
        <p className="text-gray-300 max-w-4xl mx-auto mb-16">
          Keystone stands as a trusted partner in industrial automation and control systems, delivering value through innovative technologies, top-tier global brands, and a customer-first approach.
          With a proven track record and deep domain expertise, we help businesses streamline operations and achieve sustainable growth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-64 h-64 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
              <div
                className="absolute w-72 h-72 transform rotate-12 opacity-70 overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 80% 10%, 100% 30%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 30%, 20% 10%)",
                  top: "-10px",
                  left: "-10px",
                }}
              >
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
              </div>
              <div className="text-2xl rotate-12 ml-9 font-semibold text-gray-600 relative z-10">
                {/* {slides[currentSlide].title} */}
                <img src={keyStoneLogo} alt="Keystone Logo" className="w-28 animate-bounce h-auto rounded ring ring-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[var(--color-white)]">
            <ul className="list-none p-0 m-0 space-y-4">
              {slides[currentSlide].content.map((item, index) => (
                <li key={index} className="flex items-center text-lg">
                  <span className="mr-3 text-[var(--color-secondary)] text-xl">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
