//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function (e) {

//});

let perfiles = [];

    function guardarPerfil() { 
       let dato = document.getElementById("nombre");
    let usuario = {};

    usuario.nombre = document.getElementById("fname").value;
    usuario.apellido = document.getElementById("lname").value;
    usuario.email = document.getElementById("email").value;
    usuario.cel = document.getElementById("cel").value;
    usuario.edad = document.getElementById("age").value;

    

    localStorage.setItem("perfil", JSON.stringify(usuario));
    
//vaciar campos
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cel").value = "";
    document.getElementById("age").value = "";
    }

    usuario.push(perfiles);

    