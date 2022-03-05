import '../Styles/Grid.css';
import { Container, Col, Row } from 'react-bootstrap'

function Grid() {
    return (
        <Container>
          <Row>
            <Col md={6} xs={12} style={{backgroundColor: "pink"}} className="First">A</Col>
            <Col md={6} xs={12} style={{backgroundColor: "blue"}} className="Second">B</Col>
          </Row>
          <Row>
            <Col md={4}>
                <Row>
                <Col md={12} xs={12} style={{backgroundColor: "red"}} className="Third">C</Col>
                <Col md={12} xs={12} style={{backgroundColor: "orange"}} className="Forth">E</Col>
                </Row>
            </Col>
            <Col>
              <Row>
                <Col md={12} xs={12} style={{backgroundColor: "yellow"}} className="Fifth">D</Col>
              </Row>
              <Row>
                <Col md={6} xs={6} style={{backgroundColor: "purple"}} className="Sixth">F</Col>
                <Col md={6} xs={6} style={{backgroundColor: "grey"}} className="Seventh">G</Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
  
  export default Grid;
