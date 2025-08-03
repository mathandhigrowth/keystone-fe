const serviceBlocks = [
    {
        type: "image",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-work/oilgas/pic1.jpg",
        colSpan: "lg:col-span-2",
    },
    {
        type: "text",
        title: "Mechanical Works",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "ABOUT US",
        bgColor: "bg-[var(--color-surface)]",
        textColor: "text-[var(--color-dark)]",
        colSpan: "lg:col-span-1",
    },
    {
        type: "image",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-work/oilgas/pic2.jpg",
        colSpan: "lg:col-span-1",
    },
    {
        type: "text",
        title: "Power & Energy.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "ABOUT US",
        bgColor: "bg-[var(--color-primary)]",
        textColor: "text-white",
        colSpan: "lg:col-span-1",
    },
    {
        type: "image",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-work/oilgas/pic3.jpg",
        colSpan: "lg:col-span-1",
    },
    {
        type: "text",
        title: "Petroleum Refinery.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "ABOUT US",
        bgColor: "bg-secondary",
        textColor: "text-white",
        colSpan: "lg:col-span-1",
    },
    {
        type: "image",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-work/oilgas/pic4.jpg",
        colSpan: "lg:col-span-1",
    },
    {
        type: "text",
        title: "Oil & Gas Industry.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "ABOUT US",
        bgColor: "bg-secondary",
        textColor: "text-white",
        colSpan: "lg:col-span-1",
    },
    {
        type: "text",
        title: "Automotive Manufacturing.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "ABOUT US",
        bgColor: "bg-[var(--color-surface)]",
        textColor: "text-[var(--color-dark)]",
        colSpan: "lg:col-span-1",
    },
    {
        type: "image",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-work/oilgas/pic5.jpg",
        colSpan: "lg:col-span-2",
    },
];

export default function ServicesGrid() {
    return (
        <div className="bg-[var(--color-background)]">
            {/* Top Banner */}
            <div className="bg-secondary uppercase py-12 text-center text-white text-2xl font-semibold px-4">
                Cutting-edge services
                for the industry
            </div>

            {/* Grid Layout */}
            <div className="px-0 grid grid-cols-1 lg:grid-cols-3 gap-0">
                {serviceBlocks.map((block, index) => (
                    <div
                        key={index}
                        className={`relative w-full h-[400px] flex items-center justify-center p-0 ${block.bgColor || ""} ${block.colSpan || ""} ${block.rowSpan || ""}`}
                    >
                        {block.type === "image" && block.imageSrc && (
                            <img
                                src={block.imageSrc || "/placeholder.svg"}
                                alt={block.title || "Service image"}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {block.type === "text" && (
                            <div className={`flex p-8 flex-col items-start text-left ${block.textColor || ""} max-w-md`}>
                                <h3 className="text-4xl font-bold leading-tight mb-4">{block.title}</h3>
                                <p className="text-base leading-relaxed mb-6">{block.description}</p>
                                {block.buttonText && (
                                    <button
                                        className={`px-6 py-3 rounded-sm font-semibold border-2 ${block.textColor === "text-white"
                                            ? "border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
                                            : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                                            } transition ease-snappy`}
                                    >
                                        {block.buttonText}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
