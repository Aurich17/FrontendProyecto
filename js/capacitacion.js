const usuarios = [
    {
        id: 1,
        nombre: "Juan",
        area: "Diseño Web",
        accesoCanva: true
    },
    {
        id: 2,
        nombre: "Pedro",
        area: "Base de Datos",
        accesoCanva: false
    }
];

const tabla = document.getElementById("tablaCapacitacion");

usuarios.forEach(usuario => {

    tabla.innerHTML += `
        <tr>

            <td>${usuario.id}</td>

            <td>${usuario.nombre}</td>

            <td>${usuario.area}</td>

            <td>
                <input
                    type="checkbox"
                    ${usuario.accesoCanva ? 'checked' : ''}
                >
            </td>

        </tr>
    `;

});