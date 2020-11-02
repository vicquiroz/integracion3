import React from 'react'
import ReactJson from 'react-json-view'
import './comps.css';
export const Vis = (props) => {
    function IfNotNull(file){
        if(file!=null){
            console.log()
            return(
                <ReactJson  src={
                    JSON.parse(file)
                }
                theme="brewer" collapsed="true"
                onEdit="true"
                />
            )
        }
    }
    return(
    <div id="Visualizador" class="scrollbar">
        {
            IfNotNull(props.env)
        }
    </div>
    )
}