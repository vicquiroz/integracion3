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
  const [archivo, setArchivo] = useState();
  const Res = (ArchivoRes) => {
    setArchivo(ArchivoRes);
  };
  const [archivoArq, setArchivoArq] = useState();
  const ResArq = (ArchivoArqRes) => {
    setArchivoArq(ArchivoArqRes);
  };
  const [datos, setGrafico] = useState();
  const Gra = (DatosRes) => {
    setGrafico(DatosRes);
  };
  const [datosArq, setGraficoArq] = useState();
  const GraArq = (DatosArqRes) => {
    setGraficoArq(DatosArqRes);
  };
  const [campos, setCampos] = useState();
  const Cmp = (DamposRes) => {
    setCampos(DamposRes);
  };
  const [consulta, setConsulta] = useState();
  const Con = (ConsultaRes) => {
    setConsulta(ConsultaRes);
  };
  const [estadigrafo, setEstadigrafo] = useState();
  const Est = (EstadigrafoRes) => {
    setEstadigrafo(EstadigrafoRes);
  };
  const [estadigrafoArq, setEstadigrafoArq] = useState();
  const EstArq = (EstadigrafoArqRes) => {
    setEstadigrafoArq(EstadigrafoArqRes);
  };
  const [listado, setListado] = useState();
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
                <Sim
                  env={archivo}
                  res={Res}
                  setGrafico={Gra}
                  camps={campos}
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
                <SimArq
                  envArq={archivoArq}
                  setListado={Lst}
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
                <MosArq
                  datosArq={datosArq}
                  estArq={estadigrafoArq}
                  listado={listado}
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
