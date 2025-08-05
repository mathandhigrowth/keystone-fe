import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BlogImage1, BlogImage2, BlogImage3 } from '@/assets/images';
export default function LatestBlog() {
    return (
        <section id="blog" className="relative w-full bg-[var(--color-background)] py-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#d1d5db" />
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
                            Explore insights, innovations, and industry updates from Keystone. Stay informed about the trends shaping the future of infrastructure and industrial engineering.
                        </p>
                    </div>

                    {/* Swiper navigation buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-sm font-semibold text-gray-600 uppercase cursor-pointer" id="prev-blog">PREV</button>
                        <div className="w-12 h-px bg-gray-400"></div>
                        <button className="text-sm font-semibold text-gray-600 uppercase cursor-pointer" id="next-blog">NEXT</button>
                    </div>
                </div>

                {/* Swiper blog cards */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '#next-blog',
                        prevEl: '#prev-blog',
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <BlogCard
                            image={BlogImage1}
                            date="05/08/2025"
                            category="Structural Engineering"
                            title="Revolutionizing Pre-Engineered Buildings in Industrial Construction"
                            description="Discover how Keystone is redefining structural efficiency and scalability with innovative PEB solutions tailored for rapid industrial expansion."
                        />
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <BlogCard
                            image={BlogImage2}
                            date="28/07/2025"
                            category="Digital Transformation"
                            title="Embracing BIM: The Future of Smart Infrastructure Planning"
                            description="Explore how Keystone is leveraging Building Information Modeling (BIM) to deliver smarter, more efficient project execution in infrastructure development."
                        />
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <BlogCard
                            image={BlogImage3}
                            date="12/07/2025"
                            category="Railway Engineering"
                            title="Engineering Excellence in Railway Sub-Assemblies"
                            description="From bridges to sub-assemblies, see how Keystone is pushing boundaries in quality, safety, and precision manufacturing for the railway sector."
                        />
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
}

// Reusable BlogCard component
function BlogCard({ image, date, category, title, description }) {
    return (
        <div className="bg-[var(--color-surface)] rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-48 bg-gray-400 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{category}</span>
                    <span>{date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

