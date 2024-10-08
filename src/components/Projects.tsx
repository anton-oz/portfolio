import Dropdown from "./ui/Dropdown";

export default function Projects() {
  const projects = [
    {
      name: "Tweeter",
      links: [
        {
          name: "Live Site",
          link: `https://tweeter-4z96.onrender.com/`,
        },
        {
          name: "Github",
          link: "https://github.com/anton-oz/tweeter",
        },
      ],
    },
    {
      name: "Reading Forward",
      links: [
        {
          name: "Live Site",
          link: `https://readingforwardmn.com`,
        },
        {
          name: "Github",
          link: "https://github.com/anton-oz/readingforward",
        },
      ],
    },
    {
      name: "More coming soon...",
      links: [
        {
          name: "",
          link: "",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen h-[100dvh] w-screen relative flex flex-col sm:flex-row sm:flex-wrap justify-start items-start sm:justify-center overflow-x-scroll"
    >
      {projects.map((project, i) => (
        <div
          key={i}
          id={`project-${i + 1}`}
          className={`w-full sm:max-w-[50%] min-h-[20%] project-tile h-[23%] sm:h-full max-h-[50%] flex justify-center items-center p-2 text-2xl`}
        >
          {project.name === "More coming soon..." ? (
            project.name
          ) : (
            <Dropdown text={project.name} items={project.links} />
          )}
        </div>
      ))}
    </section>
  );
}
