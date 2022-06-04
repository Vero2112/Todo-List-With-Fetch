import React, { useState } from "react";

import FormularioTareas from "./FormularioTareas.jsx";

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
					<div
						// className="position-absolute top-50 start-50 translate-middle"
						key={index}>
						<ul>
							<li>
								{nombreTarea}
								<button
									className="btn-danger"
									onClick={() => eliminarTarea(index)}>
									X
								</button>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
