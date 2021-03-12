import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const SalaryCard = ({ worker, onDelete }) => {
	const [state, setState] = useState({
		//initialize state here
	});
	console.log(worker.id);
	return (
		<div className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0" />
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<label className="text small text-truncate">Numero: {worker.id}</label>
					<br />
					<label className="text small text-truncate">fecha de inicio: {worker.init_date}</label>
					<br />
					<label className="text small text-truncate">Consultor: {worker.Consultor}</label>
					<br />
					<label className="text small text-truncate">Nombre del candidato: {worker.candidate}</label>
					<br />
					<label className="text small text-truncate">Numero de cedula: {worker.cedula}</label>
					<br />
					<label className="text small text-truncate">Status: {worker.status}</label>
					<br />
					<label className="text small text-truncate">Numero de telefono: {worker.phone_number}</label>
					<br />
					<label className="text small text-truncate">Email: {worker.email}</label>
					<br />
					<label className="text small text-truncate">Fuente de captacion: {worker.catchment_source}</label>
					<br />
					<label className="text small text-truncate">Gerencia: {worker.managment}</label>
					<br />
					<label className="text small text-truncate">Vacante: {worker.vacant}</label>
					<br />
					<label className="text small text-truncate">
						Fecha de cita a entrevista: {worker.interview_date}
					</label>
					<br />
					<label className="text small text-truncate">Cargo actual: {worker.actual_charge}</label>
					<br />
					<label className="text small text-truncate">Empresa: {worker.company}</label>
					<br />
					<label className="text small text-truncate">Sector: {worker.sector}</label>
					<br />
					<label className="text small text-truncate">Moneda extranjera: {worker.coin}</label>
					<br />
					<label className="text small text-truncate">Sueldo basico: {worker.basic_salary} Bs</label>
					<br />
					<label className="text small text-truncate">Sueldo Variable : {worker.variable_salary} Bs</label>
					<br />
					<label className="text small text-truncate">Cesta ticket: {worker.cesta_ticket} Bs</label>
					<br />
					<label className="text small text-truncate">Dias de utilidades: {worker.Profit_Days} dias</label>
					<br />
					<label className="text small text-truncate">Disfrute de vacaciones: {worker.vacations} dias</label>
					<br />
					<label className="text small text-truncate">Bono de vacaciones: {worker.Vacation_Bonus} Bs</label>
					<br />
					<label className="text small text-truncate">Factor: {worker.Factor} Bs</label>
					<br />
					<label className="text small text-truncate">
						Compesacion anual mixta: {worker.Estimated_annual_package} $
					</label>
					{/* name=
													{worker.Consultor} */}
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
SalaryCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	worker: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
SalaryCard.defaultProps = {
	onDelete: null
};
