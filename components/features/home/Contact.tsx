import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact" className="space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Let's Connect</h2>
                <p className="max-w-150 text-muted-foreground text-lg md:text-xl">
                    Have a project in mind or just want to say hi? Feel free to reach out! I'm always open to discussing new ideas and opportunities.
                </p>

                <Button size="lg" asChild className="mt-4">
                    <Link href="/contact">
                        Get in Touch
                    </Link>
                </Button>
            </div>
        </Section>
    );
}