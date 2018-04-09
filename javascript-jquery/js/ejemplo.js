/**** EJEMPLO 4 SCRIPT EN UN ARCHIVO EXTERNO ****/
//alert("Archivo externo!!!")
(function() {
  /*var var = "ALERTA!!";
  console.log(var);*/

  /**********************************************************************/
  /**************************    VARIABLES    ***************************/
  /**********************************************************************/

  //DECLARACIÓN DE UNA VARIABLE
  var edad;

  /**** ASIGNANDO UN VALOR A LA VARIABLE ****/
  edad = 30;

  /**** DECLARACIÓN Y ASIGNACION DE UNA VARIABLE ****/
  var edad = 30;
  name = "Sam"
  console.log(name + " " + edad);

  /**** DECLARACIÓN DE VARIAS VARIABLES EN UNA MISMA LINEA ****/
  var edad, peso, altura, nombre;

  /**** ASIGNANDO VALOR A LAS VARIABLES ****/
  edad = 30;
  peso = 80;
  altura = 1.69;
  nombre = "Sam";

  /**** DECLARACIÓN Y ASIGNACION DE VARIAS VARIABLE ****/
  var edad = 30, peso = 80, altura = 1.69, nombre = "Sam";
  console.log(`Edad ${edad} Peso ${peso} Altura ${altura}`);

}());

/****************************************************************/
/********************  CONCATENANDO ELEMENTOS  ******************/
/****************************************************************/

let cadena1 = "soy la variable 1", cadena2 = "soy la variable 2", num1 = 1024, num2 = 25.63;
console.log("La variable cadena1 vale: " + cadena1 + " la variable num1 vale: " + num1);
console.log('La variable cadena2 vale: ' + cadena2 + ' la variable num2 vale: ' + num2);
console.log(`La variable num1 vale: ${num1} la variable cadena2 vale: ${cadena2}`);

/**** TIPOS DE DATOS ****/
let numero_entero = 24;
console.log(numero_entero);

let numero_decimal = 56.932;
console.log(numero_decimal);

let bool = true;
console.log(bool);

let cadena_minus = "hola", cadena_mayus = "ADIOS";
console.log("cadena_minus a mayusculas: " + cadena_minus.toUpperCase() + "\ncadena_mayus a minusculas: " + cadena_mayus.toLowerCase());

/****************************************/
/**** OPERADORES ARITMETICOS BASICOS ****/
/****************************************/

console.log("El resultado de multiplicar 9 * 74 = " + (9 * 74));
console.log("El resultado de dividir 48 / 7 = " + (48 / 7));
console.log("El resultado de sumar 2 + 56 = " + (2 + 56));
console.log("El resultado de restar 24 - 16 = " + (24 - 16));


/*******************************************/
/********  SENTENCIA if...else   ***********/
/*******************************************/

let edad = 18;
if (edad >= 18)
  console.log("Mayor de edad");
else
  console.log("Menor de edad");

/**** if...else ANIDADOS ****/
let edad = 18;
if(edad < 0)
  console.log("La edad no puede ser menor a 0 ");
else if (edad >= 110)
  console.log("No creo que tengas esa edad");
else if (edad >= 18)
  console.log("Mayor de edad");
else
  console.log("Menor de edad");


/*********************************************/
/********  SENTENCIA switch  *****************/
/*********************************************/

let foo = 0;
switch (foo) {
  case -1:
    console.log("Es negativo");
    break;
  case 0:
    console.log(0);
    //break; /**** SI SE OMITE EL break EL PROGRAMA SIGUE EJECUTANDOSE HASTA ENCONTRAR EL SIGUIENTE break ****/
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("La opción no existe");
    break;
}


/**********************************************/
/***********  SENTENCIA do...while  ***********/
/**********************************************/

i = 0;
do {
  console.log("Iteracion: " + i);
  i++;
} while(i < 9);


/*************************************************/
/***************  SENTENCIA for  *****************/
/*************************************************/

/*for(var i = 0; i < 9; i++) {
	console.log("1 * " + (i + 1) + " = " + 1 * (i + 1));
}*/

/************************************************************************************/
/****** PROPONERLES QUE REALICEN UN CICLO QUE PINTE UNA TABLA DE MULTIPLICAR ********/
/************************************************************************************/

