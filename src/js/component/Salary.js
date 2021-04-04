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
	const [all, setAll] = useState("");

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
			[e.target.name]: e.target.values
		});
	};

	const { store, actions } = useContext(Context);
	// debugger;

	return (
		<div>
			<div className="container">
				<div
					style={{
						marginBottom: "10px"
					}}>
					<input
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6",
							marginBottom: "10px"
						}}
						type="text"
						placeholder="vacante"
						onChange={e => setBailar({ name: e.target.value.toUpperCase() })}
						value={bailar.name}
					/>
					<input
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
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
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
						}}
						onChange={e => setGerencia({ name: e.target.value })}
						value={gerencia.name}>
						<option value="">Vacio</option>
						<option value="ADMINISTRACION">Administracion</option>
						<option value="GERENCIA GENERAL">Generencia General</option>
						<option value="GESTION HUMANA">Generencia General</option>
						<option value="INFRAESTRUCTURA">Generencia General</option>
						<option value="MERCADEO Y VENTAS">Mercadeo y ventas</option>
						<option value="SERVICIO AL CLIENTE">Servicio al cliente</option>
						<option value="TECNOLOGIA FUNCIONAL">Tecnologia funcional</option>
						<option value="TECNOLOGIA TECNICA">Tecnologia tecnica</option>
						<option value="PLATAFORMA">Plataforma</option>
					</select>

					<select
						style={{
							float: "center",
							width: "15%",
							marginLeft: "20px",
							backgroundColor: "#f6f6f6"
						}}
						onChange={e => setFilter({ name: e.target.value })}
						value={filter.name}>
						<option value="">Sector</option>
						<option value="">Vacio</option>
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
							backgroundColor: "#f6f6f6"
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
				<div
					id="workers"
					// style={{
					// 	// marginLeft: "2500px",
					// 	boxSizing: "border-box",
					// 	display: "inline-grid",
					// 	justifyContent: "center",
					// 	marginTop: "10px"
					// }}
					key={"Lista"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					{store.workers
						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant == bailar.name ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge == puesto.name
						)
						.map(
							worker => (
								console.log(),
								(
									<div>
										<SalaryCard name={worker.candidate} key={worker.id} worker={worker} />
									</div>
								)
							)
						)}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "18px"
					}}
					id="workers"
					key={"coin"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Sueldo en moneda extranjera:
					{store.workers
						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant == bailar.name ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge == puesto.name
						)

						.reduce((prevValue, worker) => prevValue + worker.coin, 0)
						.toLocaleString("es")}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "18px"
					}}
					id="workers"
					key={"Basic_salary"}
					className="panel-collapse collapse show"
					aria-expanded="true">
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

						.reduce((prevValue, worker) => prevValue + worker.basic_salary, 0)
						.toLocaleString("es")}
				</div>

				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "18px"
					}}
					id="workers"
					key={"Variable_salary"}
					className="panel-collapse collapse show"
					aria-expanded="true">
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

						.reduce((prevValue, worker) => prevValue + worker.variable_salary, 0)
						.toLocaleString("es")}
				</div>

				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "18px"
					}}
					id="workers"
					key={"Cesta_ticket"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Cesta ticket:
					{store.workers
						.filter(
							worker =>
								worker.sector === filter.name ||
								worker.vacant === bailar.name ||
								worker.init_date === fecha.name ||
								worker.managment === gerencia.name ||
								worker.actual_charge === puesto.name
						)

						.reduce((prevValue, worker) => prevValue + worker.cesta_ticket, 0)

						.toLocaleString("es")}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "18px"
					}}
					id="workers"
					key={"Factor"}
					className="panel-collapse collapse show"
					aria-expanded="true">
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
						.reduce((prevValue, worker) => prevValue + parseFloat(worker.Factor), 0)
						.toFixed(2)
						.toLocaleString("es")}
				</div>
				<div
					style={{
						float: "center",
						width: "30%",
						marginLeft: "20px",
						backgroundColor: "#f6f6f6",
						fontSize: "18px"
					}}
					id="workers"
					key={"Estimated_annual_package"}
					className="panel-collapse collapse show"
					aria-expanded="true">
					Paquete anual estimado:
					{store.workers

						.filter(
							worker =>
								worker.sector == filter.name ||
								worker.vacant == bailar.name ||
								worker.init_date == fecha.name ||
								worker.managment == gerencia.name ||
								worker.actual_charge == puesto.name
						)

						.reduce((prevValue, worker) => prevValue + parseInt(worker.Estimated_annual_package), 0)
						.toLocaleString("es")}
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
