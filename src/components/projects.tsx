import Project from "@/components/project";

const Projects = () => {
  const techStack = ["Java", "JavaFX"];

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl text-gray-700 font-bold">Projects</h1>
      <Project
        title="SunDevil Book Buying and Selling System"
        startDate={new Date("September 2024")}
        // endDate={new Date("October 2024")}
        description="A JavaFX application to facilitate the sale of books between buyers and sellers along with a
dashboard for administrators to monitor listings, sales, transactions, and users."
        link="https://github.com/AwesomeJaith/sundevil-bookstore-system"
        techStack={techStack}
      />
      <Project
        title="SunDevil Book Buying and Selling System"
        startDate={new Date("September 2024")}
        // endDate={new Date("October 2024")}
        description="A JavaFX application to facilitate the sale of books between buyers and sellers along with a
dashboard for administrators to monitor listings, sales, transactions, and users."
      />
      <Project
        title="SunDevil Book Buying and Selling System"
        startDate={new Date("September 2024")}
        endDate={new Date("October 2024")}
        description="A JavaFX application to facilitate the sale of books between buyers and sellers along with a
dashboard for administrators to monitor listings, sales, transactions, and users."
      />
      <Project
        title="SunDevil Book Buying and Selling System"
        startDate={new Date("September 2024")}
        // endDate={new Date("October 2024")}
        description="A JavaFX application to facilitate the sale of books between buyers and sellers along with a
dashboard for administrators to monitor listings, sales, transactions, and users."
      />
    </section>
  );
};

export default Projects;
