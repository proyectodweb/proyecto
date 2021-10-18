var articulos = [];


function showCart(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {

        let compras = array[i];
        cantP = compras.count;
        htmlContentToAppend += `
        <hr>
        <div class="row">
                        <div class="col-4 carri">
                            <h6>`+ compras.name + `</h6>
                            <button type="button" id="trash"> <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>
                            <img src="` + compras.src + `" class="img-thumbnail imgcarrito" id="img-carrito">
                        </div>
                                   
                        <div class="col-2 carri"><b>` + compras.currency + ` </b> </div>
                        <div class="col-2 carri"><b>` + compras.unitCost + ` </b> </div>
                        <div class="col-2 carri"><b>
                        <input type="number" value="` + compras.count + `" min="0" id='cant' onchange='sumar()' size="5"> </b> </div>
                        
                        <div id="subT" class="col-2 carri"><b>` + (compras.unitCost * cantP) + ` </b> </div>
                        
          </div>
       
          `
        document.getElementById("mostrarcarrito").innerHTML = htmlContentToAppend;
    };
}

//SUBTOTAL = MULTIPLICAR LAS VARIABLES DENTRO DEL MISMO FOR! HERMOSO!


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            compras = resultObj.data;
            articulos = compras.articles;

                showCart(articulos);

        }
    });
});



function sumar() {

    let cantprod = document.getElementById("cant").value;
    let precprod = document.getElementById("")
}