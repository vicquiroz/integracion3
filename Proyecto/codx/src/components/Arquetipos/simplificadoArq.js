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
  Input,
} from "reactstrap"; 
import {
  PostDatos,
  GetNombres,
  GraficarDesdeArquetipo,
  TablaFrecuenciasArq,
  ConseguirContenidosArq,
} from "../Comun/consultas"; 
import "../comps.css";
import "@szhsin/react-menu/dist/index.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme } from '@material-ui/core/styles';
import {TextField,ThemeProvider } from '@material-ui/core';
export const SimArq = (props) => {
  const [dropdownOpen, setOpen] = useState(false); //UseState para la dropdown
  const toggle = () => setOpen(!dropdownOpen);

  const [ListaArq, setListaArq] = useState(); //UseState para ListaArq
  const LstArq = (ListaArqRes) => {
    setListaArq(ListaArqRes);
  };
  const theme = createMuiTheme({
    palette: {
      type:'dark',
      palette:{
        text:"#fff"
      }
    },
  })
  if(props.listado!==undefined){
    var Lista=props.listado
  }
  else{
    var Lista=[""]
  }
  return ( 
    <div id="Simplificado">
      <Nav>{/* Nav viene de reacstrap y define un navegador*/}
        <NavItem>{/* Se genera cada item dentro de la barra de navegacion*/}
          <NavbarText>Manejo BD</NavbarText> {/* comment */}
          <div className="btn-group btn-sm">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <Button
                id="caret"
                color="primary"
                onClick={() => GetNombres(props.resArq, LstArq)}
              >{/* Boton para cargar las listas */}
                {" "}
                Cargar lista{" "}
              </Button>
              <DropdownToggle split color="primary" />
              <DropdownMenu>{/* Dropdown que contendra las listas cargadas previamente*/}
                <DropdownItem></DropdownItem>
                {ListaArq} {/* Items del dropdown */}
                <DropdownItem></DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button color="info" onClick={() => PostDatos(props.envArq)}>
              {" "}
              Actualizar{" "} {/* Boton que subira el archivo a la base de datos*/}
            </Button>
            <Button
              color="danger"
              onClick={() => ConseguirContenidosArq(props.setListado)}
            >
              {" "}
              Cargar lista de Arquetipos{" "} 
            </Button>{/* Boton para Generar la consulta y mostrar el listado de arquetipos*/}
          </div>
        </NavItem>
        <br />

        <NavItem>
          <NavbarText> Data Science </NavbarText>{/* Seccion de Data Science dentro del navegador*/}
          <Button
            color="info"
            className="btn btn-primary btn-md"
            onClick={() =>
              GraficarDesdeArquetipo(
                props.setGraficoArq,
                props.envArq,
                document.getElementById("Buscador").value
              )
            }
          >
            {" "}
            Buscar coincidencia{" "} {/* Boton que cumple la funcion de graficar los datos registrado en buscador*/}
          </Button>
        </NavItem>
        <NavItem>
          <ThemeProvider theme={theme}>
            <Autocomplete
              id="Buscador"
              options={Lista}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params}  variant="filled"/>
              )}
            />
          </ThemeProvider>
        </NavItem>
        <NavItem>
          <Button
            color="info"
            className="btn btn-primary btn-md"
            onClick={() =>
              TablaFrecuenciasArq(
                props.setEstadigrafoArq,
                props.envArq,
                document.getElementById("Buscador").value
              )
            }
          >
            {" "}
            Tabla de frecuencias de edad{" "}
          </Button> {/* Boton que cumple la funcion de llamar y mostrar la tabla de frecuencia*/}
        </NavItem>
      </Nav>
    </div>
  );
};
