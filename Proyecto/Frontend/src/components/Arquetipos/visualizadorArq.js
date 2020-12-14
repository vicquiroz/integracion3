import React from "react";
import ReactJson from "react-json-view";
import "../comps.css";
export const VisArq = (props) => { //funcion para poder ver el arquetipo
  function IfNotNull(file) {
    if (file != null) { //verificacion si el archivo esta vacio o no
      return <ReactJson src={JSON.parse(file)} theme="brewer" collapsed="1" />;
    } //muestra el archivo en un visualizador 
  }
  return (
    <div>
      <div>{IfNotNull(props.envArq)}</div> {/* Se llama la funcion para comprobar su funciionamiento*/}
    </div>
  );
};
