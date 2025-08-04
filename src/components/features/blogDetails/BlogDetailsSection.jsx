import { CheckCircle, Dot, PlayCircle, Quote } from "lucide-react";

export default function BlogDetailsSection() {
    return (
        <div className="w-full bg-[var(--color-background)] text-[var(--color-dark)] font-sans">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                {/* Main Content Area */}
                <main className="w-full md:w-2/3">
                    <div className="mb-8">
                        <img
                            src="https://themestate.com/demo/wp-industry/wp-content/uploads/2025/02/pexels-soner-mazlum-182555-6890378-1536x1024.jpg"
                            alt="Solar panels and wind turbines at sunset"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-wrap items-center text-sm text-[var(--color-muted)] gap-2 mb-4">
                        <span>By keystone team</span>
                        <Dot className="w-4 h-4" />
                        <span>February 8, 2025</span>
                        <Dot className="w-4 h-4" />
                        <span>3 Comment</span>
                    </div>

                    <h1 className="heading-1 text-[var(--color-primary)] mb-6">
                        Construction of a new high tech plant in Washingtons
                    </h1>

                    <p className="text-base leading-relaxed mb-6">
                        Industry's standard dummy text ever since the 1500s...
                    </p>

                    <p className="text-base leading-relaxed mb-8">
                        At vero eos et accusamus et iusto odio dignissimos ducimus...
                    </p>

                    <div className="relative bg-[var(--color-surface)] p-8 pl-12 mb-8 border-l-4 border-[var(--color-secondary)] rounded-r-lg overflow-hidden">
                        <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-[var(--color-background)] opacity-50 z-0" />
                        <p className="text-lg italic leading-relaxed relative z-10 mb-4">
                            “We can easily manage if we will only take each day...”
                        </p>
                        <p className="text-base font-semibold relative z-10">- Robert Kosta</p>
                    </div>

                    <h2 className="heading-2 text-[var(--color-primary)] mb-6">
                        Growth and meaning of mechanical technology
                    </h2>

                    <p className="text-base leading-relaxed mb-8">
                        Industry's standard dummy text ever since...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <img
                            src="https://themestate.com/demo/wp-industry/wp-content/uploads/2025/02/pexels-kaboompics-6120-683x1024.jpg"
                            alt="Yellow crane hook"
                            className="w-full aspect-video h-[300px] object-cover rounded-lg"
                        />
                        <img
                            src="https://themestate.com/demo/wp-industry/wp-content/uploads/2025/02/pexels-cottonbro-4820841-683x1024.jpg"
                            alt="Angle grinder sparks"
                            className="w-full aspect-video h-[300px] object-cover rounded-lg"
                        />
                    </div>

                    <h2 className="heading-2 text-[var(--color-primary)] mb-6">
                        Engineering and mechanics money for a better future.
                    </h2>

                    <p className="text-base leading-relaxed mb-8">
                        Industry's standard dummy text ever since...
                    </p>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                        {["Prepare Documentation", "Industry Standard Dummy", "Brand Consistency"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-[var(--color-dark)]">
                                <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                        <img
                            src="/images/industrial-pipes.jpg"
                            alt="Industrial pipes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <div className="flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-full bg-[var(--color-info)] bg-opacity-80 cursor-pointer">
                                <PlayCircle className="w-8 md:w-10 h-8 md:h-10 text-white" />
                            </div>
                        </div>
                    </div>

                    <p className="text-base leading-relaxed mb-8">
                        At vero eos et accusamus et iusto odio dignissimos ducimus...
                    </p>
                </main>

                {/* Sidebar */}
                <aside className="w-full md:w-1/3 h-fit sticky top-32 self-start bg-[var(--color-surface)] shadow-2xs p-6 md:p-10 rounded-lg">
                    <h3 className="heading-3 text-[var(--color-primary)] mb-6">Recent Articles</h3>
                    <div className="space-y-6">
                        {[
                            { title: "Construction of a new high tech plant", date: "February 8, 2024" },
                            { title: "Building resilient supply chains for industries", date: "February 8, 2024" },
                            { title: "Factories technologies in interactive and plants", date: "February 8, 2024" },
                            { title: "Building resilient supply for industries and factories", date: "February 7, 2024" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <img
                                    src="https://themestate.com/demo/wp-industry/wp-content/uploads/2025/02/pexels-flo-dnd-989753-1928760-1024x683.jpg"
                                    alt="Article preview"
                                    width={80}
                                    height={60}
                                    className="rounded-md object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-primary)] text-base leading-tight mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-[var(--color-muted)]">By keystone team • {item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
