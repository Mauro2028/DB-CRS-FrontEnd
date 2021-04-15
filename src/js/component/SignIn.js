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
				<div style={{ marginLeft: "30px", fontFamily: "sans-serif" }} className="containerSecundario">
					<h2>Registro</h2>
					<p style={{ fontSize: "27px", fontFamily: "sans-serif" }}>
						{" "}
						Por favor especifica tus datos para registrarte en nuestra plataforma
					</p>
					<div className="form-group">
						<label
							style={{
								float: "left",
								width: "80%",
								paddingright: "24px",
								marginLeft: "20px",
								fontSize: "23px",
								fontFamily: "sans-serif",
								display: "inlineblock",
								borderColor: "black"
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
								float: "left",
								width: "42%",
								border: "2px solid #000",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								display: "inlineblock",
								fontFamily: "sans-serif",
								fontSize: "20px"
							}}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingright: "24px",
								fontFamily: "sans-serif",
								marginLeft: "20px",
								fontSize: "23px",
								display: "inlineblock",
								borderColor: "black"
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
								float: "left",
								width: "42%",
								marginLeft: "20px",
								fontFamily: "sans-serif",
								backgroundColor: "#f6f6f6",
								display: "inlineblock",
								border: "2px solid #000",
								fontSize: "20px"
							}}
						/>
						<br />
						<label
							style={{
								float: "left",
								width: "80%",
								paddingright: "24px",
								marginLeft: "20px",
								fontFamily: "sans-serif",
								fontSize: "23px",
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
								float: "left",
								width: "42%",
								border: "2px solid #000",
								marginLeft: "20px",
								backgroundColor: "#f6f6f6",
								fontFamily: "sans-serif",
								display: "inlineblock",
								borderColor: "black",
								fontSize: "20px"
							}}
						/>
						<br />

						<button
							className="btn btn-primary"
							style={{
								width: "30%",
								padding: "8px 16px",
								marginTop: "150px",
								border: "3px solid #000",
								borderRadius: "5px",
								display: "block",
								fontSize: "23px",
								color: "#fff",
								backgroundColor: "#1883ba",
								marginLeft: "30px",
								fontFamily: "sans-serif",
								marginBottom: "90px"
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
