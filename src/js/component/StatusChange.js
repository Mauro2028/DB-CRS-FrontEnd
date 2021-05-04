/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

const StatusChange = props => {
	const initialState = {
		status: "",
		Observations: ""
	};

	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		}),
			console.log(datos);
	};

	const { id } = useParams();
	console.log(id);

	return (
		<div>
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<h2 style={{ marginLeft: "10px" }}>Estatus del prospecto</h2>
					<p
						style={{
							marginTop: "10px",
							fontSize: "28px",
							marginLeft: "10px",
							fontFamily: "sans-serif"
						}}>
						{" "}
						Por favor especifica el estatus para actualizarlo
					</p>
					<div className="form-group">
						<label
							style={{
								float: "left",
								width: "60%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Estatus: <br />
						</label>
						<select
							style={{
								float: "left",
								width: "60%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							className="form-control"
							name="status"
							onChange={handleChange}
							value={datos.status}>
							<option value="">Vacio</option>
							<option value="CITADO">CITADO</option>
							<option value="RECHAZADO ET">RECHAZADO ET</option>
							<option value="RECHADO GH">RECHAZADO GH</option>
							<option value="NO ACEPTO OFERTA">NO ACEPTO OFERTA</option>
							<option value="ABANDONO PROCESO">ABANDONO PROCESO</option>
							<option value="NO ASISTIO A ENTREVISTA">NO ASISTIO A ENTREVISTA</option>
							<option value="EN PROCESO">EN PROCESO</option>
							<option value="INGRESO">INGRESO</option>
							<option value="OTRO">OTRO</option>
						</select>
						<label
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Observaciones:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "60%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="Observations"
							onChange={handleChange}
							value={datos.Observations.toUpperCase()}
						/>
						<br />
						<button
							style={{
								width: "28%",
								padding: "8px 16px",
								// marginTop: "25px",
								// float: "left",
								marginRight: "100px",
								border: "3px solid #000",
								borderRadius: "5px",
								display: "block",
								fontSize: "23px",
								color: "#fff",
								backgroundColor: "#1883ba",
								marginLeft: "30px",
								fontFamily: "sans-serif",
								marginTop: "190px",
								marginBottom: "130px"
							}}
							className="btn"
							onClick={e => {
								e.preventDefault();
								console.log("enviamos formulario");

								actions.cambioStatus(datos, id);
								history.push("/Worker-list");
							}}>
							Actualizar
						</button>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatusChange;
