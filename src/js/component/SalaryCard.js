import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const SalaryCard = Worker => {
	const [state, setState] = useState({});

	return <li className="list">{Worker.id}</li>;
};

/**
 * Define the data-types for
 * your component's properties
 **/
SalaryCard.propTypes = {
	history: PropTypes.object,
	Worker: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
SalaryCard.defaultProps = {
	onDelete: null
};
