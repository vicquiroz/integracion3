import React,{Image} from 'react'
import ReactJson from 'react-json-view'
import './comps.css';
import {Table} from 'reactstrap';
export const Vis = (props) => {
    var Seleccionados=[];
    function onEdit(fields){
        console.log(fields)
    }
    function onSelect(fields){
        let StrFields=JSON.stringify(fields)
        if(Seleccionados.includes(StrFields)===false){
            if(Seleccionados.length<1){
                Seleccionados.push(StrFields)
                ActualizarCampos(Seleccionados)
            }
        }
        else if(Seleccionados.includes(StrFields)===true){
            let indx=Seleccionados.indexOf(StrFields)
            Seleccionados.splice(indx,1)
        }
        let Listado=[]
        for(let pos in Seleccionados){
            let Campos=JSON.parse(Seleccionados[pos])
            Listado.push(String("Campo: "+Campos["name"]+" desde: "+Campos["namespace"]))
        }
        document.getElementById("Listado").innerHTML=""
        for(let pos in Listado){
            document.getElementById("Listado").innerHTML+=(
                "<li>"+String(Listado[pos])+"</li>"
            )
        }
    }

    function ActualizarCampos(Lista){
        
        let Campo=JSON.parse(Lista[0])
        let Campo1=Campo["name"]
        let Campo2="";
        if(Campo["namespace"][1]!=null){
            Campo2=Campo["namespace"][1]
        }
        else{
            let aux=Campo1
            Campo2=aux
            Campo1=""
        }
        let CamposGrafico=[Campo1,Campo2]
        props.setCampos(CamposGrafico)
    }
    function IfNotNull(file){
        if(file!=null){
            return(
                <ReactJson  src={
                    JSON.parse(file)
                }
                theme="brewer" collapsed="1"
                //onEdit={(file)=>onEdit(file)}
                onSelect={(file)=>onSelect(file)}
                />
            )
        }
    }
    function Imagen(img){
        if(img!=null){
            return(
                <img src={`data:image/gif;base64,${img}`} />
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
            let body=[];
            for(let x in Valor){
                body.push(<th>{Valor[x]}</th>)
            }
            console.log(headers)
            return( <Table className="table">
                        <thead className="table-dark">
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody className="table-secondary">
                            <tr>
                                {body}
                            </tr>
                        </tbody>
                    </Table>)
        }
    }

    return(
    <div id="Visualizador" className="scrollbar">
        <div className="seleccionados">
            Seleccionados:
            <ul id="Listado"></ul>
            <div id="estf"> </div>
        </div>
        <div>
            {estadigrafo(props.est)}
        </div>
        <div className="split left">
        {
            IfNotNull(props.env)
        }
        </div>
        <div className="split right">
            {Imagen(props.img)}
        </div>
        <div className="split right down">
            {Imagen(props.tf)}
        </div>
    </div>
    )
}