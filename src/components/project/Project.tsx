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
  return (
    <a href={href} target="_blank">
      <div className="project">
        <img src={img} alt={`${name} screenshot`} />
        <div>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
}
