import { industrialSVG, processSVG, analyticsSVG, foodSVG, pointSVG, automationSVG } from '@/assets/svg'
import React from 'react'
import { SupportGridImage } from '@/assets/images'
const SupportGrid = () => {
    return (
        <div className="section-dark relative">
            {/* Curved top border */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-[var(--color-primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100px" viewBox="0 0 1280 160" preserveAspectRatio="none"><g fill="var(--color-background)"><path d="M640 140C286.54 140 0 0 0 0h1280S993.46 140 640 140z" /></g></svg>
            </div>

            <div className="container py-20 pt-44">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm uppercase font-medium text-white mb-4 tracking-wide">
                        What do <span className="text-[var(--color-secondary)]">we provide?</span>
                    </p>
                    <h2 className="heading-2 uppercase font-bold text-white leading-tight">
                        Industries We Serve & Our Core Solutions <br />
                        Powering Growth with Trusted Automation Systems
                    </h2>
                </div>

                <div class="max-w-screen-[1440px] mx-auto mb-20">

                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-2">

                        <div class="p-4 bg-white shadow border rounded-[10px]">

                            <button class="p-3 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <img src={industrialSVG} className="size-8" alt="Industrial" />
                            </button>

                            <p class=" text-xl  text-[#252432] my-5"> Industrial & Manufacturing</p>

                            <p class="font-mono text-sm text-[#8987A1] font-[400]">We deliver complete automation for factory operations — enhancing productivity, reducing downtime, and ensuring scalable manufacturing performance.</p>

                        </div>

                        <div class="p-4 bg-white shadow border rounded-[10px]">

                            <button className="p-3 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <img src={processSVG} className="size-8" alt="Process" />
                            </button>

                            <p className="text-xl text-[#252432] my-5">Process & Chemical Industries</p>

                            <p className="font-mono text-sm text-[#8987A1] font-[400]">Keystone supports chemical plants with intelligent control systems for pressure, flow, and safety — ensuring compliance and reliability at scale.

                            </p>

                        </div>

                        <div className="p-4 bg-white shadow border rounded-[10px]">

                            <button className="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <img src={automationSVG} className="size-8" alt="Automation" />
                            </button>

                            <p className="text-xl text-[#252432] my-5">Automotive & E-Mobility</p>

                            <p className="font-mono text-sm text-[#8987A1] font-[400]">From assembly automation to battery line systems, we help mobility brands implement high-speed, error-free production technologies.</p>

                        </div>


                        <div className="p-4 bg-white shadow border rounded-[10px] lg:row-span-2">

                            <button className="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <img src={foodSVG} className="size-8" alt="Food" />
                            </button>

                            <p className="text-xl text-[#252432] my-5">Food, Beverage & Packaging</p>

                            <p className="font-mono text-sm text-[#8987A1] font-[400]">We deliver hygienic automation systems for F&B and packaging lines — with traceability, batching, and real-time control for consistent output.</p>

                            <img className="hidden lg:block mt-5 rounded-[10px]" src={SupportGridImage} alt="Pictures" />

                        </div>

                        <div className="p-4 bg-white shadow border rounded-[10px] lg:col-span-2 flex justify-between gap-5">

                            <div>
                                <button className="p-3 py-4 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                    <img src={pointSVG} className="size-8" alt="Infrastructure" />
                                </button>

                                <p className="text-xl text-[#252432] my-5">Infrastructure & Utilities</p>

                                <p className="font-mono text-sm text-[#8987A1] font-[400]">Our SCADA and energy automation systems support water, gas, and utility infrastructure — enabling smart city and infrastructure development.</p>

                            </div>
                            <div>
                                <img class="hidden lg:block mt-5 w-[400px] rounded-[10px]" src={SupportGridImage} alt="Pictures" />
                            </div>

                        </div>


                        <div class="p-4 bg-white shadow border rounded-[10px]">

                            <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <img src={analyticsSVG} className="size-8" alt="Analytics" />
                            </button>

                            <p class="text-xl text-[#252432] my-5">Textile & Printing</p>

                            <p class="font-[mono text-sm text-[#8987A1] font-[400]">Keystone integrates automation in dyeing, spinning, and printing processes — reducing manual dependency while ensuring quality control.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportGrid
