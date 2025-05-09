import { GitHubURL } from "@/data/workModeData";
import Link from "next/link";
import GitHubCalendar from "@/components/react-github-calendar";
import { useTheme } from "next-themes";

const GitHubActivity = ({ ...props }: React.ComponentProps<"section">) => {
  const { theme } = useTheme();

  return (
    <section {...props}>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-700 dark:text-white font-bold">
          GitHub Activity
        </h1>
        <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-700">
          <Link href={GitHubURL} target="_blank">
            <GitHubCalendar
              username="awesomejaith"
              colorScheme={theme === "light" ? "light" : "dark"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
