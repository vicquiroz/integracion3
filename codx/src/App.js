import React from 'react';
import {Vis} from './components/visualizador'
import {Exa} from './components/examinador'
import {Sim} from './components/simplificado'
import {Exp} from './components/exportar'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

//import './App.css';

function App() {
  return (
    
    <Container>
      <Row>
        <Col>
          <Vis/>
        </Col>
        <Col>
          <Sim/>
        </Col>
        <Col>
          <Exa/>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 10 }}>
          <Exp/>
        </Col>
      </Row>
    </Container>
      
    
    

  );
}

export default App;
