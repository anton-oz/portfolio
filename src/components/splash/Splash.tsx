import { MouseEvent, ReactElement } from "react";
import Github from "../../../public/svg/github.svg?react";
import LinkedIn from "../../../public/svg/linkedin.svg?react";
import "./splash.css";

export default function Splash() {
  interface Links {
    name: string;
    href: string;
    icon?: ReactElement;
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
      icon: <Github />,
    },
    {
      name: "Linked In",
      href: "https://linkedin.com/in/anton-osland0",
      icon: <LinkedIn />,
    },
  ];

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const anchorEl = e.currentTarget;
    const { href } = anchorEl;
    const parent = anchorEl.parentElement;
    if (!parent) return;

    const ripple = document.createElement("div");
    ripple.className = "wave";

    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x > 0) {
      ripple.style.left = `${x - 10}px`;
      ripple.style.top = `${y - 10}px`;
    }
    ripple.style.animation = "ripple 1s ease-out forwards";

    parent.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);

    if (href.match("#")) {
      setTimeout(() => window.location.replace(href), 500);
      return;
    }

    setTimeout(() => window.open(href, "_blank"), 500);
  };

  return (
    <section className="splash">
      <h1>Anton Osland</h1>
      <ul className="link-container">
        {links.map((item, i) => (
          <li key={`link-${i}`}>
            <a
              className={item.icon ? "icon-link" : "name-link"}
              href={item.href}
              onClick={handleClick}
            >
              {item.icon ? item.icon : item.name}
            </a>
            <div id={`wave-${i}`} className="wave" />
          </li>
        ))}
      </ul>
    </section>
  );
}
