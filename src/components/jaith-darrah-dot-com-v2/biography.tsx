"use client";

import { graduationDate } from "@/data/workModeData";
import { useCountdown } from "@/hooks/useCountdown";
import Socials from "./socials";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Biography = ({ ...props }: React.ComponentProps<"section">) => {
  const [days, hours, minutes, seconds] = useCountdown(graduationDate);
  const paddedDays = String(days).padStart(2, "0");
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return (
    <section {...props}>
      <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-700">
        <p className="text-gray-700 dark:text-white leading-relaxed">
          Hi, I&apos;m a software engineer from the suburbs of Chicago. I&apos;m
          also an undergrad senior studying computer science at Arizona State
          University graduating in{" "}
          <span className="inline-flex items-center gap-0.5 text-sm leading-none">
            <span className="rounded-sm border border-gray-700 px-1 py-0.5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{paddedDays}</TooltipTrigger>
                  <TooltipContent>
                    <p>Days</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            :
            <span className="rounded-sm border border-gray-700 px-1.5 py-0.5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{paddedHours}</TooltipTrigger>
                  <TooltipContent>
                    <p>Hours</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            :
            <span className="rounded-sm border border-gray-700 px-1.5 py-0.5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{paddedMinutes}</TooltipTrigger>
                  <TooltipContent>
                    <p>Minutes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            :
            <span className="rounded-sm border border-gray-700 px-1.5 py-0.5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{paddedSeconds}</TooltipTrigger>
                  <TooltipContent>
                    <p>Seconds</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </span>{" "}
          days on May 11, 2026. I love exploring new ideas and working on cool
          stuff. Right now, I&apos;m working on{" "}
          <span className="rounded-sm border border-gray-700 px-1.5 py-0.5 text-sm">
            redacted
          </span>{" "}
          and{" "}
          <span className="rounded-sm border border-gray-700 px-1.5 py-0.5 text-sm">
            redacted
          </span>
          .
        </p>
        <div className="flex justify-between items-center gap-4">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Biography;
