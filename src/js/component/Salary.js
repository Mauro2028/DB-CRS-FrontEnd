import React, { useState, useEffect, useContext } from "react";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

const Workers = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const [sector, setSector] = useState("");
	const [vacante, setVacante] = useState("");
	const [puesto, setPuesto] = useState("");
	const [fecha, setFecha] = useState("");
	const [gerencia, setGerencia] = useState("");
	const [prom, setProm] = useState(0);
	const [promvs, setPromvs] = useState(0);
	const [promcs, setPromcs] = useState(0);
	const [promf, setPromf] = useState(0);
	const [promap, setPromap] = useState(0);
	const [promcn, setPromcn] = useState(0);

	const { store, actions } = useContext(Context);

	return (
		<div>
			<div
				className="container"
				style={{
					display: "table-caption",
					justifyItems: "center"
				}}>
				<div>
					<input
						style={{
							float: "center",
							width: "15%",
							marginLeft: "10px",
							backgroundColor: "#f6f6f6",
							fontSize: "20px",
							fontFamily: "sans-serif",
							marginBottom: "35px",
							marginTop: "10px"
						}}
						type="text"
						placeholder="vacante"
						onChange={e => setVacante({ name: e.target.value.toUpperCase() })}
						value={vacante.name}
					/>
					<input
						style={{
							float: "center",
							width: "15%",
							fontSize: "20px",
							marginLeft: "20px",
							fontFamily: "sans-serif",
							backgroundColor: "#f6f6f6",
							marginBottom: "35px",
							marginTop: "10px"
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
							fontSize: "20px",
							fontFamily: "sans-serif",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6",
							marginBottom: "35px",
							marginTop: "10px"
						}}
						onChange={e => setGerencia({ name: e.target.value })}
						value={gerencia.name}>
						<option value="">Gerencia</option>
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

					<select
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							fontFamily: "sans-serif",
							fontSize: "20px",
							backgroundColor: "#f6f6f6",
							marginBottom: "35px",
							marginTop: "10px"
						}}
						onChange={e => setSector({ name: e.target.value })}
						value={sector.name}>
						<option value="">Sector</option>
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
							fontSize: "20px",
							backgroundColor: "#f6f6f6",
							marginBottom: "35px",
							marginTop: "10px"
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
							fontSize: "18px",
							borderCollapse: "collapse",
							fontFamily: "sans-serif",
							marginLeft: "10px",
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
										borderLeft: "#000",
										color: "white",
										ffontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									ID
								</th>

								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										backgroundColor: "#3B83BD",
										color: "white",
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
										fontSize: "23px",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Consultor
								</th>
								<th
									style={{
										padding: "0.3em",
										fontFamily: "sans-serif",
										border: "1px solid #000",
										width: "25%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Candidato
								</th>
								{/* <th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "25%",

											fontSize: "23px",
											backgroundColor: "#3B83BD"
										}}>
										Cedula
									</th> */}
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Estatus
								</th>
								{/* <th
										style={{
											padding: "0.3em",
											border: "1px solid #000",
											width: "35%",

											fontSize: "23px",
											backgroundColor: "#3B83BD"
										}}>
										N0 de telefono
									</th> */}
								{/* <th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "25%",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Email
								</th> */}
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "45%",
										color: "white",
										fontSize: "23px",
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
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Gerencia
								</th>
								<th
									style={{
										padding: "0.3em",
										fontSize: "18px",
										border: "1px solid #000",
										width: "25%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Vacante
								</th>
								{/* <th
									style={{
										padding: "0.3em",
										fontSize: "18px",
										border: "1px solid #000",
										width: "45%",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Fecha de entrevista
								</th> */}
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Cargo actual
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										width: "25%",
										color: "white",
										fontSize: "23px",
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
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Sector
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "55%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Moneda extranjera
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										color: "white",
										width: "35%",
										fontSize: "23px",
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
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Sueldo variable
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										color: "white",
										width: "35%",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Cesta ticket
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Dias de utilidades
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Disfrute de vacaciones
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										fontSize: "23px",
										color: "white",
										backgroundColor: "#3B83BD"
									}}>
									Bono de vacaciones
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Factor
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Paquete anual estimado
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Bono de produccion
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Bono de transporte
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										color: "white",
										width: "35%",
										fontSize: "23px",
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
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Pago de estacionamiento
								</th>

								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										fontSize: "23px",
										color: "white",
										backgroundColor: "#3B83BD"
									}}>
									H.C.M 100% Emp./Fmlia
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										fontSize: "18px",
										width: "35%",
										fontSize: "23px",
										color: "white",
										backgroundColor: "#3B83BD"
									}}>
									H.C.M Parcial Emp./Fmlia
								</th>
								<th
									style={{
										padding: "0.3em",
										border: "1px solid #000",
										width: "35%",
										fontSize: "23px",
										color: "white",
										backgroundColor: "#3B83BD"
									}}>
									Seguro de Vehículo
								</th>
								<th
									style={{
										padding: "0.3em",
										fontSize: "18px",
										border: "1px solid #000",
										width: "35%",
										color: "white",
										backgroundColor: "#3B83BD"
									}}>
									Seguro de Vida
								</th>
								<th
									style={{
										padding: "0.3em",
										fontSize: "18px",
										border: "1px solid #000",
										width: "35%",
										color: "white",
										fontSize: "23px",
										backgroundColor: "#3B83BD"
									}}>
									Comedor
								</th>

								<th
									style={{
										padding: "0.3em",
										fontSize: "18px",
										border: "1px solid #000",
										width: "35%",
										color: "white",
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
										fontSize: "23px",
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
							{store.workers
								.filter(
									worker =>
										worker.sector == sector.name ||
										worker.vacant.startsWith(vacante.name) ||
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.status.toUpperCase()}
												</td>

												{/* <td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														background: "#eee",
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.phone_number}
												</td> */}

												{/* <td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.email}
												</td> */}

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontSize: "19px",
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
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
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
														fontSize: "19px",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{" "}
													{worker.vacant.toUpperCase()}
												</td>

												{/* <td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontSize: "19px",
														fontFamily: "sans-serif",
														captionSide: "bottom",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{worker.interview_date}
												</td> */}

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														padding: "0.3em",
														fontFamily: "sans-serif",
														background: "#eee",
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
														fontFamily: "sans-serif",
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
														fontFamily: "sans-serif",
														fontSize: "19px",
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
														fontFamily: "sans-serif",
														captionSide: "bottom",
														background: "#eee",
														fontSize: "19px",
														border: "1px solid #000",
														borderRight: " 1px solid #000"
													}}
													className="text small text-truncate">
													{new Intl.NumberFormat("es-Es").format(worker.cesta_ticket)}
												</td>

												<td
													style={{
														padding: "0.3em",
														borderBottom: "1px solid #000",
														borderCollapse: "collapse",
														fontFamily: "sans-serif",
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
														fontFamily: "sans-serif",
														background: "#eee",
														captionSide: "bottom",
														border: "1px solid #000",
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
														fontSize: "19px",
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
					</table>
				</div>
				<div
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
					{store.workers

						.filter(
							worker =>
								worker.sector == sector.name ||
								worker.vacant.startsWith(vacante.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)
						.reduce((prevValue, worker) => prevValue + 1, 0)}
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
						.map(worker => worker)
						.filter(
							worker =>
								worker.sector == sector.name ||
								worker.vacant.startsWith(vacante.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

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

						.filter(
							worker =>
								worker.sector == sector.name ||
								worker.vacant.startsWith(vacante.name) ||
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
						.filter(
							worker =>
								worker.sector == sector.name ||
								worker.vacant.startsWith(vacante.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

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
						.filter(
							worker =>
								worker.sector == sector.name ||
								worker.vacant.startsWith(vacante.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

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
						.filter(
							worker =>
								(worker.sector == sector.name && worker.Factor > 12) ||
								(worker.vacant.startsWith(vacante.name) && worker.Factor > 12) ||
								(worker.init_date == fecha.name && worker.Factor > 12) ||
								(worker.managment == gerencia.name && worker.Factor > 12) ||
								(worker.actual_charge.startsWith(puesto.name) && worker.Factor > 12)
						)
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
						marginBottom: "15px"
					}}
					id="workers"
					key={"Estimated_annual_package"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Paquete anual estimado: {""}
					{store.workers

						.filter(
							worker =>
								worker.sector == sector.name ||
								worker.vacant.startsWith(vacante.name) ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge.startsWith(puesto.name)
						)

						.reduce((prevValue, worker) => prevValue + worker.Estimated_annual_package / promap, 0)
						.toLocaleString("es")}
				</div>
				<div>
					<input
						style={{
							float: "center",
							width: "17%",
							marginLeft: "20px",
							fontSize: "20px",
							backgroundColor: "#f6f6f6",
							marginTop: "8px"
						}}
						type="text"
						placeholder="Vacante"
						onChange={e => setVacante({ name: e.target.value })}
						value={vacante.name}
					/>
					<input
						style={{
							float: "center",
							width: "17%",
							fontSize: "20px",
							marginLeft: "20px",
							fontFamily: "sans-serif",
							backgroundColor: "#f6f6f6",
							marginTop: "6px"
						}}
						type="text"
						placeholder="Cargo actual"
						onChange={e => setPuesto({ name: e.target.value.toUpperCase() })}
						value={puesto.name}
					/>
					<input
						style={{
							float: "center",
							width: "17%",
							marginLeft: "20px",
							fontSize: "20px",
							backgroundColor: "#f6f6f6",

							marginTop: "8px"
						}}
						type="text"
						placeholder="Gerencia"
						onChange={e => setGerencia({ name: e.target.value })}
						value={gerencia.name}
					/>
					<input
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							fontSize: "20px",
							backgroundColor: "#f6f6f6",

							marginTop: "8px"
						}}
						type="text"
						placeholder="Sector"
						onChange={e => setSector({ name: e.target.value })}
						value={sector.name}
					/>
					<input
						style={{
							float: "center",
							width: "17%",
							marginLeft: "20px",
							fontSize: "20px",
							backgroundColor: "#f6f6f6",

							marginTop: "8px"
						}}
						type="text"
						placeholder="Mes"
						onChange={e => setFecha({ name: e.target.value })}
						value={fecha.name}
					/>
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
							fontSize: "23px",
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
									.filter(
										worker =>
											(worker.sector == sector.name && worker.coin != 0) ||
											(worker.vacant.startsWith(vacante.name) && worker.coin != 0) ||
											(worker.init_date == fecha.name && worker.coin != 0) ||
											(worker.managment == gerencia.name && worker.coin != 0) ||
											(worker.actual_charge.startsWith(puesto.name) && worker.coin != 0)
									)
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
							fontSize: "23px",
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
									.filter(
										worker =>
											(worker.sector == sector.name && worker.basic_salary != 0) ||
											(worker.vacant.startsWith(vacante.name) && worker.basic_salary != 0) ||
											(worker.init_date == fecha.name && worker.basic_salary != 0) ||
											(worker.managment == gerencia.name && worker.basic_salary != 0) ||
											(worker.actual_charge.startsWith(puesto.name) && worker.basic_salary != 0)
									)
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
							fontSize: "23px",
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
									.filter(
										worker =>
											(worker.sector == sector.name && worker.variable_salary != 0) ||
											(worker.vacant.startsWith(vacante.name) && worker.variable_salary != 0) ||
											(worker.init_date == fecha.name && worker.variable_salary != 0) ||
											(worker.managment == gerencia.name && worker.variable_salary != 0) ||
											(worker.actual_charge.startsWith(puesto.name) &&
												worker.variable_salary != 0)
									)
									.reduce((prevValue, worker) => prevValue + 1, 0)
							)
						}
						value={promvs.value}>
						Promediar salario variable
					</button>
					<button
						style={{
							float: "center",
							width: "40%",
							fontSize: "23px",
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
									.filter(
										worker =>
											(worker.sector == sector.name && worker.cesta_ticket != 0) ||
											(worker.vacant.startsWith(vacante.name) && worker.cesta_ticket != 0) ||
											(worker.init_date == fecha.name && worker.cesta_ticket != 0) ||
											(worker.managment == gerencia.name && worker.cesta_ticket != 0) ||
											(worker.actual_charge.startsWith(puesto.name) &&
												worker.variable_salary != 0)
									)
									.reduce((prevValue, worker) => prevValue + 1, 0)
							)
						}
						value={promcs.value}>
						Promediar cesta ticket
					</button>
					<button
						style={{
							float: "center",
							width: "40%",
							fontSize: "23px",
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
									.filter(
										worker =>
											(worker.sector == sector.name && worker.Factor > 12) ||
											(worker.vacant.startsWith(vacante.name) && worker.Factor > 12) ||
											(worker.init_date == fecha.name && worker.Factor > 12) ||
											(worker.managment == gerencia.name && worker.Factor > 12) ||
											(worker.actual_charge.startsWith(puesto.name) && worker.Factor > 12)
									)
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
							fontSize: "23px",
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
									.filter(
										worker =>
											(worker.sector == sector.name && worker.Estimated_annual_package != 0) ||
											(worker.vacant.startsWith(vacante.name) &&
												worker.Estimated_annual_package != 0) ||
											(worker.init_date == fecha.name && worker.Estimated_annual_package != 0) ||
											(worker.managment == gerencia.name &&
												worker.Estimated_annual_package != 0) ||
											(worker.actual_charge.startsWith(puesto.name) &&
												worker.Estimated_annual_package != 0)
									)
									.reduce((prevValue, worker) => prevValue + 1, 0)
							)
						}
						value={promap.value}>
						Promediar Paquete anual estimado
					</button>
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

// 3301
