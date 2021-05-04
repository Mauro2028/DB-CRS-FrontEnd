/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

const StatusChange = props => {
	const initialState = {
		status: "",
		managment: "",
		vacant: "",
		interview_date: "",
		actual_charge: "",
		company: "",
		sector: "",
		coin: "",
		basic_salary: "",
		variable_salary: "",
		cesta_ticket: "",
		Profit_Days: "",
		vacations: "",
		Vacation_Bonus: "",
		Factor: null,
		Estimated_annual_package: null,
		Observations: "",
		Production_bonus: "",
		Transport_bonus: "",
		Savings_Bank: "",
		parking_payment: "",
		full_HCM_Emp_Family: "",
		partial_HCM_Emp_Family: "",
		Vehicle_insurance: "",
		life_insurance: "",
		dinning_room: "",
		food_bags: ""
	};

	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	let pdm = datos.Profit_Days / 30;
	let vbm = datos.Vacation_Bonus / 30;
	let sum = (12 + pdm + vbm).toFixed(2);
	let cta = parseInt(datos.cesta_ticket * 12, 10);
	let sva = parseInt(datos.variable_salary * 12, 10);
	let eap = parseInt(datos.basic_salary * datos.Factor + cta + sva);
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
								marginTop: "100px",
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
