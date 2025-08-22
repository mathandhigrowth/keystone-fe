import { Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { newsPosts } from "@/data/newsData";

export default function NewsListing() {
    const POSTS_PER_PAGE = 4;
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + POSTS_PER_PAGE);
    };

    return (
        <div className="bg-lite-dark text-white p-8">
            <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">NEWS</span>
                <h2 className="heading-1 text-secondary uppercase font-heading font-bold mb-8">Explore Our NEWS</h2>
                <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                    Discover the latest updates, industry insights, and innovations from Keystone. Stay informed about the trends shaping the future of infrastructure and industrial engineering.
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
                {newsPosts.slice(0, visibleCount).map((post) => (
                    <div key={post.id} className="cursor-pointer mb-5">
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-black/50 rounded-lg p-5">
                            <div className="flex-shrink-0">
                                <img src={post.image} alt={post.title} className="w-96 h-64 object-cover rounded-lg" />
                            </div>

                            <DateDisplay dateString={post.date} />

                            <div className="flex-1 space-y-4">
                                <h2 className="text-4xl font-heading font-bold text-white">{post.title.length > 35 ? `${post.title.slice(0, 35)}...` : post.title}</h2>
                                <p className="prose prose-invert text-gray-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.length > 100 ? `${post.content.slice(0, 100)}...` : post.content) }} />

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Clock className="w-4 h-4 text-accent" />
                                        <span className="text-sm">Posted on {post.date}</span>
                                    </div>
                                </div>

                                <div className="flex md:justify-start justify-center">
                                    <button className="bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                                        <Link to={`/news/${post.slug}`}>Read More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            {visibleCount < newsPosts.length && (
                <div className="text-center mt-12">
                    <button onClick={handleLoadMore} className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 uppercase tracking-wide">
                        VIEW MORE NEWS
                    </button>
                </div>
            )}
        </div>
    );
}

function DateDisplay({ dateString }) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en", { month: "short" });
    const year = date.getFullYear();

    return (
        <div className="flex-shrink-0">
            <div className="text-6xl font-heading font-bold text-white mb-2">{day}</div>
            <div className="text-sm text-accent font-medium border-b border-accent pb-1">
                {month} {year}
            </div>
        </div>
    );
}