for(var i = 0; i < 9; i++) {
	console.log("En la vuelta " + (i + 1) + " i vale: " + i);
}


/*********************************************************/
/*******  SENTENCIA for...in ITERA SOBRE OBJETOS  ********/
/*********************************************************/

/**** LA DIFERENCIA DE ESTE BUCLE Y EL for...of ES QUE EN ESTE LA VARIABLE QUE CREAMOS EN EL BUCLE TOMA EL VALOR DEL INDICE Y NO EL DE EL ELEMENTO ****/
let empleado = {Nombre: "Sam", Apellido: "Abn", Puesto: "Gerente"};//ESTE ES UN OBJETO JSON NO UN ARREGLO
for(let i in empleado) {
  console.log(empleado[i]);
}


/****************************************************************/
/**** SENTENCIA for...of ITERA SOBRE ARREGLOS O ITERABLES  ******/
/****************************************************************/

/**** LA DIFERENCIA DE ESTE BUCLE Y EL for...in ES QUE EN ESTE LA VARIABLE QUE CREAMOS EN EL BUCLE TOMA EL VALOR DE LOS ELEMENTOS Y NO EL INDICE ****/
let frutas = ["Manazan", "Pera", "Uva"];
for(let fruta of frutas) {
  console.log(fruta);
}

/**** ITERANDO SOBRE UN ARREGLO DE OBJETOS JSON ****/
var arr = [{id: 1, name: "Sam"}, {id: 2, name: "Mireya"}];
for(var a of arr) {
  console.log(a);
  console.log(a.name);
}


/***********************************************************/
/*****************  SENTENCIA while  ***********************/
/***********************************************************/

let n = 5;
while(n < 10) {
  console.log("en la vuelta " + n + " n vale: " + n);
  n++;
}


/*******************************************************************************************/
/*******************************      ARREGLOS      ****************************************/
/*******************************************************************************************/

//DECLARAR UN ARREGLO
let arr = [];

//DECLARAR UNA ARREGLO E INICIALIZARLO
let arr = ["uno", "dos", "tres"];

//RECORRIENDO UN ARREGLO CON UN CICLO forEach

arr.forEach( (elemento, indice) => console.log(elemento,indice) );

arr.forEach(function(elemento, indice) {
  console.log(elemento, indice);
});

//AGREGAR UN ELEMENTO AL FINAL DEL ARREGLO
arr.push("cuatro");

//AGREGAR UN ELEMENTO AL INCIO DEL ARREGLO
arr.unshift("cero");

//ELIMINA EL ELEMENTO AL FINAL DEL ARREGLO
arr.pop();

//ELIMINA EL ELEMENTO AL INICIO DEL ARREGLO
arr.shift();

//DEVUELVE EL INDICE DEL ELEMENTO
arr.indexOf("tres");

//ELIMINA LOS ELEMENTOS A PARTIR DE LA POSICION QUE LE MANDEMOS, EL PRIMER PARAMETRO HACE REFERENCIA A LA POSICION Y EL SEGUNDO AL NUMERO DE ELEMENTOS A ELIMINAR
arr.splice(2, 2);

//ELIMINA LOS ELEMENTOS A PARTIR DE LA POSICION QUE LE MANDEMOS, AGREGA EL ELEMENTO "dos" EN LA POSICION 2
arr.splice(2, 2, "dos");

//COPIA UN ARREGLO A OTRO
let arr_copia = arr.slice();

/**** DECLARA UN ARREGLO DE OBJETOS JSON ****/
let arr_json = [{id: 1, desc: "articulo", precio:456.09}, {id: 2, desc: "articulo2", precio:456.70}, {id: 3, desc: "articulo3", precio:756.30}]

/**** BUSCAR UN ID DENTRO DEL ARREGLO DE OBJETOS JSON ****/
let id_a_buscar = 3;//EN ESTA VARIABLE DEFINIMOS QUE ID QUEREMOS BUSCAR
let founds = arr_json.find( find_id => find_id.id == id_a_buscar);/* EL find_id DESPUES DE => ES LA MISMA VARIABLE QUE LE ESTAMOS PASANDO COMO PARAMETRO,
ESTA HACE REFERENCIA AL OBJETO QUE ACTUALMENTE EL METODO find ESTA PROCESANDO, ES POR ESO QUE MEDIANTE EL OPERADOR . PODEMOS ACCEDER A SUS ELEMENTOS */


