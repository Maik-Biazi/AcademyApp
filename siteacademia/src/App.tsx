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

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      duration: 3000,
      reset: true,
      distance: "200px",
      origin: "left",
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
              <Nav.Link href="#pricing" className="text-nav">
                Treino
              </Nav.Link>
              <Nav.Link href="#contato" className="text-nav">
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
          <Col md="6">
            <img src={hero} alt="" className="headline" />
          </Col>
          <Col md="5" className="hero-text">
            <div>
             <h2> Torne-se mais <span style={{ color: "#75AB47" }}>forte</span> do
              que suas <span style={{ color: "#75AB47" }}>desculpas.</span></h2>
            </div>
            <div>
              <p>
                Atividade física regular pode melhorar sua força muscular e
                aumentar sua resistência, o exercício fornece oxigênio e
                nutrientes para seus tecidos e ajuda seu sistema cardiovascular
                a funcionar com mais eficiência
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
