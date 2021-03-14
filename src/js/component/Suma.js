import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Suma = ({ worker, onDelete }) => {
	const [state, setState] = useState({
		//initialize state here
	});

	// const total = parseInt(worker.basic_salary);
	// total += worker.basic_salary;
	// console.log("suma ", total);

	const total = i => {
		i = worker.basic_salary;
		let val = parseInt(worker.basic_salary);
		i += val;
		console.log(total);
	};

	return <div>{total()}</div>;
};

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
