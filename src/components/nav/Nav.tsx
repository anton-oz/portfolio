import "./nav.css";

export default function Nav() {
  const handleMouseEnter = () => {
    const nameEl = document.getElementById("name");
    if (!nameEl) throw new Error("name element is null");
    nameEl.style.animation = "widen 200ms ease-in forwards";
  };

  const handleMouseLeave = () => {
    const nameEl = document.getElementById("name");
    if (!nameEl) throw new Error("name element is null");
    nameEl.style.animation = "shorten 200ms ease-in forwards";
  };

  return (
    <nav>
      <h1
        id="name"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Anton
      </h1>
    </nav>
  );
}
