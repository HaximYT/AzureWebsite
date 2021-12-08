import "./styles/globals.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Exploits from "./List";
import Functions from "./Functions";
import Scripts from "./Scripts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => {
            window.location.href = "./exploits";
          }} />
          <Route path="/exploits" component={Exploits} />
          <Route path="/functions" component={Functions} />
          <Route path="/scripts" component={Scripts} />
          <Route path="/" render={() => {
            window.location.href = "./exploits";
          }} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
