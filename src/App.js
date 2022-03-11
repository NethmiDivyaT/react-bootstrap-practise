import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Component/Navbar";
import GridSystem from "./Component/GridSystem";
import Card from "./Component/Card";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <GridSystem />
      <Card />
      <Footer/>
    </>
  );
}

export default App;