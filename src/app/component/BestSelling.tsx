"use client";
import React from "react";
import BestSellingVarient from "../../../varientVault/BestSelling";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
  const bestSell = [
    {
      src: "/pictures/BS1.jpg",
      alt: "white T-shirt",
      title: "Red Printed T.Shirt",
      description: "Best quality t.shirt for Women",
      price: 150,
      category: "white T-shirt",
      slug: "white tops",
    },
    {
      src: "/pictures/BS3.jpg",
      alt: "Black Printed Shirt",
      title: "Red Printed T.Shirt",
      description: "Best quality t.shirt for Women",
      price: 200,
      category: "Black T-shirt",
      slug: "Black T-Shirt",
    },
    {
      src: "/pictures/BS2.jpg",
      alt: "Black Pumpees",
      title: "Black Pumpees",
      description: "Top Notch Shoes for Women",
      price: 250,
      category: "Black Pumpees",
      slug: "Black Shoes",
    },
  ];
  return (
    <div className="mb-28 mt-28">
      {/* Heading */}
      <div className="text-center mb-10">
        <BestSellingVarient key={0} />
        <div className="flex mt-2 justify-center">
          <div className="w-28 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>
      {/* Best selling product card here */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items, i) => (
          <BestSellingCard
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
