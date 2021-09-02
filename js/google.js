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
  
  function onLoad() {
      gapi.load('auth2', function() {
          gapi.auth2.init();
      });
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
   auth2.desconectar();
   // let usuario = JSON.parse(localStorage.getItem("usuario"));*/
    localStorage.clear();
    sessionStorage.clear();
    location.href= "index.html"
    
    });
        
  }
  //signOut()
 /* usuario.nombre=profile.getName();
usuario.estado= "conectado"
localStorage.setItem('usuario',JSON.stringify(usuario));
location.href= "principal.html"
}*/