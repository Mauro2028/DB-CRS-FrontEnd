import React from "react";
import softech from "../../img/softech.jpeg";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<Link to="/selection">
				<img src={softech} width="250px" height="80px" marginleft="5px" />
			</Link>

			<h2 style={{ marginLeft: "10px", fontSize: "38px", fontFamily: "sans-serif" }}>
				Base de datos captación, reclutamiento y selección.
			</h2>
		</nav>
	);
};
