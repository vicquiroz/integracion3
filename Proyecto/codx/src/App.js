import React,{useState} from 'react';
import {Vis} from './components/visualizador'
import {Exa} from './components/examinador'
import {Sim} from './components/simplificado'
import {Mos} from './components/mostrador'
import Home from './paginas/home'
import Navbar from './components/BarraLateral/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import './App.css';

function App() {
  const [archivo,setArchivo]=useState();
  const Res=(archivoRes)=>{
    setArchivo(archivoRes)
  }
  const [datos,setGrafico]=useState();
  const Gra=(datosRes)=>{
    setGrafico(datosRes)
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
    <Router>
      <Navbar />
      <Container>
        <Switch>
        <Row>
          <Route path='/'>
          <Route path='/' exact component={Home} />
          </Route>
          <Route path="/modogeneral">
          <div path="/">
            <Exa res={Res}/>
            <Sim env={archivo} res={Res} setGrafico={Gra} camps={campos} setEstadigrafo={Est}/> 
          </div>
          <hr />
              <Col sm="6">
                <Vis env={archivo} setCampos={Cmp} />
              </Col>
              <Col sm="6">
            <Mos setArchivo={Res} datos={datos}  est={estadigrafo}/>
            </Col>
          </Route>
        </Row>
      </Switch>
    </Container>
  </Router>
    );
}

export default App;
