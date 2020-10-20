import axios from 'axios';

export function GetDatos(){
    let config = {
      method: 'get',
      url: 'http://localhost:8000/DB/api/datos1/',
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
        method: 'post',
        url: 'http://localhost:8000/DB/api/datos1/',
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