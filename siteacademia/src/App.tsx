import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import hero from "./assets/hero.png";
import ScrollReveal from "scrollreveal";

import { Category } from "./components/Category/Category";
import { Carrosel } from "./components/Carrosel/Carrosel";
import { About } from "./components/About/About";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      duration: 3000,
      reset: true,
      distance: "200px",
      origin: "left",
    });
    ScrollReveal().reveal(".text-chamativo", {
      duration: 3500,
      reset: true,
      distance: "300px",
      origin: "right",
    });
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="container-main">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" justify>
              <Nav.Link href="#features" className="text-nav">
                Sobre
              </Nav.Link>
              <Nav.Link href="#treinos" className="text-nav">
                Treino
              </Nav.Link>
              <Nav.Link href="#" className="text-nav">
                Galeria
              </Nav.Link>
              <Nav.Link href="#home" className="text-nav">
                Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero-main ">
        <Row>
          <Col md={12} lg={10} xl={10} xxl={6}>
            <img src={hero} alt="" className="headline" />
          </Col>
          <Col sm={10} xxl={6} className="hero-text">
            <div>
              <h2> Torne-se mais <span className="text-chamativo" style={{ color: "#FF6C2C" }}>forte</span> do
                que suas <span className="text-chamativo" style={{ color: "#FF6C2C" }}>desculpas.</span></h2>
            </div>
            <div>
              <p>
                Atividade física regular pode melhorar sua força muscular e
                aumentar sua resistência, o exercício fornece oxigênio e
                nutrientes para seus tecidos e ajuda seu sistema cardiovascular
                a funcionar com mais eficiência
              </p>
            </div>
            <div className="hero-button">
              <div className="hero-button-link">
                <a className="">Quero Fazer uma aula gratis</a>
              </div>
              <div>
                <a className="hero-button-link" href="">Quero ser Convencido</a>
              </div>
            </div>


          </Col>
        </Row>
      </Container>

      <Container fluid className="container-card">
        <div >
          <Row className="card-body">
            <Col>
              <div className="card-item">
                <div className="card-text"><span>3500+</span></div>
                <div className="card-text">
                  <p> Total de membros</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-item">
                <div className="card-text"><span>150</span></div>
                <div className="card-text">
                  <p>Melhores Treinadores</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-item">
                <div className="card-text"><span>25</span></div>
                <div className="card-text">
                  <p> Treinos personalizados</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-item">
                <div className="card-text"><span>450+</span></div>
                <div className="card-text">
                <p> Instrumentos</p>
                </div>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
      <Category id="treinos" title="Nossos Treinamento"/>
      <Carrosel/>
      <Category id="treinos" title="Sobre Nos"/>
      <About/>

    </>
  );
}

export default App;
