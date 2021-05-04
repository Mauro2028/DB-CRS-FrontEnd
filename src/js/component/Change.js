/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Change = props => {
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
					<h2 style={{ marginLeft: "10px" }}>Datos del prospecto</h2>
					<p
						style={{
							marginTop: "10px",
							fontSize: "28px",
							marginLeft: "10px",
							fontFamily: "sans-serif"
						}}>
						{" "}
						Por favor especifica los datos para actualizarlos
					</p>
					<div className="form-group">
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
							Vacante{" "}
						</label>
						<br />

						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="vacant"
							onChange={handleChange}
							value={datos.vacant.toUpperCase()}
						/>
						<br />
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
							Estatus: <br />
						</label>
						<select
							style={{
								float: "left",
								width: "70%",
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
						<label
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "23px",
								fontFamily: "sans-serif"
							}}>
							Gerencia:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							className="form-control"
							name="managment"
							onChange={handleChange}
							value={datos.managment}>
							<option value="">Vacio</option>
							<option value="Administracion">ADMINISTRACION</option>
							<option value="Gerencia General">GERENCIA GENERAL</option>
							<option value="Gestion Humana">GESTION HUMANA </option>
							<option value="Infraestructura">INFRAESTRUCTURA</option>
							<option value="Mercadeo y Ventas"> MERCADEO Y VENTAS </option>
							<option value="Servicio al Cliente">SERVICIO AL CLIENTE</option>
							<option value="Tecnologia Funcional">TECNOLOGIA FUNCIONAL</option>
							<option value="Tecnologia Tecnica">TECNOLOGIA TECNICA</option>
							<option value="Plataforma">PLATAFORMA</option>
						</select>
						<br />
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
							Fecha de cita a entrevista :{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							type="text"
							className="form-control"
							name="interview_date"
							onChange={handleChange}
							value={datos.interview_date}
						/>
						<br />
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
							Cargo actual del candidato:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Empresa:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Sector:
						</label>
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
						<br />
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
							Sueldo en moneda extranjera:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Sueldo basico:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Sueldo variable:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							cesta ticket:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Dias de utilidades:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Bono vacacional:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Disfrute de vacaciones:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Factor:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Compensacion anual mixta:{" "}
						</label>
						<br />
						<input
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							type="number"
							className="form-control"
							name="Estimated_annual_package"
							onChange={handleChange}
							value={(datos.Estimated_annual_package = eap)}
						/>
						<br />

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
							Bono de produccion:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Bono de transporte:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Caja de ahorro:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								fontSize: "17px"
							}}>
							Pago de estacionamiento:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
								borderColor: "black"
							}}
							className="form-control"
							name="parking_payment"
							value={datos.parking_payment}
							onChange={handleChange}>
							<option value="No">No</option>
							<option value="X">Si</option>
						</select>
						<br />

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
							H.C.M 100% Emp./Fmlia:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							H.C.M parcial Emp./Fmlia:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Seguro de Vehículo:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Seguro de Vida:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Comedor:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif"
							}}>
							Subsidios alimenticios:
						</label>
						<br />
						<select
							style={{
								float: "left",
								width: "70%",
								paddingRight: "24px",
								marginLeft: "20px",
								color: "black",
								fontSize: "25px",
								fontFamily: "sans-serif",
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
								width: "70%",
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
						<br />
						<button
							style={{
								width: "28%",
								padding: "8px 16px",
								marginTop: "25px",
								float: "right",
								marginRight: "10px",
								border: "3px solid #000",
								borderRadius: "5px",
								display: "block",
								fontSize: "23px",
								color: "#fff",
								backgroundColor: "#1883ba",
								marginLeft: "30px",
								fontFamily: "sans-serif",
								marginBottom: "130px"
							}}
							className="btn"
							onClick={e => {
								e.preventDefault();
								console.log("enviamos formulario");

								actions.cambioWorker(datos, id);
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

export default Change;
