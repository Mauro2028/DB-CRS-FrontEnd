import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const SalaryCard = ({ worker, onDelete }) => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);

	return (
		<div
		// style={{
		// 	marginLeft: "900px",
		// 	width: "auto",
		// 	boxSizing: "border-box",
		// 	display: "flex",
		// 	justifyContent: "center"
		// }}
		>
			<table
				className="table"
				style={{
					width: "100%",
					textalign: "left",
					bordercollapse: "collapse",

					captionside: "top",
					border: "1px solid #000",
					marginRight: "30px"
				}}>
				<thead>
					<tr>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%",
								background: "#eee"
							}}>
							ID
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>Fecha de inicio</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Consultor
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%"
							}}>
							Candidato
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%",
								background: "#eee"
							}}>
							Cedula
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%"
							}}>
							Estatus
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							N0 de telefono
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%"
							}}>
							Email
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "45%",
								background: "#eee"
							}}>
							Fuente de captacion
						</th>

						<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>Gerencia</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%",
								background: "#eee"
							}}>
							Vacante
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "45%" }}>
							Fecha de entrevista
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Cargo actual
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "25%" }}>Empresa</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "25%",
								background: "#eee"
							}}>
							Sector
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "55%" }}>Moneda extranjera</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Sueldo basico
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>Sueldo Variable</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Cesta Ticket
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>Dias de utilidades</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Disfrute de vacaciones
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%"
							}}>
							Bono de vacaciones
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Factor
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
							Compesacion anual mixta
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Observaciones
						</th>
					</tr>
				</thead>
				<tbody
					style={{
						bordertop: "1px solid #000",
						borderbottom: "1px solid #000"
					}}>
					<tr key={worker.id}>
						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								borderright: " 1px solid #000",
								background: "#eee",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.id}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.init_date}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.Consultor}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.candidate}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.cedula}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.status}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.phone_number}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.email}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.catchment_source}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.managment}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.vacant}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",

								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.interview_date}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.actual_charge}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.company}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.sector}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.coin}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.basic_salary} Bs
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.variable_salary} Bs
						</td>
						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								background: "#eee",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.cesta_ticket} Bs
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Profit_Days} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.vacations} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Vacation_Bonus} Bs
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								background: "#eee",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.Factor} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Estimated_annual_package} $
						</td>
						<td
							style={{
								padding: "0.3em",
								borderbottom: "1px solid #000",
								bordercollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionside: "bottom",
								border: "1px solid #000",
								borderright: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Observations}
						</td>
					</tr>
				</tbody>
			</table>
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

// <div className="col-12 col-sm-6 col-md-3 px-0" />
// 							<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left"></div>
