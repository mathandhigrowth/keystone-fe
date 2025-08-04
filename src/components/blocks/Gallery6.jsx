"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Gallery6 = ({
    heading = "Our Expertise",
    viewAllUrl = "https://www.shadcnblocks.com",
    items = [
        {
            id: "item-1",
            title: "Build Modern UIs",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-2",
            title: "Computer Vision Technology",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-3",
            title: "Machine Learning Automation",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-4",
            title: "Predictive Analytics",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
        {
            id: "item-5",
            title: "Neural Network Architecture",
            url: "#",
            image: "/images/block/placeholder-dark-1.svg",
        },
    ],
}) => {
    const [carouselApi, setCarouselApi] = useState();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!carouselApi) return;

        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };

        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="py-16">
            <div className="container">
                <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-12">
                    <div>
                        <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                            {heading}
                        </h2>
                        {/* <button className="px-6 flex-center gap-2 py-3 bg-[var(--color-secondary)] text-[var(--color-white)] font-bold rounded-full  transition-colors duration-300 uppercase tracking-wide">
                            VIEW ALL
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </button> */}
                        <p>
                            Comprehensive Electrical & Automation Solutions – Under One Roof
                        </p>
                    </div>
                    <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => carouselApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)]"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => carouselApi?.scrollNext()}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)]"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                    className="relative left-[-1rem]"
                >
                    <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:max-w-[492px]">
                                <a
                                    href={item.url}
                                    className="group relative flex aspect-[3/2] overflow-hidden rounded-xl"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                        <div className="text-base font-medium md:text-lg lg:text-xl mb-2">
                                            {item.title}
                                        </div>
                                        <div className="flex items-center text-sm">
                                            Read more{" "}
                                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export { Gallery6 };
