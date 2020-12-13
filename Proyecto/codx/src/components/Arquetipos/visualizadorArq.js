import React from "react";
import ReactJson from "react-json-view";
import "../comps.css";
export const VisArq = (props) => {
  function IfNotNull(file) {
    if (file != null) {
      return <ReactJson src={JSON.parse(file)} theme="brewer" collapsed="1" />;
    }
  }
  return (
    <div>
      <div>{IfNotNull(props.envArq)}</div>
    </div>
  );
};
