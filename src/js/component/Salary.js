import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes, { object } from "prop-types";
import { SalaryCard } from "./SalaryCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

const Workers = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const [filter, setFilter] = useState("");
	const [bailar, setBailar] = useState("");
	const [puesto, setPuesto] = useState("");
	const [fecha, setFecha] = useState("");
	const [gerencia, setGerencia] = useState("");
	const [prom, setProm] = useState(0);

	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<div>
					<input
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6",
							marginBottom: "10px"
						}}
						type="text"
						placeholder="vacante"
						onChange={e => setBailar({ name: e.target.value.toUpperCase() })}
						value={bailar.name}
					/>
					<input
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
						}}
						type="text"
						placeholder="Cargo actual"
						onChange={e => setPuesto({ name: e.target.value.toUpperCase() })}
						value={puesto.name}
					/>
					<select
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
						}}
						onChange={e => setGerencia({ name: e.target.value })}
						value={gerencia.name}>
						<option value="">Vacio</option>
						<option value="ADMINISTRACION">Administracion</option>
						<option value="GERENCIA GENERAL">Generencia General</option>
						<option value="GESTION HUMANA">Generencia General</option>
						<option value="INFRAESTRUCTURA">Generencia General</option>
						<option value="MERCADEO Y VENTAS">Mercadeo y ventas</option>
						<option value="SERVICIO AL CLIENTE">Servicio al cliente</option>
						<option value="TECNOLOGIA FUNCIONAL">Tecnologia funcional</option>
						<option value="TECNOLOGIA TECNICA">Tecnologia tecnica</option>
						<option value="PLATAFORMA">Plataforma</option>
					</select>

					<select
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
						}}
						onChange={e => setFilter({ name: e.target.value })}
						value={filter.name}>
						<option value="">Sector</option>
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

					<select
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
						}}
						onChange={e => setFecha({ name: e.target.value })}
						value={fecha.name}>
						<option value="">Mes de inicio</option>
						<option value="ENERO">Enero</option>
						<option value="FEBRERO">Febrero</option>
						<option value="MARZO">Marzo</option>
						<option value="ABRIL">Abril</option>
						<option value="MAYO">Mayo</option>
						<option value="JUNIO">Junio</option>
						<option value="JULIO">Julio</option>
						<option value="AGOSTO">Agosto</option>
						<option value="SEPTIEMBRE">Septiembre</option>
						<option value="OCTUBRE">Octubre</option>
						<option value="NOVIEMBRE">Noviembre</option>
						<option value="DICIEMBRE">Diciembre</option>
					</select>
				</div>
				<div id="workers" key={"Lista"}>
					<table
						className="table"
						style={{
							width: "100%",
							textalign: "left",
							borderCollapse: "collapse",
							fontFamily: "sans-serif",
							boxSizing: "border-box",
							captionSide: "top",
							border: "1px solid #000"
						}}>
						<thead>
							<tr>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										fontFamily: "sans-serif",
										background: "#eee"
									}}>
									ID
								</th>

								<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>
									Fecha de inicio
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										fontFamily: "sans-serif",
										background: "#eee"
									}}>
									Consultor
								</th>
								<th
									style={{
										padding: "0.3em",
										fontFamily: "sans-serif",
										border: "1px solid #000",
										width: "25%"
									}}>
									Candidato
								</th>
								{/* <th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										background: "#eee"
									}}>
									Cedula
								</th> */}
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%"
									}}>
									Estatus
								</th>
								{/* <th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									N0 de telefono
								</th> */}
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%"
									}}>
									Email
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "45%",
										background: "#eee"
									}}>
									Fuente de captacion
								</th>

								<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>Gerencia</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										background: "#eee"
									}}>
									Vacante
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "45%" }}>
									Fecha de entrevista
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Cargo actual
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>Empresa</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										background: "#eee"
									}}>
									Sector
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "55%" }}>
									Moneda extranjera
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Sueldo basico
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
									Sueldo Variable
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Cesta Ticket
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
									Dias de utilidades
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Disfrute de vacaciones
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%"
									}}>
									Bono de vacaciones
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Factor
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
									Paquete anual estimado
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Bono de produccion
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
									Bono de transporte
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Caja de ahorro
								</th>
								<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
									Pago de estacionamiento
								</th>

								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									H.C.M 100% Emp./Fmlia
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%"
									}}>
									H.C.M parcial Emp./Fmlia
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Seguro de Vehículo
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%"
									}}>
									Seguro de Vida
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Comedor
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%"
									}}>
									Subsidios alimenticios
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										background: "#eee"
									}}>
									Observaciones
								</th>
							</tr>
						</thead>
						<tbody
							style={{
								bordertop: "1px solid #000",
								borderBottom: "1px solid #000"
							}}>
							{store.workers
								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant.startsWith(bailar.name) ||
										worker.init_date == fecha.name ||
										worker.managment == gerencia.name ||
										worker.actual_charge.startsWith(puesto.name)
								)
								.map(
									worker => (
										console.log(),
										(
											<tr key={worker.id}>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderRight: " 1px solid #000",
														background: "#eee",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														padding: "0.3em",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.id}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.init_date}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.Consultor.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.candidate.toUpperCase()}
												</td>

												{/* <td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.cedula}
												</td> */}

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.status}
												</td>

												{/* <td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.phone_number}
												</td> */}

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.email}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.catchment_source.toUpperCase()}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.managment.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.vacant.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.interview_date}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.actual_charge.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.company.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.sector}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.coin)} $
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.basic_salary)}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.variable_salary)}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														background: "#eee",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.cesta_ticket)}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Profit_Days}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.vacations}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Vacation_Bonus}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														captionSide: "bottom",
														background: "#eee",
														fontFamily: "sans-serif",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{new Intl.NumberFormat("es-ES").format(worker.Factor)} meses
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(
														worker.Estimated_annual_package
													)}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Production_bonus}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Transport_bonus}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Savings_Bank}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.parking_payment}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.full_HCM_Emp_Family}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.partial_HCM_Emp_Family}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Vehicle_insurance}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.life_insurance}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.dinning_room}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.food_bags}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",

														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.Observations.toUpperCase()}
												</td>
											</tr>
										)
									)
								)}
						</tbody>
					</table>
				</div>

				<div>
					<label
						style={{
							float: "center",
							width: "30%",
							fontFamily: "sans-serif",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6",
							fontSize: "23px"
							// marginBottom: "100px"
						}}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Total de prospectos:
						{store.workers

							.filter(
								worker =>
									worker.sector == filter.name ||
									worker.vacant.startsWith(bailar.name) ||
									worker.init_date == fecha.name ||
									worker.managment == gerencia.name ||
									worker.actual_charge.startsWith(puesto.name)
							)
							.reduce((prevValue, worker) => prevValue + 1, 0)}
					</label>
				</div>

				<button
					style={{
						float: "center",
						width: "15%",
						fontSize: "23px",
						marginLeft: "20px",
						fontFamily: "sans-serif",
						backgroundColor: "lightgray",
						marginBottom: "10px"
					}}
					type="number"
					placeholder="promediar"
					onClick={e =>
						setProm(
							store.workers

								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant.startsWith(bailar.name) ||
										worker.init_date == fecha.name ||
										worker.managment == gerencia.name ||
										worker.actual_charge.startsWith(puesto.name)
								)
								.reduce((prevValue, worker) => prevValue + 1, 0)
						)
					}
					value={prom.value}>
					Promediar
				</button>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						fontFamily: "sans-serif",
						backgroundColor: "#f6f6f6",
						fontSize: "23px"
					}}
					id="workers"
					key={"coin"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Sueldo en moneda extranjera:
					{store.workers
						.map(worker => worker)
						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant.startsWith(bailar.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

						.reduce((prevValue, worker) => prevValue + worker.coin / prom, 0)
						.toLocaleString("es")}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						fontFamily: "sans-serif",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "23px"
					}}
					id="workers"
					key={"Basic_salary"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Salario basico:
					{store.workers

						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant.startsWith(bailar.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

						.reduce((prevValue, worker) => prevValue + worker.basic_salary / prom, 0)
						.toLocaleString("es")}
				</div>

				<div
					style={{
						float: "center",
						width: "30%",
						fontFamily: "sans-serif",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "23px"
					}}
					id="workers"
					key={"Variable_salary"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Salario Variable:
					{store.workers
						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant.startsWith(bailar.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

						.reduce((prevValue, worker) => prevValue + worker.variable_salary / prom, 0)
						.toLocaleString("es")}
				</div>

				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						fontFamily: "sans-serif",
						backgroundColor: "#f6f6f6",
						fontSize: "23px"
					}}
					id="workers"
					key={"Cesta_ticket"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Cesta ticket:
					{store.workers
						.filter(
							worker =>
								worker.sector === filter.name ||
								worker.vacant.startsWith(bailar.name) ||
								worker.init_date === fecha.name ||
								worker.managment === gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

						.reduce((prevValue, worker) => (prevValue + worker.cesta_ticket) / prom, 0)

						.toLocaleString("es")}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						fontFamily: "sans-serif",
						backgroundColor: "#f6f6f6",
						fontSize: "23px"
					}}
					id="workers"
					key={"Factor"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Factor:
					{store.workers
						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant.startsWith(bailar.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)
						.reduce((prevValue, worker) => prevValue + parseInt(worker.Factor) / prom, 0)
						.toFixed(2)
						.toLocaleString("es")}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "23px",
						fontFamily: "sans-serif",
						marginBottom: "100px"
					}}
					id="workers"
					key={"Estimated_annual_package"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Paquete anual estimado:
					{store.workers

						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant.startsWith(bailar.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

						.reduce((prevValue, worker) => prevValue + parseInt(worker.Estimated_annual_package) / prom, 0)
						.toLocaleString("es")}
				</div>
				<Modal
					show={state.showModal}
					onClose={() => setState({ showModal: false, idToDelete: null })}
					idToDelete={state.idToDelete}
				/>
			</div>
		</div>
	);
};

export default Workers;
