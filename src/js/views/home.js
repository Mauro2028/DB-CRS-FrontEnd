import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import "../../styles/home.scss";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const initialState = { user_name: "", password: "" };
	const [datos, setDatos] = useState(initialState);
	const [error, setError] = useState(false);
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const handleChange = e => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value
		});
		console.log(datos);
	};
	const handleSubmit = async e => {
		if (datos.user_name.trim() === "" || datos.password.trim() === "") {
			setError(true);
			return;
		} else {
			console.log("enviamos formulario");
			setError(false);
			let succes = await actions.login(datos);
			if (succes) {
				history.push("/Selection");
			}
		}
	};

	return (
		<div>
			<div className="containerPrincipal">
				<div
					className="containerSecundario"
					style={{
						justifyContent: "center"
					}}>
					<div
						style={{
							justifyContent: "center"
						}}>
						<label
							style={{
								width: "180px",
								fontweight: "bold",
								display: "inlineblock"
							}}>
							Usuario:{" "}
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
								borderColor: "black",
								alignSelf: "center"
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
							Iniciar Sesión
						</button>

						<br />
						{error ? <div>Todos los campos deben ser validos</div> : null}
						<div className="linea" />
						<br />
						<Link to="/SignIn">
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
								}}>
								Registrate
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
