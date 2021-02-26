import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


const Register = () => {
	// const initialState = { null };
	const [datos, setDatos] = useState(null);
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
	};
	}
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
							value={datos.experience_yearsl}
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