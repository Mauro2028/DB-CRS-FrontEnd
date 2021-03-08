import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { store, actions } from "../store/appContext";

export const SalaryCard = worker => {
	const [state, setState] = useState({});
	debugger;
	console.log(workers);
	return (
		<li>
			<div className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0" />
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<label className="candidate">{workers.candidate}</label>

						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<label className="text-muted">{workers.basic_salary}</label>
						<br />
						<label className="phone">{workes.phone_number}</label>
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<br />
						<label className="text small text-truncate">{worker.email}</label>
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
					</div>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SalaryCard.propTypes = {
	history: PropTypes.object,
	worker: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
