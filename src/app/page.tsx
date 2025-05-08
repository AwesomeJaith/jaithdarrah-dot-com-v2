"use client";

import Biography from "@/components/biography";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="mt-24">
      <div className="flex flex-col gap-4 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-2 pb-2">
        <Header className="mb-6" />
        <Biography />
      </div>
    </div>
  );
}
