import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarOC from "./components/NavbarOC";
import FooterOC from "./components/FooterOC";
import ReactDOM from "react-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<div className="App">
			<Router>
				<NavbarOC />
				<Switch>
					<Route exact path="/" component={About} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
				</Switch>
				<FooterOC />
			</Router>
		</div>
	);
}

export default App;
