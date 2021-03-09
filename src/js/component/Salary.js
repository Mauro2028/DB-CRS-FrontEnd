import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SalaryCard } from "../component/SalaryCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

const Workers = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const { store, actions } = useContext(Context);
	// debugger;
	return (
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
													<label className="candidate">{worker.id}</label>
													<br />
													<label className="candidate">{worker.init_date}</label>
													<br />
													{/* <i className="fas fa-map-marker-alt text-muted mr-3" /> */}
													<label className="text-muted">{worker.Consultor}</label>
													<br />
													<label className="phone">{worker.candidate}</label>
													{
														/* <span */
														// className="fa fa-phone fa-fw text-muted mr-3"
														// data-toggle="tooltip"
														// title=""
														// data-original-title="(870) 288-4149"
														/* /> */
													}
													<br />
													<label className="text small text-truncate">{worker.cedula}</label>
													<br />
													{/* <span
														// className="fa fa-envelope fa-fw text-muted mr-3"
														data-toggle="tooltip"
														data-original-title=""
														title=""
													/> */}
													<label className="text small text-truncate">{worker.status}</label>
													<br />
													<label className="text small text-truncate">
														{worker.phone_number}
													</label>
													<br />
													<label className="text small text-truncate">{worker.email}</label>
													<br />
													<label className="text small text-truncate">
														{worker.catchment_source}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.managment}
													</label>
													<br />
													<label className="text small text-truncate">{worker.vacant}</label>
													<br />
													<label className="text small text-truncate">
														{worker.interview_date}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.actual_charge}
													</label>
													<br />
													<label className="text small text-truncate">{worker.company}</label>
													<br />
													<label className="text small text-truncate">{worker.sector}</label>
													<br />
													<label className="text small text-truncate">{worker.coin}</label>
													<br />
													<label className="text small text-truncate">
														{worker.basic_salary}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.variable_salary}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.cesta_ticket}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.Profit_Days}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.vacations}
													</label>
													<br />
													<label className="text small text-truncate">
														{worker.Vacation_Bonus}
													</label>
													<br />
													<label className="text small text-truncate">{worker.Factor}</label>
													<br />
													<label className="text small text-truncate">
														{worker.Estimated_annual_package}
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
			<Modal
				show={state.showModal}
				onClose={() => setState({ showModal: false, idToDelete: null })}
				idToDelete={state.idToDelete}
			/>
		</div>
	);
};

export default Workers;
