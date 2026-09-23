import Skills from "../../_components/Skills";
import Navbar from "../../../components/Navbar";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase text-cyan-400 mb-4">
          Project: {slug}
        </h1>
        <p className="text-zinc-400 mb-12">
          Detailed project overview and technical breakdown.
        </p>
      </div>

      <Skills />
    </main>
  );
}