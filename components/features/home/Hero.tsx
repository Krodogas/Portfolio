import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/common/Section";

export function Hero() {
    return (
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-auto lg:min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                    <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Simple Developer & Designer
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-black tracking-tighter leading-none">
                        JEFEL A.<br />
                        BAYUBAY
                    </h1>
                    <p className="max-w-150 text-muted-foreground text-base sm:text-lg md:text-xl">
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
                    <Link href="https://www.facebook.com/rightclickk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square bg-muted border-2 border-dashed border-muted-foreground/30 rounded-lg flex flex-col items-center justify-center overflow-hidden">
                    <img
                        src="/hero-image.jpg"
                        alt="Creative Developer"
                        loading="eager"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </Section>
    );
}