import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight, ArrowLeft } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Skeleton } from "../components/ui/skeleton";
import {
  useMediumPosts,
  stripHtml,
  estimateReadTime,
  formatDate,
  MEDIUM_PROFILE_URL,
} from "../lib/medium";

export default function BlogPage() {
  const { data: posts, isLoading, isError } = useMediumPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            to="/"
            data-testid="link-back-home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                All Blog Posts
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
              <p className="text-muted-foreground max-w-xl">
                Everything I've written about MERN stack architecture, React
                patterns, and things I learn while building.
              </p>
            </div>

            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-medium-profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
            >
              <FaMedium size={16} />
              View profile on Medium
            </a>
          </motion.div>

          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 space-y-4"
                >
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div
              data-testid="blog-error-state"
              className="bg-card border border-border rounded-2xl p-10 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Couldn't load posts right now.
              </p>
              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Read my posts directly on Medium →
              </a>
            </div>
          )}

          {!isLoading && !isError && posts && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const plainDescription = stripHtml(post.description);
                return (
                  <motion.a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-blog-post-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
                    className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all flex flex-col"
                  >
                    {post.thumbnail && (
                      <div className="h-44 w-full overflow-hidden">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} />
                          {formatDate(post.pubDate)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} />
                          {estimateReadTime(plainDescription)}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mt-3 flex-1 line-clamp-3">
                        {plainDescription}
                      </p>

                      <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-primary">
                        Read on Medium
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}