import React from "react";
import "../comps.css";
import { Table } from "reactstrap"; // reactstrap es una libreria que deja trabajar en conjunto a Bootstrap

import { HorizontalBar } from "react-chartjs-2";

const GetRandomColors = (numbOfBars) => { //Funcion que hace que los colores de las barras de el grafico se vean de colores variados
  const letters = "0123456789ABCDEF".split(""); //Crea varriable con todo los numeros que tiene cada color
  let colors = []; //Arreglo que almacena los datos
  for (let i = 0; i < numbOfBars; i++) { // For que recorrera un arreglo en el cual se almacenara un color
    let color = "#"; // El numeral que contiene todo color en html
    for (let k = 0; k < 6; k++) { // Arreglo que recorre hasta el 6 ya que es la cantidad de numeros que tiene un color en html
      color += letters[Math.floor(Math.random() * 16)]; // Lo rellena con un numero random
    }
    colors.push(color); //Almacena todo en la variable "colors"
  }
  return colors;
};
export const MosArq = (props) => { 
  function Grafica(datos) { // Funcion que hara el almacenamiento de datos para graficarlos
    if (datos != null) { // Si los datos no estan vacios hara el "if"
      var Titulo = []; // Arreglo en el cual se  almacenar "Titulo"
      var Valor = []; // Arreglo en el cual se almacenara "Valor"

      for (let x in datos) { // for que recorrera los datos de cada json
        let Campos = datos[x]; // Variable Campos que almacena los datos 
        Titulo.push(Campos[0]); // Se añaden datos en la variable Titulo
        Valor.push(Campos[1]); // Se añaden datos en la variable Valor
      }
      let labs = []; // Arreglos en general que almacenaran todos los datos para poder llamarlos en el grafico
      let val = [];
      let labels = [];
      let valores = [];
      labs = Titulo[0]; // En "labs" estaran todos los datos que se almacenaron en Titulo
      val = Valor[0];   // En "val" estaran todos los datos que se almacenaron en Valor
      for (let x in labs) { // For que recorrera todos los datos para poder separarlos
        labels.push(labs[x]); // En la primera separacion almacenara todo lo de "labs" (Titulo) en la variable "labels" la cual tambien es un arreglo
        valores.push(val[x]); // Basicamente lo mismo que arriba pero en diferente variable ("valores").
      }

      const data = {
        labels: labels, // En chartjs se almacena todos los datos que van en labels, como mas arriba los almacenamos en labels, solo se llama aca.

        datasets: [
          {
            data: valores, // Todos los valores almacenados arriba se llaman en chartjs
            backgroundColor: GetRandomColors(labels.length), // Definimos los colores a la barras de el grafico, con la funcion ya mencionada arriba 
            responsive: true, // deja que el grafico sea adaptativo a la pantalla
          },
        ],
      };
      const options = {
        title: {  
          text: "Grafico de Cantidad", // Definimos un nombre para nuestro titulo que se mostrara en conjunto al grafico
          display: true, //se nuestra la leyanda (nuestro titulo)
          fontColor: "white", // Color de las letras
        },

        legend: {
          display: false, // No se muestra la leyenda 
        },
        tooltips: {
          enabled: true, // Se llama tooltips funcion que al pasar el mouse por encima muestra los datos de el grafico que en este caso es de barras
        },

        scales: {
          yAxes: [ // Funciones de el eje Y
            {
              ticks: {
                fontColor: "white", // Letra de color blanco
                fontSize: 10, // Tamaño de la letra
                stepSize: 0.5, // distancia de las letras
                beginAtZero: true, //Comienza a graficarse desde cero
              },
            },
          ],
          xAxes: [ // Funciones de el eje X
            {
              ticks: {
                fontColor: "white", // Letra de color blanco
                fontSize: 10, // Tamaño de la letra
                stepSize: 0.5, // distancia de las letras
                beginAtZero: true, //Comienza a graficarse desde cero
              },
            },
          ],
        },

        pan: { // Plugin de la libreria que añade el zoom a chartsjs
          enabled: true, // Se deja en funcionamiento
          mode: "xy", // funciona tanto en modo x e y
          speed: 100, //Velocidad de el zoom de las barras
        },

        zoom: {
          enabled: true,
          drag: false,
          mode: "xy",

          rangeMin: { //Rango minimo de el grafco
            x: 0,
            y: 0,
          },

          rangeMax: { // Rango maximo en el que graficara
            x: 10,
            y: 150,
          },
        },
      };

      return (
        <HorizontalBar width={200} height={200} options={options} data={data} /> // Se llama las funciones options y data para que se puedan mostrar, tambien se ajusta el largo y ancho de el grafico
      );
    }
  }
  function estadigrafo(estf) { // Se crea la funcion estadigrafo
    if (estf != null) { // Si el archivo no es esta vacio sigue
      var Titulo = []; // Creacion de arreglos
      var Valor = [];
      for (let x in estf) { // For que recorre todo el archivo en este caso estf
        let Campos = estf[x]; // todo se almacena en la variable "Campos"
        Titulo.push(Campos[0]); // Añadimos los datos a titulo
        Valor.push(Campos[1]); // Añade los datos a Valor
      }
      let headers = []; 
      for (let x in Titulo) { // For que recorrera toda la variable "Titulo"
        headers.push(<th>{Titulo[x]}</th>); // Se añade en la cabecera de una Tabla
      }
      let partes = [];
      let body = [];
      let bodyF = []; 
      for (let x in Valor) { // For que recorrera Valor
        partes[x] = Valor[x].toString().split(","); // valor pasa a un string y se separa con comas, todo ello se almacena en el arreglo partes ya creado anteriormente
      }
      for (let x in partes[0]) { // Recorrera la primera parte de el arreglo "partes"
        body = []; 
        for (let y in partes) {
          body.push(<th>{partes[y][x]}</th>); // Todo se mostrara en una celda con encabezado (th)
        }
        bodyF.push(<tr>{body}</tr>); // En el arreglo body se mostrara en una columna (tr)
      }
      return ( //Se define el color de la tabla y el borde de la tabla
        <Table dark bordered size="xl" responsive>
          <thead className="bg-secondary">
            <tr>{headers}</tr>
          </thead>
          <tbody className="bg-darker">{bodyF}</tbody>
        </Table>
      );
    }
  }
  function mostrarArquetipos(arquetipos) { // Funcion que mostrara los arquetipos ordenadamente
    if (arquetipos != null) { // Verifica si el archivo tiene datos
      var Lista = [];
      for (let i in arquetipos) { // arreglo que recorrera todo el archivo
        Lista.push(<li key={i}>{arquetipos[i].toString()}</li>); // dentro de Lista lo mostrara en formato de li (lista), y transformara a String
      }
      return <ul>{Lista}</ul>; // Muestra El arreglo de lista
    }
  }
  return ( // Se llaman todas las funciones para que se muestraen en pantalla.
    <div>
      <div>{Grafica(props.datosArq)}</div> 
      <br />
      <div>{estadigrafo(props.estArq)}</div>
      <div>{mostrarArquetipos(props.listado)}</div>
    </div>
  );
};
