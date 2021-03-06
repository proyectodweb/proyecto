//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productArray = [];

function showProductList(array){
    let htmlContentToAppend = "";
   
    for (let i = 0; i < array.length; i++){


        let product = array[i];
        htmlContentToAppend += `
        
        <a href="product-info.html" class="list-group-item-action">
         
        <div class="card shadow-sm p-3">
            <div class="col-6"> 
                <h4 class="mb-1"><b>` + product.name +` </b> </h4>
                 <img src="` + product.imgSrc + `"alt="" class="img-thumbnail">   
            </div>

            <div class="col-6">
                 <small class="text-muted" >` + product.soldCount +` Vendidos</small>   
            </div>
                
            <div class="col-10">
                 <p class="mb-1">` + product.description +` </p>
            </div>
                    
            <div class="col-12"><b>` + product.currency + "  " + product.cost +` </b>
            </div>
              
        </div> 
         </a>
         <br>
        `
    document.getElementById("cat-list-container").innerHTML= htmlContentToAppend;
    };
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
      productArray = resultObj.data;
      showProductList(productArray);  
      console.log(productArray); 
      //showRelatedImages(productArray.imageSrc)
 
      }
    });
});


function ordenAscendente() {
    productArray.sort((a,b) =>{
    if (a.cost > b.cost){
     return 1;
    }
    if (a.cost < b.cost){
        return -1;
    }else {
     return 0;
    }
    });

    showProductList(productArray)
}

function ordenDescendente() {
    productArray.sort((a,b) =>{
    if (a.cost < b.cost){
     return 1;
    }
    if (a.cost > b.cost){
        return -1;
    }else {
     return 0;
    }
    });

    showProductList(productArray);
    
    }

    function filtrar(){
        var minimo = parseInt(document.getElementById("minimo").value);
        var maximo = parseInt(document.getElementById("maximo").value);

        let filtrados = [];

        for(let product of productArray) {
            if (product.cost >= minimo && product.cost <= maximo){
                filtrados.push(product);
            }
        }
        showProductList(filtrados);
    }

    function relAscendente() {
     productArray.sort((a,b) => {
         if (a.soldCount > b.soldCount) {
             return 1;
         }
         if (a.soldCount < b.soldCount) {
             return -1;
         }else{
             return 0;
         }
     });

     showProductList(productArray);
    }

    let coincidentes = [];
    
    function buscar(){
        let buscado = document.getElementById("buscador").value; //obteno lo que escribi del campo buscar
        
        let coincidentes = productArray.filter(product => {
            return product.name.toLowerCase().indexOf(buscado.toLowerCase()) > -1 ||
            product.description.toLowerCase().indexOf(buscado.toLowerCase()) > -1;
        })
        showProductList(coincidentes);
    };

    document.getElementById("buscador").addEventListener("keyup", () => {
        buscar();
    });