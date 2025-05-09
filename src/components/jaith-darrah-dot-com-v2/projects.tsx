import Project from "@/components/jaith-darrah-dot-com-v2/project";
import { projects } from "@/data/workModeData";

const Projects = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section {...props}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-700 font-bold">Projects</h1>
        {projects &&
          projects.length != 0 &&
          projects.map((project, i) => (
            <Project
              key={project.title + (project.startDate || project.endDate)}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              link={project.link}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
