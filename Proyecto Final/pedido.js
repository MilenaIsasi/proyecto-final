const ACCESS_TOKEN =
"ya29.a0Aa4xrXOVcGP1jUBU2hulNM_0r4lW4MYp1vTABq_--zpWeef2x6r-B3_hl5OhjBXiekjK8jp-6bkSdfjh4O9SEtkZib8WW3lZQrXYtEjHn4chi-iQPUBA-GRhdY2ktYxnDTXXSBAx0X3aaZ5fhkjgG878HKxwaCgYKATASARASFQEjDvL9D8MBqhPbSilRH7iZ9slpGg0163" ;

const SHEET_ID = '1IIpIkaKMIiTAqBPRAQoYt1xvJQilCaurroqSw8qNTzU';


document.getElementById('fecha').valueAsDate = new Date();




function onRegistrarPedido() {
//del formulario los siguientes datos, mediante una constante tengo fehca, mediodepago etc
const fecha = document.getElementById('fecha').value;  //obtenemos un elemento atraves del id , value hace que se retorne el valor que se agrega y guarda 
const medioPago = document.getElementById('medio-pago').value;
const cantidad = document.getElementById('en-cantidad').value;
const producto = document.getElementById('producto').value;
const hora = document.getElementById('hora-entrega').value;
const numero = document.getElementById('numero-telefono').value;

//CREAMOS EL JSON Q SERA ENVIANDO A LA API PARA REGISTRAR LOS DATOS 


//Json es un tipo de dato, formato de registro de dato 
//se usa como diccionario que se agrega una clave y valor 

//DECLRAMOS LAS VARIABLES, DATA
   let data = {}; //DICCIONARIO 
   let values = []; 
   let fila = [fecha, medioPago, cantidad, producto, hora, numero]; //LISTA QUE OPCIONE VALORES
    
   values.push(fila); //TOMAMOS LOS VALORES DE FILA
   data.range = "hojaGastos"; 
   data.majorDimension = "ROWS"; //DIMENSION DE CELDAS
   data.values = values


   //ACA VAMOS A GUARDAR INFORMACION EN NUESTRO API

   fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaGastos:append?valueInputOption=USER_ENTERED`,



    {
      method: 'POST', //METODO QUE USAMOS EL POST
      headers: {
        "Content-Type": "application/json", //TIPO DE CONTENIDO ES UN JSON
        Authorization: `Bearer ${ACCESS_TOKEN}`, //ESTO ES PARA PODER TENER ACCESO A NUESTRA HOJA 
      },
      body: JSON.stringify(data) 
    }
  ).then(function (response) {
    response.json().then(function (data) {
  
    });
  });

//PARA BORRAR LOS DATOS DEL FORMULARIO, A MODO DE QUE SE PUEDA CREAR O CARGAR OTRO

document.getElementById('fecha').valueAsDate = new Date();
document.getElementById('en-cantidad').value ="";
document.getElementById('medio-pago').value= "";
document.getElementById('producto').value= "";
document.getElementById('hora-entrega').value= "";
document.getElementById('numero-telefono').value= "";
}
