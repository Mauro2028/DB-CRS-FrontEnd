import React from "react";
import { Link } from "react-router-dom";

const Selection = () => {
	return (
		<div className="containerPrincipal">
			<form>
				<div>
					<navbar />
				</div>
				<div className="containerSecundario">
					<div className="parrafo">
						<p>
							Bienvenido a la aplicaion de captacion, reclutamiento y seleccion.
							<br />
							Que deseas hacer?
						</p>
					</div>
					<div
						style={{
							display: "block"
						}}
						className=" bottons">
						<Link to="/Worker-list">
							<button
								style={{
									padding: "10px",
									fontweight: "600",
									fontsize: "20px",
									color: "#ffffff",
									backgroundcolor: "#1883ba",
									borderradius: "6px",
									border: "2px solid #0016b0"
								}}
								className="btn btn-primary">
								Ver lista de personas
							</button>
						</Link>
						<Link to="/workers">
							<button
								style={{
									padding: "10px",
									fontweight: "600",
									fontsize: "20px",
									color: "#ffffff",
									backgroundcolor: "#1883ba",
									borderradius: "6px",
									border: "2px solid #0016b0"
								}}
								className="btn btn-primary">
								Ver registros
							</button>
						</Link>
						<Link to="/worker-register">
							<button
								style={{
									padding: "10px",
									fontweight: "600",
									fontsize: "20px",
									color: "#ffffff",
									backgroundcolor: "#1883ba",
									borderradius: "6px",
									border: "2px solid #0016b0"
								}}
								className="btn btn-primary">
								Registrar personas
							</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Selection;
