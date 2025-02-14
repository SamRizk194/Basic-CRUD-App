import "./App.css";
import Navbar from "./component/Navbar";
import Addproduct from "./component/pages/Addproduct";
import Home from "./component/pages/Home";
import ProductDetails from "./component/pages/ProductDetails";
import Products from "./component/pages/Products";
import Sidebar from "./component/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/add" element={<Addproduct />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
