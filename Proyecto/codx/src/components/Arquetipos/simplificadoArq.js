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
import {TextField,ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
export const SimArq = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  const [ListaArq, setListaArq] = useState();
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
      <Nav>
        <NavItem>
          <NavbarText>Manejo BD</NavbarText> {/* comment */}
          <div className="btn-group btn-sm">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <Button
                id="caret"
                color="primary"
                onClick={() => GetNombres(props.resArq, LstArq)}
              >
                {" "}
                Cargar lista{" "}
              </Button>
              <DropdownToggle split color="primary" />
              <DropdownMenu>
                <DropdownItem></DropdownItem>
                {ListaArq}
                <DropdownItem></DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button color="info" onClick={() => PostDatos(props.envArq)}>
              {" "}
              Actualizar{" "}
            </Button>
            <Button
              color="danger"
              onClick={() => ConseguirContenidosArq(props.setListado)}
            >
              {" "}
              Prueba Listado Arquetipos{" "}
            </Button>
          </div>
        </NavItem>
        <br />

        <NavItem>
          <NavbarText> Data Science </NavbarText>
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
            Buscar coincidencia{" "}
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
          </Button>
        </NavItem>
      </Nav>
    </div>
  );
};
