var articulos = [];


function showCart(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {

        let compras = array[i];
        //cantP = compras.count;
        htmlContentToAppend += `
        <hr>
        <div class="row">
                        <div class="col-4 carri">
                            <h6>`+ compras.name + `</h6>
                            <button type="button" id="trash"> <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>
                            <img src="` + compras.src + `" class="img-thumbnail imgcarrito" id="img-carrito">
                        </div>
                                   
                        <div class="col-2 carri" id="moneda` + i + `"><b>` + compras.currency + ` </b> </div>
                        <div class="col-2 carri"><b>` + compras.unitCost + ` </b> </div>
                        <div class="col-2 carri"><b>
                        <input type="number" value="` + compras.count + `" min="0" id='cant` + i + `' onchange="multiplicar(` + i + `);" size="5"> </b> </div>
                        
                        <div id="subT` + i + `" "class="col-2 carri"><b>` + (compras.unitCost * compras.count) + ` </b> </div>
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
            subTotales(articulos);
        }
    });
});

function multiplicar(num) {
    
    let subtI = "subT" + num;
    let cantI = "cant" + num;
    

    let cantprod = parseInt(document.getElementById(cantI).value); //esto es variable 
    let precprod = parseInt(articulos[num].unitCost); //esto es fijo
    let monprod = articulos[num].currency

    let resultado = (cantprod * precprod);
    if(monprod === "USD"){
        resultado = (cantprod * precprod * 40); 
    }

    document.getElementById(subtI).innerHTML = resultado + ` $`;

}


function subTotales(num) {
 
let subtI = "subT" + num;

let moneda = articulos.currency;
let subtotales = parseInt(document.getElementById(subtI).value);


  let sumatoria = subtotales;
   document.getElementById("mostrarsubtotal").innerHTML = sumatoria;

}

/*hacer un array
sumar cada i
si curr = USD entonces prec*40*/