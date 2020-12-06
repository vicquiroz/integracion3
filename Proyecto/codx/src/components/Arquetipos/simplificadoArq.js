import React,{useState} from 'react'
import { Nav, NavItem, Button, NavbarText,ButtonDropdown,DropdownItem,DropdownToggle,DropdownMenu,Input} from 'reactstrap';
import {PostDatos,GetNombres,GraficarDesdeArquetipo,TablaFrecuenciasArq} from '../Comun/consultas';
import '../comps.css';
import {Menu,MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export const SimArq = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
  
    const [ListaArq,setListaArq]=useState();
    const LstArq=(ListaArqRes)=>{
      setListaArq(ListaArqRes)
    }
    return (
      <div id="Simplificado">
        <Nav>
          <NavItem>
            <NavbarText>Manejo BD</NavbarText>
              <div className="btn-group btn-sm">
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <Button id="caret" color="primary" onClick={()=>GetNombres(props.resArq,LstArq)}>Cargar lista</Button>
                <DropdownToggle split color="primary" />
                <DropdownMenu>
                  <DropdownItem></DropdownItem>
                  {ListaArq}
                  <DropdownItem></DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button color="info" onClick={()=>PostDatos(props.envArq)}>Actualizar</Button>
              </div>
              
          </NavItem>
          <br/>
        <NavItem>
          <NavbarText>    Data Science  </NavbarText>
            
            <Button color="info" className="btn btn-primary btn-md" onClick={()=>GraficarDesdeArquetipo(props.setGraficoArq,props.envArq,document.getElementById("buscador").value)}>Buscar coincidencia</Button>
            
            

          </NavItem>
          <NavItem>
            <Input id="buscador"></Input>
          </NavItem>
          <NavItem>
            <Button color="info" className="btn btn-primary btn-md" onClick={()=>TablaFrecuenciasArq(props.setEstadigrafoArq,props.envArq,document.getElementById("buscador").value)}>Tabla de frecuencias de edad</Button>
          </NavItem>
          
        </Nav>
      </div>
    );
  }