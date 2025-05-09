"use client";

import * as React from "react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { headerSentences } from "@/data/workModeData";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const Header = ({ ...props }: React.ComponentProps<"header">) => {
  const { setTheme } = useTheme();

  return (
    <header {...props}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-white">
            Jaith Darrah
          </h1>
          <div className="flex items-center space-x-2">
            <Switch
              aria-label="light mode toggle"
              onCheckedChange={(checked) => {
                setTheme(checked ? "light" : "dark");
              }}
            />
          </div>
        </div>

        <div className="h-24 md:h-12 lg:h-8">
          <WordRotate
            className="text-2xl text-gray-700 dark:text-white"
            duration={3500}
            words={headerSentences}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
