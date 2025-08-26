import BlogData from "@/data/BlogData";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BlogGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); 
  };

  const visibleBlogs = BlogData.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-8 py-16 bg-[var(--color-background)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleBlogs.map((post, index) => (
          <div
            key={index}
            className="bg-[var(--color-surface)] ring shadow-sm overflow-hidden flex flex-col"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={post.thumbnailImage || "/placeholder.svg"}
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
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-700 text-base line-clamp-2 leading-relaxed mb-6 flex-grow">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="bg-[var(--color-dark)] text-white px-6 py-3 font-semibold self-start cursor-pointer border-2 border-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-transparent transition ease-snappy"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < BlogData.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewMore}
            className="px-8 py-3 bg-[var(--color-primary)] uppercase text-white font-semibold rounded-md hover:bg-[var(--color-secondary)] transition ease-snappy"
          >
            View More Blogs
          </button>
        </div>
      )}
    </div>
  );
}
