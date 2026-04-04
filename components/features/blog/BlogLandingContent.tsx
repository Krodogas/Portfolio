import Link from "next/link";
import { BlogPost, BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { ExternalLink } from "lucide-react";

export function BlogLandingContent() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <Section className="py-12">
      <div className="flex flex-col gap-4 mb-16">
        <div className="inline-flex w-fit">
          <Badge className="mb-4 bg-foreground text-background hover:bg-foreground">
            BLOG
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl md:text-6xl">Thoughts & Writings</h1>
        <p className="text-lg text-muted-foreground">
          Sharing short essays and tutorials on design, frontend development,
          and practical web engineering.
        </p>
      </div>

      <div className="space-y-8">
        {BLOG_POSTS.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group flex gap-6 pb-8 border-b border-border last:border-b-0 hover:opacity-75 transition-opacity">
              {/* Thumbnail */}
              <div className="shrink-0">
                <div
                  className="w-32 h-32 rounded-lg"
                  style={{ backgroundColor: post.thumbnailColor }}
                ></div>
              </div>

              {/* Content */}
              <div className="grow">
                <div className="space-y-2 mb-3">
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)} • {getReadTime(post.content)} min read
                  </p>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors uppercase">
                    {post.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span className="underline">Read more</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}