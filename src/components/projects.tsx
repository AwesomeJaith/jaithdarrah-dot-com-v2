import Project from "@/components/project";
import { projects } from "@/data/workModeData";

const Projects = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl text-gray-700 font-bold">Projects</h1>
      {projects &&
        projects.length != 0 &&
        projects.map((project) => (
          <Project
            title={project.title}
            startDate={project.startDate}
            endDate={project.endDate}
            link={project.link}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
    </section>
  );
};

export default Projects;
