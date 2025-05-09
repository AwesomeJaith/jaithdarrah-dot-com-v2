import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Socials = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="flex items-center w-fit gap-2">
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
    </div>
  );
};

export default Socials;
