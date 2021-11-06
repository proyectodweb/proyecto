//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

  function previewFile() {

  let preview = document.getElementById("foto");
  let file = document.querySelector("input[type=file]").files[0];
  let reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
    document.getElementById("contenido").innerHTML = reader.result;
  }

if (file) {
  reader.readAsDataURL(file);
} else { 
  preview.src = "img/avatar.png";
}
}  


let perfiles = [];

  function guardarPerfil() { 
      
    let perfil = {};
    let preview = document.getElementById("foto");
    
    perfil.nombre = document.getElementById("fname").value;
    perfil.apellido = document.getElementById("lname").value;
    perfil.edad = document.getElementById("age").value;
    perfil.email = document.getElementById("email").value;
    perfil.cel = document.getElementById("cel").value;
    perfil.imagen = preview.src;
    

    localStorage.setItem("users", JSON.stringify(perfil));
    alert("gracias por completar tu perfil!")
    
    }

   perfil.push(perfiles)


    document.addEventListener("DOMContentLoaded", function (e) {
      let preview = document.getElementById("foto");
      let perfil = JSON.parse(localStorage.getItem("user"));//usuario?

      if (perfil != null){

        document.getElementById("lname").value = perfil.nombre
        document.getElementById("age").value = perfil.edad;
        document.getElementById("foto").value = perfil.imagen
      }else{
        preview.src = "img/avatar.png"
      }
    });

    //Modificar perfil//
    
    /*function modificarPerfil() {
      //  alert("modifica tus datos y guardalos nuevamente :)");

        let perfil = JSON.parse(localStorage.getItem("users"));
        document.getElementById("lname").innerHTML = perfil.nombre;

}*/