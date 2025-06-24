import { useEffect } from "react";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Splash from "./components/splash/Splash";

export default function App() {
  useEffect(() => {
    const themeColor = getComputedStyle(document.body)
      .getPropertyValue("--status-bar")
      .trim();

    console.log(themeColor);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", themeColor);
    }
  }, []);
  return (
    <>
      {/* TODO: only render nav on mobile */}
      {true || <Nav />}

      <main id="snapContainer" className="scroll-smooth">
        <Splash />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
}
