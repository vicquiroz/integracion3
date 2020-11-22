import React,{Image} from 'react'
import ReactJson from 'react-json-view'
import './comps.css'
import {Table} from 'reactstrap'
import CanvasJSReact from '../assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
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
            labs = Titulo[0]
            val = Valor[0]
            for(let x in labs){
                DataPoints.push({label:labs[x],y:val[x]})
            }
            
            const grafico = {
                title: {
                  text: "Grafico de cantidad"
                },
                axisY: {
                    includeZero: true
                },
                data: [{				
                          type: "column",
                          dataPoints: DataPoints
                          
                 }]
             }
            return(
                <CanvasJSChart options = {grafico}/>
            )
        }
    }
    function estadigrafo(estf){
        if(estf!=null){
            var Titulo=[]
            var Valor=[]
            for(let x in estf){
                let Campos=estf[x]  
                Titulo.push(String(Campos[0]))
                Valor.push(String(Campos[1]))
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
            return( <Table className="table">
                        <thead className="table-dark">
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody className="table-secondary">
                            {bodyF}
                        </tbody>
                    </Table>)
        }
    }
    return(
        <div id="Visualizador" className="scrollbar">
            <div className="split right">
                <div >
                    {grafica(props.datos)}
                    
                </div>
                
            </div>
            <div className="split right down">
                {estadigrafo(props.est)}
            </div>
        </div>       
    )
}