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

  return (
    <>
      {product && (
        <>
          <img src={product.image} alt={product.title} />
          <h1 className="mt-5">{product.title}</h1>
          <h4 className="mt-5">{product.description}</h4>
        </>
      )}
    </>
  );
}

export default ProductDetails;
