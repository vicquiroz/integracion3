import React,{useState} from 'react';
import {Vis} from './components/visualizador'
import {Exa} from './components/examinador'
import {Sim} from './components/simplificado'
import {Mos} from './components/mostrador'
import 'bootstrap/dist/css/bootstrap.css';

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
    <div className="container" path="/">
      <Sim env={archivo} res={Res} setGrafico={Gra} camps={campos} setEstadigrafo={Est}/>
      <Exa res={Res}/>
    </div>
    <hr />
    <Switch>
      <Route path="/">
      <Vis env={archivo} setCampos={Cmp} />
      <Mos setArchivo={Res} datos={datos}  est={estadigrafo}/>
      </Route>
    </Switch>
  </Router>  
    /**<Container>
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
  ***/
    );
}

export default App;
