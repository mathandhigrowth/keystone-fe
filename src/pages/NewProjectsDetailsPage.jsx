import React from "react";
import { useParams } from "react-router-dom";
import BrandsWithProductsData from "@/data/BrandsWithProductsData";
import ProjectsDetailsBanner from "@/components/features/newProjectDetails/ProjectsDetailsBanner";
import ProjectsDetailsSection from "@/components/features/newProjectDetails/ProjectsDetailsSection";
import { banner6 } from "@/assets/images";

const NewProjectsDetailsPage = () => {
    const { slug } = useParams();

    let foundProducts = [];
    let parentBrand = null;
    let parentCategory = null;
    let viewMode = "single";

    for (const brand of BrandsWithProductsData) {
        for (const product of brand.workedProducts || []) {
            const detailedMatch = product.detailedProducts.find(
                (dp) => dp.slug === slug
            );

            if (detailedMatch) {
                foundProducts = [detailedMatch];
                parentCategory = product;
                parentBrand = brand;
                viewMode = "single";
                break;
            }

            if (product.slug === slug) {
                foundProducts = product.detailedProducts;
                parentCategory = product;
                parentBrand = brand;
                viewMode = "category";
                break;
            }
        }
        if (foundProducts.length) break;
    }

    if (!foundProducts.length) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Product not found
                </h2>
                <p className="text-gray-500 mt-2">
                    We couldn't find a product with the provided identifier.
                </p>
            </div>
        );
    }

    return (
        <div>
            <ProjectsDetailsBanner
                project={{
                    name: parentCategory?.name || foundProducts[0].name,
                    bannerImg: banner6,
                }}
            />

            <ProjectsDetailsSection
                project={
                    viewMode === "category"
                        ? foundProducts.map((product) => ({
                            ...product,
                            category: parentCategory?.name,
                            brand: parentBrand?.brandName,
                            brandImg: parentBrand?.brandImg,
                            brandDescription: parentBrand?.description,
                            slug: product.slug,
                        }))
                        : {
                            ...foundProducts[0],
                            category: parentCategory?.name,
                            brand: parentBrand?.brandName,
                            brandImg: parentBrand?.brandImg,
                            brandDescription: parentBrand?.description,
                            slug: foundProducts[0].slug,
                        }
                }
            />
        </div>
    );
};

export default NewProjectsDetailsPage;
