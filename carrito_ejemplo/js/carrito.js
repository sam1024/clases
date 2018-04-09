let in_storage = true;
var articulos = [
  {
    id: 1,
    foto: "img/alien.jpeg",
    descripcion: "DELL Alienware LAP15 Ci5-7300 8GB 1TB",
    precio: "45,664.56"
  },
  {
    id: 2,
    foto: "img/pc.jpg",
    descripcion: "Lanix TITAN Ci5-7300 8GB 1TB",
    precio: "25,664.56"
  },
  {
    id: 3,
    foto: "img/lap.jpg",
    descripcion: "LAP15 Ci5-7300 8GB 1TB",
    precio: "15,664.56"
  },
  {
    id: 4,
    foto: "img/imac.jpg",
    descripcion:"iMAC Apple Ci5-7300 8GB 1TB",
    precio: "65,664.56"
  },
  {
    id: 5,
    foto: "img/dimm.jpg",
    descripcion: "Memoria RAM DDR4 8GB",
    precio: "664.56"
  },
  {
    id: 6,
    foto: "img/sodimm.jpg",
    descripcion: "Memoria SODIMM DDR3 4GB",
    precio: "454.56"
  },
  {
    id: 7,
    foto: "img/ssd.jpg",
    descripcion: "SSD Kingston 1TB",
    precio: "5,664.56"
  },
  {
    id: 8,
    foto: "img/tablets.jpg",
    descripcion: "Tablet 16GB",
    precio: "8,664.56"
  }
];

$(function() {
  /**** ESTE FOR ES PARA CARGAR LOS DATOS DEL ARREGLO articulos EN LA PAGINA ****/
  for(i = 0; i < articulos.length; i++) {
    $("#lst_articulos").append(
      '<div class="card">',
      '<img src="' + articulos[i].foto + '" alt="">',
      '<p class="descripcion">' + articulos[i].descripcion + '</p>',
      '<p class="precio">$' + articulos[i].precio + '</p>',
      '<button class="btn_addcart" id="add" onClick="addCart(' + articulos[i].id + ');" >Agregar al carrito</button>',
      '</div>'
    );
  }

  /**** ESTA CONDICION COMPRUEBA SI TENEMOS DATOS ALMACENADOS EN EL localStorage ****/
  if (localStorage.getItem("articulo") === null) {
      $("#num_items_cart").html("0");
      in_storage = false;
  }
});

/**** ESTA FUNCION AGREGA LOS ELEMENTOS AL CARRITO ****/
function addCart(id_articulo) {
  let arr_tmp = [];

  /**** ALMACENAR EN UN ARREGLO LOS DATOS QUE TENEMOS EN EL localStorage ****/
  if(in_storage) {
    arr_tmp.push(JSON.parse(localStorage.getItem("articulo")));
  }

  /* CON EL METODO find DEL ARREGLO BUSCAMOS EL ARTICULO, ESTE METODO RECIBE COMO PARAMETRO UNA FUNCION,
  EN ESTE CASO LE ESTAMOS PASANDO UNA FUNCION DE FLECHA Y LE PASMOS UN PARAMETRO (id_find)
  ESTE METODO GUARDARA EN FORMATO JSON LOS DATOS ENCONTRADOS EN LA CONSTANTE resultado, ESTA BUSQUEDA
  SE HARA MEDIANTE EL ID (VARIABLE id_articulo), EN CASO DE QUE EL ID QUE BUSQUEMOS NO EXISTA NOS REGRESARÁ
  EL VALOR DE undefined */
  const resultado = articulos.find(id_find => id_find.id == id_articulo );

  /**** ANTES DE AGREGAR AL ARREGLO EL CONTENIDO DE LA CONSTANT resultado USA UN IF PARA COMPROBAR
  QUE ESTA NO SEA undefined ****/
  arr_tmp.push(resultado);

  localStorage.setItem("articulo", JSON.stringify(arr_tmp));
}
