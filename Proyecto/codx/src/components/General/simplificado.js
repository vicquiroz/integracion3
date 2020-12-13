import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Button,
  NavbarText,
  ButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import {
  ConseguirArchivo,
  PostDatos,
  TablaFrecuenciasDesdeArchivo,
  GetNombres,
  GraficarDesdeArchivo,
  MedianaDesdeArchivo,
  MediaDesdeArchivo,
  ModaDesdeArchivo,
  DesviacionEstandarDesdeArchivo,
} from "../Comun/consultas";
import "../comps.css";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export const Sim = (props) => { //UseState para la dropdown
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const [Lista, setLista] = useState(); //UseState para ListaRes
  const Lst = (ListaRes) => {
    setLista(ListaRes);
  };
  return (
    <div id="Simplificado">
      <Nav> {/* Nav viene de reacstrap y define un navegador*/}
        <NavItem> {/* Se genera cada item dentro de la barra de navegacion*/}
          <NavbarText>Manejo BD</NavbarText>
          <div className="btn-group btn-sm">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <Button 
                id="caret"
                color="primary"
                onClick={() => GetNombres(props.res, Lst)} 
              >{/* Boton para cargar las listas */}
                Cargar lista
              </Button>
              <DropdownToggle split color="primary" />
              <DropdownMenu>{/* Dropdown que contendra las listas cargadas previamente*/}
                <DropdownItem></DropdownItem>
                {Lista} {/* Items del dropdown */}
                <DropdownItem></DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button color="info" onClick={() => PostDatos(props.env)}> {/* Boton que subira el archivo a la base de datos*/}
              Actualizar
            </Button>
          </div>
        </NavItem>
        <br />
        <NavItem>
          <NavbarText>Data Science</NavbarText> {/* Seccion de Data Science dentro del navegador*/}
          <Menu
            className=" bg-info text-white border border-primary"
            menuButton={
              <button className="btn btn-primary btn-md"> {/* Boton para generar el estadigrafo*/}
                Calcular de Estadigrafo
              </button>
            }
          >
            <MenuItem 
              className=" bg-info"
              onClick={() =>
                MedianaDesdeArchivo(
                  props.setEstadigrafo,
                  props.env,
                  props.camps
                )
              }
            > {/* Item dentro del menu para generar la mediana*/}
              Mediana
            </MenuItem>
            <MenuItem
              className=" bg-info"
              onClick={() =>
                MediaDesdeArchivo(props.setEstadigrafo, props.env, props.camps)
              }
            > {/* Item dentro del menu para generar la media*/}
              Media Aritmetica
            </MenuItem>
            <MenuItem
              className=" bg-info"
              onClick={() =>
                ModaDesdeArchivo(props.setEstadigrafo, props.env, props.camps)
              }
            > {/* Item dentro del menu para generar la Moda*/}
              Moda
            </MenuItem>
            <MenuItem
              className=" bg-info"
              onClick={() =>
                DesviacionEstandarDesdeArchivo(
                  props.setEstadigrafo,
                  props.env,
                  props.camps
                )
              }
            > {/* Item dentro del menu para generar la Desviacion Estandar*/}
              Desviacion Estandar
            </MenuItem>
          </Menu>
          <Button
            color="primary"
            onClick={() =>
              GraficarDesdeArchivo(props.setGrafico, props.env, props.camps)
            }
          > {/* Boton para generar grafico con los datos seleccionados*/}
            Graficar Desde Archivo
          </Button>
          <Button
            color="primary"
            onClick={() =>
              TablaFrecuenciasDesdeArchivo(
                props.setEstadigrafo,
                props.env,
                props.camps
              )
            }
          > {/* Boton para generar la tabla de frecuencias*/}
            Tabla de Frecuencias
          </Button>
        </NavItem>
      </Nav>
    </div>
  );
};
