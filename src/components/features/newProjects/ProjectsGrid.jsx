import BrandsWithProductsData from "@/data/BrandsWithProductsData";
import React from "react";
import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Brand Logo */}
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100 h-40">
        <img src={brand.brandImg} alt={brand.brandName} className="max-h-28 object-contain drop-shadow-md" />
      </div>

      {/* Brand Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800">{brand.brandName}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">{brand.description}</p>

        {/* ✅ Single button → brand page */}
        <Link to={`/brands/${brand.slug}`} className="mt-6 w-full text-center bg-primary text-white text-sm font-medium px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">
          View Products
        </Link>
      </div>
    </div>
  );
};

export default function BrandsCardGrid() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Brands & Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Explore top industrial brands and their product categories.</p>
      </div>

      {/* Card Grid */}
      <div className="flex flex-wrap gap-10">
        {BrandsWithProductsData.map((brand) => (
          <div key={brand.id} className="w-full sm:w-[48%] lg:w-[30%]">
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
    </div>
  );
}
