"use client";

import Biography from "@/components/jaith-darrah-dot-com-v2/biography";
import Footer from "@/components/jaith-darrah-dot-com-v2/footer";
import GitHubActivity from "@/components/jaith-darrah-dot-com-v2/github-activity";
import Header from "@/components/jaith-darrah-dot-com-v2/header";
import Projects from "@/components/jaith-darrah-dot-com-v2/projects";
import WorkExperiences from "@/components/jaith-darrah-dot-com-v2/work-experiences";

export default function Home() {
  return (
    <div className=" mt-24 font-mono">
      <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-2">
        <Header className="mb-4" />
        <Biography className="mb-8" />
        <WorkExperiences className="mb-8" />
        <Projects className="mb-8" />
        <GitHubActivity className="mb-24" />
        <Footer />
      </div>
    </div>
  );
}
