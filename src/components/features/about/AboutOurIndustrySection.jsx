import { Check } from "lucide-react";

export default function AboutOurIndustrySection() {
    return (
        <section className="bg-[var(--color-background)] py-12 px-4 sm:px-8 lg:px-20">
            <div className="container mx-auto">
                <h2 className="text-[var(--color-dark)] text-3xl sm:text-4xl font-bold mb-4">About Our Industry</h2>
                <div className="w-20 h-1 bg-[var(--color-accent)] mb-10" />

                {/* Top Content Area */}
                <div className="flex flex-col lg:flex-row gap-10 mb-12">
                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            alt="Modern city bridge with skyscrapers in background"
                            className="w-full h-auto object-cover"
                            src="https://html.tonatheme.com/wp/industry/wp-content/uploads/2023/06/about-industry.jpg"
                            priority
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 max-w-xl mx-auto">
                        <p className="text-[var(--color-dark)] text-base leading-relaxed mb-4">
                            Over 14 years experience and knowledge international standards, technologically changes and industrial
                            systems, we are dedicated to provides seds the best and economical solutions to our valued customers.
                        </p>
                        <h3 className="text-[var(--color-secondary)] text-xl font-semibold mb-4">History in Words</h3>
                        <p className="text-[var(--color-dark)] text-base leading-relaxed mb-4">
                            We partner with over 320 amazing seds projects worldwide, and have given over million in cash & product
                            grants to other groups since 2015 our own dynamic suite.
                        </p>
                        <div className="space-y-2">
                            {[
                                "This mistaken idea of denouncing pleasure",
                                "Master-builder of human happiness",
                                "Occasionally circumstances occur in toil",
                                "Undertakes laborious physical exercise"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Check size={16} className="text-[var(--color-secondary)]" />
                                    <span className="text-[var(--color-dark)] text-base">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Our Mission Section */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <img
                            alt="Worker on phone in industrial setting"
                            className="w-full sm:w-[250px] h-[150px] object-cover"
                            src="https://html.tonatheme.com/wp/industry/wp-content/uploads/2023/06/industry-thumb-1.jpg"
                            priority
                        />
                        <div>
                            <h4 className="text-[var(--color-dark)] text-xl font-semibold mb-2">Our Mission</h4>
                            <p className="text-[var(--color-dark)] text-base leading-relaxed">
                                We have facility to produce advance work various industrial applications based on specially developed
                                technology are also ready...
                            </p>
                        </div>
                    </div>

                    {/* Our Vision Section */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <img
                            alt="Hands working on machinery"
                            className="w-full sm:w-[250px] h-[150px] object-cover"
                            src="https://html.tonatheme.com/wp/industry/wp-content/uploads/2023/06/industry-thumb-2-1.jpg"
                            priority
                        />
                        <div>
                            <h4 className="text-[var(--color-dark)] text-xl font-semibold mb-2">Our Vision</h4>
                            <p className="text-[var(--color-dark)] text-base leading-relaxed">
                                Complete account of work system, and expound the actual teachings of the truth must explain to you how
                                this mistaken idea praising.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
