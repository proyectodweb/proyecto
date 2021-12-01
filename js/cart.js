var articulos = [];
var total = 0;
var resultado = 0;
var auxtotal = 0;
var envio = 0;
costoTotal = 0;

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
          
        auxtotal += (compras.unitCost * compras.count);
        document.getElementById("mostrarcarrito").innerHTML = htmlContentToAppend;
        


        if (articulos[i].currency === "USD"){
        total += parseFloat(array[i].unitCost * document.getElementById("cant" + i).value*40);
    }else{        
            total += parseFloat(array[i].unitCost * document.getElementById("cant" + i).value);}
    
            costoTotal = auxtotal + envio;
    };

    document.getElementById("mostrarsubtotal").innerHTML = auxtotal;

 if(document.getElementById("envioPremium").checked){
     envio = auxtotal * 0.15
 }
 if(document.getElementById("envioExpress").checked){
     envio = auxtotal * 0.07
 }
 if(document.getElementById('envioStandard').checked){
     envio = auxtotal * 0.05
 }
 document.getElementById("costoenvio").innerHTML = (envio).toFixed(2);

 
 
    document.getElementById("costodecompra").innerHTML = costoTotal;
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

    document.getElementById("envioStandard").addEventListener("change",()=> {
        showCart(articulos);
    })

    document.getElementById("envioPremium").addEventListener("change",()=> {
        showCart(articulos);
    })
    document.getElementById("envioExpress").addEventListener("change",()=> {
        showCart(articulos);
    })
});





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

 if(document.getElementById("envioPremium").checked){
     envio = auxtotal * 0.15
 }
 if(document.getElementById("envioExpress").checked){
     envio = auxtotal * 0.07
 }
 if(document.getElementById('envioStandard').checked){
     envio = auxtotal * 0.05
 }
 document.getElementById("costoenvio").innerHTML = (envio).toFixed(2);

 total += auxtotal + envio;
}
//var costo = multiplicar(num);

/*let envioPremium = 0;
let importe = 0;//ACA DEBERIA ESTAAR EL VALOR DE AUXTOTAL
let premium = 0;

function costoPremium() {
    
    let premium = 0.15;

    let envioPremium = parseInt(importe * premium);

    alert('Hola! el costo de tu envio sera de + "envioPremium"')
     envioPremium;

}
/*


function enviar() {
    let envio = 0;
    let radios = document.getElementsByName("envio");// me devuelve coleccion, el array de los radio

    for(let i=0; i < radios.length; i++){
        if (radios[i].checked){
            envio += parseFloat(radios[i].value)/100 * auxtotal;
            document.getElementById("costoenvio").innerHTML = (envio).toFixed(2);
        }
    }
}*/

