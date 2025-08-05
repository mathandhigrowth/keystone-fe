import React from 'react'
import { Link } from 'react-router-dom'
import { homeHeroImage } from '@/assets/images'
const HomeHero = () => {
    return (
        <div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat "
                    style={{
                        backgroundImage: `url(${homeHeroImage})`,
                    }}
                />

                {/* Blue Overlay Section */}
                <div className="absolute inset-0 flex items-center justify-start">
                    <div className="w-full max-w-4xl bg-[var(--color-primary)]/95 text-white py-12 rounded-r-2xl px-12 ml-0">
                        <div className="space-y-6">
                            {/* Small heading */}
                            <p className="text-lg font-medium tracking-wide opacity-90">
                                # Industrial Automation
                            </p>

                            {/* Main heading */}
                            <h1 className="text-5xl sm:text-5xl font-bold leading-tight max-w-4xl">
                                Authorized Supplier of Industrial
                                <br /> Automation Products
                            </h1>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <Link to="/services">
                                    <button className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-warning)] transition-colors duration-300">
                                        Explore Our Solutions
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Tags - Bottom Right */}
                <div className="absolute bottom-0 right-0 bg-[var(--color-primary)] text-white">
                    <div className="flex">
                        <div className="px-8 py-6 border-r border-white/20">
                            <span className="font-semibold">Manufacturing</span>
                        </div>
                        <div className="px-8 py-6 border-r border-white/20">
                            <span className="font-semibold">Automotive</span>
                        </div>
                        <div className="px-8 py-6">
                            <span className="font-semibold">Packaging</span>
                        </div>
                    </div>
                </div>
            </div>        </div>
    )
}

export default HomeHero
