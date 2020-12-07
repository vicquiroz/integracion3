import React from 'react'
import '../comps.css'
import {Table} from 'reactstrap'
import * as Zoom from "chartjs-plugin-zoom"
import {HorizontalBar, Bar,stackedBar} from 'react-chartjs-2'



const getRandomColors = (numbOfBars) =>{
    const letters = "0123456789ABCDEF".split("");
    let colors = [];
    for(let i = 0; i< numbOfBars; i++){
        let color = "#";
        for(let k = 0; k < 6 ; k++){
            color += letters[Math.floor(Math.random() * 16)];

        }
        colors.push(color);
    }
    return colors;
}


export const Mos = (props) => {
    function grafica(datos){
        if(datos!=null){
            var Titulo=[]
            var Valor=[]
            for(let x in datos){
                let Campos=datos[x]  
                Titulo.push(Campos[0])
                Valor.push(Campos[1])
            } 
            let labs=[]
            let val=[]
            let labels=[]
            let valores=[]
            labs = Titulo[0]
            val = Valor[0]
            for(let x in labs){
                labels.push(labs[x])
                valores.push(val[x])
            }
            

            const data = {

                labels:labels,
            
                datasets:[{
                    
                    //label: "Grafico",
                    data:valores,
                    backgroundColor: getRandomColors(labels.length), 
                    responsive: true,
                    

                }],      

             }
             const options = {
                
                title: { text: "Grafico de Cantidad", display: true ,fontColor: "white",},
                
                        legend: {
                            display: false
                         },
                         tooltips: {
                            enabled: false
                         },
               
                
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 10,
                            stepSize: 0.5   ,
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 10,
                            stepSize: 0.5,
                            beginAtZero: true
                        }
                    }]
                },

                pan: {
                  enabled: true,
                  mode: "xy",
                  speed: 100,
                  
                },

                zoom: {
                  enabled: true,
                  drag: false,
                  mode: "xy",
                  
                  rangeMin: {
                    x: 0,
                    y: 0,
                  },

                  rangeMax: {
                    x: 10,
                    y: 150,
                  }
                  
                }
              }

            return( 
            
                <HorizontalBar  width={200} height={200} options={options} data={data}/>
            
            )
        }
    }
    function estadigrafo(estf){
        if(estf!=null){
            var Titulo=[]
            var Valor=[]
            for(let x in estf){
                let Campos=estf[x]  
                Titulo.push(Campos[0])
                Valor.push(Campos[1])
            }   
            let headers=[];
            for(let x in Titulo){
                headers.push(<th>{Titulo[x]}</th>)
            }
            let partes=[];
            let body=[];
            let bodyF=[];
            for(let x in Valor){
                partes[x]=Valor[x].toString().split(',');
            }
            for(let x in partes[0]){
                body = []
                for(let y in partes){
                    body.push(<th>{partes[y][x]}</th>)
                }
                bodyF.push(<tr>{body}</tr>)
            }
            return( <Table dark bordered size="xl" responsive>
                        <thead className="bg-secondary">
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody className="bg-darker">
                            {bodyF}
                        </tbody>
                    </Table>)
        }
    }
    return(
        <div>
                <div>
                    {grafica(props.datos)}
                </div>
            <br/>
                <div>
                    {estadigrafo(props.est)}
                </div>
        </div>       
    )
}



