import React, { useState } from "react";
import "../../styles/FormularioTareas.css";
const FormularioTareas = (props) => {
	const [nombreTarea, cambiarNombreTarea] = useState({
		label: "",
		done: false,
	});

	const change = (e) => {
		const value = e.target.value;
		cambiarNombreTarea(value);
	};

	const guardarNombre = (e) => {
		if (
			(nombreTarea &&
				nombreTarea.length > 0 &&
				e.code === "NumpadEnter") ||
			e.code === "Enter"
		) {
			props.agregarTarea(nombreTarea);
		}
	};

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
									onChange={change}
									onKeyPress={guardarNombre}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormularioTareas;
