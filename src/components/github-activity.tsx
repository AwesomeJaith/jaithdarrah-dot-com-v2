import { GitHubURL } from "@/data/workModeData";
import Link from "next/link";
import GitHubCalendar from "@/components/react-github-calendar";

const GitHubActivity = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section {...props}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-700 font-bold">GitHub Activity</h1>
        <div className="flex flex-col gap-4 bg-gray-50 p-8 rounded-lg border border-gray-700">
          <Link href={GitHubURL} target="_blank">
            <GitHubCalendar username="awesomejaith" colorScheme="light" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
