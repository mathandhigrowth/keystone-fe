// components/ServiceDetailsSection.jsx
import React from 'react'
import { Check } from 'lucide-react'

const ServiceDetailsSection = ({ service }) => {
    if (!service) {
        return (
            <div className="p-8 bg-red-50 text-red-700 rounded-md shadow-md">
                <p>Service not found.</p>
            </div>
        )
    }

    return (
        <div className="bg-[var(--color-surface)] rounded-lg shadow-md p-6">
            {/* Header Image */}
            <img
                src={service.image || '/placeholder.svg?height=300&width=800'}
                alt={service.title}
                className="w-full h-auto rounded-md mb-6 object-cover"
            />

            {/* Title & Description */}
            <h1 className="heading-2 text-[var(--color-dark)] mb-4">{service.title}</h1>
            <p className="text-[var(--color-dark)] text-base leading-relaxed mb-6">
                {service.description}
            </p>

            {/* Optional: Feature Cards */}
            {service.cards?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {service.cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[var(--color-background)] rounded-lg p-4 flex flex-col items-start"
                        >
                            <img
                                src={card.image || '/placeholder.svg?height=100&width=150'}
                                alt={card.title}
                                className="w-full h-48 object-cover rounded-md mb-3"
                            />
                            <h4 className="heading-4 text-[var(--color-dark)] mb-2">{card.title}</h4>
                            <p className="text-[var(--color-dark)] text-sm leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Optional: Paragraph below cards */}
            {service.additionalText && (
                <p className="text-[var(--color-dark)] text-base leading-relaxed mb-6">
                    {service.additionalText}
                </p>
            )}

            {/* Highlights / Benefits */}
            {service.highlights?.length > 0 && (
                <>
                    <h2 className="heading-2 text-[var(--color-dark)] mb-4">Our work benefits</h2>
                    <p className="text-[var(--color-dark)] text-base leading-relaxed mb-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                        {service.highlights.map((item, index) => (
                            <p key={index} className="flex items-center gap-2 text-[var(--color-dark)] text-base">
                                <Check className="h-5 w-5 text-[var(--color-accent)]" />
                                <span>{item}</span>
                            </p>
                        ))}
                    </div>
                </>
            )}

            {/* Final paragraph (optional) */}
            <p className="text-[var(--color-dark)] text-base leading-relaxed">
                Lorem Ipsum passages can be altered or injected with humour and still remain readable and somewhat believable.
            </p>
        </div>
    )
}

export default ServiceDetailsSection
