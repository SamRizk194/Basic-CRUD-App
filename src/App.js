import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