/********************************************************************************************/
/************************                FUNCIONES                ***************************/
/********************************************************************************************/
function ejemplo() {
	console.log("funcion de ejemplo!!");
}

function ejemploDos(msj) {
	 return "funcion de ejemplo 2, recibi un parametro, su valor es: " + msj;
}

//MANDO A LLAMAR UNA Funcion
ejemplo();
ejemploDos("Saludos!!");

/**** FUNCION CON UN NUMERO DE PARAMETROS VARIABLE USANDO SPREAD OPERATOR ****/
function suma(...numeros) {
  console.log(numeros);
}
suma(4, 5,6 ,7,9);

//FUNCION ANONIMA ESTAS GENERALMENTE SE USAN CUANDO QUEREMOS EJECUTAR ALGO AL CARGAR UNA PAGINA html
(function() {
  console.log("ANONIMA");
}());

//FUNCION DE FLECHA
let msj = (saludo) => console.log(saludo);
let suma = (num1, num2) => { return num1 + num2; }

//MANDO A LLAMAR A LA FUNCION
console.log(msj("hola"));
console.log(suma(25, 36));


/********************************************************************************************/
/********                SCOPE O ALCANZE DE LAS VARIABLES                ********************/
/********************************************************************************************/

/********************************************************************************************/
/********           DECLARANDO LAS VARIABLES CON LA PALABRA RESERVADA var       *************/
/********************************************************************************************/
var nombre = "Sam"; //VARIABLE GLOBAL, SCOPE GLOBAL, TODO EL CODIGO DE ABAJO TENDRA ACCESO A ESTA VARIABLE

function saludar() {
  console.log(`Hola ${nombre}`);//ESTOY HACIENDO REFERENCIA A LA VARIABLE GLOBAL nombre, AUNQUE NO LA HAYA RECIBIDO COMO PARAMETRO
}
saludar();

function saludar(nombre) {//QUE PASA SI RECIBO UN PARAMETRO CON EL MISMO NOMBRE QUE LA VARIABLE GLOBAL???
  console.log(`Hola ${nombre}`);/*QUE VALOR TOMARÁ AQUÍ?, LA VARIABLE GLOBAL? O LA CONVERTIRA A VARIABLE LOCAL?, YA QUE EN JS LAS VARIABLES SE
  PASAN POR VALOR, ESTA FUNCION TOMARÁ LA VARIABLE COMO LOCAL*/
}

saludar("Antonia");//IMPRIMIRÁ Hola Antonia
console.log("Valor variable global nombre: " + nombre);//IMPRIMIRÁ Sam*/

function saludar() {
  var nombre = "Antonia";//QUE PASA SI DENTRO DE LA FUNCION DECLARO UNA VARIABLE CON EL MISMO NOMBRE???
  var prueba = "SCOPE";//ESTA VARIABLE NO ES VISIBLE FUERA DE LA FUNCION
  console.log(`Hola ${nombre}`);/*QUE VALOR TOMARÁ AQUÍ?, LA VARIABLE GLOBAL? O LA LA VARIABLE LOCAL? YA QUE EN JS LAS VARIABLES DECLARADAS
  CON var DEPENDEN DEL SCOPE DONDE SE ENCUENTRE, SE TOMARÁ EL VALOR DE LA VARIABLE LOCAL*/
}

saludar();//IMPRIMIRÁ Hola Antonia
console.log(prueba);
console.log("Valor variable global nombre: " + nombre);

function saludar() {
  nombre = "Antonia";/*QUE PASA SI DENTRO DE LA FUNCION LE ASIGNO UN NUEVO VALOR A LA VARIABLE GLOBAL???*/
  console.log(`Hola ${nombre}`);/*QUE VALOR TOMARÁ AQUÍ? JS VA A BUSCAR PRIMERO DENTRO DE LA FUNCION SI TENEMOS DECLARADA LA VARIABLE, SI NO LA
  ENCUENTRA "SUBIRA" UN SCOPE ARRIBA A BUSCARLA Y AL ENCONTRARLA USARÁ ESA VARIABLE*/
}

