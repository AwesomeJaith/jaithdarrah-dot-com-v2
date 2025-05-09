import Link from "next/link";
import WorkExperience from "./work-experience";
import { workExperiences } from "@/data/workModeData";

const WorkExperiences = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section {...props}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-gray-700 font-bold">Work Experience</h1>
          <Link className="" href="/jaith-darrah-resume.pdf" target="_blank">
            <span className="rounded-sm border border-gray-700 px-2 py-0.5 leading-none transition-colors duration-200 hover:bg-[#4cda82]">
              Resume
            </span>
          </Link>
        </div>
        {workExperiences &&
          workExperiences.length != 0 &&
          workExperiences.map((workExperience) => (
            <WorkExperience
              key={
                workExperience.company +
                workExperience.jobTitle +
                (workExperience.startDate || workExperience.endDate)
              }
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
