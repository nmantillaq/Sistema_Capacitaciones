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
                            '<a class="'+Lista_Programas[i].codigo+' detalleX btn btn-sm btn-outline-success">Ver detalle</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' 
        );

    }
    enviar();

}

function enviar(){
    $(".detalleX").on("click", function (){
        console.log("Llegó hasta acá");
        window.location = "./modulos/programa.html";
        
    });
}




let Lista_Programas = [
    {
        codigo: "P001",
        titulo: "Programa 01",
        duracion: function(){
            return this.nroCursos.length * 8 +" h"
        },
        nroCursos: ["C001"],
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste necessitatibus id recusandae commodi doloribus nam nesciunt, quae sunt dolores",
        uri_imagen: "https://i.blogs.es/0cafeb/naruto/840_560.jpeg"
    }
    ,
    {
        codigo: "P002",
        titulo: "Programa 02",
        duracion: function(){
            return this.nroCursos.length * 8 +" h"
        },
        nroCursos: ["C001", "C004"],
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste necessitatibus id recusandae commodi doloribus nam nesciunt, quae sunt dolores",
        uri_imagen: "https://i.blogs.es/0cafeb/naruto/840_560.jpeg"
    },
    {
        codigo: "P003",
        titulo: "Programa 03",
        duracion: function(){
            return this.nroCursos.length * 8 +" h"
        },
        nroCursos: ["C001", "C002", "C003"],
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste necessitatibus id recusandae commodi doloribus nam nesciunt, quae sunt dolores",
        uri_imagen: "https://i.blogs.es/0cafeb/naruto/840_560.jpeg"
    },
    {
        codigo: "P004",
        titulo: "Programa 04",
        duracion: function(){
            return this.nroCursos.length * 8 +" h"
        },
        nroCursos: ["C001","C002", "C003", "C005"],
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste necessitatibus id recusandae commodi doloribus nam nesciunt, quae sunt dolores",
        uri_imagen: "https://i.blogs.es/0cafeb/naruto/840_560.jpeg"
    }


];

//$("#ID_primeraFila").empty();
