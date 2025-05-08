import * as React from "react";
import Link from "next/link";

const Header = ({ ...props }: React.ComponentProps<"header">) => {
  return (
    <header {...props}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-700">Jaith Darrah</h1>
          <p className="text-2xl text-gray-700">
            undergrad computer science senior at{" "}
            <Link href="https://www.asu.edu/" target="_blank">
              ASU
            </Link>
          </p>
          {/* Software Engineer Intern @ Walgreens
          Building X and Y */}
        </div>
      </div>
    </header>
  );
};

export default Header;
