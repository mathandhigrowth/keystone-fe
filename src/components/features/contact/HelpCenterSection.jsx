import React from 'react'
import { UserRoundIcon as UserRoundMessage, Handshake, RotateCw } from "lucide-react"

const HelpCenterSection = () => {
    return (
        <>
            <div className="bg-[var(--color-background)] py-16">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
                        {/* Left: Help Center Intro */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-0.5 bg-gray-300"></div>
                                <span className="text-sm uppercase tracking-wider text-gray-600">Help Center</span>
                            </div>
                            <h2 className="text-5xl font-bold leading-tight text-[var(--color-dark)]">
                                Get <span className="bg-[var(--color-accent)] text-white px-2 -mx-2">assistance</span>
                            </h2>
                            <p className="text-lg text-gray-700">
                                We understand that sometimes you need a helping hand. Find the assistance you need below.
                            </p>
                        </div>

                        {/* Right: Help Center Description */}
                        <div className="flex items-center justify-end">
                            <p className="text-lg text-gray-700 max-w-lg">
                                Whether it&apos;s customer support, sales inquiries, partnerships, or media requests, our dedicated team
                                is ready to provide prompt and personalized assistance for all your needs.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Customer Support */}
                        <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl flex flex-col ring ring-primary items-start text-left">
                            <div className="p-4 rounded-full bg-orange-100 mb-4">
                                <UserRoundMessage className="w-8 h-8 text-[var(--color-accent)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Customer support</h3>
                            <p className="text-gray-700 text-base">
                                Our friendly customer support team is available to assist with any questions, issues, or product
                                guidance you need.
                            </p>
                        </div>

                        {/* Card 2: Sales & Partnerships */}
                        <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl ring ring-primary flex flex-col items-start text-left">
                            <div className="p-4 rounded-full bg-orange-100 mb-4">
                                <Handshake className="w-8 h-8 text-[var(--color-accent)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Sales & partnerships</h3>
                            <p className="text-gray-700 text-base">
                                Connect with our sales team to explore opportunities, pricing, and collaboration possibilities.
                            </p>
                        </div>

                        {/* Card 3: Media Inquiries */}
                        <div className="bg-[var(--color-surface)] p-8 rounded-lg shadow-2xl ring ring-primary flex flex-col items-start text-left">
                            <div className="p-4 rounded-full bg-orange-100 mb-4">
                                <RotateCw className="w-8 h-8 text-[var(--color-accent)]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">Media inquiries</h3>
                            <p className="text-gray-700 text-base">
                                For press requests, interviews, and media collaborations, please contact our media team. We&apos;re
                                eager to assist.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HelpCenterSection
