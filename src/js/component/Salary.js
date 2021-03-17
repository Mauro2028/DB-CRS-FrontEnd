import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes, { object } from "prop-types";
import { SalaryCard } from "./SalaryCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import { Suma } from "./Suma";

const Workers = () => {
	const [state, setState] = useState({
		showModal: false,
		idToDelete: null
	});

	const [filter, setFilter] = useState("");
	const [bailar, setBailar] = useState("");
	const [puesto, setPuesto] = useState("");

	const handleChange = e => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value
		});
	};

	const handleCambio = e => {
		setBailar({
			...bailar,
			[e.target.name]: e.target.value
		});
	};
	const hanldePuesto = e => {
		setPuesto({
			...puesto,
			[e.target.name]: e.target.value
		});
	};

	const { store, actions } = useContext(Context);
	// debugger;

	return (
		<div>
			<div className="container">
				<div>
					<input
						type="text"
						placeholder="vacante"
						onChange={e => setBailar({ name: e.target.value.toLowerCase() })}
						value={bailar.name}
					/>
					<input
						type="text"
						placeholder="Cargo actual"
						onChange={e => setPuesto({ name: e.target.value.toLowerCase() })}
						value={puesto.name}
					/>

					<select onChange={e => setFilter({ name: e.target.value })} value={filter.name}>
						<option defaultValue="">Sector</option>
						<option value="Tecnologico">Sector Tecnologico</option>
						<option value="Financiero">Sector Financiero</option>
						<option value="Consultoria">Consultoria</option>
						<option value="Educativo">Educativo</option>
						<option value="Servicios">Servicios</option>
					</select>

					<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.workers

								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant == bailar.name ||
										worker.actual_charge == puesto.name
									// console.log(age)
								)

								.map(
									worker => (
										console.log(Object.keys(worker).length),
										(
											<div>
												<li id="worker" key={worker.id}>
													<SalaryCard
														name={worker.candidate}
														key={workers.id}
														worker={worker}
														onDelete={() =>
															setState({ showModal: true, idToDelete: contact.id })
														}
													/>
												</li>
											</div>
										)
									)
								)}
						</ul>
						<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
							Salario basico:
							{store.workers
								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant == bailar.name ||
										worker.actual_charge == puesto.name
								)
								.reduce((prevValue, worker) => prevValue + worker.basic_salary, 0)}
						</div>

						<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
							Salario Variable:
							{store.workers
								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant == bailar.name ||
										worker.actual_charge == puesto.name
								)

								.reduce(
									(prevValue, worker) =>
										(worker.variable_salary + prevValue) / Object.keys(worker).length,
									0
								)}
							<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
								Cesta ticket:
								{store.workers
									.filter(
										worker =>
											worker.sector == filter.name ||
											worker.vacant == bailar.name ||
											worker.actual_charge == puesto.name
									)
									.reduce((prevValue, worker) => prevValue + worker.cesta_ticket, 0)}
							</div>
							<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
								Factor:
								{store.workers
									.filter(
										worker =>
											worker.sector == filter.name ||
											worker.vacant == bailar.name ||
											worker.actual_charge == puesto.name
									)
									.reduce((prevValue, worker) => prevValue + worker.Factor, 0)}
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
		</div>
	);
};

export default Workers;

// https://mauriciogc.medium.com/react-map-filter-y-reduce-54777359d94
{
	/* <button
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
					</button> */
}
