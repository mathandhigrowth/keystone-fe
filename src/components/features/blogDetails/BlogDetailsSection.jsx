import { CheckCircle, Dot, PlayCircle, Quote } from "lucide-react";
import BlogData from "@/data/BlogData";
import { Link } from "react-router-dom";

export default function BlogDetailsSection({ blog }) {
    const recentArticles = BlogData
        .filter((item) => item.slug !== blog.slug)
        .slice(0, 4);

    return (
        <div className="w-full bg-[var(--color-background)] text-[var(--color-dark)] font-sans">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

                <main className="w-full md:w-2/3">

                    <div className="mb-8">
                        <img
                            src={blog.thumbnailImage || "/placeholder.svg"}
                            alt={blog.title}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="flex flex-wrap items-center text-sm text-[var(--color-muted)] gap-2 mb-4">
                        <span>{blog.author}</span>
                        <Dot className="w-4 h-4" />
                        <span>{blog.date}</span>
                    </div>

                    <h1 className="heading-2 text-[var(--color-primary)] mb-6">
                        {blog.title}
                    </h1>

                    <p className="text-base leading-relaxed mb-6">
                        {blog.description}
                    </p>

                    {blog.content.map((paragraph, index) => (
                        <p key={index} className="text-base leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}

                    {blog.images && blog.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {blog.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${blog.title} image ${index + 1}`}
                                    className="w-full aspect-video h-[300px] object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    )}


                    {/* <div className="relative bg-[var(--color-surface)] p-8 pl-12 mb-8 border-l-4 border-[var(--color-secondary)] rounded-r-lg overflow-hidden">
                        <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-[var(--color-background)] opacity-50 z-0" />
                        <p className="text-lg italic leading-relaxed relative z-10 mb-4">
                            “We can easily manage if we will only take each day as it is given to us...”
                        </p>
                        <p className="text-base font-semibold relative z-10">- Keystone Insights</p>
                    </div> */}

                    {/* <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                        <img
                            src="/images/industrial-pipes.jpg"
                            alt="Industrial pipes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <div className="flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-full bg-[var(--color-info)] bg-opacity-80 cursor-pointer">
                                <PlayCircle className="w-8 md:w-10 h-8 md:h-10 text-white" />
                            </div>
                        </div>
                    </div> */}

                </main>

                <aside className="w-full md:w-1/3 h-fit sticky top-32 self-start bg-[var(--color-surface)] shadow-2xs p-6 md:p-10 rounded-lg">
                    <h3 className="heading-3 text-[var(--color-primary)] mb-6">Recent Articles</h3>
                    <div className="space-y-4">
                        {recentArticles.map((item, idx) => (
                            <Link to={`/blog/${item.slug}`} className="flex gap-3 items-start cursor-pointer border-b border-t py-2" key={idx}>

                                <div className="flex gap-4 items-start">
                                    <img
                                        src={item.thumbnailImage !== "#" ? item.thumbnailImage : "/placeholder.svg"}
                                        alt={item.title}
                                        width={80}
                                        height={60}
                                        className="rounded-md object-cover w-20 h-16"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-primary)] text-base leading-tight mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-[var(--color-muted)]">{item.author} • {item.date}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>

            </div>
        </div>
    );
}
