import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '@/data/projectData';

import ProjectsDetailsBanner from '@/components/features/projectDetails/ProjectsDetailsBanner';
import ProjectsDetailsSection from '@/components/features/projectDetails/ProjectsDetailsSection';

const ProjectsDetailsPage = () => {
    const { slug } = useParams();
    const project = projectData.find(item => item.slug === slug);

    if (!project) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-700">Project not found</h2>
                <p className="text-gray-500 mt-2">We couldn't find a project with the provided identifier.</p>
            </div>
        );
    }

    return (
        <div>
            <ProjectsDetailsBanner project={project} />
            <ProjectsDetailsSection project={project} />
        </div>
    );
};

export default ProjectsDetailsPage;
