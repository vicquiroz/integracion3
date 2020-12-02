import React from 'react'
import '../comps.css'
import {Table} from 'reactstrap'
import CanvasJSReact from '../../assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export const MosArq = (props) => {
    function grafica(datos){
        if(datos!=null){
            console.log(datos)
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
                animationEnabled:true,
                theme:"dark2",
                zoomEnabled: true,
                title: {
                  text: "Grafico de cantidad"
                },
                axisY: {
                    includeZero: true,
                },
                axisX:{
                    reversed:true,
                    labelFontSize: 10,
                  },
                data: [{				
                          type: "bar",
                          dataPoints: DataPoints
                          
                 }]
             }
            return(
                <CanvasJSChart options = {grafico}/>
            )
        }
    }
    
    return(
        <div>
                <div>
                    {grafica(props.datosArq)}
                </div>

        </div>       
    )
}