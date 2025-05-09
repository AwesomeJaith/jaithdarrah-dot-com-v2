import WorkExperience from "./work-experience";
import { workExperiences } from "@/data/workModeData";

const WorkExperiences = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section {...props}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-700 font-bold">Work Experience</h1>
        {workExperiences &&
          workExperiences.length != 0 &&
          workExperiences.map((workExperience, i) => (
            <WorkExperience
              key={i}
              company={workExperience.company}
              jobTitle={workExperience.jobTitle}
              startDate={workExperience.startDate}
              endDate={workExperience.endDate}
              link={workExperience.link}
              description={workExperience.description}
              techStack={workExperience.techStack}
            />
          ))}
      </div>
    </section>
  );
};

export default WorkExperiences;
