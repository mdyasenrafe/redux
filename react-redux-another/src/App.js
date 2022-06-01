import logo from "./logo.svg";
import "./App.css";
import FoodComponents from "./Components/Foods";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<FoodComponents />} />
        <Route path="/home" element={<FoodComponents />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
