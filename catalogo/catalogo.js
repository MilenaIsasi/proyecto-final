const SHEET_ID = "1kjCoyRyVpYtSUCLS4p3TpkkAwq1bSO1tsafmdNdk2S4";

const ACCESS_TOKEN =
"ya29.a0Aa4xrXM-lrqOgGwdIJZcJH7fwg6W5z0rw6M4CNHB1c6qytTn5Dz-7JgaCPGjKrcM7X_xJ3x74-7ZAKiEs4cljpJA_L0ptDvqccusfKCf1x3CHvXSOX3_Ug56yIAEkMYlBWb6ZisGF_XN2Pkns9B3AICEdzKiaCgYKATASARASFQEjDvL9taVnjqIk2PePdoErFPDG3w0163";
fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/1kjCoyRyVpYtSUCLS4p3TpkkAwq1bSO1tsafmdNdk2S4/values/almuerzo!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
)
.then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;
  
    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");
  
    for (var i = 0; i < values.length; i++) {
  
        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";
  
        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 
  
        //peso del producto
        const ipesoDeProducto = document.createElement('span'); // creo una constante del peso del producto en donde creamos un elemento SPAN dentro de nuestro documento(html) 
        ipesoDeProducto.className = 'item peso';
        ipesoDeProducto.innerHTML= values[i][1];
  
        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

  
        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);
        producto.appendChild(ipesoDeProducto);
  
  
        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
  });