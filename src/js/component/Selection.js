import React from "react";
import { Link } from "react-router-dom";

const Selection = () => {
	return (
		<div className="containerPrincipal">
			<form>
				<div>
					<navbar />
				</div>
				<div
					className="containerSecundario"
					style={{
						display: "inline",
						alignItems: "center"
					}}>
					<div className="parrafo">
						<p
							style={{
								fontSize: "25px",
								marginLeft: "10px",
								fontFamily: "inherit"
							}}>
							{/* Bienvenido a la aplicaion de captacion, reclutamiento y seleccion.
							<br /> */}
							Que deseas hacer?
						</p>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							marginTop: "100px",
							marginBottom: "280px"
						}}
						className=" buttons">
						<Link to="/Worker-list">
							<button
								style={{
									padding: "10px",
									fontweight: "700",
									fontsize: "30px",
									color: "#ffffff",
									backgroundColor: "#1883ba",
									borderRadius: "6px",
									border: "2px solid #0016b0",
									display: "display-flex",
									justifyContent: "space-around",
									width: "200px",
									height: "100px"
								}}
								className="btn">
								Ver lista de prospectos
							</button>
						</Link>
						<Link to="/Change">
							<button
								style={{
									padding: "10px",
									fontweight: "700",
									fontsize: "30px",
									color: "#ffffff",
									backgroundColor: "#1883ba",
									borderRadius: "6px",
									border: "2px solid #0016b0",
									display: "display-flex",
									justifyContent: "space-around",
									width: "200px",
									height: "100px"
								}}
								className="btn">
								Actualizar datos de prospectos
							</button>
						</Link>
						<Link to="/workers">
							<button
								style={{
									padding: "10px",
									fontweight: "600",
									fontsize: "20px",
									color: "#ffffff",
									backgroundColor: "#1883ba",
									borderRadius: "6px",
									border: "2px solid #0016b0",
									display: "flex",
									justifyContent: "space-around",
									width: "200px",
									height: "100px",
									alignItems: "center"
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
									backgroundColor: "#1883ba",
									borderRadius: "6px",
									border: "2px solid #0016b0",
									display: "flex",
									justifyContent: "space-around",
									width: "200px",
									height: "100px",
									alignItems: "center"
								}}
								className="btn btn-primary">
								Registrar prospectos
							</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Selection;
