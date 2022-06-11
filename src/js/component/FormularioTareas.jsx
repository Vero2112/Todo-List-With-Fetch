import React, { useState, useEffect } from "react";
import "../../styles/FormularioTareas.css";
import { obtenerTareas, crearTarea, modificarLista } from "../api/api.js";

const FormularioTareas = () => {
	const [tareas, cambiarTareas] = useState([]);
	const [nombreTarea, cambiarNombreTarea] = useState({
		label: "",
		done: false,
	});

	const agregarTarea = (nombredelaTarea) => {
		// const auxTarea = tareas.concat(nombredelaTarea);
		const auxTarea = [...tareas, nombredelaTarea];
		cambiarTareas(auxTarea);
		cambiarNombreTarea({ label: "" });
		crearTarea(auxTarea);
	};

	const eliminarTarea = (index) => {
		const auxTarea = tareas.filter((nombreTarea, auxIndex) => {
			if (index !== auxIndex) return nombreTarea;
		});
		cambiarTareas(auxTarea);
		modificarLista(auxTarea);
	};

	const guardarNombre = (e) => {
		if (
			(nombreTarea &&
				nombreTarea.label.length > 0 &&
				e.code === "NumpadEnter") ||
			(nombreTarea && nombreTarea.label.length > 0 && e.code === "Enter")
		) {
			agregarTarea(nombreTarea);
		}
	};

	const obtenerTodasTareas = () => {
		obtenerTareas()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				cambiarTareas(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		obtenerTodasTareas();
	}, []);

	return (
		<>
			{" "}
			<div className="pt-3 row d-flex justify-content-center align-items-center h-100">
				<div className="col-5">
					<div className="card border border border-white">
						<div className="card-body border border border-white">
							<h1 className="d-flex justify-content-center">
								Tareas pendientes
							</h1>
							<div className="d-flex justify-content-center">
								<input
									type="text"
									onChange={(e) => {
										cambiarNombreTarea({
											label: e.target.value,
											done: false,
										});
									}}
									onKeyPress={guardarNombre}
									placeholder="Escribe la tarea"
									value={nombreTarea.label}
								/>
							</div>
							<div className="row d-flex justify-content-center align-items-center">
								{tareas.map((nombreTarea, index) => (
									<div
										className="d-flex justify-content-between border-bottom w-75 mt-2"
										key={index}>
										{nombreTarea.label}

										<button
											className="btn btn-danger"
											onClick={() =>
												eliminarTarea(index)
											}>
											X
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormularioTareas;
