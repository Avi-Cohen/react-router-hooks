import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
/*
useParams
useHistory
useLocation
useRouteMatch
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user/:first/:last" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
