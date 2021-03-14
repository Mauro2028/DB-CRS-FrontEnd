import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
	const [suma, setSuma] = useState(null);

	const handleChange = e => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value
		});
		console.log(filter);
	};
	const handleCambio = e => {
		setBailar({
			...bailar,
			[e.target.name]: e.target.value
		});
		console.log(bailar);
	};
	const total = e => {
		setSuma({
			...suma,
			[e.target.name]: e.target.value
		});
		// 	console.log(bailar);
		// 	e = worker.basic_salary;
		// 	let val = parseInt(worker.basic_salary);
		// 	i += val;
		// 	console.log(total);
	};

	// const Suma = worker => {
	// 	Suma = length(worker.basic_salary);
	// };
	// console.log(Suma());

	const { store, actions } = useContext(Context);
	// debugger;

	// const total = store.workers.map((x, i) => {
	// 	let val = parseInt(worker.basic_salary);
	// 	i += val;
	// 	return i;
	// 	console.log("suma ", i);
	// });

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
					{/* <button
						name="Suma"
						value="suma"
						onClick={store.workers.map((x, i) => {
							let val = parseInt(worker.basic_salary);
							i += val;
							return i;
						})}>
						Suma
					</button> */}
					<select onChange={e => setFilter({ name: e.target.value })} value={filter.name}>
						<option defaultValue="">Sector</option>
						<option value="Tecnologico">Sector Tecnologico</option>
						<option value="Financiero">Sector Financiero</option>
						<option value="Consultoria">Consultoria</option>
						<option value="Educativo">Educativo</option>
						<option value="Servicios">Servicios</option>
					</select>
					{/* <select onChange={e => setSuma({ name: e.target.value })} value={suma.name}>
						<option defaultValue="">Sector</option>
						<option value="Tecnologico">Salario basico</option>
						<option value="Financiero">Sector Financiero</option>
						<option value="Consultoria">Consultoria</option>
						<option value="Educativo">Educativo</option>
						<option value="Servicios">Servicios</option>
					</select> */}
					<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.workers

								.filter(worker => worker.sector == filter.name || worker.vacant == bailar.name)
								.map(worker => (
									<div key={worker.id}>
										<li id="worker" key={worker.id}>
											<SalaryCard
												name={worker.candidate}
												value={worker.sector}
												worker={worker}
												onDelete={() => setState({ showModal: true, idToDelete: contact.id })}
											/>
										</li>
										{/* <label
											className={e => setSuma({ name: e.target.value })}
											value={worker.basic_salary}>
											Suma {suma}{" "}
										</label> */}
									</div>
								))}
							{store.workers.reduce((prevValue, worker) => prevValue + worker.basic_salary, 0)}
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
