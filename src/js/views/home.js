import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								fontFamily: "sans-serif",
								fontSize: "25px",
								marginTop: "10px"
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
								padding: "3px 10px",
								border: "2px solid #000",
								borderRadius: "3px",
								fontSize: "20px",
								fontFamily: "sans-serif",
								backgroundColor: "#f6f6f6",
								display: "inlineblock",
								borderColor: "black",
								alignSelf: "center",
								float: "left",
								width: "42%",
								marginLeft: "20px",
								height: "35px"
							}}
						/>
						<br />

						<label
							style={{
								float: "left",
								width: "80%",
								paddingRight: "24px",
								marginLeft: "20px",
								marginTop: "20px",
								fontFamily: "sans-serif",
								fontSize: "25px"
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
								padding: "3px 10px",
								fontSize: "20px",
								borderRadius: "3px",
								backgroundColor: "#f6f6f6",
								display: "inlineblock",
								fontFamily: "sans-serif",
								borderColor: "black",
								alignSelf: "center",
								border: "2px solid #000",
								float: "left",
								width: "42%",
								marginLeft: "20px",
								height: "37px"
							}}
						/>
						<br />

						<button
							className="btn"
							style={{
								width: "30%",
								padding: "8px 16px",
								marginTop: "130px",
								border: "3px solid #000",
								borderRadius: "5px",
								display: "block",
								color: "#fff",
								fontFamily: "sans-serif",
								backgroundColor: "#1883ba",
								marginLeft: "30px",
								fontSize: "23px"
							}}
							onClick={() => {
								handleSubmit();
							}}>
							Iniciar Sesión
						</button>

						<br />
						{error ? <div style={{ marginLeft: "50px" }}>Todos los campos deben ser validos</div> : null}
						<div className="linea" />
						<br />
						<Link to="/SignIn">
							<button
								style={{
									width: "30%",
									padding: "8px 16px",
									marginTop: "5px",
									border: "3px solid #000",
									borderRadius: "5px",
									fontFamily: "sans-serif",
									display: "block",
									color: "#fff",
									backgroundColor: "#1883ba",
									marginLeft: "30px",
									fontSize: "23px",
									marginBottom: "180px"
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
