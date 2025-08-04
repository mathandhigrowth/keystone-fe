import React from "react";
import { Link } from "react-router-dom";

const industryData = [
    {
        id: "01",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/about/pic3.jpg",
        title: "Metallurgical Solutions",
        subtitle: "Precision-driven metal engineering",
    },
    {
        id: "02",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/about/about2.jpg",
        title: "Steel Fabrication",
        subtitle: "Heavy-duty structural projects",
    },
    {
        id: "03",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-services/pic2.jpg",
        title: "Advanced Manufacturing",
        subtitle: "High-efficiency production systems",
    },
    {
        id: "04",
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/10.jpg",
        title: "Oil & Gas Infrastructure",
        subtitle: "Midstream processing solutions",
    },
    {
        id: "05",
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/1.jpg",
        title: "Industrial Facilities",
        subtitle: "Integrated factory planning",
    },
    {
        id: "06",
        imageSrc: "https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-06.jpg",
        title: "Industrial Automation",
        subtitle: "Smart & scalable manufacturing",
    },
    {
        id: "07",
        imageSrc: "https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-04.jpg",
        title: "Petrochemical Projects",
        subtitle: "Refined oil & gas execution",
    },
    {
        id: "08",
        imageSrc: "https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-02.jpg",
        title: "Gas Processing",
        subtitle: "Safe and reliable operations",
    },
];
const IndustryCard = ({ id, imageSrc, title, subtitle }) => {
    return (
        <div className="group relative w-full h-[400px] overflow-hidden rounded-lg shadow-md">
            <img
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 w-1/2 bg-black/70 px-4 py-3 text-white rounded-tr-lg 
                  transition-all duration-500 ease-in-out group-hover:h-[45%] h-[32%] overflow-hidden">
                <p className="text-xs text-gray-400 font-medium mb-1">{id}</p>
                <h3 className="text-lg font-semibold leading-tight">{title}</h3>
                <p className="text-sm text-gray-300">{subtitle}</p>

                <Link
                    to={`/projects/project`}
                    className="mt-4 opacity-0 block w-fit translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 
                 bg-white text-black text-sm font-medium px-4 py-2 rounded shadow"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default function ProjectsGrid() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16 ">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Industry Expertise & Key Projects
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Keystone has led transformative initiatives across diverse sectors—from heavy engineering to high-tech automation—
                    delivering robust and sustainable industrial solutions globally.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryData.map((card) => (
                    <IndustryCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
}
