var articulos = [];
var total = 0;


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

        if (articulos[i].currency === "USD"){
        total += parseFloat(array[i].unitCost * document.getElementById("cant" + i).value*40);
    }else{        
            total += parseFloat(array[i].unitCost * document.getElementById("cant" + i).value);}
    };
    document.getElementById("mostrarsubtotal").innerHTML = total;
}

//SUBTOTAL = MULTIPLICAR LAS VARIABLES DENTRO DEL MISMO FOR! HERMOSO!


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            compras = resultObj.data;
            articulos = compras.articles;

            showCart(articulos);
           
        }
    }); 
});



var resultado = 0;

function multiplicar(num) {
    
    let subtI = "subT" + num;
    let cantI = "cant" + num;
    

    let cantprod = parseInt(document.getElementById(cantI).value); //esto es variable 
    let precprod = parseInt(articulos[num].unitCost); //esto es fijo
    let monprod = articulos[num].currency;

    let resultado = (cantprod * precprod);
    if(monprod === "USD"){
      resultado = (cantprod * precprod * 40); 
    }

    document.getElementById(subtI).innerHTML = resultado + ` $`;
    let auxtotal = 0;
      for(let j=0; j < articulos.length; j++) {
     
        if (articulos[j].currency === "USD"){
        auxtotal += parseFloat(articulos[j].unitCost * document.getElementById("cant" + j).value * 40);
    }else{
             auxtotal += parseFloat(articulos[j].unitCost * document.getElementById("cant" + j).value);
     }
 } 
 document.getElementById("mostrarsubtotal").innerHTML = auxtotal;
}


/*function subTotales(num) {
 
let subtI = "subT" + num;

let moneda = articulos.currency;
let subtotales = parseInt(document.getElementById(subtI).value);


  let sumatoria = subtotales;
   document.getElementById("mostrarsubtotal").innerHTML = sumatoria;

}*/

/*hacer un array
sumar cada i
si curr = USD entonces prec*40 
*/