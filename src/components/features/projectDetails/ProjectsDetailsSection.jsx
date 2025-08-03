import { Check } from "lucide-react";

const projectInfo = [
    { label: "Client", value: "Saare Tewolde" },
    { label: "Project Value", value: "INR 2,649" },
    { label: "Date", value: "Jan 03, 2024" },
    { label: "Category", value: "Infrastructure" },
];

const relatedProjects = [
    {
        imageSrc: "https://html.themexriver.com/forgex/assets/img/project/pd-glry-4.png",
        title: "Petroleum And Gas",
        date: "December 16, 2024",
    },
    {
        imageSrc: "https://html.themexriver.com/forgex/assets/img/project/pd-glry-3.png",
        title: "Flyover Construction",
        date: "December 16, 2024",
    },
];

export default function ProjectsDetailsSection() {
    return (
        <div className="bg-[var(--color-background)] pb-16">
            {/* Main Project Image */}
            <div className="md:h-[400px] h-[200px] w-[90%] md:w-[70%] rounded-2xl mx-auto my-10 overflow-hidden">
                <img
                    src="https://html.themexriver.com/forgex/assets/img/project/pd-img-1.png"
                    alt="Industrial project overview"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Project Data Bar */}
            <div className="bg-[var(--color-dark)]/90 rounded-2xl container mx-auto py-8 px-8">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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

            {/* Project Details Text */}
            <div className="container mx-auto px-8 py-16">
                <h2 className="text-4xl font-bold text-[var(--color-dark)] mb-8">Project Details</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    <span className="float-left text-6xl font-bold bg-[var(--color-accent)] text-white p-2 mr-4 -mt-2">
                        W
                    </span>
                    e assist our clients with building their most ideal financial We comprehend you're putting something aside
                    for all unique life altering situations: A brilliant quietness has take possion of my whole souing like these
                    sweet mornng spring whch parttake in the with my entire heart I am separated from everyone else, and feel the
                    appeal ofexistenc in voluptate velit esse cillum fugiat nulla pariatur. excepteur sint occaecat cupidatat non
                    proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde totam rem
                    aperiam, eaque ipsa quae stomach muscle illo inventore veritatis et semi beatae vitae dicta sunt explicabo
                    nomo enim ipsam voluptatem sed quia consequuntur magni dolores.
                </p>

                {/* Features List and Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
                    <div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                            the middle of text.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-700">
                                <Check className="w-5 h-5 text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0" />
                                <span>Marketing options and rates</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <Check className="w-5 h-5 text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0" />
                                <span>Research beyond the business plan</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <Check className="w-5 h-5 text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0" />
                                <span>Customer engagement matters</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <Check className="w-5 h-5 text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0" />
                                <span>The ability to turnaround consulting</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <Check className="w-5 h-5 text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0" />
                                <span>Override the digital divide</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
                        <img
                            src="https://metarywp.websitelayout.net/wp-content/uploads/2024/12/portfolio-details-001.jpg"
                            alt="Industrial workers with robotic arm"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Related Projects */}
                <div className="mt-20 flex flex-col sm:flex-row justify-between gap-8">
                    {relatedProjects.map((project) => (
                        <div
                            key={project.title}
                            className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-lg shadow-sm flex-1"
                        >
                            <div className="size-24 rounded overflow-hidden flex-shrink-0">
                                <img
                                    src={project.imageSrc || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[var(--color-dark)]">{project.title}</h4>
                                <p className="text-gray-600 text-sm">{project.date}</p>
                            <button className="bg-primary text-white py-1 rounded px-2 text-sm my-1 self-end">View Project</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
