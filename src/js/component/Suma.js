import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Suma = ({ worker, onDelete }) => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	const handleSubmit = e => {
		if (datoworker.variable_salary === null) {
			return;
		} else {
			console.log("enviamos formulario");
			actions.registroSalary();
			console.log(worker.variable_salary);
			console.log(worker.id);
		}
	};
	return (
		<div>
			<div>
				Sueldo Variable
				{worker.variable_salary}
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Suma.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	worker: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
Suma.defaultProps = {
	onDelete: null
};

// <div className="col-12 col-sm-6 col-md-3 px-0" />
// 							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left"></div>
