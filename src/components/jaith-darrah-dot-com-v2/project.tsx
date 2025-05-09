import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  startDate?: Date;
  endDate?: Date;
  link?: string;
  description: string;
  techStack?: string[];
}

const Project = ({
  title,
  startDate,
  endDate,
  link,
  description,
  techStack,
}: ProjectProps) => {
  const startMonthYear = startDate
    ? startDate?.toLocaleString("default", { month: "short" }) +
      " " +
      startDate?.getFullYear()
    : undefined;

  const endMonthYear = endDate
    ? endDate?.toLocaleString("default", { month: "short" }) +
      " " +
      endDate?.getFullYear()
    : undefined;

  return (
    <div className="flex flex-col gap-4 bg-gray-50 p-8 rounded-lg border border-gray-700">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {link ? (
            <Link href={link} target="_blank" className="group">
              <div className="flex items-center gap-2">
                <h2 className="text-wrap font-semibold text-gray-700 transition-colors duration-200 group-hover:text-[#4cda82]">
                  {title}
                </h2>
                <ExternalLinkIcon className="size-4 shrink-0 transition-colors duration-200 group-hover:text-[#4cda82]" />
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-gray-700">{title}</h2>
            </div>
          )}
          {title === "jaithdarrah.com v2" && (
            <div className="flex items-center rounded-sm border border-gray-700 bg-[#4cda82] px-1 py-0.5 text-sm leading-none">
              You&apos;re here 😎
            </div>
          )}
        </div>
        <div className="flex items-center rounded-sm border border-gray-700 px-1 py-0.5 text-sm leading-none">
          {startDate && endDate && `${startMonthYear} to ${endMonthYear}`}
          {startDate && !endDate && `${startMonthYear} to Present`}
          {!startDate && endDate && `${endMonthYear}`}
        </div>
      </div>
      <p>{description}</p>
      <div className="flex flex-wrap items-center gap-2">
        {techStack &&
          techStack.length != 0 &&
          techStack.map((techItem) => (
            <span
              key={techItem}
              className="flex items-center rounded-sm border border-gray-700 px-1 py-0.5 text-sm leading-none"
            >
              {techItem}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Project;
