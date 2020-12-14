import React from "react";
import "../comps.css";
import { Table } from "reactstrap";
import * as Zoom from "chartjs-plugin-zoom";
import { HorizontalBar } from "react-chartjs-2";

const GetRandomColors = (numbOfBars) => { // Constante para generar colores RGB aleatorios ya que la libreria ChartJS no lo hace por defecto
  const Letters = "0123456789ABCDEF".split("");
  let colors = [];
  for (let i = 0; i < numbOfBars; i++) { //Para todo el numero de barras que existan
    let color = "#"; //Crea un arreglo
    for (let k = 0; k < 6; k++) {
      color += Letters[Math.floor(Math.random() * 16)]; //cada valor de color contendra un color RGB
    }
    colors.push(color); //inserta el color dentro de colors que contendra cada uno de estos
  }
  return colors; //retorna los colores ya generados
};

export const Mos = (props) => { //constante Mos que recive los datos para generar el grafica mediante props
  function Grafica(datos) { //funcion grafica que recive los datos
    if (datos != null) { //si la variable datos no viene vacia
      var Titulo = []; //Crea los arreglos para contener los titulos y los valores
      var Valor = [];
      for (let x in datos) { //for para recorrer todos los datos
        let Campos = datos[x]; //campos sera cada valor que exista dentro del arreglo de datos
        Titulo.push(Campos[0]); //Titulo sera igual al primer dato de Campos
        Valor.push(Campos[1]); //Valor sera igual al segundo valor de Campos
      }
      let labs = []; //Se crean arreglos para trabajar con los datos
      let val = [];
      let labels = [];
      let valores = [];
      labs = Titulo[0];
      val = Valor[0];
      for (let x in labs) { //se recorren todos los datos dentro de labs
        labels.push(labs[x]); //las labels seran cada dato dentro de labs
        valores.push(val[x]); //los valores de cada uno sera todos los valores dentro de val
      }

      const Data = { //const data que pasara los datos a ChartJS para generar el grafico
        labels: labels, //mediante labels entrega los valores para generar las labels
        datasets: [ //mediante el dataset se le entregan los valores, los que en este caso se encuentran en la variable "valores"
          {
            data: valores,
            backgroundColor: GetRandomColors(labels.length), //se asigna el color para cada barra, que en este caso sera aleatorio usando la funcion generada mas arriba
            responsive: true, //se define que el grafico sera responsivo con respecto al tamaño de la pagina
          },
        ],
      };

      const Options = { //constante para definir las opciones del grafico de ChartJS
        title: { //Se utiliza para definir el titulo que se mostrara en el grafico
          text: "Grafico de Cantidad",
          display: true,
          fontColor: "white",
        },

        legend: { //Se utiliza para mostrar la leyenda, en este caso esta desactivada debido a la gran cantidad de datos que se manejan
          display: false,
        },
        tooltips: {//tooltips se utiliza para activar la funcionalidad de al hacer un mouseover, se muestren los datos de cada barra
          enabled: true,
        },
        scales: { //mediante la opcion de scales podemos trabajar con los ejes del grafico
          yAxes: [ //yAxes para trabajar con el eje Y
            {
              ticks: { //le pasamos las opciones para el eje y
                fontColor: "white",
                fontSize: 10,
                stepSize: 0.5,
                beginAtZero: true,
              },
            },
          ],
          xAxes: [ //para trabajar con el eje X
            {
              ticks: { //le pasamos las opciones del eje X
                fontColor: "white",
                fontSize: 10,
                stepSize: 0.5,
                beginAtZero: true,
              },
            },
          ],
        },

        pan: { //mediante la opcion "pan" activamos la opcion de arrastrar el grafico
          enabled: true,
          mode: "xy",
          speed: 100, //velocidad con la que se realizara el arrastre
        },

        zoom: { //con zoom activamos la funcion de poder realizar zoom dentro del grafico
          enabled: true,
          drag: false,
          mode: "y",
          rangeMin: {
            x: 0,
            y: 0, },
          rangeMax: {
            x: 10,
            y: 150,},
        },
      };
      return (
        <HorizontalBar width={200} height={200} options={Options} data={Data} /> //retornamos el grafico pasandole los datos, las opciones y definiendo su tamaño
      );
    }
  }

  function Estadigrafo(estf) { //la funcion de estadigrafo nos retornara la tabla del estadigrafo
    if (estf != null) { //si los datos recividos no estan vacios
      var Titulo = []; //crea los arreglos que contendran los valores
      var Valor = [];
      for (let x in estf) { //recorre todos los datos
        let Campos = estf[x]; //para cada dato dentro de estf
        Titulo.push(Campos[0]); //el titulo sera el primer valor 
        Valor.push(Campos[1]); //el valor sera el segundo
      }
      let headers = []; //se crea arreglo que contendra los titulos
      for (let x in Titulo) { //recorre todos los titulos
        headers.push(<th> {Titulo[x]} </th>); //ingresa cada titulo dentro del arreglo titulo
      }
      let partes = []; //se crean arreglos para almacenar datos
      let body = [];
      let bodyF = [];
      for (let x in Valor) { //para cada dato en Valor
        partes[x] = Valor[x].toString().split(","); //se guarda en el arreglo partes el valor convertido a string separado por una coma
      }
      for (let x in partes[0]) { //Para cada dato en partes
        body = []; //Se crea un arreglo
        for (let y in partes) { //se recorre partes
          body.push(<th> {partes[y][x]} </th>); //Se crea una fila dentro de body que contiene las partes
        }
        bodyF.push(<tr> {body} </tr>); // se crea una fila que contiene body
      }
      return (
        <Table dark bordered size="xl" responsive> {/* Retorna la tabla de tamaño xl y que sea responsiva con respecto al tamaño de la pagina */}
          <thead className="bg-secondary">
            <tr> {headers} </tr>{" "}
          </thead>{" "}
          <tbody className="bg-darker"> {bodyF} </tbody>{" "}
        </Table>
      );
    }
  }
  return (
    <div>
      <div> {Grafica(props.datos)} </div> <br /> {/*Se retorna la grafica y el estadigrafo hacia la app */}
      <div> {Estadigrafo(props.est)} </div>{" "}
    </div>
  );
};
