export default function Projects() {
  const projects = [
    {
      name: "Tweeter",
      deployedLink: `https://tweeter-4z96.onrender.com/`,
      github: "https://github.com/anton-oz/tweeter",
    },
    {
      name: "Reading Forward",
      deployedLink: `https://anton-oz.github.io/readingforward/`,
      github: "https://github.com/anton-oz/readingforward",
    },
    {
      name: "More projects coming soon...",
      deployedLink: ``,
      github: "",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen w-screen relative flex flex-wrap justify-center align-center p-2 gap-3 overflow-y-scroll"
    >
      {projects.map((project, i) => (
        <div
          key={i}
          id={`project-${i + 1}`}
          className="w-full max-w-[700px] min-h-[284px] project-tile max-h-full flex justify-end border border-black dark:border-white p-2 rounded-md"
        >
          <div className="bg-white text-black rounded-md w-fit h-fit p-2 ">
            {project.name}
            {project.name === "More projects coming soon..." ? (
              ""
            ) : (
              <ul className="text-sm pl-4 underline">
                <li className="hover:scale-105 transition-all duration-150">
                  <a href={project.deployedLink} target="_blank">
                    Deployed App
                  </a>
                </li>
                <li className="hover:scale-105 transition-all duration-150">
                  <a href={project.github} target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
