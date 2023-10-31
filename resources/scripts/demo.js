
var variableAux; //Inicialización de variables
let variableAux_v2;
const variableAux_v3 = "Mostrando el valor enviado: ";
//Valores que corresponden al sistema o aplicación
    //> Nombre del sistema
    //> Nombre de los módulos

let objeto = {
    nombre:"Certus",
    estudiantes: 1000,
    programas: 100
}

let arreglo = [1,2,3,4,5,6,7,8,9,10]
let arreglo_v2 = [
    {
        nombre:"Certus",
        estudiantes: 1000,
        programas: 100
    },
    {
        nombre:"Certus 1",
        estudiantes: 3000,
        programas: 300
    },
    {
        nombre:"Certus 2",
        estudiantes: 2000,
        programas: 200
    }
]

let funcionAnonima = function(param1, param2, paramx){

    return param1 + param2 + paramx;

}

let funcionAnonima2 = ()=>{};
//Node JS


function llevarAlPrograma(valor) { 
    variableAux_v2 = valor;
    validarVariable(variableAux_v2);
}


function validarVariable(v){

    if (v != 10) {
        //console.log("Mostrando el valor de "+v);

        v = v+1;
        /*v++;
        v+=v;*/
    }
    let gen = "M";

    let validacion = v!=10 ? v = v+1 : 0;  // Operador ternario 

    let genero = gen == "M" ? "Masculino": "Femenino";

    let genero2 ="";
    if(gen == "M"){
        genero2 = "Masculino"
    }else{
        genero2 = "Femenino"
    }


    //array.length = 5
    for(let i=0; i<arreglo_v2.length; i++){
        console.log(arreglo_v2[i].nombre +" tiene n° "+  arreglo_v2[i].estudiantes+" estudiantes");
    }

    
}