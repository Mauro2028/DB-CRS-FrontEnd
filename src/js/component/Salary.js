import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { basic_salary } from "../store/appContext";

const Salary = () => {
	const initialState = useState(null);
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	console.log("enviamos formulario");
	setError(false);
	actions.registroSalary(datos);
	return (
		<div>
			<label>
				<basic_salary />
			</label>
		</div>
	);
};

export default Salary;
