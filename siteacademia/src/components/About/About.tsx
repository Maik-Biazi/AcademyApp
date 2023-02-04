import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../assets/about.jpg";

export const About: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <div>
        <Col>
          <div>
            <img src={AboutImg} alt="" />
          </div>
        </Col>
        <Col>
          <h1>Text</h1>
        </Col>
        </div>
      </Row>
    </Container>
  );
};
