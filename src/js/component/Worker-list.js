import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SalaryCard } from "../component/SalaryCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

const WorkersList = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const { store, actions } = useContext(Context);
	// debugger;
	return (
		<div>
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/worker-register">
							Add new worker
						</Link>
					</p>
					<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.workers.map(
								worker => (
									console.log(worker.candidate),
									(
										// <SalaryCard
										// 	key={worker.id}
										// 	worker={worker.candidate}
										// 	phone={worker.phone_number}
										// 	onDelete={() => setState({ showModal: true, idToDelete: workers.id })}
										// />
										<li>
											<div className="list-group-item">
												<div className="row w-100">
													<div className="col-12 col-sm-6 col-md-3 px-0" />
													<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
														<label className="text small text-truncate">
															Numero: {worker.id}
														</label>
														<br />
														<label className="text small text-truncate">
															fecha de inicio: {worker.init_date}
														</label>
														<br />
														{/* <i className="fas fa-map-marker-alt text-muted mr-3" /> */}
														<label className="text small text-truncate">
															Consultor: {worker.Consultor}
														</label>
														<br />
														<label className="text small text-truncate">
															Nombre del candidato: {worker.candidate}
														</label>
														{
															/* <span */
															// className="fa fa-phone fa-fw text-muted mr-3"
															// data-toggle="tooltip"
															// title=""
															// data-original-title="(870) 288-4149"
															/* /> */
														}
														<br />
														<label className="text small text-truncate">
															Numero de cedula: {worker.cedula}
														</label>
														<br />
														{/* <span
														// className="fa fa-envelope fa-fw text-muted mr-3"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													/> */}
														<label className="text small text-truncate">
															Status: {worker.status}
														</label>
														<br />
														<label className="text small text-truncate">
															Numero de telefono: {worker.phone_number}
														</label>
														<br />
														<label className="text small text-truncate">
															Email: {worker.email}
														</label>
														<br />
														<label className="text small text-truncate">
															Fuente de captacion: {worker.catchment_source}
														</label>
														<br />
														<label className="text small text-truncate">
															Gerencia: {worker.managment}
														</label>
														<br />
														<label className="text small text-truncate">
															Vacante: {worker.vacant}
														</label>
														<br />
														<label className="text small text-truncate">
															Fecha de cita a entrevista: {worker.interview_date}
														</label>
														<br />
														<label className="text small text-truncate">
															Cargo actual: {worker.actual_charge}
														</label>
														<br />
														<label className="text small text-truncate">
															Empresa: {worker.company}
														</label>
														<br />
														<label className="text small text-truncate">
															Sector: {worker.sector}
														</label>
														<br />
														<label className="text small text-truncate">
															Moneda extranjera: {worker.coin}
														</label>
														<br />
														<label className="text small text-truncate">
															Sueldo basico: {worker.basic_salary} Bs
														</label>
														<br />
														<label className="text small text-truncate">
															Sueldo Variable : {worker.variable_salary} Bs
														</label>
														<br />
														<label className="text small text-truncate">
															Cesta ticket: {worker.cesta_ticket} Bs
														</label>
														<br />
														<label className="text small text-truncate">
															Dias de utilidades: {worker.Profit_Days} dias
														</label>
														<br />
														<label className="text small text-truncate">
															Disfrute de vacaciones: {worker.vacations} dias
														</label>
														<br />
														<label className="text small text-truncate">
															Bono de vacaciones: {worker.Vacation_Bonus} Bs
														</label>
														<br />
														<label className="text small text-truncate">
															Factor: {worker.basic_salary + worker.variable_salary} Bs
														</label>
														<br />
														<label className="text small text-truncate">
															Compesacion anual mixta: {worker.Estimated_annual_package} $
														</label>
													</div>
												</div>
											</div>
										</li>
									)
								)
							)}
						</ul>
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
