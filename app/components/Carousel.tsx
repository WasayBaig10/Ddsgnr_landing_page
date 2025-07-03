import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Bananas',
    price: 'Rs. 120',
    image: '/images/banana.jpg',
  },
  {
    id: 2,
    name: 'Bread',
    price: 'Rs. 90',
    image: '/images/bread.jpg',
  },
  {
    id: 3,
    name: 'Milk',
    price: 'Rs. 150',
    image: '/images/milk.jpg',
  },
  {
    id: 4,
    name: 'Eggs',
    price: 'Rs. 200',
    image: '/images/eggs.jpg',
  },
  {
    id: 5,
    name: 'Eggs',
    price: 'Rs. 200',
    image: '/images/eggs.jpg',
  },
  {
    id: 6,
    name: 'Eggs',
    price: 'Rs. 200',
    image: '/images/eggs.jpg',
  },
  {
    id: 7,
    name: 'Eggs',
    price: 'Rs. 200',
    image: '/images/eggs.jpg',
  },
  {
    id: 8,
    name: 'Eggs',
    price: 'Rs. 200',
    image: '/images/eggs.jpg',
  },
];
export function CarouselSize() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Q-Commerce Products</h2>

      <Carousel
        opts={{ align: "start" }}
        className="w-[250px] sm:w-[80vw] sm:ml-0 ml-8"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-[230px] md:basis-1/4 lg:basis-1/5"
            >
              <div className="p-2 text-center font-outfit">
                <Card>
                  <CardContent className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
