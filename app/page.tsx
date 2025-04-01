import { ExperienceSkills } from "@/components/sections";
import { Hero } from "@/components/sections/hero";
import { heroData } from "@/data/hero";
import {data} from "@/data/experience"
import { Projects } from "@/components/sections/projects";
import { projects } from "@/data/projects";
import { socialData } from "@/data/social";
import { Contact } from "@/components/sections/contact";
import { ModalProvider } from "@/context";

export default function Home() {
  return (
    <ModalProvider>
      <Hero data={heroData} />
      <ExperienceSkills
        experiences={data.workExperience}
        skills={data.skills}
        certificates={data.certificates}
      />
      <Projects projects={projects} />
      <Contact
        personalInfo={heroData}
        socialLinks={socialData}
      />
    </ModalProvider>
  );
}
