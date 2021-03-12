import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SalaryCard } from "./SalaryCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

const Workers = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});
	const [filter, setFilter] = useState("");

	const handleChange = e => {
		setFilter(e.filter.name);
		console.log(filter);
		console.log("-->", filter);
	};

	const { store, actions } = useContext(Context);
	// debugger;

	return (
		<div>
			<div className="container">
				<div>
					<input type="text" onChange={e => setFilter(handleChange({ filter }))} />
					<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.workers.filter(worker => worker.candidate.includes(filter)).map(worker => (
								<SalaryCard
									key={worker.id}
									name={worker.candidate}
									value={worker.sector}
									worker={worker}
									onDelete={() => setState({ showModal: true, idToDelete: contact.id })}
								/>
							))}
						</ul>

						{/* <button
							className="sector financiero"
							onClick={() => {
								handleChange();
							}} */}
						{/* /> */}
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

export default Workers;

// https://mauriciogc.medium.com/react-map-filter-y-reduce-54777359d94
