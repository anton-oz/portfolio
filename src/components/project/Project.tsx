import { useInView } from "@/lib";
import "./project.css";

export default function Project({
  name,
  img,
  desc,
  href,
}: {
  name: string;
  img: string;
  desc: string;
  href: string;
}) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <a href={href} target="_blank">
      <div
        ref={ref}
        className="project"
        style={{
          animation: isInView
            ? "fade-in ease-in 900ms, move-up ease-out 1s"
            : "",
          opacity: isInView ? "1" : "0",
        }}
      >
        <img src={img} alt={`${name} screenshot`} />
        <div>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
}
