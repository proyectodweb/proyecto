var articulos = [];


function showCart(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        
        let compras = array[i];

        htmlContentToAppend += `
        <a href="product-info.html" class="mostrarcarrito">
        <div class="row">
                            <div class="col-3">
                           <img src="` + compras.src + `"alt="` + compras.name + `" class="img-thumbnail">    
                   </div>
                   <div class="col">
                      
                           <div class="w-100"><b>` + compras.currency + "  " + compras.unitCost +` </b>
                           </div>
                    </div>
              </div>
          </div>
          </a>
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

          /*  let cartName = document.getElementById("cartname");
            let cartUnitCost = document.getElementById("cartunitcost");
            let cartCount = document.getElementById("cartcount");
            let cartCurr = document.getElementById("cartcurr");
           let cartSub = document.getElementById("cartsub");

            cartName.innerHTML = compras.articles.name;
            cartUnitCost.innerHTML = compras.articles.unitCost;
            cartCount.innerHTML = compras.count;
            cartCurr.innerHTML = compras.currency;*/

            showCart(articulos);
           
        }
    });
});