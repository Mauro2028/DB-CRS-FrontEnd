import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import SignIn from "./component/SignIn";
import Selection from "./component/Selection";
// import WorkerData from "./component/Worker-data";
// import DetailCard from "./component/Detail-Card";
// import WorkerCard from "./component/Worker-list";
import Register from "./component/Worker-register";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/SignIn">
							<SignIn />
						</Route>
						<Route exact path="/worker-register">
							<Register />
						</Route>
						<Route exact path="/Selection">
							<Selection />
						</Route>
						{/* <Route exact path="/Worker-Data">
							<Worker-Data />
						</Route>
						<Route exact path="/Worker-List">
							<WorkerCard />
						</Route>
						<Route exact path="Detail-Card"> */}
						{/* <DetailCard />
						</Route> */}
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
