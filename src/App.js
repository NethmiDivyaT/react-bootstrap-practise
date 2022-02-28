import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


function App() {
  return (
  <Navbar collapseOnSelect expand="sm" bg="success" variant="light">
  <Container fluid>
  <Navbar.Brand href="#home">ABC Company</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="Navitem" href="#">Home</Nav.Link>
      <Nav.Link className="Navitem" href="#">Features</Nav.Link>
      <NavDropdown  className="Navitem"title="Pricing" id="collasible-nav-dropdown">
        <NavDropdown.Item className="Navitem" href="#">1 Month</NavDropdown.Item>
        <NavDropdown.Item className="Navitem" href="#">6 Month</NavDropdown.Item>
        <NavDropdown.Item  className="Navitem"href="#">1 Year</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="Navitem" href="#">Premium Plan</NavDropdown.Item>
        </NavDropdown>
        </Nav>
         { /**Search Bar */}
    <form class="d-flex input-group w-auto">
        <input
        className='searchI'
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fa fa-search"></i>
            </span>
            </form>
  </Navbar.Collapse>
  </Container>
    </Navbar>
    
  );
}

export default App;
