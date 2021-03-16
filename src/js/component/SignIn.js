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
		if (datos.user_name.trim() === "" || datos.full_name.trim() === "" || datos.password.trim() === "") {
			setError(true);
		} else {
			console.log("enviamos formulario");
			setError(false);
			let success = await actions.registroManager(datos);
			if (success) {
				history.push("/");
			} else {
				history.push("/");
			}
		}
	};

	return (
		<div>
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<h1>Registro</h1>
					<h2> datos del gerente de RRHH</h2>
					<p> Por favor especifica tus datos para registrarte en nuestra plataforma</p>
					<div className="form-group">
						<label
							style={{
								width: "180px",
								fontweight: "bold",
								display: "inlineblock"
							}}>
							Nombre y Apellido:{" "}
						</label>
						<br />
						<input
							type="text"
							className="form-control"
							name="full_name"
							onChange={handleChange}
							value={datos.full_name}
							style={{
								width: "180px",
								padding: "3px 10px",
								border: "1px solid #f6f6f6",
								borderradius: "3px",
								backgroundcolor: "#f6f6f6",
								margin: "8px 0",
								display: "inlineblock",
								borderColor: "black"
							}}
						/>
						<br />
						<label
							style={{
								width: "180px",
								fontweight: "bold",
								display: "inlineblock"
							}}>
							Nombre de Usuario:
						</label>
						<br />
						<input
							type="text"
							className="form-control"
							name="user_name"
							onChange={handleChange}
							value={datos.user_name}
							style={{
								width: "180px",
								padding: "3px 10px",
								border: "1px solid #f6f6f6",
								borderradius: "3px",
								backgroundcolor: "#f6f6f6",
								margin: "8px 0",
								display: "inlineblock",
								borderColor: "black"
							}}
						/>
						<br />
						<label
							style={{
								width: "180px",
								fontweight: "bold",
								display: "inlineblock"
							}}>
							Contraseña:{" "}
						</label>
						<br />
						<input
							type="password"
							className="form-control"
							name="password"
							onChange={handleChange}
							value={datos.password}
							style={{
								width: "180px",
								padding: "3px 10px",
								border: "1px solid #f6f6f6",
								borderradius: "3px",
								backgroundcolor: "#f6f6f6",
								margin: "8px 0",
								display: "inlineblock",
								borderColor: "black"
							}}
						/>
						<br />
						<br />

						<button
							className="btn btn-primary"
							style={{
								width: "30%",
								padding: "8px 16px",
								margintop: "32px",
								border: "1px solid #000",
								borderradius: "5px",
								display: "block",
								color: "#fff",
								backgroundcolor: "#000"
							}}
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
