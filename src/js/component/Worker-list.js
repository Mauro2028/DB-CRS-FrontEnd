import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SalaryCard } from "./SalaryCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
// import home from "../../styles";

const WorkersList = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const { store, actions } = useContext(Context);
	// debugger;
	return (
		<div>
			<div>
				<div className="container">
					<div>
						<div
							style={{
								display: "inline-flex",
								justifyContent: "end",
								marginLeft: "-100px"
							}}>
							<Link to="/worker-register">
								<button
									className="btn"
									style={{
										width: "80%",
										padding: "8px 16px",
										marginTop: "50px",
										border: "1px solid #000",
										borderRadius: "5px",
										display: "flex",
										color: "#fff",
										backgroundColor: "#1883ba",
										marginRight: "30px"
									}}>
									Añadir trabajador
								</button>
							</Link>
							<Link to="/workers">
								<button
									className="btn"
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
										height: "60%"
									}}>
									Ver reportes
								</button>
							</Link>
						</div>

						<div
							style={{
								marginLeft: "2200px",
								boxSizing: "border-box",
								display: "flex",
								justifyContent: "center",
								marginTop: "10px"
							}}>
							<table
								className="table"
								style={{
									width: "100%",
									textalign: "left",
									borderCollapse: "collapse",
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
												background: "#eee"
											}}>
											Consultor
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "25%"
											}}>
											Candidato
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "25%",
												background: "#eee"
											}}>
											Cedula
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "25%"
											}}>
											Estatus
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "35%",
												background: "#eee"
											}}>
											N0 de telefono
										</th>
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

										<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>
											Gerencia
										</th>
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
										<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>
											Empresa
										</th>
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
											Comisiones por ventas
										</th>
										<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
											H.C.M 100% Emp./Fmlia
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "35%",
												background: "#eee"
											}}>
											H.C.M parcial Emp./Fmlia
										</th>
										<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
											Seguro de Vehículo
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "35%",
												background: "#eee"
											}}>
											Seguro de Vida
										</th>
										<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
											Comedor
										</th>
										<th
											style={{
												padding: "0.3em",
												border: "1px solid #000",
												width: "35%",
												background: "#eee"
											}}>
											Subsidios alimenticios
										</th>
										<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
											Observaciones
										</th>
									</tr>
								</thead>
								<tbody
									style={{
										bordertop: "1px solid #000",
										borderBottom: "1px solid #000"
									}}>
									{store.workers.map(worker => (
										<tr key={worker.id}>
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
													background: "#eee",
													captionSide: "bottom",
													border: "1px solid #000",
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{" "}
												{worker.Consultor}
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
												{" "}
												{worker.candidate}
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.cedula}
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.phone_number}
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.catchment_source}
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
												{" "}
												{worker.managment}
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{" "}
												{worker.vacant}
											</td>

											<td
												style={{
													padding: "0.3em",
													borderBottom: "1px solid #000",
													borderCollapse: "collapse",
													padding: "0.3em",

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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.actual_charge}
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
												{" "}
												{worker.company}
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

													captionSide: "bottom",
													border: "1px solid #000",
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.coin}
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.basic_salary} Bs
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
												{worker.variable_salary} Bs
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.cesta_ticket} Bs
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
												{worker.Profit_Days} dias
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{worker.vacations} dias
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
												{worker.Vacation_Bonus} dias
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
													borderRight: " 1px solid #000"
												}}
												className="text small text-truncate">
												{" "}
												{worker.Factor} Bs
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
												{worker.Estimated_annual_package} $
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
												{worker.sales_commissions}
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
												{worker.Observations}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
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

// display: "inline",
// 								justifyContent: "center",
// 								marginRight: "30 px",
// 								color: "black"
