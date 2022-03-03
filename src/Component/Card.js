import '../Styles/Card.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from "../Assert/1.jpg";
import img2 from "../Assert/4.jpg";
import img3 from "../Assert/bg.jpg";
import img4 from "../Assert/Room3.jpg";

function CardView() {
    return (
        <Container className='Container'>
        <Row xs={1} md={4}>
          <Col>
            <Card className='card1'>
              <Card.Img variant="top" src={img1} className="img" />
              <Card.Body>
                <Card.Title className='title'>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='card2'>
              <Card.Img variant="top" src={img2} className="img" />
              <Card.Body>
                <Card.Title className='title'>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='card3'>
              <Card.Img variant="top" src={img3} className="img" />
              <Card.Body>
                <Card.Title className='title'>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='card4'>
              <Card.Img variant="top" src={img4} className="img" />
              <Card.Body>
                <Card.Title className='title'>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
    );
  }
  
  export default CardView;
