import React, { useState } from "react";

const FormularioTareas = (props) => {
	const [nombreTarea, cambiarNombreTarea] = useState("");

	const change = (e) => {
		const value = e.target.value;
		cambiarNombreTarea(value);
	};

	const guardarNombre = () => {
		if (nombreTarea && nombreTarea.length > 0) {
			props.agregarTarea(nombreTarea);
		}
	};

	return (
		<>
			<div className="position-absolute top-0 start-50 translate-middle-x mt-2">
				<input type="text" onChange={change} />
				<button className="btn-success" onClick={guardarNombre}>
					Guardar
				</button>
			</div>
		</>
	);
};

export default FormularioTareas;
