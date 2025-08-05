import { User } from "lucide-react"
import {DigitalSolutionsSectionImage2} from "@/assets/images"

export default function WhyChooseKeystone() {
    return (
        <section className="relative w-full bg-[var(--color-primary)] text-white py-16 overflow-hidden">
            <div className="absolute top-10 left-10 w-4 h-4 bg-secondary rounded-full opacity-70"></div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-secondary rounded-full opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-10 right-10 w-5 h-5 bg-secondary rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-secondary rounded-full opacity-70"></div>

            <div className="absolute top-20 right-20 text-secondary text-xl opacity-70 transform rotate-45">+</div>
            <div className="absolute top-1/3 right-10 text-secondary text-xl opacity-70 transform -rotate-45">x</div>
            <div className="absolute bottom-20 left-20 text-secondary text-xl opacity-70 transform -rotate-45">x</div>
            <div className="absolute bottom-1/3 left-10 text-secondary text-xl opacity-70 transform rotate-45">+</div>

            <div className="container text-center">
                <h2 className="heading-2 text-[var(--color-white)] mb-4">Why Choose Keystone?</h2>
                <p className="text-gray-300 max-w-4xl mx-auto mb-16">
                    Keystone stands as a trusted partner in industrial automation and control systems, delivering value through innovative technologies, top-tier global brands, and a customer-first approach. With a proven track record and deep domain expertise, we help businesses streamline operations and achieve sustainable growth.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                    <div className="relative flex items-center justify-center lg:justify-end">
                        {/* <div className="relative w-64 h-64 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                            <div
                                className="absolute w-72 h-72 bg-gray-300 rounded-full transform rotate-12 opacity-70"
                                style={{
                                    clipPath:
                                        "polygon(50% 0%, 80% 10%, 100% 30%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 30%, 20% 10%)",
                                    top: "-10px",
                                    left: "-10px",
                                }}
                            >

                            </div>
                            <User className="w-24 h-24 text-gray-600 relative z-10" />
                        </div> */}

                        <div className="relative w-64 h-64 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                            {/* Polygon Container */}
                            <div
                                className="absolute w-72 h-72 transform rotate-12 opacity-70 overflow-hidden"
                                style={{
                                    clipPath:
                                        "polygon(50% 0%, 80% 10%, 100% 30%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 30%, 20% 10%)",
                                    top: "-10px",
                                    left: "-10px",
                                }}
                            >
                                {/* Image inside polygon */}
                                <img
                                    src={DigitalSolutionsSectionImage2} // <-- replace with your image path
                                    alt="Polygon Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h6 className="text-2xl rotate-12 ml-6 font-semibold text-gray-600 relative z-10">
                                KeyStone
                            </h6>
                        </div>

                    </div>

                    <div className="space-y-4 text-[var(--color-white)]">
                        <ul className="list-none p-0 m-0 space-y-4">
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-[var(--color-secondary)] text-xl">•</span>

                                Authorized distributor of leading automation brands

                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-[var(--color-secondary)] text-xl">•</span>
                                10+ years serving diverse industrial sectors
                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-[var(--color-secondary)] text-xl">•</span>
                                Skilled technical support from in-house engineers
                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-[var(--color-secondary)] text-xl">•</span> 
                                Ready stock with fast nationwide delivery
                            </li>
                            <li className="flex items-center text-lg">
                                <span className="mr-3 text-[var(--color-secondary)] text-xl">•</span> 
                                Trusted by top manufacturers across India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-end mt-16 space-x-4">
                    <span className="text-sm font-semibold text-gray-300 uppercase">PREV</span>
                    <div className="w-12 h-px bg-gray-400"></div>
                    <span className="text-sm font-semibold text-gray-300 uppercase">NEXT</span>
                </div>
            </div>
        </section>
    )
}
