import * as React from "react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { headerSentences } from "@/data/workModeData";

const Header = ({ ...props }: React.ComponentProps<"header">) => {
  return (
    <header {...props}>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-gray-700">Jaith Darrah</h1>
        <div className="h-24 md:h-12 lg:h-8">
          <WordRotate
            className="text-2xl text-gray-700"
            duration={3500}
            words={headerSentences}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
