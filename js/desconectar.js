function desconectar(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    localStorage.clear();
    sessionStorage.clear();
    usuario.estado="desconectado";
    location.href= "login.html"
    signOut();               
}
// csi deshabilito sign out --con local host al desconectar me vuelve al index. de la otra forma no
// si uso signout y sin local host el boton desconectar no anda, y con el bot de google tampoco

function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
          auth2.desconectar();
          
      });
      
    }
    function onLoad() {
        gapi.load('auth2', function() {
            gapi.auth2.init();
        });
    }
   