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
		setFilter({
			...filter,
			[e.target.name]: e.target.value
		});
		console.log(filter);
	};

	const { store, actions } = useContext(Context);
	// debugger;

	return (
		<div>
			<div className="container">
				<div>
					{/* <input type="text" onChange={e => setFilter(handleChange({ filter }))} /> */}
					<select>
						<option
							className={filter.name == "Tecnologico"}
							name="Tecnologico"
							onClick={e => setFilter({ name: e.target.name })}>
							Sector Tecnologico
						</option>
						<option
							className={filter.name == "Financiero"}
							name="Financiero"
							onClick={e => setFilter({ name: e.target.name })}>
							Sector Financiero
						</option>
					</select>

					{/* <button
						className={filter.name === "Tecnologico"}
						name="Tecnologico"
						onClick={e => setFilter({ name: e.target.name })}>
						Sector Tecnologico
					</button>
					<button
						className={filter.name === "Financiero"}
						name="Financiero"
						onClick={e => setFilter({ name: e.target.name })}>
						Sector Financiero
					</button> */}
					<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.workers.filter(worker => worker.sector == filter.name).map(worker => (
								<li id="worker" key={worker.id}>
									<SalaryCard
										name={worker.candidate}
										value={worker.sector}
										worker={worker}
										onDelete={() => setState({ showModal: true, idToDelete: contact.id })}
									/>
								</li>
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
