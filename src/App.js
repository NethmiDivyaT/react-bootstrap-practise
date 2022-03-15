import "bootstrap/dist/css/bootstrap.min.css";


import NavBar from "./Component/Navbar";
import GridSystem from "./Component/GridSystem";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Search from "./Component/typehead";
import Background from "./Component/background";

function App() {
  return (
    <>
      <Background/>
      <Search/>
    </>
  );
}

export default App;