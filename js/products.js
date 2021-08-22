//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
getJSONData(PRODUCTS_URL).then(function(resultObj) {
    if (resultObj.status === "ok") {
    categoriesArray = resultObj.data;
    showCategoriesList(categoriesArray);    
    }
}
);
});

var categoriesArray = [];

function showCategoriesList(array){
    let htmlContentToAppend = "";

    for (let i = 0; i < array.lenght; i++)
    {

        let product = array[i];
        htmlContentToAppend +=`
        <div class="list-group-item list-group-item-action">
            <div class="row">
         
                <div class="col-3">
                <img src="` + product.imgSrc + `"alt="` + product.description + `" class="img-thumbnail">
                </div>     
                 </div>
                    <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1"><b>` + product.name +` </b> </h4>
                        <small class="text-muted">` + product.soldCount +` Vendidos</small>
                    </div>
                    <p class="mb-1">` + product.description +` </p>
                         <div class="w-100"><b>` + product.currency + "  " + product.cost +` </b>
                         </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML= htmlContentToAppend;
    }
}