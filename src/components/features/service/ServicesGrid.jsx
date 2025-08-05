// components/ServicesGrid.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import services from '../../../data/ServicesData'

const ServicesGrid = () => {
    return (
        <div className="bg-[var(--color-background)] py-16">
            {/* Heading */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-secondary uppercase mb-4">
                    Cutting-edge services for the industry
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore our range of automation, electrical, and OEM solutions crafted for performance and reliability across industries.
                </p>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-24 px-4 lg:px-16">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0

                    return (
                        <div
                            key={service.slug}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
                        >
                            {/* Left Column */}
                            <div className={`${isEven ? '' : 'lg:order-2'} w-full h-[300px] lg:h-[400px] overflow-hidden rounded shadow-md`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Column */}
                            <div className={`${isEven ? '' : 'lg:order-1'} text-left max-w-2xl`}>
                                <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {service.description}
                                </p>

                                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                                    {service.highlights?.slice(0, 3).map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-block mt-4 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded hover:bg-secondary transition"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesGrid
