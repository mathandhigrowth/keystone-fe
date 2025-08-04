import { Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/1.jpg",
        date: "SEPTEMBER 8, 2020",
        comments: 2,
        title: "Here's How Advanced Manufacturing Is Transforming.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/2.jpg",
        date: "SEPTEMBER 8, 2020",
        comments: 0,
        title: "Why Materials Science And Engineering Metallurgy.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/3.jpg",
        date: "SEPTEMBER 8, 2020",
        comments: 1,
        title: "The Role Of Metallurgy In The Emerging Field Of Engineering.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/4.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 0,
        title: "Scientific Research To Build A Peaceful Society Adjusting Issue.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/4.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 2,
        title: "Strategy Launched To Help Increase Industrial Automation In UK.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/4.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 0,
        title: "Proven Things Of The Metals In Field Of Science And Engineering.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/7.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 2,
        title: "Marching Towards A Green Future By The Technology.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/9.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 0,
        title: "Why Manufacturers Are A Juicy Target For Cyberattack.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/10.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 0,
        title: "Important Books That Every Undergraduate Metallurgy Student.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
        imageSrc: "https://industrie.peacefulqode.co.in/wp-content/uploads/2020/09/10.jpg",
        date: "SEPTEMBER 6, 2020",
        comments: 0,
        title: "Digital Technology Internships A Win For Students And Businesses.",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
];

export default function BlogGrid() {
    return (
        <div className="container mx-auto px-8 py-16 bg-[var(--color-background)]">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className={`bg-[var(--color-surface)] ring shadow-sm overflow-hidden flex flex-col `}
                    >
                        <div className="w-full h-[200px] overflow-hidden">
                            <img
                                src={post.imageSrc || "/placeholder.svg"}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center text-xs gap-4 md:text-sm text-[var(--color-accent)] mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{post.comments} COMMENTS</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                                {post.description}
                            </p>
                            <Link to="/blog/blog-post" className="bg-[var(--color-dark)] text-white px-6 py-3 font-semibold self-start cursor-pointer border-2 border-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-transparent transition ease-snappy">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
