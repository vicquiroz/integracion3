import React from 'react'
import { Nav, NavItem, Button } from 'reactstrap';
import {GetDatos,PostDatos} from './consultas';
import './comps.css';

export const Sim = (props) => {
  return (
    <div id="Simplificado">
      <p>Manejo BD</p>
      <Nav vertical>
        <NavItem>
          <Button color="primary" onClick={GetDatos}>Consulta</Button>
        </NavItem>
        <NavItem>
          <Button color="primary" onClick={PostDatos}>Actualizar</Button>
        </NavItem>
        <NavItem>
        <Button color="primary" href="#">Eliminar</Button>
        </NavItem>
        <NavItem>
          <Button disabled href="#">boton en mantenimiento</Button>
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
