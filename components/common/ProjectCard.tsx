import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    project: {
        title: string;
        category?: string;
        description: string;
        tags: string[];
        image: string;
        links: {
            demo: string;
            github: string;
        };
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group">
            {/* Project Image with Dashed Border */}
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-dashed border-border bg-muted flex items-center justify-center mb-4 p-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs font-medium text-muted-foreground">
                        [{tag.toUpperCase()}]
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-4 group-hover:underline">
                [{project.title.toUpperCase()}]
            </h3>

            {/* Links */}
            <div className="flex items-center gap-3">
                <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                >
                    <Github className="h-5 w-5" />
                </Link>
                <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}