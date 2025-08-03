import React from "react";
import { Link } from "react-router-dom";

const industryData = [
    {
        id: "01",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/about/pic3.jpg",
        title: "Metal Industry",
        subtitle: "Company",
    },
    {
        id: "02",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/about/about2.jpg",
        title: "Metal Industry",
        subtitle: "Company",
    },
    {
        id: "03",
        imageSrc: "https://industry.dexignzone.com/xhtml/images/our-services/pic2.jpg",
        title: "Manufacture",
        subtitle: "Company",
    },
    {
        id: "04",
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/10.jpg",
        title: "Oil & Gas Industry",
        subtitle: "Midstream",
    },
    {
        id: "05",
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/1.jpg",
        title: "Factories & plants",
        subtitle: "Company",
    },
    {
        id: "06",
        imageSrc: "https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-06.jpg",
        title: "Automated Industry",
        subtitle: "Manufacturing",
    },
    {
        id: "07",
        imageSrc: "https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-04.jpg",
        title: "Oil & Gas Industry",
        subtitle: "Midstream",
    },
    {
        id: "08",
        imageSrc: "https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-02.jpg",
        title: "Gas Industry",
        subtitle: "Organization",
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
                  transition-all duration-500 ease-in-out group-hover:h-[35%] h-[25%] overflow-hidden">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryData.map((card) => (
                    <IndustryCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
}
