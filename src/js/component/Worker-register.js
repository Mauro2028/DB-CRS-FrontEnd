import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Register = () => {
	const initialState = {
		init_date: "",
		Consultor: "",
		candidate: "",
		nationality: "",
		cedula: "",
		status: "",
		phone_number: "",
		email: "",
		catchment_source: "",
		managment: "",
		vacant: "",
		branch_office: "",
		interview_date: "",
		Technical_Interview_date: "",
		salary_offer_date: "",
		preemployment_test_date: "",
		References_Check_date: "",
		admission_date: "",
		current_employment_contract: "",
		Participation_at_Softech: "",
		Reason: "",
		Salary_Aspirations: "",
		Academic_level: "",
		Place_of_residence: "",
		experience_years: "",
		availability: "",
		Current_courses: "",
		Software_Hardware_ERP_knowledge: "",
		know_someone_company: "",
		name_work_person: "",
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
		Mixed_anual_compensation: "",
		Assistance_bonus: "",
		Production_bonus: "",
		Transport_bonus: "",
		Savings_Bank: "",
		sales_commissions: "",
		parking_payment: "",
		full_H_C_M_Emp_Family: "",
		partial_H_C_M_Emp_Family: "",
		Funeral_Insurance: "",
		Vehicle_insurance: "",
		life_insurance: "",
		dinning_room: "",
		food_bags: "",
		uniform: "",
		birthday_bonus: "",
		vacational_plans: "",
		Seniority_premium: "",
		children_premium: "",
		proffesion_premium: "",
		december_gift: "",
		Gym: "",
		School_scholarships: "",
		school_supplies: "",
		marriage_bonus: "",
		birth_bonus: "",
		Vehicle_Credit: "",
		Mortgage_credit: "",
		Psychological_Test: "",
		Technical_knowledge_test: "",
		Business_knowledge_test: "",
		Other_tests: "",
		Global_Average: "",
		References_Check: "",
		Technical_Test_Results: "",
		Observations: "",
		Days_passed_requisition_interviewGH: "",
		Days_passed_interviewGH_Techinterview: "",
		Days_passed_Techinterview_entry: "",
		Days_passed_requisition_entry: "",
		Days_passed_open_status: "",
		Checking_Records_Detail: ""
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
			datos.cedula.trim() === "" ||
			datos.email.trim() === "" ||
			datos.phone_number.trim() === "" ||
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
						<label>Consultor: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Consultor"
							onChange={handleChange}
							value={datos.Consultor}
						/>
						<br />
						<label>Candidato: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="candidate"
							onChange={handleChange}
							value={datos.candidate}
						/>
						<br />
						<label>Nacionalidad: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="nationality"
							onChange={handleChange}
							value={datos.nationality}
						/>

						<br />
						<label>Cedula: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="cedula"
							onChange={handleChange}
							value={datos.cedula}
						/>
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
						<label>Telefono: </label>
						<br />
						<input
							type="number"
							className="form-control"
							name="phone_number"
							onChange={handleChange}
							value={datos.phone_number}
						/>
						<br />
						<label>Correo electronico: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="email"
							onChange={handleChange}
							value={datos.email}
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
						<label>Vacante: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="vacant"
							onChange={handleChange}
							value={datos.vacant}
						/>
						<br />
						<label>Sucursal: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="branch_office"
							onChange={handleChange}
							value={datos.branch_office}
						/>
						<br />
						<label>Fecha de entrevista laboral y pruebas: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="interview_date"
							onChange={handleChange}
							value={datos.interview_date}
						/>
						<br />
						<label>Fecha de entrevista tecnica: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Technical_Interview_date"
							onChange={handleChange}
							value={datos.Technical_Interview_date}
						/>
						<label>Fecha de oferta salarial: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="salary_offer_date"
							onChange={handleChange}
							value={datos.salary_offer_date}
						/>
						<br />
						<label>Fecha de examen pre-empleo: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="preemployment_test_date"
							onChange={handleChange}
							value={datos.preemployment_test_date}
						/>
						<br />
						<label>Chequeo de Referencias Civiles y Laborales: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="References_Check_date"
							onChange={handleChange}
							value={datos.References_Check_date}
						/>
						<br />
						<label>Fecha de ingreso: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="admission_date"
							onChange={handleChange}
							value={datos.admission_date}
						/>
						<br />
						<label>Tipo de contratacion actual: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="current_employment_contract"
							onChange={handleChange}
							value={datos.current_employment_contract}
						/>
						<br />
						<label>Participo en otro proceso Softech: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Participation_at_Softech"
							onChange={handleChange}
							value={datos.Participation_at_Softech}
						/>
						<br />
						<label>Motivo de retiro/Búsqueda de empleo/interes escuchar propuesta: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Reason"
							onChange={handleChange}
							value={datos.Reason}
						/>
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
						<label>Nivel Academico: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Academic_level"
							onChange={handleChange}
							value={datos.Academic_level}
						/>
						<br />
						<label>Donde se encuentra residenciado: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Place_of_residence"
							onChange={handleChange}
							value={datos.Place_of_residence}
						/>
						<br />
						<label>Años de experiencia: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="experience_years"
							onChange={handleChange}
							value={datos.experience_years}
						/>
						<br />
						<label>Disponibilidad: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="availability"
							onChange={handleChange}
							value={datos.availability}
						/>
						<br />
						<label>Cursos actuales: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Current_courses"
							onChange={handleChange}
							value={datos.Current_courses}
						/>
						<br />
						<label>Dominio de Software/Hardware/ERP: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Software_Hardware_ERP_knowledge"
							onChange={handleChange}
							value={datos.Software_Hardware_ERP_knowledge}
						/>
						<br />
						<label>¿Conoce alguien en la empresa?: </label>
						<br />
						<input
							type="boolean"
							className="form-control"
							name="know_someone_company"
							onChange={handleChange}
							value={datos.know_someone_company}
						/>
						<br />
						<label>Nombre y área de trabajo de la persona conocida en Softech: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="name_work_person"
							onChange={handleChange}
							value={datos.name_work_person}
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
							type="text"
							className="form-control"
							name="sector"
							onChange={handleChange}
							value={datos.sector}
						/>
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
						<label>Flujo de Caja Mensual: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Monthly_Cash_Flow"
							onChange={handleChange}
							value={datos.Monthly_Cash_Flow}
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
							name="factor"
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
						<label>Bono de asistencia: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Assistance_bonus"
							onChange={handleChange}
							value={datos.Assistance_bonus}
						/>
						<br />
						<label>Bono de produccion: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Production_bonus"
							onChange={handleChange}
							value={datos.Production_bonus}
						/>
						<br />
						<label>Bono de transporte: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Transport_bonus"
							onChange={handleChange}
							value={datos.Transport_bonus}
						/>
						<br />
						<label>Caja de ahorro: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Saving_Bank"
							onChange={handleChange}
							value={datos.Savings_Bank}
						/>
						<br />
						<label>Comision por ventas: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="sales_commissionss"
							onChange={handleChange}
							value={datos.sales_commissions}
						/>
						<br />
						<label>Pago de estacionamiento: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="parking_payment"
							onChange={handleChange}
							value={datos.parking_payment}
						/>
						<br />
						<label>H.C.M 100% Emp./Fmlia.: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="full_H_C_M_Emp_Family"
							onChange={handleChange}
							value={datos.full_H_C_M_Emp_Family}
						/>
						<br />
						<label>H.C.M parcial Emp./Fmlia: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="partial_H_C_M_Emp_Family"
							onChange={handleChange}
							value={datos.partial_H_C_M_Emp_Family}
						/>
						<br />
						<label>Seguros Funerarios: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Funeral_Insurance"
							onChange={handleChange}
							value={datos.Funeral_Insurance}
						/>
						<br />
						<label>Seguro de Vehículo: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Vehicle_insurance"
							onChange={handleChange}
							value={datos.Vehicle_insurance}
						/>
						<br />
						<label>Seguro de Vida: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="life_insurance"
							onChange={handleChange}
							value={datos.life_insurance}
						/>
						<br />
						<label>Comedor: </label>
						<br />
						<input
							type="boolean"
							className="form-control"
							name="dinning_room"
							onChange={handleChange}
							value={datos.dinning_room}
						/>
						<br />
						<label>Bolsas alimenticias: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="food_bags"
							onChange={handleChange}
							value={datos.food_bags}
						/>
						<br />
						<label>Uniforme: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="uniform"
							onChange={handleChange}
							value={datos.uniform}
						/>
						<br />
						<label>Bono de cumpleanos: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="birthday_bonus"
							onChange={handleChange}
							value={datos.birthday_bonus}
						/>
						<br />
						<label>Planes vacacionales: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="vacational_plans"
							onChange={handleChange}
							value={datos.vacational_plans}
						/>
						<br />
						<label>Prima por antiguedad: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Seniority_premium"
							onChange={handleChange}
							value={datos.Seniority_premium}
						/>
						<br />
						<label>Prima por hijos: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="children_premium"
							onChange={handleChange}
							value={datos.children_premium}
						/>
						<br />
						<label>Prima por profesion: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="proffesion_premium"
							onChange={handleChange}
							value={datos.proffesion_premium}
						/>
						<br />
						<label>Regalos decembrinos: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Seniority_premium"
							onChange={handleChange}
							value={datos.december_gift}
						/>
						<br />
						<label>Gimnasio: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Gym"
							onChange={handleChange}
							value={datos.Gym}
						/>
						<br />
						<label>Becas escolares: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="School_scholarships"
							onChange={handleChange}
							value={datos.School_scholarships}
						/>
						<br />
						<label>utiles escolares: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="school_supplies"
							onChange={handleChange}
							value={datos.school_supplies}
						/>
						<br />
						<label>Bono por matrimonio: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="marriage_bonus"
							onChange={handleChange}
							value={datos.marriage_bonus}
						/>
						<br />
						<label>Bono por nacimiento: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="birth_bonus"
							onChange={handleChange}
							value={datos.birth_bonus}
						/>
						<br />
						<label>Credito de vehiculo: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Vehicle_Credit"
							onChange={handleChange}
							value={datos.Vehicle_Credit}
						/>
						<br />
						<label>Credito hipotecario: </label>
						<br />
						<input
							type="Boolean"
							className="form-control"
							name="Mortgage_credit"
							onChange={handleChange}
							value={datos.Mortgage_credit}
						/>
						<br />
						<label>Prueba psicologica: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="Psychological_Test"
							onChange={handleChange}
							value={datos.Psychological_Test}
						/>
						<br />
						<label>Prueba de conocimientos tecnico: </label>
						<br />
						<input
							type="Boolea"
							className="form-control"
							name="Technical_knowledge_test"
							onChange={handleChange}
							value={datos.Technical_knowledge_test}
						/>
						<br />
						<label>Prueba de conocimientos de negocio: </label>
						<br />
						<input
							type="Boolea"
							className="form-control"
							name="Business_knowledge_test"
							onChange={handleChange}
							value={datos.Business_knowledge_test}
						/>
						<br />
						<label>Otras pruebas: </label>
						<br />
						<input
							type="Boolea"
							className="form-control"
							name="Other_tests"
							onChange={handleChange}
							value={datos.Other_tests}
						/>
						<br />
						<label>Promedio global: </label>
						<br />
						<input
							type="Boolea"
							className="form-control"
							name="Global_Average"
							onChange={handleChange}
							value={datos.Global_Average}
						/>
						<br />
						<label>Chequeo de referencias: </label>
						<br />
						<input
							type="Boolea"
							className="form-control"
							name="References_Check"
							onChange={handleChange}
							value={datos.References_Check}
						/>
						<br />
						<label>Resultados Pruebas Técnicas: </label>
						<br />
						<input
							type="Boolea"
							className="form-control"
							name="Technical_Test_Results"
							onChange={handleChange}
							value={datos.Technical_Test_Results}
						/>
						<br />
						<label>Observaciones: </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Observations"
							onChange={handleChange}
							value={datos.Observations}
						/>
						<br />
						<label>Dias Transcurridos(Requisición a Entrevista G.H.): </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Days_passed_requisition_interviewGH"
							onChange={handleChange}
							value={datos.Days_passed_requisition_interviewGH}
						/>
						<br />
						<label>Dias Transcurridos(Entrevista GH. a Entrevista Técnica): </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Days_passed_interviewGH_Techinterview"
							onChange={handleChange}
							value={datos.Days_passed_interviewGH_Techinterview}
						/>
						<br />
						<label>Dias Transcurridos(Entrevista T. a Ingreso): </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Days_passed_Techinterview_entry"
							onChange={handleChange}
							value={datos.Days_passed_Techinterview_entry}
						/>
						<br />
						<label>Dias Transcurridos(Requisición a Ingreso): </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Days_passed_requisition_entry"
							onChange={handleChange}
							value={datos.Days_passed_requisition_entry}
						/>
						<br />
						{/* <label>Días Transcurridos con el candidato(Sólo con estatus "Abierto"): </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Days_passed_open_status"
							onChange={handleChange}
							value={datos.Days_passed_open_status}
						/> */}
						<br />
						<label>Chequeo de Registros con Detalle: </label>
						<br />
						<input
							type="Text"
							className="form-control"
							name="Checking_Records_Detail"
							onChange={handleChange}
							value={datos.Checking_Records_Detail}
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
