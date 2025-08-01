
export default function LatestBlog() {
    return (
        <section className="relative w-full bg-[var(--color-background)] py-20 overflow-hidden">
            {/* Background decorative elements (subtle dots and shapes) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#d1d5db" /> {/* Light gray dots */}
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-gray-200 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>

            <div className="container">
                {/* Header and Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <h2 className="heading-2 text-[var(--color-dark)] mb-4">Latest Blog</h2>
                        <p className="text-gray-600 max-w-xl">
                            Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry's
                            standard
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-semibold text-gray-600 uppercase">PREV</span>
                        <div className="w-12 h-px bg-gray-400"></div>
                        <span className="text-sm font-semibold text-gray-600 uppercase">NEXT</span>
                    </div>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden">
                        <div className="w-full h-48 bg-gray-400 flex items-center justify-center">
                            <img
                                src="https://www.pennarindia.com/assets/images/bu/Structural%20Engineering.jpeg"
                                alt="Blog post image"
                                width={300}
                                height={192}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                <span>Creative Design</span>
                                <span>20/08/2020</span>
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">
                                It is a long established fact that a reader will be distracted
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration....
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden">
                        <div className="w-full h-48 bg-gray-400 flex items-center justify-center">
                            <img
                                src="https://www.pennarindia.com/assets/images/bu/BIM(Building%20Information%20Modelling).jpeg"
                                alt="Blog post image"
                                width={300}
                                height={192}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                <span>Creative Design</span>
                                <span>20/08/2020</span>
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">
                                It is a long established fact that a reader will be distracted
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration....
                            </p>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden">
                        <div className="w-full h-48 bg-gray-400 flex items-center justify-center">
                            <img
                                src="https://www.pennarindia.com/assets/images/bu/Railway%20Sub%20Assemblies.jpeg"
                                alt="Blog post image"
                                width={300}
                                height={192}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                <span>Creative Design</span>
                                <span>20/08/2020</span>
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">
                                It is a long established fact that a reader will be distracted
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration....
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
