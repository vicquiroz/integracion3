import React,{Image} from 'react'
import ReactJson from 'react-json-view'
import './comps.css';
export const Vis = (props) => {
    function IfNotNull(file){
        if(file!=null){
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
    function Imagen(img){
        if(img!=null){
            return(
                <img src={`data:image/gif;base64,${img}`} />
            )
        }
    }
    return(
    <div id="Visualizador" className="scrollbar">
        {
            IfNotNull(props.env)
        }
        <br></br>
        <div>
            {
                Imagen(props.img)
            }
        </div>
    </div>
    )
}