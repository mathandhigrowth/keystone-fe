import { Check } from "lucide-react";
import projectData from "@/data/projectData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function ProjectsDetailsSection({ project }) {
    const projectInfo = [
        { label: "Client", value: project.clientName },
        { label: "Location", value: project.location },
        { label: "Year", value: project.year },
        { label: "Project Type", value: project.projectType },
    ];

    const currentIndex = projectData.findIndex((p) => p.slug === project.slug);
    const prevProject = currentIndex > 0 ? projectData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectData.length - 1 ? projectData[currentIndex + 1] : null;

    return (
        <div className="bg-[var(--color-background)] pb-16">
            <div className="md:h-[400px] h-[200px] w-[90%] md:w-[70%] rounded-2xl mx-auto my-10 overflow-hidden">
                <img
                    src={project.bannerImg || project.image}
                    alt={project.clientName}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-[var(--color-dark)]/90 rounded-2xl container mx-auto py-8 px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {projectInfo.map((item) => (
                        <div key={item.label} className="flex flex-col items-center">
                            <span className="text-[var(--color-accent)] text-lg font-semibold mb-1">
                                {item.label}
                            </span>
                            <span className="text-white text-xl font-bold">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-8 py-16">
                <h2 className="text-4xl font-bold text-[var(--color-dark)] mb-8">Project Details</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
                    <div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <strong className="text-[var(--color-accent)] font-semibold">Challenges:</strong>
                        </p>
                        <ul className="space-y-3">
                            {project.challenges.map((challenge, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <Check className="w-5 h-5 text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0" />
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                        {project.gallery?.length > 1 ? (
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000, 
                                    disableOnInteraction: false, 
                                }}
                                spaceBetween={16}
                                slidesPerView={1}
                                className="w-full h-full rounded-lg"
                            >
                                {project.gallery.map((imgUrl, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={imgUrl}
                                            alt={`Gallery image ${project.clientName} ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                            loading="lazy"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <img
                                src={project.gallery?.[0] || project.image}
                                alt={project.clientName}
                                className="w-full h-full object-cover rounded-lg"
                                loading="lazy"
                            />
                        )}
                    </div>
                </div>

                {/* Previous / Next Projects */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {prevProject && (
                        <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-lg shadow-sm">
                            <div className="size-24 rounded overflow-hidden flex-shrink-0">
                                <img
                                    src={prevProject.image || "/placeholder.svg"}
                                    alt={prevProject.clientName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[var(--color-dark)]">{prevProject.clientName}</h4>
                                <p className="text-gray-600 text-sm">{prevProject.projectType}</p>
                                <Link
                                    to={`/projects/${prevProject.slug}`}
                                    className="bg-primary text-white py-1 px-2 text-sm my-1 inline-block rounded"
                                >
                                    ← Previous Project
                                </Link>
                            </div>
                        </div>
                    )}

                    {nextProject && (
                        <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-lg shadow-sm">
                            <div className="size-24 rounded overflow-hidden flex-shrink-0">
                                <img
                                    src={nextProject.image || "/placeholder.svg"}
                                    alt={nextProject.clientName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[var(--color-dark)]">{nextProject.clientName}</h4>
                                <p className="text-gray-600 text-sm">{nextProject.projectType}</p>
                                <Link
                                    to={`/projects/${nextProject.slug}`}
                                    className="bg-primary text-white py-1 px-2 text-sm my-1 inline-block rounded"
                                >
                                    Next Project →
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
