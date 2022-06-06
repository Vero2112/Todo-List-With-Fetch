export const obtenerTareas = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/Vero", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const crearTarea = (data) => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/Vero", {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const borrarLista = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/Vero", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const modificarLista = (data) => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/Vero", {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
