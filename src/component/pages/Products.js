import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Product Page</h1>
      <Link to="/product/add" className="btn btn-success btn-sm mt-3">
        Add New Product
      </Link>

      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 15)}...</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
