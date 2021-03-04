// import React, { useContext, useState, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { basic_salary } from "../store/appContext";

// const Salary = () => {
// 	const initialState = useState(null);
// 	const [datos, setDatos] = useState(initialState);
// 	const [error, setError] = useState(false);
// 	const { store, actions } = useContext(Context);
// 	const salarios = [];
// 	const handleSubmit = e => {
// 		console.log("enviamos formulario");
// 		setError(false);
// 		actions.registroSalary();
// 	};
// 	return (
// 		<div>
// 			<label>
// 				<button onClick={handleSubmit}>salarios</button>
// 			</label>
// 			<div>
// 				<basic_salary />
// 			</div>
// 		</div>
// 	);
// };

// export default Salary;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SalaryCard } from "../component/SalaryCard.js";

import { Context } from "../store/appContext.js";

export const Salary = () => {
	const [state, setState] = useState({
		// showModal: false,
		// idToDelete: null
	});

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/Worker-register">
						Registrar Trabajador
					</Link>
				</p>

				<ul className="list-group" id="salarys">
					{store.workers.map(Worker => (
						<SalaryCard key={Worker.id} Worker={Worker} />
					))}
				</ul>
			</div>
			{/* <Modal
				show={state.showModal}
				onClose={() => setState({ showModal: false, idToDelete: null })}
				idToDelete={state.idToDelete}
			/> */}
		</div>
	);
};
