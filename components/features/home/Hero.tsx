import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/common/Section";

export function Hero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-6">
                    <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Simple Developer & Designer
                    </div>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                        Simple<br />
                        Dev.
                    </h1>
                    <p className="max-w-150 text-muted-foreground text-lg md:text-xl">
                        Building beautiful digital experiences with modern technologies and clean code.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/projects">
                        <Button size="lg" className="w-full lg:w-auto">
                            View Work
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full lg:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-6 text-muted-foreground">
                    <Link href="https://github.com/Krodogas" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.instagram.com/jpil2.0?igsh=NXFoMGVscTdjaWU2" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>

                </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
                <div className="w-full max-w-125 aspect-square bg-muted border-2 border-dashed border-muted-foreground/30 rounded-lg flex flex-col items-center justify-center overflow-hidden">
                    <Image
                        src="/hero-image.jpg"
                        alt="Creative Developer"
                        width={500}
                        height={500}
                        loading="eager"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </Section>
    );
}