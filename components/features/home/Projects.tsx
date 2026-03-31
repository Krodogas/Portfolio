import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Projects() {
    return (
        <Section id="projects" className="space-y-12">
            <SectionHeading title="Selected Works" description="A brief overview of some projects I've worked on." />
            
            <div className="grid gap-8 md:grid-cols-2">
                {PROJECTS.slice(0, 2).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="/projects">
                    <Button variant="outline" size="lg" className="group">
                        See all projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </Section>
    );
}