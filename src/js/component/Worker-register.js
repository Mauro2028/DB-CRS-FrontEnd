import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Register = () => {
	// const lista = document.getElementById("opciones");
	// const indiceSeleccionado = lista.selectedIndex;
	// const opcionSeleccionada = lista.options[indiceSeleccionado];
	// const textoSeleccionado = opcionSeleccionada.text;
	// const valorSeleccionado = opcionSeleccionada.value;

	const initialState = {
		init_date: "",
		Consultor: "",
		candidate: "",
		// nationality: "",
		cedula: null,
		status: "",
		phone_number: null,
		email: "",
		catchment_source: "",
		managment: "",
		vacant: "",
		// branch_office: "",
		interview_date: "",
		// Technical_Interview_date: "",
		// salary_offer_date: "",
		// preemployment_test_date: "",
		// References_Check_date: "",
		// admission_date: "",
		// current_employment_contract: "",
		// Participation_at_Softech: false,
		// Reason: "",
		// Salary_Aspirations: "",
		// Academic_level: "",
		// Place_of_residence: "",
		// experience_years: "",
		// availability: "",
		// Current_courses: "",
		// Software_Hardware_ERP_knowledge: "",
		// know_someone_company: false,
		// name_work_person: "",
		actual_charge: "",
		company: "",
		sector: "",
		coin: "",
		basic_salary: null,
		variable_salary: null,
		cesta_ticket: null,
		Monthly_Cash_Flow: null,
		Profit_Days: null,
		vacations: null,
		Vacation_Bonus: null,
		Factor: null,
		Estimated_annual_package: null
		// Mixed_mothly_compensation: "",
		// Mixed_anual_compensation: ""
		// Assistance_bonus: false,
		// Production_bonus: false,
		// Transport_bonus: false,
		// Savings_Bank: false,
		// sales_commissions: false,
		// parking_payment: false,
		// full_H_C_M_Emp_Family: false,
		// partial_H_C_M_Emp_Family: false,
		// Funeral_Insurance: false,
		// Vehicle_insurance: false,
		// life_insurance: false,
		// dinning_room: false,
		// food_bags: false,
		// uniform: false,
		// birthday_bonus: false,
		// vacational_plans: false,
		// Seniority_premium: false,
		// children_premium: false,
		// proffesion_premium: false,
		// december_gift: false,
		// Gym: false,
		// School_scholarships: false,
		// school_supplies: false,
		// marriage_bonus: false,
		// birth_bonus: false,
		// Vehicle_Credit: false,
		// Mortgage_credit: false,
		// Psychological_Test: null,
		// Technical_knowledge_test: null,
		// Business_knowledge_test: null,
		// Other_tests: null,
		// Global_Average: null,
		// References_Check: "",
		// Technical_Test_Results: null,
		// Observations: "",
		// Days_passed_requisition_interviewGH: "",
		// Days_passed_interviewGH_Techinterview: "",
		// Days_passed_Techinterview_entry: "",
		// Days_passed_requisition_entry: "",
		// Days_passed_open_status: "",
		// Checking_Records_Detail: ""
	};

	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	let pdm = datos.Profit_Days / 30;
	let vbm = datos.Vacation_Bonus / 30;
	let sum = (12 + pdm + vbm).toFixed(2);
	let cta = parseInt(datos.cesta_ticket * 12, 10);
	let sva = parseInt(datos.variable_salary * 12, 10);
	let eap = parseInt(datos.basic_salary * datos.Factor + cta + sva);
	let history = useHistory();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
	};
	const handleSubmit = e => {
		if (
			datos.candidate.trim() === "" ||
			datos.cedula.trim() === null ||
			datos.email.trim() === "" ||
			datos.phone_number.trim() === null ||
			datos.Consultor.trim() === "" ||
			datos.vacant.trim() === ""
		) {
			setError(true);
			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			actions.registroWorker(datos);
			history.push("/Worker-list");
		}
	};
	return (
		<div>
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<h1>Registro</h1>
					<h2>datos del trabajador</h2>
					<p> Por favor especifica los datos para registrarlos en nuestra plataforma</p>
					<div className="form-group">
						<label>Consultor (Obligatorio): </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Consultor"
							onChange={handleChange}
							value={datos.Consultor.toLowerCase()}
						/>
						<br />
						<label>Nombre del Candidato (Obligatorio): </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="candidate"
							onChange={handleChange}
							value={datos.candidate.toLowerCase()}
						/>
						<br />
						<label>Cedula (Obligatorio): </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="cedula"
							onChange={handleChange}
							value={datos.cedula}
						/>
						<br />
						<label>Telefono (Obligatorio): </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="phone_number"
							onChange={handleChange}
							value={datos.phone_number}
						/>
						<br />
						<label>Correo electronico (Obligatorio): </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={handleChange}
							value={datos.email}
						/>
						<br />
						<label>Vacante (Obligatorio): </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="vacant"
							onChange={handleChange}
							value={datos.vacant.toLowerCase()}
						/>
						<br />
						<label>Mes de inicio:</label>
						<br />

						<select name="init_date" value={datos.init_date} onChange={handleChange}>
							<option value="">Vacio</option>
							<option value="Enero">Enero</option>
							<option value="Febrero">Febrero</option>
							<option value="Marzo">Marzo</option>
							<option value="Abril">Abril</option>
							<option value="Mayo">Mayo</option>
							<option value="Junio">Junio</option>
							<option value="Julio">Julio</option>
							<option value="Agosto">Agosto</option>
							<option value="Septiembre">Septiembre</option>
							<option value="Octubre">Octubre</option>
							<option value="Noviembre">Noviembre</option>
							<option value="Diciembre">Diciembre</option>
						</select>

						{/* className="form-control"
							name="init_date"
							onChange={handleChange}
							value={datos.init_date} /> */}

						<br />
						<br />
						<label>Estatus: </label>
						<br />
						<select className="form-control" name="status" onChange={handleChange} value={datos.status}>
							<option value="">Vacio</option>
							<option value="Citado a entrevista">Citado a entrevista</option>
							<option value="El area no lo quiso evaluar">El area no lo quiso evaluar</option>
							<option value="Elegible entrevista tecnica">Elegible entrevista tecnica</option>
							<option value="En proceso">En proceso</option>
							<option value="No acepto oferta laboral">No acepto oferta laboral</option>
							<option value="No asistio a entrevista laboral">No asistio a entrevista laboral</option>
							<option value="No elegible entrevista laboral">No elegible entrevista laboral</option>
							<option value="No elegible entrevista tecnica">No elegible entrevista tecnica</option>
							<option value="No elegible entrevista GH">No elegible entrevista GH</option>
							<option value="No interesado">No interesado</option>
							<option value="No responde contacto para entrevista GH">
								No responde contacto para entrevista GH
							</option>
							<option value="No responde contacto para entrevista tecnica">
								No responde contacto para entrevista tecnica
							</option>
							<option value="Por agendar entrevsita">Por agendar entrevsita</option>
							<option value="Pre-empleo">Pre-empleo</option>
						</select>
						<br />
						<label>Fuente de captacion: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="catchment_source"
							onChange={handleChange}
							value={datos.catchment_source.toLowerCase()}
						/>
						<br />
						<label>Gerencia: </label>
						<br />
						<select
							className="form-control"
							name="management"
							onChange={handleChange}
							value={datos.management}>
							<option value="">Vacio</option>
							<option value="Mercadeo y ventas">Mercadeo y ventas</option>
							<option value="Servicio al cliente">Servicio al cliente</option>
							<option value="Tecnologia funcional">Tecnologia funcional</option>
							<option value="Tecnologia tecnica">Tecnologia tecnica</option>
						</select>
						{/* <input
							type="text"
							className="form-control"
							name="managment"
							onChange={handleChange}
							value={datos.managment.toLowerCase()}
						/>
						<br /> */}
						<br />
						<label>Fecha de cita a entrevista : </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="interview_date"
							onChange={handleChange}
							value={datos.interview_date}
						/>
						<br />
						<label>Cargo actual del candidato: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="actual_charge"
							onChange={handleChange}
							value={datos.actual_charge.toLowerCase()}
						/>
						<br />
						<label>Empresa: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="company"
							onChange={handleChange}
							value={datos.company.toLowerCase()}
						/>
						<br />
						<label>
							Sector:
							<select name="sector" value={datos.sector} onChange={handleChange}>
								<option value="">Vacio</option>
								<option value="Financiero">Financiero</option>
								<option value="Tecnologico">Tecnologico</option>
								<option value="Consultoria">Consultoria</option>
								<option value="Educativo">Educativo</option>
								<option value="Servicios">Servicios</option>
							</select>
						</label>
						<br />
						<label>Sueldo en moneda extranjera: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="coin"
							onChange={handleChange}
							value={datos.coin}
						/>
						<br />
						<label>Sueldo basico: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="basic_salary"
							onChange={handleChange}
							value={datos.basic_salary}
						/>
						<br />
						<label>Sueldo variable: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="variable_salary"
							onChange={handleChange}
							value={datos.variable_salary}
						/>
						<br />
						<label>cesta ticket: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="cesta_ticket"
							onChange={handleChange}
							value={datos.cesta_ticket}
						/>
						<br />
						<label>Dias de utilidades: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="Profit_Days"
							onChange={handleChange}
							value={datos.Profit_Days}
						/>
						<br />
						<label>Bono vacacional: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="Vacation_Bonus"
							onChange={handleChange}
							value={datos.Vacation_Bonus}
						/>
						<br />
						<label>Disfrute de vacaciones: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="vacations"
							onChange={handleChange}
							value={datos.vacations}
						/>
						<br />
						<label>Factor: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="Factor"
							onChange={handleChange}
							value={(datos.Factor = sum)}
						/>
						<br />
						<label>Paquete anual estimado: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="Estimated_annual_package"
							onChange={handleChange}
							value={(datos.Estimated_annual_package = eap)}
						/>
						<br />
						<br />
						<button
							className="btn btn-primary"
							onClick={() => {
								handleSubmit();
							}}>
							Registrar
						</button>
						<br />
						{error ? <div>soy un error, todos los campos deben ser validos</div> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
