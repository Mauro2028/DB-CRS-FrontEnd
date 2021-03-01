import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
	const initialState = { user_name: "", full_name: "", password: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
	};
	const handleSubmit = async e => {
		if (
			datos.user_name.trim() === "" ||
			datos.full_name.trim() === "" ||
			datos.password.trim() === ""
			// datos.password.trim() === "" ||
			// datos.company_id.trim() === ""
		) {
			setError(true);
		} else {
			console.log("enviamos formulario");
			setError(false);
			let success = await actions.registroManager(datos);
			if (success) {
				history.push("/");
			} else {
				alert("NOT!");
			}
		}
	};

	return (
		<div>
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<h1>Registro</h1>
					<h2> Datos del gerente de RRHH</h2>
					<p> Por favor especifica tus datos para registrarte en nuestra plataforma</p>
					<div className="form-group">
						<label>Nombre de Usuario:</label>
						<br />
						<input
							type="text"
							className="form-control"
							name="user_name"
							onChange={handleChange}
							value={datos.user_name}
						/>
						<br />
						<label>Nombre y Apellido: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="full_name"
							onChange={handleChange}
							value={datos.full_name}
						/>
						<br />

						<label>Contraseña: </label>
						<br />
						<input
							type="password"
							className="form-control"
							name="password"
							onChange={handleChange}
							value={datos.password}
						/>
						<br />
						<br />

						<button
							className="btn btn-primary"
							onClick={() => {
								handleSubmit();
							}}>
							Registrarse
						</button>
						<br />
						{error ? <div>Todos los campos deben ser validos</div> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
