import React from "react";

import Card from "../UI/Card";


const products = [
  {
    id: 1,
    image:
      "https://gv466hf5ah.gjirafa.net/image/1796/1796509.jpg?width=600&height=600",
    title: "Duks për meshkuj Adidas",
    description: "Test 1 ",
    price: 60.0,
  },
  {
    id: 2,
    image:
      "https://gv466hf5ah.gjirafa.net/image/1613/1613352.jpg?width=600&height=600",
    title: "Trenerka për meshkuj Nike",
    description: "Test 2 ",
    price: 61.0,
  },
  {
    id: 3,
    image:"https://gv466hf5ah.gjirafa.net/image/1612/1612317.jpg?width=600&height=600",
    title: "Atlete për meshkuj Puma,",
    description: "Test 3 ",
    price: 50.0,
  },{
    id: 4,
    image:"https://gv466hf5ah.gjirafa.net/image/1617/1617589.jpg?width=600&height=600",
    title: "Maicë për meshkuj Nike",
    description: "Test 4 ",
    price: 28.00,

  }
  
];

function Products({setCartItems}) {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 justify-items-center bg-gray-900">
        {products.map((product) => (
          <Card key={product.id} details={product} setCartItems={setCartItems}/>
        ))}
      </div>
    </>
  );
}

export default Products;
