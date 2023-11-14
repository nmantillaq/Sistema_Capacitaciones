$(document).ready(()=>{
    obtenerParametro();
});

function obtenerParametro(){
    const codigo_Recibido = window.location.search.split("=")[1];
    const programa = Lista_Programas.find(p => p.codigo ==  atob(codigo_Recibido));
    generarInformacion(programa);    
}


function generarInformacion(p){
    $("#id_titulo").text(p.titulo);
    $("#id_descripcion").text(p.descripcion);
    
}