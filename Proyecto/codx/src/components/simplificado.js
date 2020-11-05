import React from 'react'
import { Nav, NavItem, Button,Input } from 'reactstrap';
import {ConseguirArchivo, GetDatos, PostDatos,Graficar} from './consultas';
import './comps.css';

export const Sim = (props) => {
  return (
    <div id="Simplificado">
      <p>Manejo BD</p>
      <Nav vertical>
        <NavItem>
          <Button color="primary" onClick={()=>ConseguirArchivo(props,document.getElementById("ID").value)}>Consulta</Button>
          <Input type="text" className="input-group mb-3" id="ID"></Input>
        </NavItem>
        <NavItem>
          <Button color="primary" onClick={()=>PostDatos(props.env)}>Actualizar</Button>
        </NavItem>
        <NavItem>
          <Button color="secondary" onClick={()=>Graficar(props.setImagen,document.getElementById("ID").value)}>Graficar</Button>
        </NavItem>
      </Nav>
      <hr />
      <p>Data Science</p>
      <Nav vertical>
        <Button color="primary" href="#">Metodo1</Button>
        <Button color="primary" href="#">Metodo2</Button>
        <Button color="primary" href="#">Metodo3</Button>
        <Button disabled href="#">Metodo4</Button>
      </Nav>
    </div>
  );
}
