import React from 'react'
import { Nav, NavItem, Button,Input } from 'reactstrap';
import {ConseguirArchivo, GetDatos, PostDatos,TablaFrecuenciasDesdeArchivo, GraficarDesdeArchivo, MedianaDesdeArchivo,MediaDesdeArchivo, ModaDesdeArchivo, DesviacionEstandarDesdeArchivo} from './consultas';
import './comps.css';

import {Menu,MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export const Sim = (props) => {
  return (
    <div id="Simplificado">
      
      <Nav>
        <p>Manejo BD</p>
        <NavItem>
          <div className="input-group input-group-sm">
            <div className="col-auto">
              <Input type="text" className="form-control bg-dark border border-primary text-white" id="ID"></Input>
            </div>
          </div>
          <div className="btn-group btn-sm">
          <Menu className=" bg-info text-white border border-primary" menuButton={
            <button className="btn btn-primary" >Consultas</button>}>
              <MenuItem className=" bg-info" onClick={()=>GetDatos(props)}>Mostrar todo</MenuItem>
              <MenuItem className="bg-info" onClick={()=>ConseguirArchivo(props,document.getElementById("ID").value)}>Consulta</MenuItem>
          </Menu>              
            <Button color="info" onClick={()=>PostDatos(props.env)}>Actualizar</Button>
          </div>
        </NavItem>
      <hr />
      <p>Data Science</p>
      <hr />
      <Menu className=" bg-info text-white border border-primary" menuButton={
        <button className="btn btn-primary" >Calcular de Estadigrafo</button>}>
          <MenuItem className=" bg-info" onClick={()=>MedianaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)} >Mediana</MenuItem>
          <MenuItem className=" bg-info" onClick={()=>MediaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)} >Media Aritmetica</MenuItem>
          <MenuItem className=" bg-info" onClick={()=>ModaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Moda</MenuItem>
          <MenuItem className=" bg-info" onClick={()=>DesviacionEstandarDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Desviacion Estandar</MenuItem>
      </Menu>
        <Button color="primary" onClick={()=>GraficarDesdeArchivo(props.setImagen,props.env,props.camps)}>Graficar Desde Archivo</Button>
        <Button color="primary" onClick={()=>TablaFrecuenciasDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Tabla de Frecuencias</Button>
        <Button disabled href="#">Metodo2</Button>
      </Nav>
    </div>
  );
}
