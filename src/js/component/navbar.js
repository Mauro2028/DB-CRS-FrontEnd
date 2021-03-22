import React from "react";
import softech from "../../img/softech.jpeg";
// import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<img src={softech} width="200px" height="80px" marginLeft="5px" />

			<h2 style={{ marginLeft: "10px" }}>Base de datos captacion, reclutamiento y seleccion</h2>
		</nav>
	);
};
