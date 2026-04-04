import ResumeDownload from "./ResumeDownload";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black">
              I build clean, accessible interfaces
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a frontend developer and designer focused on creating beautiful
              and performant web experiences. I enjoy turning ideas into
              interfaces using component-driven architecture, modern tooling,
              and an eye for visual design.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-md bg-muted/40 text-sm">Next.js</span>
              <span className="px-3 py-1 rounded-md bg-muted/40 text-sm">React</span>
              <span className="px-3 py-1 rounded-md bg-muted/40 text-sm">TypeScript</span>
              <span className="px-3 py-1 rounded-md bg-muted/40 text-sm">Tailwind</span>
              <span className="px-3 py-1 rounded-md bg-muted/40 text-sm">UI/UX</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-md bg-muted/40 text-sm">View Projects</a>
              <ResumeDownload />
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-muted/40 to-muted/30 rounded-2xl p-1">
              <div className="w-80 h-96 bg-cover bg-center rounded-xl overflow-hidden" style={{backgroundImage: `url('/hero-image.jpg')`} } />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
