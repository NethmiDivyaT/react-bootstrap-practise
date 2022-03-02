import './App.css';
import { Navbar, Container, Nav, NavDropdown, Col, Row } from 'react-bootstrap'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


function App() {
  return (
    /**----------------------------------------- Navigation Bar------------------------------------------------ */
  <>
      <Navbar collapseOnSelect expand="xxl" bg="success" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">ABC Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="Navitem" href="#">Home</Nav.Link>
              <Nav.Link className="Navitem" href="#">Features</Nav.Link>
              <NavDropdown className="Navitem" title="Pricing" id="collasible-nav-dropdown">
                <NavDropdown.Item className="Navitem" href="#">1 Month</NavDropdown.Item>
                <NavDropdown.Item className="Navitem" href="#">6 Month</NavDropdown.Item>
                <NavDropdown.Item className="Navitem" href="#">1 Year</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="Navitem" href="#">Premium Plan</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/**Search Bar */}
              <form class="d-flex input-group w-auto">
                <input
                  className='searchI'
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fa fa-search"></i>
                </span>
              </form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/**----------------------------------------- Grid System------------------------------------------------ */}
      <Container fluid>
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
    
    
    
    </>

    
  );
}

export default App;
