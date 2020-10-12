import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/index";
import Profiles from "./Components/Profiles/index";
import Cheatsheet from "./Components/Cheatsheet";
import About from "./Components/About";
import Instructions from "./Components/Instructions";
function App() {
  return (
    <Router>
      <div className={styles.App}>
        <switch>
          <Route path="/profiles" component={Profiles}/>
          <Route path="/Instructions" component={Instructions}/>
          <Route path="/cheatsheet" component={Cheatsheet}/>
          <Route path='/about' component={About} />
          <Route path="/" exact component={Landing}/>
        
        </switch>
      </div>
    </Router>
  );
}

export default App;
