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
        url: 'http://localhost:8000/testingP/'+String(ID),
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

export function Graficar(setImagen,ID){
    let config = {
        method: 'GET',
        url: 'http://localhost:8000/estadistica/'+String(ID),
        headers: { 
            'Content-Type': 'application/json'
        }
    };
    axios(config)
        .then((response) => {
            setImagen(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
}