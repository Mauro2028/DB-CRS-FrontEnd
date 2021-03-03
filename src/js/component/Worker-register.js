import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

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
		// interview_date: "",
		// Technical_Interview_date: "",
		// salary_offer_date: "",
		// preemployment_test_date: "",
		// References_Check_date: "",
		// admission_date: "",
		// current_employment_contract: "",
		// Participation_at_Softech: false,
		// Reason: "",
		Salary_Aspirations: "",
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
		basic_salary: "",
		variable_salary: "",
		cesta_ticket: "",
		Monthly_Cash_Flow: "",
		Profit_Days: "",
		vacations: "",
		Vacation_Bonus: "",
		Factor: "",
		Estimated_annual_package: "",
		Mixed_mothly_compensation: "",
		Mixed_anual_compensation: ""
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
		}
	};
	return (
		<div>
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<h1>Registro</h1>
					<h2>Datos del trabajador</h2>
					<p> Por favor especifica los datos para registrarlos en nuestra plataforma</p>
					<div className="form-group">
						<label>Consultor (Obligatorio): </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Consultor"
							onChange={handleChange}
							value={datos.Consultor}
						/>
						<br />
						<label>Nombre del Candidato (Obligatorio): </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="candidate"
							onChange={handleChange}
							value={datos.candidate}
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
							value={datos.vacant}
						/>
						<br />
						<label>Fecha de Inicio:</label>
						<br />
						<input
							type="text"
							className="form-control"
							name="init_date"
							onChange={handleChange}
							value={datos.init_date}
						/>
						<br />
						{/* <label>Nacionalidad: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="nationality"
							onChange={handleChange}
							value={datos.nationality}
						/> */}
						<br />
						<label>Estatus: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="status"
							onChange={handleChange}
							value={datos.status}
						/>
						<br />
						<label>Fuente de captacion: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="catchment_source"
							onChange={handleChange}
							value={datos.catchment_source}
						/>
						<br />
						<label>Gerencia: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="managment"
							onChange={handleChange}
							value={datos.managment}
						/>
						<br />
						<br />
						<label>Aspiraciones Salariales : </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Salary_Aspirations"
							onChange={handleChange}
							value={datos.Salary_Aspirations}
						/>
						<br />

						<label>Cargo actual del candidato: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="actual_charge"
							onChange={handleChange}
							value={datos.actual_charge}
						/>
						<br />
						<label>empresa: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="company"
							onChange={handleChange}
							value={datos.company}
						/>
						<br />
						<label>sector: </label>
						<br />
						<input
							type="list"
							className="form-control"
							name="sector"
							onChange={handleChange}
							value={datos.sector}
						/>

						{/* <select id="opciones" name="opciones">
							<option value="1">Primer valor</option>
							<option value="2">Segundo valor</option>
							<option value="3">Tercer valor</option>
							<option value="4">Cuarto valor</option>
						</select> */}

						<br />
						<label>Moneda: </label>
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
							type="text"
							className="form-control"
							name="basic_salary"
							onChange={handleChange}
							value={datos.basic_salary}
						/>
						<br />
						<label>Sueldo variable: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="variable_salary"
							onChange={handleChange}
							value={datos.variable_salary}
						/>
						<br />
						<label>cesta ticket: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="cesta_ticket"
							onChange={handleChange}
							value={datos.cesta_ticket}
						/>
						<br />
						<label>Dias de utilidades: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Profit_Days"
							onChange={handleChange}
							value={datos.Profit_Days}
						/>
						<br />
						<label>Disfrute de vacaciones: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="vacations"
							onChange={handleChange}
							value={datos.vacations}
						/>
						<br />
						<label>Bono vacacional: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Vacation_Bonus"
							onChange={handleChange}
							value={datos.Vacation_Bonus}
						/>
						<br />
						<label>Factor: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Factor"
							onChange={handleChange}
							value={datos.Factor}
						/>
						<br />
						<label>Paquete anual estimado: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Estimated_annual_package"
							onChange={handleChange}
							value={datos.Estimated_annual_package}
						/>
						<br />
						<label>Compensacion mensual mixta: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Mixed_mothly_compensation"
							onChange={handleChange}
							value={datos.Mixed_mothly_compensation}
						/>
						<br />
						<label>Compensacion anual mixta: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Mixed_anual_compensation"
							onChange={handleChange}
							value={datos.Mixed_anual_compensation}
						/>
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
