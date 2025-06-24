import Project from "../project/Project";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Barcan",
      img: "/projectScreenshots/barcan_2.png",
      desc: `Minimal Kanban board keep track of todos with
             quick moving shortcuts.`,
    },
    {
      name: "Tweeter",
      img: "/projectScreenshots/tweeterScreenshot.png",
      desc: "Live chat app built with express, react and socket.io.",
    },
    {
      name: "Reading Forward",
      img: "/projectScreenshots/readingforwardScreenshot.png",
      desc: `Customer facing website for a tutoring service.`,
    },
  ];
  return (
    <section id="projects" className="project-section">
      {" "}
      <h2>Projects</h2>{" "}
      <div className="project-container">
        {projects.map(({ name, img, desc }, i) => (
          <Project key={i} name={name} img={img} desc={desc} />
        ))}
      </div>
    </section>
  );
}
