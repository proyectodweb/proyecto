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
        <div class="col-6">
            <div class="col-6">
            <h4>` + comment.score + `</h4>  
            </div>
            <p class="mb-1"><b>` + comment.description +` </b> </p>
            <h4 class="mb-1">` + comment.user +` </h4>
            <p class="mb-1">` + comment.dateTime +` </p>
            <hr> 
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
