import React from 'react'
import { Nav, NavItem, Button,Input } from 'reactstrap';
import {ConseguirArchivo, PostDatos, GraficarDesdeArchivo, MedianaDesdeArchivo,MediaDesdeArchivo, ModaDesdeArchivo, DesviacionEstandarDesdeArchivo} from './consultas';
import './comps.css';

import {Menu,MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

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
      </Nav>
      <hr />
      <p>Data Science</p>
      <Nav vertical>
      <Menu className=" bg-primary text-white" menuButton={
        <button className="btn btn-primary" >Calcular de Estadigrafo</button>}>
          <MenuItem className=" bg-primary" onClick={()=>MedianaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)} >Mediana</MenuItem>
          <MenuItem className=" bg-primary" onClick={()=>MediaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)} >Mediana Aritmetica</MenuItem>
          <MenuItem className=" bg-primary" onClick={()=>ModaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Moda</MenuItem>
          <MenuItem className=" bg-primary" onClick={()=>DesviacionEstandarDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Desviacion Estandar</MenuItem>
      </Menu>
        <Button color="primary" onClick={()=>GraficarDesdeArchivo(props.setImagen,props.env,props.camps)}>Graficar Desde Archivo</Button>
        <Button disabled href="#">Metodo1</Button>
        <Button disabled href="#">Metodo2</Button>
        <Button disabled href="#">Metodo3</Button>
      
      </Nav>
    </div>
  );
}
