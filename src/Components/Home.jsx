import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const addToCart = () => {
    alert('Your product is added to Cart');
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 min-h-screen p-6">
      <div className="container mx-auto p-4 bg-indigo-400 bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center m-8 mb-9 text-black bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 py-3">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer transform transition-transform hover:scale-105"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4">${product.price}</p>
                <button
                  onClick={addToCart}
                  className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
