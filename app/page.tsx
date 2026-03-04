import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Books from "@/components/Books";
import Patents from "@/components/Patents";
import GalleryPreview from "@/components/GalleryPreview";
import MajorGoals from "@/components/MajorGoals";
import ASEStatement from "@/components/ASEStatement";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <Hero />
      <About />
      <MajorGoals />
      <Stats />
      <Patents />
      <Books />
      <GalleryPreview />
      {/* ASE Statement Section */}
      <ASEStatement />
    </main>
  );
}
