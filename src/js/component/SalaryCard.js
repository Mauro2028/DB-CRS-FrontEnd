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
			style={{
				// marginLeft: "850px",
				width: "auto",
				boxSizing: "border-box",
				display: "inlineTable"
				// marginRight: "100px",
				// justifyContent: "center"
			}}>
			<table
				className="table"
				style={{
					width: "100%",
					textalign: "left",
					borderCollapse: "collapse",

					captionSide: "top",
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
							Paqute anual estimado
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Bono de produccion
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>Bono de transporte</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Caja de ahorro
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
							Pago de estacionamiento
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Comisiones por ventas
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>
							H.C.M 100% Emp./Fmlia
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							H.C.M parcial Emp./Fmlia
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>Seguro de Vehículo</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Seguro de Vida
						</th>
						<th style={{ padding: "0.3em", border: "1px solid #000", width: "35%" }}>Comedor</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%",
								background: "#eee"
							}}>
							Subsidios alimenticios
						</th>
						<th
							style={{
								padding: "0.3em",
								border: "1px solid #000",
								width: "35%"
							}}>
							Observaciones
						</th>
					</tr>
				</thead>
				<tbody
					style={{
						bordertop: "1px solid #000",
						borderBottom: "1px solid #000"
					}}>
					<tr key={worker.id}>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderRight: " 1px solid #000",
								background: "#eee",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.id}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.init_date}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.Consultor}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.candidate}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.cedula}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.status}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.phone_number}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.email}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.catchment_source}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.managment}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.vacant}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.interview_date}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.actual_charge}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.company}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.sector}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.coin}
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.basic_salary} Bs
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.variable_salary} Bs
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								background: "#eee",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.cesta_ticket} Bs
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Profit_Days} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.vacations} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Vacation_Bonus} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								background: "#eee",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{" "}
							{worker.Factor} dias
						</td>

						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Estimated_annual_package} $
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Production_bonus}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Transport_bonus}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Savings_Bank}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.parking_payment}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.sales_commissions}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.full_HCM_Emp_Family}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.partial_HCM_Emp_Family}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.Vehicle_insurance}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.life_insurance}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.dinning_room}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								background: "#eee",
								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
							}}
							className="text small text-truncate">
							{worker.food_bags}
						</td>
						<td
							style={{
								padding: "0.3em",
								borderBottom: "1px solid #000",
								borderCollapse: "collapse",
								padding: "0.3em",

								captionSide: "bottom",
								border: "1px solid #000",
								borderRight: " 1px solid #000"
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
