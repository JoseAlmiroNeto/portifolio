import Image from "next/image";
import User from "../assets/userW.png";
import { AboutMe } from "@/components/layout/AboutMe";
import { Skills } from "@/components/layout/Skills";
import { Projects } from "@/components/layout/Projects";
import { Contact } from "@/components/layout/Contact";

export default function Home() {
  return (
    <main className="w-[90%] xl:w-2/3 m-auto flex flex-col justify-center">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
