import React, { useState } from "react";
import { Vis } from "./components/General/visualizador";
import { VisArq } from "./components/Arquetipos/visualizadorArq";
import { Exa } from "./components/Comun/examinador";
import { Sim } from "./components/General/simplificado";
import { SimArq } from "./components/Arquetipos/simplificadoArq";
import { Mos } from "./components/General/mostrador";
import { MosArq } from "./components/Arquetipos/mostradorArq";
import Home from "./paginas/home";
import Navbar from "./components/BarraLateral/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [archivo, setArchivo] = useState(); //UseState para "Archivo" 
  const Res = (ArchivoRes) => {
    setArchivo(ArchivoRes);
  };
  const [archivoArq, setArchivoArq] = useState(); //UseState para "ArchivoArq" (Arquetipos)
  const ResArq = (ArchivoArqRes) => {
    setArchivoArq(ArchivoArqRes);
  };
  const [datos, setGrafico] = useState();//UseState para "Grafico"
  const Gra = (DatosRes) => {
    setGrafico(DatosRes);
  };
  const [datosArq, setGraficoArq] = useState(); //UseState para "datosArq"(Arquetipos)
  const GraArq = (DatosArqRes) => {
    setGraficoArq(DatosArqRes);
  };
  const [campos, setCampos] = useState(); //UseState para "Campos"
  const Cmp = (DamposRes) => {
    setCampos(DamposRes);
  };
  const [consulta, setConsulta] = useState();//UseState para "Consulta"
  const Con = (ConsultaRes) => {
    setConsulta(ConsultaRes);
  };
  const [estadigrafo, setEstadigrafo] = useState();//UseState para "Estadigrafo"
  const Est = (EstadigrafoRes) => {
    setEstadigrafo(EstadigrafoRes);
  };
  const [estadigrafoArq, setEstadigrafoArq] = useState();//UseState para "EstadigrafoArq"(Arquetipos)
  const EstArq = (EstadigrafoArqRes) => {
    setEstadigrafoArq(EstadigrafoArqRes);
  };
  const [listado, setListado] = useState();//UseState para "Listado"
  const Lst = (ListadoRes) => {
    setListado(ListadoRes);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container> 
          <Row>
            <Route path="/">
              <Route path="/" exact component={Home} />
            </Route>
            <Route path="/modogeneral">
              <div>
                <Exa res={Res} />
                <Sim        //Sim en el "modo General"
                  env={archivo}       //Como se puede ver aca 
                  res={Res}          //se llaman cada uno de nuestros 
                  setGrafico={Gra}  //hooks de estado (useState)que 
                  camps={campos}   //creamos anteriormente
                  setEstadigrafo={Est}
                />
              </div>
              <hr />
              <Col sm="6">
                <Vis env={archivo} setCampos={Cmp} />
              </Col>
              <Col sm="6">
                <Mos datos={datos} est={estadigrafo} />
              </Col>
            </Route>
            <Route path="/arquetipos">
              <div>
                <SimArq //Sim en el "manejo de arquetipos"
                  envArq={archivoArq}
                  setListado={Lst}
                  listado={listado}
                  resArq={ResArq}
                  setGraficoArq={GraArq}
                  con={consulta}
                  setEstadigrafoArq={EstArq}
                />
              </div>
              <hr />
              <Col sm="6">
                <VisArq envArq={archivoArq} />
              </Col>
              <Col sm="6">
                <MosArq // Mostrara todo en la parte de Arquetipos
                  datosArq={datosArq}
                  estArq={estadigrafoArq}
                />
              </Col>
            </Route>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
