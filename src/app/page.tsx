"use client";

import Biography from "@/components/biography";
import Header from "@/components/header";
import Projects from "@/components/projects";
import WorkExperiences from "@/components/work-experiences";

export default function Home() {
  return (
    <div className="mt-24 mb-24 font-mono">
      <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-2 pb-2">
        <Header className="mb-4" />
        <Biography className="mb-8" />
        <WorkExperiences className="mb-8" />
        <Projects />
      </div>
    </div>
  );
}
