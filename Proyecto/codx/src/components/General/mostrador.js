import React from 'react'
import '../comps.css'
import {Table} from 'reactstrap'
import * as Zoom from "chartjs-plugin-zoom"
import {HorizontalBar} from 'react-chartjs-2'



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
            var DataPoints=[]
            for(let x in datos){
                let Campos=datos[x]  
                Titulo.push(Campos[0])
                Valor.push(Campos[1])
            } 
            let labs=[]
            let val=[]
            let labels1=[]
            labs = Titulo[0]
            val = Valor[0]
            for(let x in labs){
                DataPoints.push(labs[x])
                labels1.push(val[x])
            }
            console.log(labels1)
            console.log(DataPoints)

            const data = {
                
                labels:DataPoints,
                datasets:[{
                    
                    //label: "Grafico",
                    data:labels1,
                    backgroundColor: getRandomColors(labels1.length), 
                    
                    responsive: true,
                    title: { text: "THICCNESS SCALE", display: true },
                    
                    scales: {
                        yAxes: [
                          {
                            ticks: {
                              autoSkip: true,
                              maxTicksLimit: 10,
                              beginAtZero: true,
                            },
                            gridLines: {
                              display: false,
                            },
                          },
                        ],
                        xAxes: [
                          {
                            gridLines: {
                              display: false,
                            },
                          },
                        ],
                      },
                      pan: {
                        enabled: true,
                        mode: "xy",
                        speed: 1,
                        threshold: 1,
                      },
                      zoom: {
                        enabled: true,
                        drag: false,
                        mode: "xy",
                        limits: {
                          max: 1,
                          min: 0.5,
                        },
                        rangeMin: {
                            x: 2,
                            y: 1,
                          },
                          rangeMax: {
                            x: 10,
                            y: 150,
                          }
                          ,
                      },
            
                }]
                
                
             }
            return(
                <HorizontalBar data={data}/>
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



