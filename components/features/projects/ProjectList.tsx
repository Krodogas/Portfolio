"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

export function ProjectList() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = PROJECTS.filter((project) => {
        const matchesCategory = filter === "All" || project.category === filter;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <Section className="space-y-12 min-h-screen">
            <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted w-fit px-3 py-1 rounded">
                    Section: Projects Header
                </div>
                <SectionHeading title="Selected Works" description="A brief overview of my project portfolio." />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? "default" : "outline"}
                            onClick={() => setFilter(category || "All")}
                            size="sm"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8"
                    />
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>
        </Section>
    );
}