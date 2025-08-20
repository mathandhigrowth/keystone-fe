import React from "react";
import { useParams } from "react-router-dom";
import BrandsWithProductsData from "@/data/BrandsWithProductsData";
import ProjectsDetailsBanner from "@/components/features/newProjectDetails/ProjectsDetailsBanner";
import ProjectsDetailsSection from "@/components/features/newProjectDetails/ProjectsDetailsSection";
import { banner6 } from "@/assets/images";

const NewProjectsDetailsPage = () => {
  const { slug } = useParams();

  const parentBrand = BrandsWithProductsData.find(
    (brand) =>
      brand.slug === slug ||
      brand.workedProducts?.some(
        (product) =>
          product.slug === slug ||
          product.detailedProducts?.some((dp) => dp.slug === slug)
      )
  );


  if (!parentBrand) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          Product not found
        </h2>
        <p className="text-gray-500 mt-2">
          We couldn't find a product or brand with the provided identifier.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ProjectsDetailsBanner
        project={{
          name: parentBrand.brandName,
          bannerImg: parentBrand.bannerImg || banner6,
        }}
      />

      <ProjectsDetailsSection project={parentBrand} />
    </div>
  );
};

export default NewProjectsDetailsPage;
