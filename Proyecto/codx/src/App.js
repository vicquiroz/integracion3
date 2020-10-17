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
  return (  
    <Container>
      <Row>
        <Col>
          <Vis env={archivo}/>
        </Col>
        <Col>
          <Sim env={archivo}/>
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
