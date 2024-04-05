import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";

function App() {
  const [foodData, setfoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <FoodList foodData={foodData} />
      </Container>
    </div>
  );
}

export default App;
