import axios from 'axios';

export function GetDatos(){
    let config = {
      method: 'GET',
      url: 'http://localhost:8000/DB/',
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
    });
}

export function PostDatos(Archivo){
    let data = JSON.stringify({"nombre":"Prueba","datoT":Archivo});
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/DB/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    axios(config)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function IsValidJSON(str){
    try{
        JSON.parse(str)
    }
    catch(event){
        return false
    }
    return true
}

export function ConseguirArchivo(props,ID){
    let config = {
        method: 'GET',
        url: 'http://localhost:8000/ObtieneArchivo/'+String(ID),
        headers: { 
            'Content-Type': 'application/json'
        }
    };
    axios(config)
        .then((response) => {
            let Data=response.data;
            if(IsValidJSON(Data.file)===true){
                props.res(Data.file)
            }
            else{
                alert("El archivo no es válido")
                props.res(null)
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export function GraficarDesdeArchivo(setImagen,Archivo,Campos){
    let FullData=[Archivo,Campos]
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/estadisticaDesdeArchivo/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:FullData
    };
    axios(config)
        .then((response) => {
            setImagen(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}

export function MedianaDesdeArchivo(Estadigrafo,Archivo,Campos){
    let FullData=[Archivo,Campos]
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/medianaDesdeArchivo/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:FullData
    };
    axios(config)
        .then((response) => {
            Estadigrafo(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}

export function MediaDesdeArchivo(Estadigrafo,Archivo,Campos){
    let FullData=[Archivo,Campos]
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/mediaDesdeArchivo/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:FullData
    };
    axios(config)
        .then((response) => {
            Estadigrafo(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}

export function ModaDesdeArchivo(Estadigrafo,Archivo,Campos){
    let FullData=[Archivo,Campos]
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/modaDesdeArchivo/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:FullData
    };
    axios(config)
        .then((response) => {
            Estadigrafo(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}

export function DesviacionEstandarDesdeArchivo(Estadigrafo,Archivo,Campos){
    let FullData=[Archivo,Campos]
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/desviacionEstandarDesdeArchivo/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:FullData
    };
    axios(config)
        .then((response) => {
            Estadigrafo(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}


export function TablaFrecuenciasDesdeArchivo(SetTablaF,Archivo,Campos){
    let FullData=[Archivo,Campos]
    let config = {
        method: 'POST',
        url: 'http://localhost:8000/tablaFDesdeArchivo/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:FullData
    };
    axios(config)
        .then((response) => {
            if(response.data!==false){
                SetTablaF(response.data)
            }
            else{
                alert("No se ha podido realizar la tabla")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}