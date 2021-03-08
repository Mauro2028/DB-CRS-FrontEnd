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
	debugger;
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
								console.log(workers),
								(
									<SalaryCard
										key={worker.id}
										worker={workers.candidate}
										phone={workers.phone_number}
										onDelete={() => setState({ showModal: true, idToDelete: workers.id })}
									/>
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
