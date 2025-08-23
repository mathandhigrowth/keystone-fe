import { MagneticButton } from "@/components/ui/magnetic-button";
import React from "react";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
  return (
    <div className="relative bg-primary">
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="#F3F3F4" className="w-full -mb-1 text-white" preserveAspectRatio="none">
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-18 lg:pb-10">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold uppercase tracking-tight text-white sm:text-4xl sm:leading-none">Let’s Start the Conversation</h2>
          <p className="mb-6 text-base text-indigo-200 md:text-lg">
            Have questions or need assistance? Get in touch with our team and we’ll be happy to help. Our experts are ready to provide the guidance you need to move forward.
          </p>

          <div className="flex justify-center items-center py-2">
            <MagneticButton>
              <Link to="/contact">
                <button className="px-8 py-3 ring ring-black     bg-[var(--color-secondary)] text-[var(--color-white)] font-bold rounded-full  transition-colors duration-300 uppercase tracking-wide">
                  Contact Now{" "}
                </button>
              </Link>
            </MagneticButton>
          </div>

          <a
            href="#blog"
            aria-label="Scroll down"
            className="flex items-center justify-center mt-8 w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
