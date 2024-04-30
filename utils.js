export const obtenerDatos = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data
};

export class Tarea {
    #id;
    nombre;
    terminado;

    constructor(id, nombre, terminado) {
        this.#id = id;
        this.nombre = nombre;
        this.terminado = terminado;
    }

    render () {
        const contenedorTarea = document.createElement("div");
        contenedorTarea.id = this.#id;


        const checkboxTarea = document.createElement("input");
        checkboxTarea.type = "checkbox";
        checkboxTarea.checked = this.terminado;


        const nombreTarea = document.createElement("p");
        nombreTarea.textContent = this.nombre;


        const botonEliminar = document.createElement ("button");
        botonEliminar.textContent = "Eliminar";

        contenedorTarea.appendChild(checkboxTarea);
        contenedorTarea.appendChild(nombreTarea);
        contenedorTarea.appendChild(botonEliminar);

        return contenedorTarea;
    }



}