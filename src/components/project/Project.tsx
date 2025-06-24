import useInView from "./isInView";
import "./project.css";

export default function Project({ name, img }: { name: string; img: string }) {
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
      <h3>{name}</h3>
    </div>
  );
}
