//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function verificar(){    
let dato = document.getElementById("usuario");
let usuario = {};

let pass = document.getElementById("pwd");

if (dato.value.trim()=== '' || dato.value.trim()=== '')
{
    alert("Ingresa tu nombre y contraseña para comenzar!");
} else{

    location.href ="index.html";
    usuario.nombre =dato.value;
    usuario.estado ="Conectado";

    localStorage.setItem('usuario',JSON.stringify(usuario));
}
};

document.addEventListener("DOMContentLoaded", ()=>{
 let usuario = JSON.parse(localStorage.getItem("usuario"));
if (usuario.estado==='conectado') {
location.href= "index.html";
}
})

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  

// function desconectar (){
//    localStorage.clear();
//    location.href ="index.html"
//}