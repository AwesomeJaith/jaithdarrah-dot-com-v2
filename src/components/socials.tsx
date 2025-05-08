import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link href="https://www.github.com/AwesomeJaith" target="_blank">
        <GitHubLogoIcon className="size-5 text-gray-700 hover:text-[#4cda82] transition-colors" />
      </Link>
      <Link href="https://linkedin.com/in/jaithdarrah" target="_blank">
        <LinkedInLogoIcon className="size-5 text-gray-700 hover:text-[#4cda82] transition-colors" />
      </Link>
      <Link href="mailto:generic.jaithd@gmail.com" target="_blank">
        <EnvelopeClosedIcon className="size-5 text-gray-700 hover:text-[#4cda82] transition-colors" />
      </Link>
    </div>
  );
};

export default Socials;
