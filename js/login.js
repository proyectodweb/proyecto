//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function verificar(){
let dato = document.getElementById("user");
let usuario = {};
let pass = document.getElementById("pwd");

if ((dato.value.trim() === '')) || (pass.value.trim() ===''))
{
    alert("Ingresa tu nombre y contraseña para comenzar!");
}else {
    location.href ="index.html";
    usuario.nombre =dato.value;
    usuario.estado ="Conectado"

    localStorage.setItem('usuario',JSON.stringify(usuario)),
}
});
function desconectar (){
    localStorage.clear();
    location.href ="index.html"
}