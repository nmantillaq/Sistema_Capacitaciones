$(document).ready(()=>{
    mostrarProgramas();    
});


function mostrarProgramas(){
    $("#ID_primeraFila").empty();

    for(let i=0; i< Lista_Programas.length; i++){
        $("#ID_primeraFila").append(
            '<div class="card">'+
                '<div class="row p-2">'+
                    '<div class="col-4">'+
                    '<img src="'+Lista_Programas[i].uri_imagen+'" class="card-img-top">'+
                    '</div>'+
                    '<div class="col-8">'+
                        '<h5 class="card-title fondo-color">'+Lista_Programas[i].titulo+'</h5>'+
                        '<p class="card-text">'+Lista_Programas[i].descripcion+'</p>'+
                        '<div>'+
                            '<a id='+Lista_Programas[i].codigo+' class="dp btn btn-sm btn-outline-success">Ver detalle</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' 
        );

    }
    enviar();

}

function enviar(){
    $(".dp").on("click", function (){

        let codigo_elegido = $(this).attr("id");  //$(this).attr("class").split(" ")[0];

        console.log( codigo_elegido );
        console.log("Llegó hasta acá");

        window.location = "./modulos/programa.html?CODP="+ btoa(codigo_elegido);
        
    });
}

/*
"Hola Como estas"

["Hola", "Como", "estas"]
  0        1        2  <= Indices
*/




//$("#ID_primeraFila").empty();
