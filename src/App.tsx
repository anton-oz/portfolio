import { useEffect } from "react";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

export default function App() {
  useEffect(() => {
    // for mobile top bar coloring
    const themeColor = getComputedStyle(document.body)
      .getPropertyValue("--status-bar")
      .trim();

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", themeColor);
    }
  }, []);
  return (
    <>
      <Nav />
      <main id="snapContainer" className="scroll-smooth">
        <Projects />
      </main>
      <footer></footer>
    </>
  );
}
