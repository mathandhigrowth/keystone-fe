import React from 'react'
import { ChevronRight, Phone, Mail, Headset } from 'lucide-react'
import { Link } from 'react-router-dom'
import services from '../../../data/ServicesData'
import { EMAIL, MOBILE_NUMBER } from '@/config/config'

const ServiceLayout = ({ currentService, children }) => {
    return (
        <div className="min-h-screen bg-[var(--color-background)] p-8 flex justify-center items-start">
            <div className="w-full bg-[var(--color-background)] flex flex-col lg:flex-row gap-8 p-0 md:p-8">
                {/* Left Column */}
                <div className="flex-shrink-0 w-full lg:w-[300px] flex flex-col gap-8">
                    {/* Nav Links */}
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-6">
                        <h2 className="heading-3 text-[var(--color-dark)] mb-4">Our Services</h2>
                        <div className="w-16 h-1 bg-[var(--color-primary)] mb-6"></div>
                        <ul className="space-y-0">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        to={`/services/${encodeURIComponent(service.slug)}`}
                                        className={`flex items-center justify-between py-3 px-2 rounded-xl border-b border-gray-200 last:border-b-0 cursor-pointer transition-colors duration-200 ${currentService === service.slug
                                            ? 'bg-gray-100 font-semibold'
                                            : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="text-[var(--color-dark)] text-base">
                                            {service.title}
                                        </span>
                                        <ChevronRight className="h-5 w-5 text-[var(--color-muted)]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-52">
                            <img
                                src="https://metarywp.websitelayout.net/wp-content/uploads/2025/02/contact-img01.jpg"
                                alt="Two construction workers smiling and talking"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[var(--color-accent)] rounded-full p-4 shadow-lg">
                                <Headset className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <div className="bg-[var(--color-dark)] text-white p-6 pt-12 text-center">
                            <h3 className="text-xl font-semibold mb-2">How Can We Help?</h3>
                            <p className="flex items-center justify-center gap-2 text-sm mb-1">
                                <Phone className="h-4 w-4" />
                                <a href={`tel:${MOBILE_NUMBER}`}>{MOBILE_NUMBER}</a>
                            </p>
                            <p className="flex items-center justify-center gap-2 text-sm">
                                <Mail className="h-4 w-4" />
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-grow flex flex-col gap-8">{children}</div>
            </div>
        </div>
    )
}

export default ServiceLayout
