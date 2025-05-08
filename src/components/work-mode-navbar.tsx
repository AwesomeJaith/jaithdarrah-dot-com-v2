import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

// #4cda82

const WorkModeNavbar = () => {
  return (
    <div className="font-mono">
      <header className="border-b">
        <nav>
          <div className="flex justify-end items-center gap-4 p-4">
            <div className="flex flex-row items-center gap-4">
              <div>Jaith</div>
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/stats" className="hover:underline">
                Stats
              </Link>
              <Link href="/" className="hover:underline">
                Photos
              </Link>
              <Link href="https://www.github.com/AwesomeJaith" target="_blank">
                <GitHubLogoIcon className="size-5" />
              </Link>
              <Link href="https://linkedin.com/in/jaithdarrah" target="_blank">
                <LinkedInLogoIcon className="size-5" />
              </Link>
              <Link href="mailto:generic.jaithd@gmail.com" target="_blank">
                <EnvelopeClosedIcon className="size-5" />
              </Link>
            </div>
            <Switch />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default WorkModeNavbar;
