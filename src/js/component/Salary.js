import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SalaryCard } from "../component/SalaryCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Workers = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new worker
					</Link>
				</p>
				<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.workers.map(worker => (
							<SalaryCard
								key={worker.id}
								worker={worker.candidate}
								phone={worker.phone_number}
								onDelete={() => setState({ showModal: true, idToDelete: workers.id })}
							/>
						))}
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
