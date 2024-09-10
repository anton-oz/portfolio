import ToggleSwitch from "./components/ToggleSwitch";
import { useState, useEffect } from "react";
import TextAnimation from "./components/TextAnimation";

function App() {
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
    <main
      id="snapContainer"
      className="bg-white text-black dark:bg-black dark:text-white"
    >
      <header className="flex flex-col justify-between items-center h-screen">
        {/* dark light mode toggle */}
        <div className="p-4">
          <ToggleSwitch isToggled={toggled} setIsToggled={setToggled} />
        </div>
        {/* name and links */}
        <div className="flex flex-col justify-center items-center space-y-2">
          {/* Make type writer animation for header */}
          {/* <h1 className="text-9xl">Anton</h1> */}
          <TextAnimation text={"Anton"} />
          <div className="flex space-x-8 text-xl">
            <a
              className="brutalButton border-black dark:border-white"
              download
              href="sample.pdf"
            >
              Resume
            </a>
            <a className="brutalButton" href="mailto:test@example.com">
              Contact
            </a>
          </div>
        </div>
        <div className="p-20"></div>
      </header>
      <section className="h-screen grid items-center place-items-center">
        <div>projects here</div>
      </section>
    </main>
  );
}

export default App;
