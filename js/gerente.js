const usuarios = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        area: "Diseño Web",
        accesoCanva: true
    },
    {
        id: 2,
        nombre: "Pedro",
        apellido: "Lopez",
        area: "Base de Datos",
        accesoCanva: false
    }
];

const tbody = document.getElementById("tablaUsuarios");

usuarios.forEach(usuario => {

    tbody.innerHTML += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.area}</td>
            <td>${usuario.accesoCanva ? "ON" : "OFF"}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    `;
});

function nuevoUsuario() {

    document
        .getElementById("modalUsuario")
        .style.display = "flex";

}

function cerrarModal() {

    document
        .getElementById("modalUsuario")
        .style.display = "none";

}

function irDashboard() {

    location.reload();

}

function irUsuarios() {

    location.reload();

}

function cerrarSesion() {

    window.location.href =
        "login.html";

}