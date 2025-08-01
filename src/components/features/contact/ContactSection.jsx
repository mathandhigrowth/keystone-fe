import React from 'react'
import { MapPin, Plus, Minus, Maximize, UserRoundIcon as UserRoundMessage, Handshake, RotateCw } from "lucide-react"

const ContactSection = () => {
    return (
        <div className=" bg-[var(--color-background)]">
            <div className="container mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-0.5 bg-gray-300"></div>
                        <span className="text-sm uppercase tracking-wider text-gray-600">Contact Us</span>
                    </div>
                    <h1 className="text-5xl font-bold leading-tight text-[var(--color-dark)]">
                        We&apos;re <span className="bg-[var(--color-accent)] text-white px-2 -mx-2">here</span> for you
                    </h1>
                    <p className="text-lg text-gray-700">
                        Have a question or feedback? Fill out the form below, and we&apos;ll get back to you.
                    </p>

                    <form className="flex flex-col gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Full name *"
                            className="w-full ring p-3 rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                placeholder="Phone number *"
                                className="w-full ring p-3 rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full ring p-3 rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                            />
                        </div>
                        <textarea
                            placeholder="Anything else you would like to know?"
                            rows={6}
                            className="w-full p-3 ring rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] resize-y"
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-3  rounded-md flex font-semibold btn-secondary transition ease-snappy sm:self-end self-center"
                        >
                            SUBMIT REQUEST
                        </button>
                    </form>
                </div>
                <div className="relative w-full md:h-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.7683503744!2d76.8024167450376!3d11.014261490284204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1754047640614!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
