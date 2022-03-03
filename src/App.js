import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Component/Navbar";
import GridSystem from "./Component/GridSystem";
import Card from "./Component/Card"

function App() {
  return (
    <>
      <NavBar />
      <GridSystem />
      <Card/>
    </>
  );
}

export default App;