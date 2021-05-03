import React, { useState, useEffect, useContext } from "react";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";
import Props from "prop-types";

const WorkersList = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const [prom, setProm] = useState(0);
	const [promvs, setPromvs] = useState(0);
	const [promcs, setPromcs] = useState(0);
	const [promf, setPromf] = useState(0);
	const [promap, setPromap] = useState(0);
	const [promcn, setPromcn] = useState(0);

	const Update = (worker, id) => {
		history.push("/change/" + worker.id);
		console.log(id);
	};

	// const id = () => {
	// 	store.workers.map(worker => (id = worker.id));
	// };

	// debugger;
	return (
		<div>
			<div
				className="container"
				style={{
					display: "table-caption",
					justifyItems: "center"
				}}>
				<div id="workers" key={"Lista"}>
					<table
						className="table"
						style={{
							width: "100%",
							textalign: "left",
							borderCollapse: "collapse",
							boxSizing: "border-box",
							marginLeft: "10px",
							captionSide: "top",
							fontFamily: "sans-serif",
							border: "1px solid #000"
						}}>
						<div id="workers" key={"Lista"}>
							<thead>
								<tr>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid white",
											width: "25%",

											borderRight: "1px solid #000",
											borderBottom: "1px solid #000",
											fontSize: "23px"
										}}
									/>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											borderLeft: "#000",
											ffontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										ID
									</th>

									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											backgroundColor: "#3B83BD",
											fontSize: "23px"
										}}>
										Fecha de inicio
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Consultor
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Candidato
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Cedula
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Estatus
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Numero de telefono
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Email
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "45%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Fuente de captacion
									</th>

									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Gerencia
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Vacante
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "45%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Fecha de entrevista
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Cargo actual
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Empresa
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Sector
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "55%",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Moneda extranjera
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Sueldo basico
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Sueldo variable
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Cesta ticket
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Dias de utilidades
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Disfrute de vacaciones
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Bono de vacaciones
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Factor
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											color: "white",
											width: "35%",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Paquete anual estimado
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Bono de produccion
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Bono de transporte
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Caja de ahorro
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Pago de estacionamiento
									</th>

									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										H.C.M 100% Emp./Fmlia
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										H.C.M parcial Emp./Fmlia
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Seguro de Vehículo
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											color: "white",
											width: "35%",
											fontSize: "27px",
											backgroundColor: "#3B83BD"
										}}>
										Seguro de Vida
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "27px",
											color: "white",
											backgroundColor: "#3B83BD"
										}}>
										Comedor
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",

											fontSize: "27px",
											backgroundColor: "#3b83bd"
										}}>
										Subsidios alimenticios
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											color: "white",
											fontSize: "27px",
											backgroundColor: "#3b83bd"
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
								{store.workers.map(
									worker => (
										console.log(),
										(
											<tr key={worker.id}>
												<td
													style={{
														padding: "0.3em",

														borderCollapse: "collapse",
														padding: "0.3em",
														captionSide: "bottom",
														borderBottom: "1px solid #000",
														fontFamily: "sans-serif",
														display: "flex",
														alignContent: "center",
														borderRight: " 1px solid white"
													}}>
													<button
														style={{
															width: "100%",
															padding: "8px 16px",
															marginTop: "50px",
															border: "1px solid #000",
															borderRadius: "5px",
															display: "flex",
															color: "#fff",
															backgroundColor: "#1883ba",
															alignItems: "center",
															height: "60%",
															alignContent: "center",
															marginBottom: "30px",
															fontSize: "19px"
														}}
														className="btn"
														onClick={() => {
															history.push("/change/" + worker.id),
																console.log(worker.id);
														}}>
														Actualizar
													</button>
													<button
														style={{
															width: "100%",
															padding: "8px 16px",
															marginTop: "50px",
															border: "1px solid #000",
															borderRadius: "5px",
															display: "flex",
															color: "#fff",
															backgroundColor: "red",
															alignItems: "center",
															height: "60%",
															alignContent: "center",
															marginBottom: "30px",
															marginLeft: "10px",
															fontSize: "19px"
														}}
														className="btn"
														onClick={() => {
															actions.borrarWorker(worker.id);
															console.log(worker.id);
														}}>
														Borrar
													</button>
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderRight: " 1px solid #000",
														background: "#eee",
														borderCollapse: "collapse",
														padding: "0.3em",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
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
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
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
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
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
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.candidate.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.cedula}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.status.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.phone_number}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
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
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.catchment_source.toUpperCase()}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
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
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
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
														fontSize: "19px",
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
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.actual_charge.toUpperCase()}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
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
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.sector}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.coin)}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.basic_salary)}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
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
														captionSide: "bottom",
														background: "#eee",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-ES").format(worker.cesta_ticket)}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
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
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.vacations}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",

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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														borderRight: " 1px solid #000",
														fontSize: "19px"
													}}
													className="text small text-truncate">
													{worker.food_bags}
												</td>
												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontSize: "19px",

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
						</div>
					</table>
					<div
						style={{
							float: "center",
							width: "50%",
							fontFamily: "sans-serif",
							marginLeft: "10px",
							backgroundColor: "#f6f6f6",
							fontSize: "25px",
							marginTop: "20px"
						}}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Total de prospectos: {""}
						{store.workers.reduce((prevValue, worker) => prevValue + 1, 0)}
					</div>
					<div
						style={{
							float: "center",
							width: "50%",
							marginLeft: "10px",
							fontFamily: "sans-serif",
							backgroundColor: "#f6f6f6",
							fontSize: "25px"
						}}
						id="workers"
						key={"coin"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Sueldo en moneda extranjera: {""}
						{store.workers

							.reduce((prevValue, worker) => prevValue + worker.coin / promcn, 0)
							.toLocaleString("es")}
					</div>
					<div
						style={{
							float: "center",
							width: "50%",
							fontFamily: "sans-serif",
							marginLeft: "10px",
							backgroundColor: "#f6f6f6",
							fontSize: "25px"
						}}
						id="workers"
						key={"Basic_salary"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Salario basico: {""}
						{store.workers

							.reduce((prevValue, worker) => prevValue + worker.basic_salary / prom, 0)
							.toLocaleString("es")}
					</div>

					<div
						style={{
							float: "center",
							width: "50%",
							fontFamily: "sans-serif",
							marginLeft: "10px",
							backgroundColor: "#f6f6f6",
							fontSize: "25px"
						}}
						id="workers"
						key={"Variable_salary"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Salario Variable: {""}
						{store.workers

							.reduce((prevValue, worker) => prevValue + worker.variable_salary / promvs, 0)
							.toLocaleString("es")}
					</div>

					<div
						style={{
							float: "center",
							width: "50%",
							marginLeft: "10px",
							fontFamily: "sans-serif",
							backgroundColor: "#f6f6f6",
							fontSize: "25px"
						}}
						id="workers"
						key={"Cesta_ticket"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Cesta ticket: {""}
						{store.workers

							.reduce((prevValue, worker) => prevValue + worker.cesta_ticket / promcs, 0)

							.toLocaleString("es")}
					</div>
					<div
						style={{
							float: "center",
							width: "50%",
							marginLeft: "10px",
							fontFamily: "sans-serif",
							backgroundColor: "#f6f6f6",
							fontSize: "25px"
						}}
						id="workers"
						key={"Factor"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Factor: {""}
						{store.workers
							.filter(worker => worker.Factor > 12)
							.reduce((prevValue, worker) => prevValue + worker.Factor / promf, 0)

							.toLocaleString("es")}
					</div>
					<div
						style={{
							float: "center",
							width: "50%",
							marginLeft: "10px",
							backgroundColor: "#f6f6f6",
							fontSize: "25px",
							fontFamily: "sans-serif",
							marginBottom: "20px"
						}}
						id="workers"
						key={"Estimated_annual_package"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Paquete anual estimado: {""}
						{store.workers
							.reduce((prevValue, worker) => prevValue + worker.Estimated_annual_package / promap, 0)
							.toLocaleString("es")}
					</div>
					<div
						style={{
							display: "inline-flex",
							marginBottom: "70px",
							marginTop: "28px"
						}}>
						<button
							style={{
								float: "center",
								width: "700px",
								fontSize: "27px",
								marginLeft: "10px",
								fontFamily: "sans-serif",
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}
							type="number"
							placeholder="promediar"
							onClick={e =>
								setPromcn(
									store.workers
										.filter(worker => worker.coin != 0)
										.reduce((prevValue, worker) => prevValue + 1, 0)
								)
							}
							value={promcn.value}>
							Promediar sueldo en moneda extranjera
						</button>
						<button
							style={{
								float: "center",
								width: "40%",
								fontSize: "27px",
								marginLeft: "10px",
								fontFamily: "sans-serif",
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}
							type="number"
							placeholder="promediar"
							onClick={e =>
								setProm(
									store.workers
										.filter(worker => worker.basic_salary != 0)
										.reduce((prevValue, worker) => prevValue + 1, 0)
								)
							}
							value={prom.value}>
							Promediar salario basico
						</button>
						<button
							style={{
								float: "center",
								width: "40%",
								fontSize: "27px",
								marginLeft: "10px",
								fontFamily: "sans-serif",
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}
							type="number"
							placeholder="promediar"
							onClick={e =>
								setPromvs(
									store.workers
										.filter(worker => worker.variable_salary != 0)
										.reduce((prevValue, worker) => prevValue + 1, 0)
								)
							}
							value={promvs.value}>
							Promediar salario variable
						</button>
						<button
							style={{
								float: "center",
								width: "30%",
								fontSize: "27px",
								marginLeft: "10px",
								fontFamily: "sans-serif",
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}
							type="number"
							placeholder="promediar"
							onClick={e =>
								setPromcs(
									store.workers
										.filter(worker => worker.cesta_ticket != 0)
										.reduce((prevValue, worker) => prevValue + 1, 0)
								)
							}
							value={promcs.value}>
							Promediar cesta ticket
						</button>
						<button
							style={{
								float: "center",
								width: "30%",
								fontSize: "27px",
								marginLeft: "10px",
								fontFamily: "sans-serif",
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}
							type="number"
							placeholder="promediar"
							onClick={e =>
								setPromf(
									store.workers
										.filter(worker => worker.Factor > 12)
										.reduce((prevValue, worker) => prevValue + 1, 0)
								)
							}
							value={promf.value}>
							Promediar factor
						</button>
						<button
							style={{
								float: "center",
								width: "700px",
								fontSize: "27px",
								marginLeft: "10px",
								fontFamily: "sans-serif",
								backgroundColor: "lightgray",
								marginBottom: "10px"
							}}
							type="number"
							placeholder="promediar"
							onClick={e =>
								setPromap(
									store.workers
										.filter(worker => worker.Estimated_annual_package != 0)
										.reduce((prevValue, worker) => prevValue + 1, 0)
								)
							}
							value={promap.value}>
							Promediar Paquete anual estimado
						</button>
					</div>
				</div>
			</div>
			<Modal
				show={state.showModal}
				onClose={() => setState({ showModal: false, idToDelete: null })}
				idToDelete={state.idToDelete}
			/>
		</div>
	);
};

export default WorkersList;
