"use client";

import { graduationDate } from "@/data/workModeData";
import { useCountdown } from "@/hooks/useCountdown";
import Socials from "./socials";

const Biography = ({ ...props }: React.ComponentProps<"section">) => {
  const [days, hours, minutes, seconds] = useCountdown(graduationDate);
  const paddedDays = String(days).padStart(2, "0");
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return (
    <section {...props}>
      <div className="flex flex-col gap-4 bg-gray-50 p-8 rounded-lg border border-gray-700">
        <p className="text-gray-700 leading-relaxed">
          Hi, I&apos;m a software engineer from the suburbs of Chicago. I&apos;m
          also an undergrad senior studying computer science at Arizona State
          University, and I&apos;m graduating in{" "}
          <span className="inline-flex items-center gap-0.5 text-sm leading-none">
            <span className="rounded-sm border border-gray-700 px-1 py-0.5">
              {paddedDays}
            </span>
            :
            <span className="rounded-sm border border-gray-700 px-1 py-0.5">
              {paddedHours}
            </span>
            :
            <span className="rounded-sm border border-gray-700 px-1 py-0.5">
              {paddedMinutes}
            </span>
            :
            <span className="rounded-sm border border-gray-700 px-1 py-0.5">
              {paddedSeconds}
            </span>
          </span>{" "}
          days. I love exploring new ideas and working on cool stuff. Right now,
          I&apos;m working on{" "}
          <span className="rounded-sm border border-gray-700 px-1 py-0.5 text-sm leading-none">
            redacted
          </span>{" "}
          and{" "}
          <span className="rounded-sm border border-gray-700 px-1 py-0.5 text-sm leading-none">
            redacted
          </span>
          .
        </p>
        <Socials />
      </div>
    </section>
  );
};

export default Biography;
