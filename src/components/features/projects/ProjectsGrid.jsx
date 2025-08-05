import projectData from "@/data/projectData";
import React from "react";
import { Link } from "react-router-dom";

const IndustryCard = ({ id, image, clientName, industry, slug }) => {
    return (
        <div className="group relative w-full h-[400px] overflow-hidden rounded-lg shadow-md">
            <img
                src={image || "/placeholder.svg"}
                alt={clientName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 w-1/2 bg-black/70 px-4 space-y-2 py-3 text-white rounded-tr-lg 
                transition-all duration-500 ease-in-out group-hover:h-[47%] h-[34%] overflow-hidden">
                <p className="text-xs text-gray-400 font-medium mb-1">{id}</p>
                <h3 className="text-lg font-semibold leading-tight">{clientName}</h3>
                <p className="text-sm text-gray-300">{industry}</p>

                <Link
                    to={`/projects/${slug}`}
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
        <div className="max-w-screen-xl mx-auto px-4 py-16">
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
                {projectData.map((card) => (
                    <IndustryCard
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        clientName={card.clientName}
                        industry={card.industry}
                        slug={card.slug}
                    />
                ))}
            </div>
        </div>
    );
}
