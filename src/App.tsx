import Projects from "./components/Projects";
import Header from "./components/Header";
export default function App() {
  return (
    <main
      id="snapContainer"
      className="bg-white text-black dark:bg-black dark:text-white scroll-smooth"
    >
      <Header />
      <Projects />
    </main>
  );
}
