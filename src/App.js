import React from "react";
import { HashRouter, Route } from "react-router-dom"; //Can also use HashRouter(The only difference is the/#/ that appears on the url)
//Browser router is inconvenient in terms of setting it up on github pages.
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
