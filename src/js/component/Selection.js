import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes, { object } from "prop-types";
import { SalaryCard } from "./SalaryCard";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

const Selection = () => {
	const { store, actions } = useContext(Context);
	let date = new Date();
	let Year = date.getFullYear();
	let Month = date.getMonth();
	let Day = date.getDate();

	return (
		<div className="containerPrincipal">
			<form>
				<div>
					<navbar />
				</div>
				<div
					className="containerSecundario"
					style={{
						display: "inline",
						alignItems: "center"
					}}>
					<div className="parrafo">
						<p
							style={{
								fontSize: "40px",
								marginLeft: "10px",
								fontFamily: "sans-serif"
							}}>
							{/* Bienvenido a la aplicaion de captacion, reclutamiento y seleccion.
							<br /> */}
							Bienvenido, que deseas hacer?
						</p>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							marginTop: "100px",
							marginBottom: "280px"
						}}
						className=" buttons">
						<Link to="/Worker-list">
							<button
								style={{
									padding: "10px",
									fontweight: "700",
									fontSize: "25px",
									color: "#ffffff",
									backgroundColor: "#1883ba",
									fontFamily: "sans-serif",
									borderRadius: "6px",
									border: "3px solid #0016b0",
									display: "display-flex",
									justifyContent: "space-around",
									width: "250px",
									height: "150px"
								}}
								className="btn">
								VER LISTA DE PROSPECTOS
							</button>
						</Link>
						<Link to="/workers">
							<button
								style={{
									padding: "10px",
									fontweight: "600",
									fontSize: "25px",
									color: "#ffffff",
									backgroundColor: "#1883ba",
									borderRadius: "6px",
									border: "3px solid #0016b0",
									display: "flex",
									fontFamily: "sans-serif",
									justifyContent: "space-around",
									width: "250px",
									height: "150px",
									alignItems: "center"
								}}
								className="btn btn-primary">
								VER REGISTROS
							</button>
						</Link>
						<Link to="/worker-register">
							<button
								style={{
									padding: "10px",
									fontweight: "600",
									fontSize: "25px",
									color: "#ffffff",
									backgroundColor: "#1883ba",
									borderRadius: "6px",
									border: "3px solid #0016b0",
									display: "flex",
									fontFamily: "sans-serif",
									justifyContent: "space-around",
									width: "250px",
									height: "150px",
									fontBorder: "black",
									alignItems: "center"
								}}
								className="btn btn-primary">
								REGISTRAR PROSPECTOS
							</button>
						</Link>
					</div>
				</div>
			</form>
			<div
				style={{
					display: "flex",
					width: "1000px",
					alignItems: "center",
					marginLeft: "60%",
					fontSize: "38px",
					fontFamily: "sans-serif"
				}}>
				Al dia de hoy: {""}
				{Day}/{Month}/{Year}
			</div>
			<div
				style={{
					display: "flex",
					width: "1000px",
					alignItems: "center",
					marginLeft: "60%",
					fontSize: "38px",
					fontFamily: "sans-serif",
					marginBottom: "20px"
				}}>
				{" "}
				Hay registrados {""}
				{store.workers
					.map(worker => (console.log(), worker => worker))
					.reduce((prevValue, worker) => prevValue + 1, 0)}{" "}
				{""} prospectos
			</div>
		</div>
	);
};

export default Selection;
