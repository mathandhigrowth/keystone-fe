import BrandsWithProductsData from "@/data/BrandsWithProductsData";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const BrandCard = ({ brand, isOpen, onToggle }) => {
    console.log('brand: ', brand);
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Brand Logo */}
            <div className="flex justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100 h-40">
                <img
                    src={brand.brandImg}
                    alt={brand.brandName}
                    className="max-h-28 object-contain drop-shadow-md"
                />
            </div>

            {/* Brand Info */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800">{brand.brandName}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">
                    {brand.description}
                </p>

                {/* Toggle Button */}
                <button
                    onClick={onToggle}
                    className="mt-4 w-full bg-primary text-white text-sm font-medium px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition"
                >
                    {isOpen ? "Hide Products" : "View Products"}
                </button>

                {/* Products Grid (Animated) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >
                            {brand.workedProducts?.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-gray-50 border rounded-xl p-4 flex flex-col justify-between hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                                >
                                    <div>
                                        <h4 className="text-md font-semibold text-gray-800 mb-1">
                                            {product.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-2">
                                            {product.description}
                                        </p>
                                    </div>
                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="mt-4 text-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm transition"
                                    >
                                        View Products
                                    </Link>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default function BrandsCardGrid() {
    const [openBrand, setOpenBrand] = useState(null);

    const toggleBrand = (id) => {
        setOpenBrand(openBrand === id ? null : id);
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Brands & Products
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore top industrial brands and their product categories.
                    Click on a brand to reveal products, then dive deeper into each one.
                </p>
            </div>

            {/* Card Grid */}
            <div className="flex flex-wrap gap-10">
                {BrandsWithProductsData.slice(0,1).map((brand) => (
                    <div className="w-full sm:w-[48%] lg:w-[30%]">
                        <BrandCard
                            brand={brand}
                            isOpen={openBrand === brand.id}
                            onToggle={() => toggleBrand(brand.id)}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}
