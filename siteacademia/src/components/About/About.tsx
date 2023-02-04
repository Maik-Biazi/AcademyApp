import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../assets/about.jpg";
import "./about.css";

export const About: React.FC = () => {
  return (
    <Container>
      <Row className="about-container">
        <Col>
          <div>
            <img src={AboutImg} alt="" />
          </div>
        </Col>

        <Col>
          <div className="about-text">
            <h3>Faça o certo hoje e o resultado virá amanhã</h3>
          </div>
          <div className="about-paragrafy">
            <span >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              nulla nemo in pariatur commodi maxime quia quo distinctio vitae
              blanditiis neque error reiciendis a rem quod? Labore ex adipisci
              minus?
            </span>
            <span >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              nulla nemo in pariatur commodi maxime quia quo distinctio vitae
              blanditiis neque error reiciendis a rem quod? Labore ex adipisci
              minus?
            </span>
            <span >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              nulla nemo in pariatur commodi maxime quia quo distinctio vitae
              blanditiis neque error reiciendis a rem quod? Labore ex adipisci
              minus?
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
