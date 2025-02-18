import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ title, price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    navigate("/products");
  };

  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            aria-describedby="Product Title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default Addproduct;
