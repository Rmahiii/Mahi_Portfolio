import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));

function App() {
  const [load, updateLoad] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme;
    }

    if (typeof window.matchMedia === "function") {
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    return "dark";
  });

  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 650);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar
          theme={theme}
          onThemeToggle={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        />
        <ScrollToTop />
        <main>
          <Suspense fallback={<div className="route-loader" role="status">Loading portfolio...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
