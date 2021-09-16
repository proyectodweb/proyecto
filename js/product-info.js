var product = {};

function showDetails(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
 document.addEventListener("DOMContentLoaded", function(e){
     getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
product = resultObj.data;

let productName = document.getElementById("producto.nombre");
let productDescription = document.getElementById("producto.descripcion");
let productCurr = document.getElementById("producto.moneda");
let productCost = document.getElementById("producto.precio");

productName.innerHTML = product.name;
productDescription.innerHTML = product.description;
productCurr.innerHTML = product.currency;
productCost.innerHTML = product.cost;


showDetails(product.images)
        }
     });
    
});





var commentArray = [];

function showCommentList(array){
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++){
        let comment = array[i];

        htmlContentToAppend +=`
        <div class="col-12">
            <div  style="margin-top: 15px">
            <h6 style="text-align: right">` + gemas(comment.score) + `</h6>  
            </div>
            <div>
            <p class="mb-1"> `+ comment.description +` </p>
            <h6 class="mb-1">` + comment.user +` </h6>
            <p class="mb-1" style="text-align: right" >` + comment.dateTime +` </p>
            <hr> 
            </div>
        </div>

        `
        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
    };
}


document.addEventListener("DOMContentLoaded", function(e){
    //function showCommentList(){  
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
            if (resultObj.status === "ok") {
                commentArray = resultObj.data;
     showCommentList(commentArray);
    console.log(commentArray);
     }
        });
    });

var star = 1;
//FORMULARIO
function envia(){

let comentario = {};
let usuario = JSON.parse(localStorage.getItem('usuario'))
let fecha = {};


comentario.user = usuario.nombre;
comentario.score = document.getElementById("star").value;
comentario.description = document.getElementById("commentario").value;
comentario.dateTime = new Date()

commentArray.push(comentario);
showCommentList(commentArray);
}


//usar diamantes para calificar!
function gemas(numero) {
    let diamantes = ""; //texto vacio

    for (let i=1; i<=5; i++){

        if (i<=numero){
            diamantes += '<i class="fas fa-gem"></i>';
        }else{
            diamantes += '';//<i class="far fa-gem"></i>
        }
    }
    return diamantes;
}