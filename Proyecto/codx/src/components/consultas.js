import React from 'react'
import axios from 'axios';
import {DropdownItem } from 'reactstrap';

function IsValidJSON(str){
    try{
        JSON.parse(str)
    }
    catch(event){
        return false
    }
    return true
}

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
            let Data=response.data;
            console.log(Data)
        })
        .catch(function (error) {
        console.log(error);
    });
}

export function PostDatos(Archivo){
    let data = JSON.stringify({"nombre":"Fichas Clinicas","datoT":Archivo});
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

export function GraficarDesdeArchivo(setGrafico,Archivo,Campos){
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
            setGrafico(response.data)
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


export function TablaFrecuenciasDesdeArchivo(Estadigrafo,Archivo,Campos){
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
                Estadigrafo(response.data)
            }
            else{
                alert("No se ha podido realizar la tabla")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export function GetNombres(props,setLista){
    let config = {
        method: 'GET',
        url: 'http://localhost:8000/ObtieneNombres/',
        headers: { 
            'Content-Type': 'application/json'
        }
    };
    axios(config)
        .then((response) => {
            var Mens=[]
            let Datos=response.data;
            for(let x in Datos){
                Mens.push(<DropdownItem onClick={()=>ConseguirArchivo(props,Datos[x][1])} key={x}>{Datos[x][0]}</DropdownItem>)
            }
            setLista(Mens)
        })
        .catch((error) => {
            console.log(error);
        });
}