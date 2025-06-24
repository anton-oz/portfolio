import useInView from "./isInView";
import "./project.css";

export default function Project({
  name,
  img,
  desc,
}: {
  name: string;
  img: string;
  desc: string;
}) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="project"
      style={{
        animation: isInView ? "fade-in ease-in 900ms, move-up ease-out 1s" : "",
        opacity: isInView ? "1" : "0",
      }}
    >
      <img
        src={img}
        alt={`${name} screenshot`}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5em 0.5em 0 0",
          border: "none",
          objectFit: "cover",
          objectPosition: "left",
        }}
      />
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
