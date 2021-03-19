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
	const [fecha, setFecha] = useState("");
	const [gerencia, setGerencia] = useState("");

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
	const hanldeFecha = e => {
		setFecha({
			...fecha,
			[e.target.name]: e.target.value
		});
	};

	// const handleSuma = (worker, i = 0) => {
	// 	while (i < worker) {
	// 		i = i + 1;
	// 		console.log(handleSuma());
	// 	}
	// };

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

					<select onChange={e => setGerencia({ name: e.target.value })} value={gerencia.name}>
						<option defaultValue="">Gerencia</option>
						<option value="Tecnologico">Tecnologia</option>
						<option value="Mercadeo y ventas">Mercadeo y ventas</option>
						<option value="Servicio al cliente">Servicio al cliente</option>
						<option value="Tecnologia funcional">Tecnologia funcional</option>
						<option value="Tecnologia tecnica">Tecnologia tecnica</option>
					</select>

					<select onChange={e => setFilter({ name: e.target.value })} value={filter.name}>
						<option defaultValue="">Sector</option>
						<option value="Tecnologico">Sector Tecnologico</option>
						<option value="Financiero">Sector Financiero</option>
						<option value="Consultoria">Consultoria</option>
						<option value="Educativo">Educativo</option>
						<option value="Servicios">Servicios</option>
					</select>

					<select onChange={e => setFecha({ name: e.target.value })} value={fecha.name}>
						<option defaultValue="">Mes de inicio</option>
						<option value="Enero">Enero</option>
						<option value="Febrero">Febrero</option>
						<option value="Marzo">Marzo</option>
						<option value="Abril">Abril</option>
						<option value="Mayo">Mayo</option>
						<option value="Junio">Junio</option>
						<option value="Julio">Julio</option>
						<option value="Agosto">Agosto</option>
						<option value="Septiembre">Septiembre</option>
						<option value="Mayo">Octubre</option>
						<option value="Mayo">Noviembre</option>
						<option value="Mayo">Diciembre</option>
					</select>

					<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.workers

								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant == bailar.name ||
										worker.init_date == fecha.name ||
										worker.managment == gerencia.name ||
										worker.actual_charge == puesto.name
									// console.log(age)
								)

								.map(
									worker => (
										// console.log(worker.id),

										console.log(worker.id),
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
										worker.init_date == fecha.name ||
										worker.managment == gerencia.name ||
										worker.actual_charge == puesto.name
								)

								.reduce((prevValue, worker) => worker.basic_salary + prevValue, 0)}
						</div>

						<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
							Salario Variable:
							{store.workers
								.filter(
									worker =>
										worker.sector == filter.name ||
										worker.vacant == bailar.name ||
										worker.init_date == fecha.name ||
										worker.managment == gerencia.name ||
										worker.actual_charge == puesto.name
								)

								.reduce((prevValue, worker) => worker.variable_salary + prevValue, 0)}
							<div id="workers" className="panel-collapse collapse show" aria-expanded="true">
								Cesta ticket:
								{store.workers
									.filter(
										worker =>
											worker.sector == filter.name ||
											worker.vacant == bailar.name ||
											worker.init_date == fecha.name ||
											worker.managment == gerencia.name ||
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
											worker.init_date == fecha.name ||
											worker.managment == gerencia.name ||
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
