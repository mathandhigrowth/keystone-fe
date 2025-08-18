import { Check, Rss, Trophy } from "lucide-react"
import { Link } from "react-router-dom"
import { DigitalSolutionsSectionImage, DigitalSolutionsSectionImage2 } from "@/assets/images"
export default function DigitalSolutionsSection() {
    return (
        <div className="w-full bg-[var(--color-background)] py-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image collage */}
                    <div className="relative w-full h-[400px]">
                        {/* Background Image - Top Left */}
                        <img
                            src={DigitalSolutionsSectionImage} // Replace with actual path
                            alt="Flat lay workspace"
                            className="w-full h-full object-cover rounded-xl shadow-md"
                        />

                        {/* Overlay Image - Bottom Right */}
                        <div className="absolute md:-bottom-0 -bottom-0 -right-0 md:-right-0 w-[230px] h-[190px] bg-white p-3 rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <div className="relative w-full h-full">
                                {/* Actual Image */}
                                <img
                                    src={DigitalSolutionsSectionImage2}
                                    alt="Tablet with coffee and flowers"
                                    className="w-full h-full object-cover rounded-md"
                                />

                                {/* Black overlay with Trophy icon */}
                                <div className="absolute inset-0 bg-black/40 hover:bg-black/50 duration-300 flex items-center justify-center">
                                    <Trophy className="size-12 text-secondary font-bold bg-white p-2 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm  uppercase font-medium text-[var(--color-dark)] tracking-wide">
                                Discover <span className="text-[var(--color-secondary)]">Keystone’s Edge</span>
                            </p>
                            <h2 className="heading-3 uppercase leading-tight">
                                Keystone Is Premier Distributor Of Industrial Automation Products.
                            </h2>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-6xl font-bold text-[var(--color-secondary)]">11+</span>
                            <span className="heading-3 text-[var(--color-dark)]">Years of Experience</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            We supply cutting-edge solutions and control panel manufacturing for industries across India — from
                            manufacturing and OEMs to power and energy sectors.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-[var(--color-success)] rounded flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-[var(--color-dark)] font-medium">Authorized Distributor for Global Brands</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-[var(--color-success)] rounded flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-[var(--color-dark)] font-medium">One-Stop Solution for Automation & Control</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-[var(--color-success)] rounded flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-[var(--color-dark)] font-medium">Trusted Industrial Partner Since 2014</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Link to="/about">

                                <button className="px-8 py-3 bg-[var(--color-secondary)] text-[var(--color-white)] font-bold rounded-full hover:bg-[var(--color-warning)] transition-colors duration-300 uppercase tracking-wide">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
