import { PlayCircle, ArrowRight, Factory, RailSymbolIcon, Wind, CalendarRange } from "lucide-react";

export default function ManufacturingSection() {
    return (
        <section className="bg-primary text-white py-16 mt-36 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Hero Image with Play Button */}
                <div className="relative -translate-y-36">
                    <img
                        src="https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-10-copyright.jpg"
                        alt="Industrial robots in factory"
                        className="w-full h-[530px] object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <PlayCircle size={64} className="text-white bg-[var(--color-primary)] rounded-full" />
                    </div>
                </div>

                {/* Text Block */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <p className="uppercase text-sm tracking-wide text-gray-200 mb-2 font-bold">What We Offer</p>
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Manufacturing takes<br />
                            craft to the next level
                        </h2>
                    </div>
                    <div className="text-gray-300 text-base leading-relaxed space-y-4">
                        <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {[
                        {
                            icon: Factory,
                            label: "Experience & dependability"
                        },
                        {
                            icon: RailSymbolIcon,
                            label: "Licensing deals & scalability"
                        },
                        {
                            icon: Wind,
                            label: "Holistic & custom approach"
                        },
                        {
                            icon: CalendarRange,
                            label: "Development & fabrication"
                        }
                    ].map((item, i) => (
                        <div key={i} className="border-r border-white/10 pt-6">
                            <item.icon size={48} className="mx-auto mb-2 text-[var(--color-accent)]" />
                            <p className="font-semibold text-white mb-2">{item.label}</p>
                            <ArrowRight className="mx-auto text-[var(--color-accent)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
