"use client"

import { useState } from "react"
import ServiceCard from "@/components/ui/ServiceCard"
import { Target, Files, Globe } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"

export default function HomeServicesSection() {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className="flex items-center justify-center bg-[var(--color-background)]">
            <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8 py-20">
                {/* Left Section: Introduction */}
                <div className="col-span-1 lg:col-span-1 flex flex-col  justify-center pr-8">
                    <p className="text-base font-medium mb-2 underline">
                        {"Why People "}
                        <span className="text-[var(--color-secondary)]">{"Choose us"}</span>
                    </p>
                    <h1 className="heading-2 font-bold leading-tight text-[var(--color-dark)] mb-6">
                        {"Why People Choose KeyStone"}
                    </h1>
                    <p className="text-base text-[var(--color-dark)] mb-2 leading-relaxed">
                        {"Established in 2014, Keystone Instruments India Pvt. Ltd. is a premier distributor of industrial automation products."}
                    </p>
                    <p className="text-base text-[var(--color-dark)] leading-relaxed">
                        {"We supply cutting-edge solutions and control panel manufacturing for industries across India — from manufacturing and OEMs to power and energy sectors."}
                    </p>
                </div>

                {/* Right Section: Slideable Cards */}
                <div className="col-span-1 lg:col-span-3">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides
                        loop
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[EffectCoverflow]}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <ServiceCard
                                title="Authorized Distributor"
                                icon={Target}
                                description="Proud channel partner of renowned names like Siemens, Omron, Degson, and more — genuine, high-performance solutions."
                                highlighted={activeIndex === 0}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard
                                title="One-Stop Solution for Automation & Control"
                                icon={Files}
                                description="From terminal blocks to PLCs, sensors to enclosures — we offer end-to-end industrial components with support and fast delivery."
                                highlighted={activeIndex === 1}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard
                                title="Trusted Industrial Partner Since 2014"
                                icon={Globe}
                                description="Over a decade of experience in delivering certified electrical and automation products across India."
                                highlighted={activeIndex === 2}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
