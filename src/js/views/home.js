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
				<div className="containerSecundario">
					<div className="form-group">
						<label>Usuario: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="user_name"
							onChange={handleChange}
							value={datos.user_name}
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

						<button
							className="btn btn-primary"
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
							<button className="btn btn-primary">Registrate</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
