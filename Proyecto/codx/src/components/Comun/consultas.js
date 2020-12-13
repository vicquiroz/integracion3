import React from 'react'
import axios from 'axios';
import {DropdownItem } from 'reactstrap';

function IsValidJSON(str){ //Funcion para verificar si el archiv json es valido
    try{
        JSON.parse(str)
    }
    catch(event){
        return false
    }
    return true
}

export function GetDatos(){ //Funcion para obtener datos
    let config = { //se crea la configuracion para ser utilizada despues en axios
      method: 'GET', //Se utilizara el metodo GET
      url: 'http://localhost:8000/DB/', //Se ingresa la url de la base de datos
      headers: { 
        'Content-Type': 'application/json' //Se indica el tipo del contenido
      }
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then(function (response) { //Si todo sale correcto la funcion entregara una respuesta
            let Data=response.data; //Dentro de la variable Data se almacenara la respuesta obtenida
            console.log(Data) //Se muestran los datos en la consola
        })
        .catch(function (error) { //Si no es  posible obtener una respuesta, arrojara un error
        console.log(error); //Mostrara por consola el error obtenido
    });
}

export function PostDatos(Archivo){ //Funcion para enviar datos
    let data = JSON.stringify({"nombre":"Fichas Clinicas","datoT":Archivo}); //Se convierte datos a string y se almacenan dentro de la variable data
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/DB/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data : data //se almacenan dentro de la variable data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            console.log(response.data); //mostrara por consola la respuesta
        })
        .catch((error) => { //Si no es  posible obtener una respuesta, arrojara un error
            console.log(error); //Mostrara por consola el error obtenido
        });
}


export function ConseguirArchivo(set,ID){ //Funcion para obtener archivos desde la base de datos mediante la id
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'GET', //Se utilizara el metodo GET
        url: 'http://localhost:8000/ObtieneArchivo/'+String(ID), //Se ingresa la url de la base de datos mas la id convertida a string
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        }
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            let Data=response.data; //Se almacena dentro de Data la respuesta recivida 
            if(IsValidJSON(Data.file)===true){ //Comprueba si el archivo recivido es valido
                set(Data.file) //Se envia el archivo obtenido
            }
            else{ //De lo contrario arroja un error
                alert("El archivo no es válido")
                set(null)
            }
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function GraficarDesdeArchivo(setGrafico,Archivo,Campos){ //Funcion para graficar con datos seleccionados
    let FullData=[Archivo,Campos] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/estadisticaDesdeArchivo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            setGrafico(response.data) //Se devuelve el grafico generado 
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function MedianaDesdeArchivo(Estadigrafo,Archivo,Campos){ //Funcion para obtener la mediana desde el archivo
    let FullData=[Archivo,Campos] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/medianaDesdeArchivo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            Estadigrafo(response.data) //Se envia hacia Estadigrafo la respuesta que seria la mediana 
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function MediaDesdeArchivo(Estadigrafo,Archivo,Campos){ //Funcion para obtener la media desde el archivo
    let FullData=[Archivo,Campos] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/mediaDesdeArchivo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            Estadigrafo(response.data) //Se envia hacia Estadigrafo la respuesta que seria la media 
        })
        .catch((error) => {
            console.log(error);
        });
}

export function ModaDesdeArchivo(Estadigrafo,Archivo,Campos){ //Funcion para obtener la moda desde el archivo
    let FullData=[Archivo,Campos] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/modaDesdeArchivo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData  //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            Estadigrafo(response.data) //Se envia hacia Estadigrafo la respuesta que seria la Moda 
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function DesviacionEstandarDesdeArchivo(Estadigrafo,Archivo,Campos){ //Funcion para obtener la desviacion estandar desde el archivo
    let FullData=[Archivo,Campos] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/desviacionEstandarDesdeArchivo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData  //Se guardan dentro de data los datos a enviar
    };
    axios(config)  //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            Estadigrafo(response.data) //Se envia hacia Estadigrafo la respuesta que seria la Desviacion Estandar 
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}


export function TablaFrecuenciasDesdeArchivo(Estadigrafo,Archivo,Campos){ //Funcion para obtener la tabla de frecuencias
    let FullData=[Archivo,Campos] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/tablaFDesdeArchivo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            if(response.data!==false){  //si la respuesta es igual o del mismo tipo
                Estadigrafo(response.data) //Envia la respuesta hacia Estadigrafo
            }
            else{ //De lo contrario envia una alerta con el error
                alert("No se ha podido realizar la tabla")
            }
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function GetNombres(set,setLista){ //Funcion para obtener los nombres
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'GET', //Se utilizara el metodo GET
        url: 'http://localhost:8000/ObtieneNombres/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        }
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            var Mens=[] //Se crea el arreglo Mens
            let Datos=response.data; //En Datos se guarda la respuesta obtenida
            for(let x in Datos){ //Para todos los valores en Datos
                Mens.push(<DropdownItem onClick={()=>ConseguirArchivo(set,Datos[x][1])} key={x}>{Datos[x][0]}</DropdownItem>) //Se ingresa dentro de mens todos los nombres obtenidos
            } 
            setLista(Mens) //Se envian los nombres a setLista
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}


export function GraficarDesdeArquetipo(setGrafico,Archivo,Consulta){ //Funcion para graficar desde arquetipo
    let FullData=[Archivo,Consulta] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/graficaArquetipo/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            setGrafico(response.data) //Se envia el grafico generado a setGrafico
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function TablaFrecuenciasArq(EstadigrafoArq,Archivo,Consulta){ //Funcion para tabla de frecuencias de arquetipos
    let FullData=[Archivo,Consulta] //En la variable FullData se almacena el archivo y los campos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'POST', //Se utilizara el metodo POST
        url: 'http://localhost:8000/tablaFArq/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        },
        data:FullData //Se guardan dentro de data los datos a enviar
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            if(response.data!==false){ //si la respuesta es igual o del mismo tipo
                EstadigrafoArq(response.data) //Se envia los la respuesta a EstadigrafoArq
            }
            else{ //De lo contrario arroja un mensaje de error
                alert("No se ha podido realizar la tabla")
            }
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}

export function ConseguirContenidosArq(setListado){ //Funcion para conseguir el contenido de los arquetipos
    let config = { //se crea la configuracion para ser utilizada despues en axios
        method: 'GET', //Se utilizara el metodo GET
        url: 'http://localhost:8000/contenidosArq/', //Se ingresa la url de la base de datos
        headers: { 
            'Content-Type': 'application/json' //Se indica el tipo del contenido
        }
    };
    axios(config) //Se envia la configuracion generada anteriormente a axios
        .then((response) => { //Si todo sale correcto la funcion entregara una respuesta
            if(response.data!==false){ //si la respuesta es igual o del mismo tipo
                setListado(response.data) //Se envia los la respuesta a setListado
            }
            else{ //De lo contrario arroja un mensaje de error
                alert("No se ha podido conseguir los Arquetipos")
            }
        })
        .catch((error) => { //Si la repuesta obtenida arrojo algun error
            console.log(error); //Muestra el error obtenido por consola
        });
}