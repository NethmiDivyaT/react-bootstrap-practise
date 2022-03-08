import '../Styles/Card.css';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import img1 from "../Assert/img1.jpeg";
import img2 from "../Assert/img2.jpg";
import img3 from "../Assert/img3.jpg";
import img4 from "../Assert/img4.jpg";
import img5 from "../Assert/img5.jfif";
import img6 from "../Assert/img6.jpg";
import img7 from "../Assert/img7.png";
import img8 from "../Assert/img8.jfif";

function CardView() {
    return (
    <Container className='Container'>
        <Carousel controls="true" className='Carousel'>
          <Carousel.Item className="itemC">
            {/**Row1 */}
            <Row xs={1} md={4}>
              {/**Card1 */}
          <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img1} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Programming with HTML,CSS and JS</Card.Title>
                <Card.Text className="content">
                 Learn basic web development as you build web pages.
                </Card.Text>
                <div>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </div>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
            </Card>
              </Col>
              {/**Card2 */}
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img2} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Modern Cloud Based Application Development</Card.Title>
                <Card.Text className="content">
                  Start buildning of software application in the cloud.
                </Card.Text>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
            </Card>
              </Col>
              {/**Card3 */}
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img3} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Full Stack web application Development</Card.Title>
                <Card.Text className="content">
                  Learn concepts to build modern full stack web applications.
                </Card.Text>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
            </Card>
              </Col>
              {/**Card4 */}
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img4} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Computer Networking for Software Engineers</Card.Title>
                <Card.Text className="content">
                  Fundermentals of software applications in the cloud.
                </Card.Text>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
             </Card>
            </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className='itemC'>
            {/**Row1 */}
          <Row xs={1} md={4}>
           {/**Card1 */} 
          <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img5} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Programming with HTML,CSS and JS</Card.Title>
                <Card.Text className="content">
                 Learn basic web development as you build web pages.
                </Card.Text>
                <div>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </div>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>

              </Card.Body>
            </Card>
              </Col>
              {/**Card2 */}
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img6} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Modern Cloud Based Application Development</Card.Title>
                <Card.Text className="content">
                  Start buildning of software application in the cloud.
                </Card.Text>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
            </Card>
            </Col>
              {/**Card3 */}
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img7} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Full Stack web application Development</Card.Title>
                <Card.Text className="content">
                  Learn concepts to build modern full stack web applications.
                </Card.Text>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
            </Card>
            </Col>
            {/**Card4 */}
            <Col>
            <Card className='card'>
              <Card.Img variant="top" src={img8} className="img" />
              <Card.Body>
              <button>$15</button>
                <Card.Title className='title'>Computer Networking for Software Engineers</Card.Title>
                <Card.Text className="content">
                  Fundermentals of software applications in the cloud.
                </Card.Text>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i className='count'>4.8</i>
                </span>
                <div className='footergroup'>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <i className='iconName'>Video</i>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <i className='iconName'>54</i>
                </div>
              </Card.Body>
             </Card>
            </Col>
            </Row>
    </Carousel.Item>
    </Carousel>
    </Container>
    );
  }
  
  export default CardView;
