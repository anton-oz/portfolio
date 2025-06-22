import { MouseEvent } from "react";
import "./splash.css";

export default function Splash() {
  interface Links {
    name: string;
    href: string;
    icon?: string;
  }
  const links: Links[] = [
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "blog",
      href: "#",
    },
    {
      name: "github",
      href: "https://github.com/anton-oz",
    },
  ];

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault();

    const anchorEl = e.currentTarget;
    const parent = anchorEl.parentElement;
    if (!parent) return;

    const ripple = document.createElement("div");
    ripple.className = "wave";

    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x - 10}px`;
    ripple.style.top = `${y - 10}px`;
    ripple.style.animation = "ripple 1s ease-out forwards";

    parent.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  return (
    <section className="splash">
      <h1>Anton Osland</h1>
      <ul className="link-container">
        {links.map((item, i) => (
          <li key={`link-${i}`}>
            <a
              href={item.href}
              target={item.href[0] === "#" ? "_self" : "_blank"}
              onClick={handleClick}
            >
              {item.name}
            </a>
            <div id={`wave-${i}`} className="wave" />
          </li>
        ))}
      </ul>
    </section>
  );
}
