const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", () => {

    const id = document.getElementById("idUsuario").value;
    const apellido = document.getElementById("apellido").value;

    console.log("ID:", id);
    console.log("Apellido:", apellido);

    window.location.href = "gerente.html";

});