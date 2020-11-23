import React from 'react'
import { Nav, NavItem, Button, NavbarText} from 'reactstrap';
import {ConseguirArchivo, PostDatos,TablaFrecuenciasDesdeArchivo, GraficarDesdeArchivo, MedianaDesdeArchivo,MediaDesdeArchivo, ModaDesdeArchivo, DesviacionEstandarDesdeArchivo} from './consultas';
import './comps.css';
import {Menu,MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export const Sim = (props) => {
  return (
    <div id="Simplificado">
      <Nav>
        <NavItem>
          <NavbarText>Manejo BD</NavbarText>
            <div className="btn-group btn-sm">
            <Menu className=" bg-info text-white border border-primary" menuButton={
              <button className="btn btn-primary" >Consultas</button>}>
                <MenuItem className="bg-info" onClick={()=>ConseguirArchivo(props,"3")}>Fichas Médicas</MenuItem>
            </Menu>
            <Button color="info" onClick={()=>PostDatos(props.env)}>Actualizar</Button>
            </div>
        </NavItem>
      <NavItem>
        <NavbarText>Data Science  </NavbarText>
          <Menu className=" bg-info text-white border border-primary" menuButton={
            <button className="btn btn-primary btn-md" >Calcular de Estadigrafo</button>}>
              <MenuItem className=" bg-info" onClick={()=>MedianaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)} >Mediana</MenuItem>
              <MenuItem className=" bg-info" onClick={()=>MediaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)} >Media Aritmetica</MenuItem>
              <MenuItem className=" bg-info" onClick={()=>ModaDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Moda</MenuItem>
              <MenuItem className=" bg-info" onClick={()=>DesviacionEstandarDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Desviacion Estandar</MenuItem>
          </Menu>
            <Button color="primary" onClick={()=>GraficarDesdeArchivo(props.setGrafico,props.env,props.camps)}>Graficar Desde Archivo</Button>
            <Button color="primary" onClick={()=>TablaFrecuenciasDesdeArchivo(props.setEstadigrafo,props.env,props.camps)}>Tabla de Frecuencias</Button>
        </NavItem>
      </Nav>
    </div>
  );
}
