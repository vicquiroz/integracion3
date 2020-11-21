import React,{Image} from 'react'
import ReactJson from 'react-json-view'
import './comps.css';
import {Table} from 'reactstrap';
export const Mos = (props) => {
    function Imagen(img){
        if(img!=null){
            return(
                <img src={`data:image/gif;base64,${img}`}  id="graf"/>
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
            console.log(headers)
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
                {Imagen(props.img)}
            </div>
            <div className="split right down">
                {Imagen(props.tf)}
                <br/>
                {estadigrafo(props.est)}
            </div>
        </div>       
    )
}