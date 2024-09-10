import TextAnimation from "./TextAnimation";
import ToggleSwitch from "./ToggleSwitch";
import { useState, useEffect } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";

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
      <div className="p-4">
        <ToggleSwitch isToggled={toggled} setIsToggled={setToggled} />
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <TextAnimation text={"Anton"} />
        <div className="flex space-x-8 text-xl">
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
        </div>
      </div>
      <div className="p-20">
        <a href="#projects">
          <ArrowDown className="w-20 h-20" strokeWidth={1} />
        </a>
      </div>
    </header>
  );
}
