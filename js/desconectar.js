function desconectar(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    localStorage.clear();
    sessionStorage.clear();
    
    location.href= "index.html"
    signOut();               
}
// csi deshabilito sign out --con local host al desconectar me vuelve al index. de la otra forma no
// si uso signout y sin local host el boton desconectar no anda, y con el bot de google tampoco  