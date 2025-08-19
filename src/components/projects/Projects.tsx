import Project from "../project/Project";
import "./projects.css";

export default function Projects() {
  const projects = [
    // TODO: publish live link for barcan
    // {
    //   name: "Barcan",
    //   img: "/projectScreenshots/barcan_2.png",
    //   desc:
    //     "Minimal Kanban board keep track of todos with " +
    //     "quick moving shortcuts.",
    //   href: "http://localhost:3001",
    // },
    {
      name: "What Piano Chord",
      img: "/projectScreenshots/whatPianoChordScreenshot.png",
      desc: "Piano chord visualizer",
      href: "https://whatpianochord.com",
    },
    {
      name: "Reading Forward",
      img: "/projectScreenshots/readingforwardScreenshot.png",
      desc: "Structured word inquiry tutor portfolio.",
      href: "https://readingforwardmn.com",
    },
    {
      name: "Tweeter",
      img: "/projectScreenshots/tweeterScreenshot.png",
      // desc: "Live chat app built with express, react and socket.io.",
      desc: "Live chat app with questions for users to answer. " + "",
      href: "https://tweeter-4z96.onrender.com/",
    },
  ];
  return (
    <section id="projects" className="project-section">
      {" "}
      <h2>Projects</h2>{" "}
      <div className="project-container">
        {projects.map(({ name, img, desc, href }, i) => (
          <Project key={i} name={name} img={img} desc={desc} href={href} />
        ))}
      </div>
    </section>
  );
}
