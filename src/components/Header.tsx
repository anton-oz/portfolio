import TextAnimation from "./TextAnimation";
import ToggleSwitch from "./ToggleSwitch";
import { useState, useEffect } from "react";
import { ChevronDown, Download, Mail } from "lucide-react";

export default function Header() {
  const storedState = localStorage.getItem("darkmode");
  const toggleState = storedState ? JSON.parse(storedState) : false;
  const [toggled, setToggled] = useState(toggleState);

  const bodyEl = document.querySelector("body");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setToggled(true);
    }
  }, []);

  useEffect(() => {
    if (toggled) {
      localStorage.setItem("darkmode", "true");
      bodyEl?.classList.add("dark");
    } else {
      localStorage.setItem("darkmode", "false");
      bodyEl?.classList.remove("dark");
    }
  }, [toggled]);

  return (
    <header className="flex flex-col justify-between items-center h-screen">
      <div className="p-4 animate-fadeIn">
        <ToggleSwitch isToggled={toggled} setIsToggled={setToggled} />
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <TextAnimation text={"Anton"} />
        <div className="flex flex-wrap items-center justify-center gap-7 text-xl animate-fadeIn">
          <a
            className="brutalButton flex items-center gap-1"
            download
            href="sample.pdf"
          >
            Resume
            <Download className="h-6" />
          </a>
          <a
            className="brutalButton flex items-center gap-1"
            href="mailto:test@example.com"
          >
            Contact
            <Mail className="h-6" />
          </a>
          <a
            className="brutalButton flex items-center gap-1"
            href="https://github.com/anton-oz"
          >
            Github
            <img
              className="h-6"
              src={toggled ? "/github-mark-white.svg" : "/github-mark.svg"}
            />
          </a>
        </div>
      </div>
      <div className="p-20">
        <a
          href="#projects"
          className="flex flex-col justify-center items-center animate-fadeIn hover:scale-110 transition-all duration-150"
        >
          <ChevronDown className="w-20 h-20 animate-bounce" strokeWidth={1} />
        </a>
      </div>
    </header>
  );
}
