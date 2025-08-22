import { Calendar, MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react";
import { newsPosts } from "../data/newsData";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const post = newsPosts.find((p) => p.slug === slug);
  const [shareUrl, setShareUrl] = useState(window.location.href);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, [slug]);

  if (!post) {
    return (
      <div className="bg-lite-dark h-[50vh] flex-center text-white pt-32">
        <p className="text-center heading-xl">News post not found.</p>
      </div>
    );
  }

  const relatedArticles = newsPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const matchCount = p.tags.filter((tag) => post.tags.includes(tag)).length;
      return { ...p, matchCount };
    })
    .filter((p) => p.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 3);

  return (
    <div className="bg-lite-dark text-white pt-32">
      <section className="relative">
        <div className="w-[80%] mx-auto h-96 md:h-[400px] aspect-video lg:h-[600px] overflow-hidden">
          <img src={post.image} alt="Hero Background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 py-16">
          <div className="mb-12">
            <h1 className="heading-2 text-secondary mb-8 leading-tight">{post.title}</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-6 text-gray-800 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Share:</span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="prose prose-invert max-w-none text-gray-600 text-base leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
          </div>

        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="py-2 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-accent text-sm font-medium tracking-wider uppercase">NEWS</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 uppercase">RELATED News</h2>

              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Check out more reads from similar topics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link to={`/news/${article.slug}`} key={article.id}>
                  <article className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                      <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 leading-tight group-hover:text-accent transition-colors duration-300">{article.title.length > 33 ? `${article.title.substring(0, 33)}...` : article.title}</h3>

                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span>{article.date}</span>
                      <span>{article.comments}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
