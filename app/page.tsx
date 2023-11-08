import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Recommendations from "@/components/recommendations";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider image={"astronaut-about"} width={150} height={150} />
      <About />
      <SectionDivider
        image={"astronaut-recommendations"}
        width={200}
        height={200}
      />
      <Recommendations />
      <SectionDivider image={"astronaut-skills"} width={200} height={200} />
      <Skills />
      <SectionDivider image={"astronaut-experience"} width={200} height={200} />
      <Experience />
      <SectionDivider image={"astronaut-contact"} width={200} height={200} />
      <Contact />
    </main>
  );
}
