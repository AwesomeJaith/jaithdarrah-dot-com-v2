import {
  PraniWebsiteURL,
  ThibaultWebsiteURL,
  WebsiteSourceURL,
} from "@/data/workModeData";
import Link from "next/link";
import Socials from "@/components/jaith-darrah-dot-com-v2/socials";

const Footer = ({ ...props }: React.ComponentProps<"footer">) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer {...props}>
      <div className="flex flex-col gap-4 bg-gray-50 p-8 rounded-t-lg border border-b-0 border-gray-700">
        <div className="flex justify-between gap-4">
          <div>© Jaith Darrah {currentYear}</div>
          <Link
            className="hover:underline hover:text-[#4cda82]"
            href={WebsiteSourceURL}
            target="_blank"
          >
            View source →
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <Socials />
          <div>
            Inspired by{" "}
            <span className="rounded-sm border border-gray-700 px-1 py-0.5 hover:bg-[#4cda82]">
              <Link className="" href={PraniWebsiteURL} target="_blank">
                prani.dev
              </Link>
            </span>{" "}
            and{" "}
            <span className="rounded-sm border border-gray-700 px-1 py-0.5 hover:bg-[#4cda82]">
              <Link className="" href={ThibaultWebsiteURL} target="_blank">
                thibault.sh
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
