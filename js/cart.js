var articulos = [];


function showCart(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {

        let compras = array[i];

        htmlContentToAppend += `
        <hr>
        <div class="row">
                        <div class="col-3 carri">
                            <h6>`+ compras.name + `</h6>
                           <img src="` + compras.src + `" class="img-thumbnail">    
                        </div>
                                   
                        <div class="col-2 carri"><b>` + compras.unitCost + ` </b> </div>
                        <div class="col-2 carri"><b>` + compras.currency + ` </b> </div>
                        <div class="col-2 carri"><b>` + compras.count + ` </b> </div>
                        <div id="subT" class="col-2 carri"><b>` + + ` </b> </div>
          </div>
         
          `
        document.getElementById("mostrarcarrito").innerHTML = htmlContentToAppend;
    };
}

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

function subTotal() {
    
    let subtotal = compras.unitCost * compras.count

    
}
