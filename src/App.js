import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const location = useLocation();

  useEffect(() => {
    const html = document.querySelector("html");

    html.style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    html.style.scrollBehavior = "";
  }, [location.pathname]);

  const DefaultRoutes = () => {
    return (
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
      </div>
    );
  };

  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/*" element={<DefaultRoutes />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
