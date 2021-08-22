//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function verificar(){    
let dato = document.getElementById("usuario");
let usuario = {};

let pass = document.getElementById("pwd");

if (dato.value.trim()=== '' || pass.value.trim()=== '')
{
    alert("Ingresa tu nombre y contraseña para comenzar!");
} else{

    location.href ="principal.html";
    usuario.nombre =dato.value;
    usuario.estado ="conectado";

    localStorage.setItem('usuario',JSON.stringify(usuario));
}
};

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
  /*  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
*/

usuario.nombre=profile.getName();
usuario.estado= "conectado"
localStorage.setItem('usuario',JSON.stringify(usuario));
location.href= "principal.html"
}
/*
document.addEventListener("DOMContentLoaded", ()=>{
 let usuario = JSON.parse(localStorage.getItem("usuario"));
if (usuario.estado==='conectado') {
location.href= "index.html";
}
})
*/