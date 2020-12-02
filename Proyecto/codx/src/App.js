import React,{useState} from 'react';
import {Vis} from './components/General/visualizador'
import {VisArq} from './components/Arquetipos/visualizadorArq'
import {Exa} from './components/Comun/examinador'
import {Sim} from './components/General/simplificado'
import {SimArq} from './components/Arquetipos/simplificadoArq'
import {Mos} from './components/General/mostrador'
import {MosArq} from './components/Arquetipos/mostradorArq'
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
  const [archivoArq,setArchivoArq]=useState();
  const ResArq=(archivoArqRes)=>{
    setArchivoArq(archivoArqRes)
  }
  const [datos,setGrafico]=useState();
  const Gra=(datosRes)=>{
    setGrafico(datosRes)
  }
  const [datosArq,setGraficoArq]=useState();
  const GraArq=(datosArqRes)=>{
    setGraficoArq(datosArqRes)
  }
  const [campos,setCampos]=useState();
  const Cmp=(camposRes)=>{
    setCampos(camposRes)
  }
  const [consulta,setConsulta]=useState();
  const Con=(consultaRes)=>{
    setCampos(consultaRes)
  }
  const [estadigrafo,setEstadigrafo]=useState();
  const Est=(estadigrafoRes)=>{
    setEstadigrafo(estadigrafoRes)
  }
  
  return (
    <Router>
      <Navbar />
      <Switch>
      <Container>

        <Row>
          <Route path='/'>
          <Route path='/' exact component={Home} />
          </Route>
          <Route path="/modogeneral">
          <div>
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
          <Route path="/arquetipos">
            <div>
              <SimArq envArq={archivoArq} resArq={ResArq} setGraficoArq={GraArq} con={consulta}/>
            </div>
            <hr/>
            <Col sm="6">
              <VisArq envArq={archivoArq}/>
            </Col>
            <Col sm="6">
              <MosArq datosArq={datosArq}/>
            </Col>
          </Route>
        </Row>
    </Container>
    
    </Switch>
  </Router>
    );
}

export default App;
