import React, {useState,useEffect} from 'react'
import './comps.css';

export const Vis = (props) => {
    const dato = props.env 
    const [archivo,setArchivo]=useState()

    useEffect(() => { 
        if(dato!==undefined){
            const datoJ = JSON.stringify(dato)
            //console.log(JSON.parse(dato))
            setArchivo(datoJ)
        }
        
    },[dato,archivo]);
    
    
    return(
    <div id="Visualizador"><p>{archivo}</p></div>
    )
}