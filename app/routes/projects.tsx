import PageTitle from "~/components/PageTitle";
import Techlink from "~/components/Techlink";
import Visitlink from "~/components/Visitlink";
import { projects } from "./projects";

export default function Projects() {
  return (
    <section className="w-full">
      <PageTitle
        title="Projects"
        description="I've worked on a number of JavaScript & Go projects, both client & server side. I have featured some of them below to show new technologies that have been used or where a project is deployed."
      />
      <ul className="flex flex-col gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex w-full flex-col flex-wrap justify-center border border-nav p-16 xl:flex-row xl:flex-nowrap"
          >
            <div className="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <div className="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                {project.link && <Visitlink link={project.link.url} type={project.link.text} />}
                {project.github && <Visitlink link={project.github.url} type={project.github.text} />}
              </div>
              <div className="flex max-w-full flex-wrap items-center justify-between gap-2">
                {project.technologies.map((tech) => (
                  <Techlink key={tech} text={tech} />
                ))}
              </div>
              <p className="py-2">{project.description}</p>
            </div>
            <div className="m-6 flex md:basis-1/3 lg:mb-0">
              <img src={project.img} alt={project.name} className="w-full object-cover" />
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}