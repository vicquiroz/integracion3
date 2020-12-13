import React from 'react'
import ReactJson from 'react-json-view'
import '../comps.css';
export const Vis = (props) => { //Funcion para visualizador
    var Seleccionados=[];
    /*function onEdit(fields){
        console.log(fields)
    }*/
    function onSelect(fields){  // Funcion para seleccionar los campos
        let StrFields=JSON.stringify(fields) //Convierte el texto en json
        if(Seleccionados.includes(StrFields)===false){ // Verifica si Strfields esta vacio
            if(Seleccionados.length<1){ // Verifica si el largo es menor que 1
                Seleccionados.push(StrFields) // Ingresa datos a Seleccionados
                ActualizarCampos(Seleccionados) // Almacena Seleccionados en "ActualizarCampos"
            }
        }
        else if(Seleccionados.includes(StrFields)===true){ //Si los Strfields no esta vacio
            let indx=Seleccionados.indexOf(StrFields) // Se crea la variable indx en la cual ira seleccionados con los datos de Str Fields
            Seleccionados.splice(indx,1) //Se agrega a indx, 1 hacia selecionados
        }
        let Listado=[] // arreglo de Listados
        for(let pos in Seleccionados){ // Encotrar posicion de seleccionados
            let Campos=JSON.parse(Seleccionados[pos]) // Variable campos en la cual iran los datos seleccionados en formato Json
            Listado.push(String("Campo: "+Campos["name"]+" desde: "+Campos["namespace"])) // Se ingresa Todos los datos a campos en formato de String
        }
        document.getElementById("Listado").innerHTML="Seleccionados:" // Obtiene los datos de Seleccionado
        for(let pos in Listado){
            document.getElementById("Listado").innerHTML+=(
                "<li>"+String(Listado[pos])+"</li>"
            )
        }
    }

    function ActualizarCampos(Lista){ // Funcion la cual recibe la lista y actualizara lso campos
        let Campo=JSON.parse(Lista[0]) // variable en la cual lista se guardar en campo en formato Json
        let Campo1=Campo["name"] // campo almacena name en un arreglo
        let Campo2=""; // Variable necesaria para el auxiliar
        if(Campo["namespace"][1]!=null){ // Verificar si namespace no esta vacio
            Campo2=Campo["namespace"][1] //Completa la variable "Campo2" con lo de namespace
        }
        else{ // En caso contario
            let aux=Campo1 // Variable auxiliar en donde se almacenara Campo1
            Campo2=aux // "Campo2" pasa a "aux"
            Campo1="" // Campo1 queda vacio
        }
        let CamposGrafico=[Campo1,Campo2] // variable que dentro de el arreglo incuira "campo1" y "campo2"
        props.setCampos(CamposGrafico) // Se ocupa el useState de setCamps en la cual se incuiar Camposgrafico
    }
    function IfNotNull(file){
        if(file!=null){ // Funcion para comprobar los archivos vacios
            return(
                <ReactJson  src={
                    JSON.parse(file) // Muestra "file" en formato Json
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
        <div className="seleccionados">  {/* Se llamma la className "seleccionados"*/}
            <ul id="Listado"></ul>  {/* Mostrara el "Listado"*/}
        </div>
        <div>
        {
            IfNotNull(props.env) //se envian los datos de "env"
        }
        </div>
    </div>
    )
}