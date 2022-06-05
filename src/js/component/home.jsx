import React, { useState } from "react";

import FormularioTareas from "./FormularioTareas.jsx";
import "../../styles/index.css";
const Home = () => {
	const [tareas, cambiarTareas] = useState([]);
	const agregarTarea = (nombreTarea) => {
		// const auxTarea = tareas.concat(nombreTarea);
		const auxTarea = [...tareas, nombreTarea];
		cambiarTareas(auxTarea);
	};

	const eliminarTarea = (index) => {
		const auxTarea = tareas.filter((nombreTarea, auxIndex) => {
			// [4, 9, 0].splice()
			if (index !== auxIndex) return nombreTarea;
		});
		cambiarTareas(auxTarea);
	};

	return (
		<div>
			<FormularioTareas agregarTarea={agregarTarea} />
			{tareas.map((nombreTarea, index) => {
				return (
					<>
						<div
							className="d-flex justify-content-between border-bottom w-25 center-me "
							key={index}>
							{nombreTarea}
							<button
								className="btn btn-danger"
								onClick={() => eliminarTarea(index)}>
								X
							</button>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Home;
