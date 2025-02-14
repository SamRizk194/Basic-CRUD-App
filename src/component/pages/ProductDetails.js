import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {product.image && <img src={product.image} alt={product.title} />}
      <h1>{product.title}</h1>
    </>
  );
}

export default ProductDetails;
