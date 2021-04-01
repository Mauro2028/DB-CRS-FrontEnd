/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import props from "prop-types";

const Change = props => {
	const initialState = {
		// status: "",
		// managment: "",
		vacant: ""
		// interview_date: "",
		// actual_charge: "",
		// company: "",
		// sector: "",
		// coin: 0,
		// basic_salary: 0,
		// variable_salary: 0,
		// cesta_ticket: 0,
		// Profit_Days: 0,
		// vacations: 0,
		// Vacation_Bonus: 0,
		// Factor: null,
		// Estimated_annual_package: null
		// Observations: "",
		// Production_bonus: "No",
		// Transport_bonus: "No",
		// Savings_Bank: "No",
		// parking_payment: "No",
		// full_HCM_Emp_Family: "No",
		// partial_HCM_Emp_Family: "No",
		// Vehicle_insurance: "No",
		// life_insurance: "No",
		// dinning_room: "No",
		// food_bags: "No"
	};
	const url = "http://localhost:5000/change/";
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	// let pdm = datos.Profit_Days / 30;
	// let vbm = datos.Vacation_Bonus / 30;
	// let sum = (12 + pdm + vbm).toFixed(2);
	// let cta = parseInt(datos.cesta_ticket * 12, 10);
	// let sva = parseInt(datos.variable_salary * 12, 10);
	// let eap = parseInt(datos.basic_salary * datos.Factor + cta + sva);
	let history = useHistory();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		}),
			console.log(datos);
	};

	// const handleSubmit = e => {
	// 	const id = props.id;
	// 	Axios.put(url + id, datos)
	// 		.then(res => {
	// 			console.log(res.datos);
	// 			const mydata = [...datos, res.datos];
	// 			setDatos[mydata];
	// 		})
	// 		.catch(error => console.log(error));
	// };

	useEffect(({ match }) => {
		const id = match.params.id;
		Axios.get(url + id)
			.then(res => {
				console.log(res.datos);
				setDatos(res.datos);
			})
			.catch(setError(true));
	});
	// const Detail = ({ match }) => (
		//   <div>
		//     <h2>Detalle</h2>
		//     <p>Me han pasado la id {match.params.id} en la url</p>
		//     <Link to='/'>Volver a la home</Link>
		//   </div>
		// )
	// actions.cambioId();
	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	console.log("enviamos formulario");
	// 	setError(false);
	// 	actions.cambioWorker(datos);
	// 	history.push("/Worker-list");
	// };

	return (
		<div>
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<h2 style={{ marginLeft: "10px" }}>Datos del trabajador</h2>
					<p
						style={{
							marginTop: "10px",
							fontSize: "25px",
							marginLeft: "10px",
							fontFamily: "inherit"
						}}>
						{" "}
						Por favor especifica los datos para registrarlos
					</p>
					<div className="form-group">
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Vacante{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="vacant"
							onChange={handleChange}
							value={datos.vacant.toUpperCase()}
						/>
						<br />
						{/* 
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Estatus: <br />
						</label>
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="status"
							onChange={handleChange}
							value={datos.status}>
							<option value="">Vacio</option>
							<option value="CITADO A ENTREVISTA">Citado a entrevista</option>
							<option value="EL AREA NO LO QUISO EVALUAR">El area no lo quiso evaluar</option>
							<option value="ELEGIBLE A ENTREVISTA TECNICA">Elegible entrevista tecnica</option>
							<option value="EN PROCESO">En proceso</option>
							<option value="NO ACEPTO OFERTA LABORAL">No acepto oferta laboral</option>
							<option value="NO ASISTIO A ENTREVISTA LABORAL">No asistio a entrevista laboral</option>
							<option value="NO ELEGIBLE A ENTREVISTA LABORAL">No elegible entrevista laboral</option>
							<option value="NO ELEGIBLE A ENTREVISTA TECNICA">No elegible entrevista tecnica</option>
							<option value="NO ELEGIBLE A ENTREVISTA GH">No elegible entrevista GH</option>
							<option value="NO INTERESADO">No interesado</option>
							<option value="NO RESPONDE CONTACTO PARA ENTREVISTA GH">
								No responde contacto para entrevista GH
							</option>
							<option value="NO RESPONDE CONTACTO PARA ENTREVISTA TECNICA">
								No responde contacto para entrevista tecnica
							</option>
							<option value="POR AGENDAR ENTREVISTA">Por agendar entrevsita</option>
							<option value="PRE-EMPLEO">Pre-empleo</option>
						</select>

						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Fecha de cita a entrevista :{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="interview_date"
							onChange={handleChange}
							value={datos.interview_date}
						/>
						<br />  */}
						{/* <label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Cargo actual del candidato:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="actual_charge"
							onChange={handleChange}
							value={datos.actual_charge.toUpperCase()}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Empresa:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="company"
							onChange={handleChange}
							value={datos.company.toUpperCase()}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Sector:
						</label>
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="sector"
							value={datos.sector}
							onChange={handleChange}>
							<option value="">Vacio</option>
							<option value="OTRO">Otro</option>
							<option value="FINANCIERO">Financiero</option>
							<option value="TECNOLOGICO">Tecnologico</option>
							<option value="CONSULTORIA">Consultoria</option>
							<option value="EDUCATIVO">Educativo</option>
							<option value="SERVICIOS">Servicios</option>
							<option value="MANUFACTURA">Manufactura</option>
							<option value="SALUD">Salud</option>
							<option value="TELECOMUNICACIONES">Telecomunicaciones</option>
							<option value="ALIMENTO">Alimentos</option>
						</select>
						<br /> */}
						{/* <label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Sueldo en moneda extranjera:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="coin"
							onChange={handleChange}
							value={datos.coin}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Sueldo basico:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="basic_salary"
							onChange={handleChange}
							value={datos.basic_salary}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Sueldo variable:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="variable_salary"
							onChange={handleChange}
							value={datos.variable_salary}
						/>

						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							cesta ticket:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="cesta_ticket"
							onChange={handleChange}
							value={datos.cesta_ticket}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Dias de utilidades:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="Profit_Days"
							onChange={handleChange}
							value={datos.Profit_Days}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Bono vacacional:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="Vacation_Bonus"
							onChange={handleChange}
							value={datos.Vacation_Bonus}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Disfrute de vacaciones:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="vacations"
							onChange={handleChange}
							value={datos.vacations}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Factor:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="Factor"
							onChange={handleChange}
							value={(datos.Factor = sum).toLocaleString("es")}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Compensacion anual mixta:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="Estimated_annual_package"
							onChange={handleChange}
							value={(datos.Estimated_annual_package = eap)}
						/>
						<br /> */}

						{/* <label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Bono de produccion:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="Production_bonus"
							value={datos.Production_bonus}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Bono de transporte:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="Transport_bonus"
							value={datos.Transport_bonus}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Caja de ahorro:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="Savings_Bank"
							value={datos.Savings_Bank}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Pago de estacionamiento:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="parking_payment"
							value={datos.parking_payment}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Comisiones por ventas::
						</label>
						<br />

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							H.C.M 100% Emp./Fmlia:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="full_HCM_Emp_Family"
							value={datos.full_HCM_Emp_Family}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<br />

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							H.C.M parcial Emp./Fmlia:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="partial_HCM_Emp_Family"
							value={datos.partial_HCM_Emp_Family}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<br />

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Seguro de Vehículo:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="Vehicle_insurance"
							value={datos.Vehicle_insurance}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Seguro de Vida:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="life_insurance"
							value={datos.life_insurance}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>
						<br />

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Comedor:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="dinning_room"
							value={datos.dinning_room}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>
						<br />

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Subsidios alimenticios:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							className="form-control"
							name="food_bags"
							value={datos.food_bags}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "17px"
							}}>
							Observaciones:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "80%",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="Observations"
							onChange={handleChange}
							value={datos.Observations.toUpperCase()}
						/> */}
						<br />
						<br />
						<button
							style={{
								float: "right",
								width: "250px",
								marginTop: "40px",
								color: "#ffffff",
								backgroundColor: "#1883ba",
								marginRight: "70px",
								marginBottom: "50px"
							}}
							className="btn"
							onClick={e => {
								e.preventDefault();
								console.log("enviamos formulario");
								setError(false);
								actions.cambioWorker(datos);
								history
									.push("/Worker-list")

									.catch(error => console.log(error));
							}}>
							Registrar
						</button>
						<br />
						{error ? <div>soy un error, todos los campos deben ser validos</div> : 0}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Change;
