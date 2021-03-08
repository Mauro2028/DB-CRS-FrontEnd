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
					<div className="bottons">
						<Link to="/Worker-list">
							<button className="btn btn-primary">Ver lista de personas</button>
						</Link>
						<Link to="/workers">
							<button className="btn btn-primary">Ver registros</button>
						</Link>
						<Link to="/worker-register">
							<button className="btn btn-primary">Registrar personas</button>
						</Link>
						<Link to="/Data-report">
							<button className="btn btn-primary">Ver reporte de datos</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Selection;
