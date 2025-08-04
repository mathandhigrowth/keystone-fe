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
                            With over a decade of experience, Keystone delivers innovative, scalable, and cost-effective industrial solutions aligned with global standards.
                        </p>
                        <h3 className="text-[var(--color-secondary)] text-xl font-semibold mb-4">Our Legacy</h3>
                        <p className="text-[var(--color-dark)] text-base leading-relaxed mb-4">
                            Since our inception, Keystone has partnered with leading organizations across industries—completing hundreds of transformative projects. Our unwavering focus on quality and client satisfaction has positioned us as a trusted name in infrastructure development and industrial services.
                        </p>
                        <div className="space-y-2">
                            {[
                                "Committed to engineering precision and innovation",
                                "Driven by client success and long - term value creation",
                                "Expertise in turnkey project execution and management",
                                "Sustainable practices integrated across operations"].map((text, i) => (
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
                                To deliver world-class industrial solutions that drive efficiency, foster growth, and empower businesses to scale with confidence.                           </p>
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
                                To be a globally recognized leader in industrial development—pioneering sustainable infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