saludar();//IMPRIMIRÁ Hola Antonia
console.log("Valor variable global nombre: " + nombre);

function saludar() {
  if(true) {
    var nombre = "Antonia";/*QUE PASA SI DENTRO DE UN if QUE TENGO DECLARADO EN LA FUNCION DEFINO UNA NUEVA VARIABLE CON EL MISMO NOMBRE QUE
    LA GLOBAL???*/
  }
  console.log(`Hola ${nombre}`);/*YA QUE ESTAMOS HACIENDO REFERENCIA A LA VARIABLE nombre FUERA DEL if, QUE VALOR TOMARÁ AQUÍ? EN CASOS COMO ESTE
  JS "SACA" LA DECLARACIÓN DE LA VARIABEL DEL IF Y LA PONE DENTRO DEL SCOPE DE LA FUNCION (ABAJO DE LA { DE APERTURA DE LA FUNCION) Y LA TOMA
  COMO VARIABLE LOCAL, ESTO EN JS SE CONOCE COMO HOISTING Y CONSISTE EN QUE TODAS LAS VARIABLES QUE SE DECLAREN DENTRO DEL SCOPE DE LA FUNCION
  SE SUBEN A LA PRIMERA LINEA DE DICHA FUNCION*/
}

saludar();//IMPRIMIRÁ Hola Antonia
console.log("Valor variable global nombre: " + nombre);



/********************************************************************************************/
/********           DECLARANDO LAS VARIABLES CON LA PALABRA RESERVADA let       *************/
/********************************************************************************************/
function saludar10(nombre) {
  for (var i = 0; i < 10; i++) {//DECLARANDO LA VARIABLE i DENTRO DEL BUCLE USANDO var
    console.log(`Hola ${nombre}`);
  }
  console.log(`Valor de la variable i: ${i}`);/*QUE VALOR TENDRA i???? EL VALOR ES 10 POR QUE AUNQUE DECLAREMOS LA VARIABLE i DENTRO DE UN for
  SU SCOPE ES LA FUNCION YA QUE EL for ESTÁ ADENTRO DE ESTA Y DEBIDO A EL HOISTING ES COMO SI LA VARIABLE i ESTUVIERA DECLARADA EN LA PRIMERA LINEA*/
}

saludar10(nombre);

function saludar10(nombre) {
  for (let i = 0; i < 10; i++) {//DECLARANDO LA VARIABLE i DENTRO DEL BUCLE USANDO let
    console.log(`Hola ${nombre}`);
  }
  console.log(`Valor de la variable i: ${i}`);/*QUE VALOR TENDRA i???? MUESTRA EL ERROR i is not defined, POR QUE let SE USA PARA VARIABLES DE BLOQUE
  QUE SOLO EXISTEN DENTRO DEL SCOPE O CONTEXTO DE LAS {} DE DONDE SE HA DEFINIDO.*/
}

saludar10(nombre);

/********************************************************************************************/
/************************                 USANDO WEB STORAGE       **************************/
/********************************************************************************************/

/**** GUARDANDO DATOS CON EL METODO setItem() ****/
localStorage.setItem("prueba", "Es una prueba");

/**** OBTENIENDO DATOS CON EL METODO getItem() ****/
console.log(localStorage.getItem("prueba"));

/**** LISTAR TODOS LOS DATOS ALMACENADOS DON EL METODO key() ****/
for(let i=0, t=localStorage.length; i < t; i++) {
    key = localStorage.key(i);
    console.log('Para la clave ' + key + ' el valor es: ' + localStorage[key]);
}

/**** ELIMINANDO UN REGISTRO DEL ALMACEN CON EL METODO removeItem() ****/
localStorage.removeItem("prueba");

/**** ELIMINANDO TODOS LOS REGISTROS DEL ALMACEN CON EL METODO clear() ****/
localStorage.clear();
























































































/*let res = buscar(id) => {id.indexOf(1)};

var arr = [{id: 1, name: "Sam"}, {id: 2, name: "Mireya"}];
for(var a in arr) {
  console.log(arr[a]);
}

var arr_array = new Array({id: 1, name: "Sam"}, {id: 2, name: "Mireya"});
const res = arr_array.find(id_art => id_art.id === 1);
console.log(res);
for( a of arr) {
  console.log(a);
}*/
