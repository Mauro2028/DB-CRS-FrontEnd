import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SalaryCard } from "./SalaryCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Props from "prop-types";
import { withRouter } from "react-router-dom";

const WorkersList = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const [prom, setProm] = useState(0);

	const Update = (worker, id) => {
		history.push("/change/" + worker.id);
		console.log(id);
	};

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
											fontSize: "18px"
										}}
									/>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											background: "#eee",
											borderLeft: "#000",
											fontSize: "18px"
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
											background: "#eee",
											fontSize: "23px",
											fontSize: "18px"
										}}>
										Consultor
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											fontSize: "18px"
										}}>
										Candidato
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Cedula
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											fontSize: "18px"
										}}>
										Estatus
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										N0 de telefono
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											fontSize: "18px"
										}}>
										Email
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "45%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Fuente de captacion
									</th>

									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											fontSize: "18px"
										}}>
										Gerencia
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Vacante
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "45%",
											fontSize: "18px"
										}}>
										Fecha de entrevista
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Cargo actual
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											fontSize: "18px"
										}}>
										Empresa
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Sector
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "55%",
											fontSize: "18px"
										}}>
										Moneda extranjera
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Sueldo basico
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Sueldo Variable
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Cesta Ticket
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Dias de utilidades
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Disfrute de vacaciones
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Bono de vacaciones
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Factor
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Paquete anual estimado
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Bono de produccion
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Bono de transporte
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Caja de ahorro
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Pago de estacionamiento
									</th>

									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										H.C.M 100% Emp./Fmlia
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										H.C.M parcial Emp./Fmlia
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Seguro de Vehículo
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Seguro de Vida
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
										}}>
										Comedor
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											fontSize: "18px"
										}}>
										Subsidios alimenticios
									</th>
									<th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",
											background: "#eee",
											fontSize: "18px"
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
													{worker.status}
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
					<div>
						<label
							style={{
								float: "center",
								width: "50%",
								fontFamily: "sans-serif",
								marginLeft: "10px",
								backgroundColor: "#f6f6f6",
								fontSize: "25px"
								// marginBottom: "100px"
							}}
							className="panel-collapse collapse show"
							aria-expanded="true">
							Total de prospectos: {""}
							{store.workers.reduce((prevValue, worker) => prevValue + 1, 0)}
						</label>
					</div>

					<button
						style={{
							float: "center",
							width: "15%",
							fontSize: "25px",
							marginLeft: "10px",
							fontFamily: "sans-serif",
							backgroundColor: "lightgray",
							marginBottom: "10px"
						}}
						type="number"
						placeholder="promediar"
						onClick={e => setProm(store.workers.reduce((prevValue, worker) => prevValue + 1, 0))}
						value={prom.value}>
						Promediar
					</button>
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

							.reduce((prevValue, worker) => prevValue + worker.coin / prom, 0)
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

							.reduce((prevValue, worker) => prevValue + worker.variable_salary / prom, 0)
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

							.reduce((prevValue, worker) => prevValue + worker.cesta_ticket / prom, 0)
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
						key={"Factor"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Factor: {""}
						{store.workers

							.reduce((prevValue, worker) => prevValue + parseInt(worker.Factor) / prom, 0)
							.toFixed(2)
							.toLocaleString("es")}
					</div>
					<div
						style={{
							float: "center",
							width: "50%",
							marginLeft: "10px",
							backgroundColor: "#f6f6f6",
							fontFamily: "sans-serif",
							fontSize: "25px",
							marginBottom: "100px"
						}}
						id="workers"
						key={"Estimated_annual_package"}
						className="panel-collapse collapse show"
						aria-expanded="true">
						Paquete anual estimado: {""}
						{store.workers

							.reduce(
								(prevValue, worker) => prevValue + parseInt(worker.Estimated_annual_package) / prom,
								0
							)
							.toLocaleString("es")}
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