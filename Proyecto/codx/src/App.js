import React,{useState} from 'react';
import {Vis} from './components/visualizador'
import {Exa} from './components/examinador'
import {Sim} from './components/simplificado'
import {Exp} from './components/exportar'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

//import './App.css';

function App() {
  const [archivo,setArchivo]=useState();
  const Res=(archivoRes)=>{
    setArchivo(archivoRes)
  }
  const [imagen,setImagen]=useState();
  const Img=(imagenRes)=>{
    setImagen(imagenRes)
  }
  const [tablaf,setTablaF]=useState();
  const Tf=(imagenRes)=>{
    setTablaF(imagenRes)
  }
  const [campos,setCampos]=useState();
  const Cmp=(camposRes)=>{
    setCampos(camposRes)
  }
  const [estadigrafo,setEstadigrafo]=useState();
  const Est=(estadigrafoRes)=>{
    setEstadigrafo(estadigrafoRes)
  }
  
  return (  
    <Container>
      <Row>
        <Col>
          <Vis env={archivo} setArchivo={Res} img={imagen} setCampos={Cmp} est={estadigrafo} tf={tablaf}/>
        </Col>
        <Col>
          <Sim env={archivo} res={Res} setImagen={Img} camps={campos} setEstadigrafo={Est} setTablaF={Tf}/>
        </Col>
        <Col>
          <Exa res={Res}/>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 10 }}>
          <Exp res={Res}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
