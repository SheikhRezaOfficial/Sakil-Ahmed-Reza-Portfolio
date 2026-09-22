import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-20 px-6">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16 text-center">
        Featured Projects
      </h1>
      <div className="h-full w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} src={project.image} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};
