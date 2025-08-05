import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsBanner = () => {
    return (
        <div className="h-[384px] relative overflow-hidden">
            <img
                alt="Industrial factory interior with pipes and machinery"
                className="absolute inset-0 object-cover w-full h-full"
                src="https://metarywp.websitelayout.net/wp-content/uploads/2025/02/page-title-01.jpg"
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col justify-center h-full container">
                <h1 className="text-white text-7xl font-bold mb-4">Who We Are</h1>
                {/* <p className="text-white max-w-2xl text-base md:text-lg mb-6">
                    Keystone is a trusted name in engineering excellence—delivering advanced industrial solutions, smart infrastructure, and automation services that drive efficiency, innovation, and long-term value.
                </p> */}
                <div className="flex items-center space-x-2 text-white text-base">
                    <span className="font-medium">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    )
}

export default AboutUsBanner
