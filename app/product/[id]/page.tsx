'use client';

import React from 'react';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = {
    id: params.id,
    name: 'Sample Product',
    price: 49.99,
    description:
      'This is a beautiful and useful product that you will love. High quality, fast shipping, and customer favorite.',
    image: `https://picsum.photos/seed/${params.id}/500/500`,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 font-semibold mb-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
