import "./projects.css";

export default function Projects() {
  const projects = [
    { name: "Project1", img: "" },
    { name: "Project2", img: "" },
    { name: "Project3", img: "" },
    { name: "Project4", img: "" },
    { name: "Project5", img: "" },
    { name: "Project6", img: "" },
  ];
  return (
    <section id="projects" className="project-section">
      {" "}
      <h2>Projects</h2>{" "}
      <div className="project-container">
        {projects.map(({ name, img }, i) => (
          <div className="project" style={{ background: img }} key={i}>
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
