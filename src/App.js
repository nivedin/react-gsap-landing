import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Approach from "./pages/approach";
import CaseStudies from "./pages/caseStudies";
import Services from "./pages/services";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Navigation from "./components/Navigation";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimension.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", 0, { css: { visibility: "visible" } });

    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <>
      <Header dimension={dimension} />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/approach" component={Approach} />
          <Route exact path="/caseStudies" component={CaseStudies} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </div>
      <Navigation />
    </>
  );
}

export default App;
