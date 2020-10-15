import React, {useState} from 'react';
import {Vis} from './components/visualizador'
import {Exa} from './components/examinador'
import {Sim} from './components/simplificado'
import {Exp} from './components/exportar'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

//import './App.css';

function App() {

  const [archivo,setArchivo] = useState(0)

  const Res = (archivoRes)=>{
    setArchivo(archivoRes)
  }
  return (
    
    <Container>
      <Row>
        <Col>
          <Vis env={archivo}/>
        </Col>
        <Col>
          <Sim/>
        </Col>
        <Col>
          <Exa res={Res}/>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 10 }}>
          <Exp env={archivo}/>
        </Col>
      </Row>
    </Container>
      
    
    

  );
}

export default App;