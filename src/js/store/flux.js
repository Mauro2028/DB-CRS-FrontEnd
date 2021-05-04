// const BASE_URL = "http://192.168.0.114:5000";
const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://5000-jade-booby-0vpexvsg.ws-us03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			worker: {},
			workers: []
		},

		actions: {
			registroWorker: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/signup_worker`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			registroManager: async datos => {
				try {
					const respuesta = await fetch(`${BASE_URL}/signup_manager`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			login: async (datos, jwt) => {
				if (!jwt) {
					const store = getStore();
					jwt = store.jwt;
				}
				try {
					const respuesta = await fetch(`${BASE_URL}/login`, {
						method: "POST",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					if (respuesta.ok) {
						let resultado = await respuesta.json();
						console.log(resultado);
						setStore({
							jwt: resultado.jwt,
							is_user: resultado.is_user
						});
						return true;
					}
					return false;
				} catch (error) {
					console.log("explote", error);
				}
			},

			fetchWorker: async (id = null) => {
				let url = BASE_URL + "/workers";
				if (id != null) {
					url += "/" + id;
				}
				let response = await fetch(url);
				if (response.ok) {
					let body = await response.json();
					if (id == null) {
						setStore({
							workers: body
						});
					} else {
						setStore({ worker: body });
					}
					return true;
				} else {
					console.log(response.status);
					return false;
				}
			},
			cambioWorker: async (datos, id) => {
				let url = `${BASE_URL}/change/${id}`;
				console.log(url);
				try {
					const respuesta = await fetch(url, {
						method: "PATCH",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},
			cambioStatus: async (datos, id) => {
				let url = `${BASE_URL}/statuschange/${id}`;
				console.log(url);
				try {
					const respuesta = await fetch(url, {
						method: "PATCH",
						body: JSON.stringify(datos),
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},
			borrarWorker: async id => {
				let url = `${BASE_URL}/worker/${id}`;
				console.log(url);
				try {
					const respuesta = await fetch(url, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});
					let resultado = await respuesta.json();
					console.log(resultado);
				} catch (error) {
					console.log("explote", error);
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
