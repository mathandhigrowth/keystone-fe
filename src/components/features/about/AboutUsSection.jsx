import { AboutUsSectionImage1, AboutUsSectionImage2 } from '@/assets/images'
import { Link } from 'react-router-dom';
export default function AboutUsSection() {
    return (
        <section className="bg-[var(--color-background)] pt-12 pb-2 md:pb-32">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">

                {/* Left side: Images and year */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative flex flex-col items-center">
                        {/* Year and Label */}
                        <div className="text-center mb-0 z-20">
                            <h1 className="text-[var(--color-secondary)] text-[64px] sm:text-[80px] leading-none font-bold">
                                2014
                            </h1>
                            <p className="uppercase text-sm font-black text-[var(--color-black)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] tracking-widest">
                                Start in
                            </p>
                        </div>

                        {/* Images */}
                        <div className="relative w-fit">
                            <img
                                src={AboutUsSectionImage1}
                                alt="Stack of square metal pipes"
                                className="w-[260px] sm:w-[300px] h-[300px] sm:h-[360px] rounded-2xl object-cover shadow-lg"
                            />
                            <img
                                src={AboutUsSectionImage2}
                                alt="Man working with grinder in factory"
                                className="absolute -bottom-16 left-12 md:left-20 sm:left-28 w-[240px] rounded-2xl sm:w-[360px] h-[300px] sm:h-[360px] object-cover shadow-lg z-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side: Text content */}
                <div className="w-full lg:w-1/2 mt-5 lg:mt-0 text-center lg:text-left">
                    <span className="uppercase text-xs font-bold tracking-wider text-[var(--color-dark)] mb-2 block">
                        About Keystone
                    </span>
                    <h2 className="text-[var(--color-primary)] text-3xl sm:text-4xl font-bold leading-tight mb-4">
                        Empowering Industries with Smart <br className="hidden sm:block" />Infrastructure & Automation
                    </h2>
                    <p className="text-[var(--color-dark)] text-base leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                        Since 2014, Keystone has been delivering intelligent engineering solutions that optimize operational performance, enhance reliability, and drive sustainable growth. Our expertise spans industrial automation, control systems, and infrastructure modernization.
                    </p>
                    <div className="mb-6 space-y-1 text-[var(--color-primary)] font-medium">
                        <p className="uppercase text-sm">Mon–Sat: 9:30 AM – 6:30 PM</p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                      <Link to="/contact" className='cursor-pointer'>
                            <button className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                                Contact Us
                            </button>
                      </Link> 
                    </div>
                </div>
            </div>
        </section>
    );
}
