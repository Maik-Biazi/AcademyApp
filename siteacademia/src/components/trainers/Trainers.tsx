import { Col, Container, Row } from "react-bootstrap";
import TrainersImg1 from "../../assets/trainers1.jpeg";
import TrainersImg2 from "../../assets/trainers2.jpeg";
import TrainersImg3 from "../../assets/trainers3.jpeg";
import "./trainers.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Trainers: React.FC = () => {
  return (
    <Container fluid>
      <Row className="container-trainers">
        <Col>
          <div className="trainers-img">
            <div>
              <img src={TrainersImg2} alt="" style={{ marginTop: "45px" }} />
            </div>
            <div className="trainers-text">
              <h3>William Silva</h3>
            </div>
            <div className="content-icon">
              <div>
                <a href="">
                  <FaInstagramSquare color="#ffffff" size={26} />
                </a>
              </div>
              <div>
                <a href="">
                  <FaLinkedin color="#ffffff" size={26} />
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="trainers-img">
            <div>
              <img src={TrainersImg1} alt="" />
            </div>
            <div className="trainers-text">
              <h3>Marcelo Ramos</h3>
            </div>
            <div className="content-icon">
              <div>
                <a href="">
                  <FaInstagramSquare color="#ffffff" size={26} />
                </a>
              </div>
              <div>
                <a href="">
                  <FaLinkedin color="#ffffff" size={26} />
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="trainers-img">
            <div>
              <img src={TrainersImg3} alt="" style={{ marginTop: "45px" }} />
            </div>
            <div className="trainers-text">
              <h3>Tabata Caroline</h3>
            </div>
            <div className="content-icon">
              <div>
                <a href="">
                  <FaInstagramSquare color="#ffffff" size={26} />
                </a>
              </div>
              <div>
                <a href="">
                  <FaLinkedin color="#ffffff" size={26} />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
