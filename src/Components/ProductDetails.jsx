import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-5xl tracking-wide h-screen flex justify-center items-center font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col max-w-2xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain bg-gray-100"
        />
        <div className="p-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h3>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
