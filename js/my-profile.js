//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function (e) {

//});

let perfiles = [];
let perfil = {};
    function guardarPerfil() { 
      // let dato = document.getElementById("nombre");
    let perfil = {};

    perfil.nombre = document.getElementById("fname").value;
    perfil.apellido = document.getElementById("lname").value;
    perfil.email = document.getElementById("email").value;
    perfil.cel = document.getElementById("cel").value;
    perfil.edad = document.getElementById("age").value;
       // perfil.imagen = document.getElementById("perfiimg")
    

    localStorage.setItem("perfiles", JSON.stringify(perfil));
    
//vaciar campos
//    document.getElementById("fname").value = "";
//    document.getElementById("lname").value = "";
//    document.getElementById("email").value = "";
 //   document.getElementById("cel").value = "";
 //   document.getElementById("age").value = "";
    }

    perfil.push(perfiles)

    /*function modificarPerfil() {
        alert("modifica tus datos y guardalos nuevamente :)");

        //let perfil = JSON.parse(localStorage.getItem("perfiles"));

        document.getElementById("fname").innerHTML = perfil.nombre;
    }*/