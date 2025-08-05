import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsDetailsBanner = ({
    project
}) => {
    const { clientName, bannerImg } = project;
    return (
        <div className="h-[384px] relative overflow-hidden">
            <img
                alt={clientName}
                className="absolute inset-0 object-cover w-full h-full"
                src={bannerImg}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col justify-center h-full container">
                <h1 className="text-white text-7xl font-bold mb-4">
                    {clientName}
                </h1>
                <div className="flex items-center space-x-2 text-white text-base">
                    <span className="font-medium">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <Link to="/projects">Projects</Link>
                    <span className="text-[var(--color-secondary)] font-black">-</span>
                    <span>{clientName}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailsBanner;