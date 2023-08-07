import Link from "next/link";
import Image from "next/image";
import { CardLarge } from "../ui/CardLarge";
import { Separetor } from "../ui/Separetor";
import { SubTitle } from "../ui/SubTitle";
import { ProjectsData } from "../../data/projectsData";
import { Pagination } from "../functions/Pagination";

export function Projects() {
  const items = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="bg-gray-200 p-4">
      Conteúdo {index + 1}
    </div>
  ));

  return (
    <main className="mt-20" data-aos="fade-up">
      <SubTitle>Projects</SubTitle>
      <Separetor className="h-[2px] w-full bg-white" />
      <Pagination
        items={ProjectsData.map((project, index) => {
          return (
            <CardLarge key={index}>
              <Link
                href={project.link}
                target="_blank"
                className="w-full h-full"
              >
                <Image
                  src={project.img}
                  alt="project"
                  className="w-full h-2/3 object-cover"
                />
                <div className="w-full h-1/3 flex flex-col justify-evenly border-t px-6">
                  <h2 className="text-xl 2xl:text-4xl font-bold">
                    {project.title}
                  </h2>
                  <p className="text-sm 2xl:text-xl">{project.description}</p>
                  <div className="flex gap-2 text-base text-black">
                    {project.tags.map((tag, index) => {
                      return (
                        <button
                          key={index}
                          className="bg-white rounded py-[2px] px-1 text-xs 2xl:text-base"
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </CardLarge>
          );
        })}
        itemsPerPage={4}
      />
    </main>
  );
}
