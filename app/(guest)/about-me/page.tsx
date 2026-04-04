import About from "@/components/features/about/About";

export const metadata = {
  title: "About Me",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <About />
    </main>
  );
}
