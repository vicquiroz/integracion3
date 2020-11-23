import React from 'react'
import ReactJson from 'react-json-view'
import './comps.css';
export const Vis = (props) => {
    var Seleccionados=[];
    /*function onEdit(fields){
        console.log(fields)
    }*/
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
        document.getElementById("Listado").innerHTML="Seleccionados:"
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
    return(
    <div>
        <div className="seleccionados">
            <ul id="Listado"></ul>
        </div>
        <div>
        {
            IfNotNull(props.env)
        }
        </div>
    </div>
    )
}