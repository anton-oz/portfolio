import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Splash from "./components/splash/Splash";

export default function App() {
  return (
    <>
      {/* TODO: only render nav on mobile */}
      {true || <Nav />}

      <main id="snapContainer" className="scroll-smooth">
        <Splash />
        <Projects />
      </main>
      <footer>footer stuff</footer>
    </>
  );
}
