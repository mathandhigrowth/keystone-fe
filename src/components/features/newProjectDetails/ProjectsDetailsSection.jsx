import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import BrandsWithProductsData from "@/data/BrandsWithProductsData";

function getAllCategories() {
    const categories = [];

    BrandsWithProductsData.forEach((brand) => {
        brand.workedProducts.forEach((wp) => {
            categories.push({
                ...wp,
                brand: brand.brandName,
                brandImg: brand.brandImg,
                brandDescription: brand.description,
            });
        });
    });

    return categories;
}

const allCategories = getAllCategories();

export default function ProjectsDetailsSection({ project }) {
    // project can be a category (with multiple detailedProducts)
    const category = Array.isArray(project) ? project[0].category : project.category;
    const currentIndex = allCategories.findIndex((c) => c.slug === project.slug || c.name === category);

    const prevCategory = currentIndex > 0 ? allCategories[currentIndex - 1] : null;
    const nextCategory = currentIndex < allCategories.length - 1 ? allCategories[currentIndex + 1] : null;

    // If project is multiple (all detailed products of a category)
    const projectsArray = Array.isArray(project) ? project : [project];

    return (
        <div className="bg-[var(--color-background)] pb-16">
            <div className="container mx-auto px-8 py-16">
                {/* Category Title */}
                <h2 className="text-4xl font-bold text-[var(--color-dark)] mb-12">
                    {projectsArray[0].category} – {projectsArray[0].brand}
                </h2>

                {/* Products Grid */}
                <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projectsArray.map((proj) => (
                        <div key={proj.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                            {/* Banner */}
                            {proj.bannerImg && (
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={proj.bannerImg}
                                        alt={proj.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Details */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">
                                    {proj.name}
                                </h3>

                                {/* Features */}
                                {proj.features?.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                                            Features:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {proj.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <Check className="w-4 h-4 text-[var(--color-accent)] mr-2 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Applications */}
                                {proj.applications?.length > 0 && (
                                    <div>
                                        <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                                            Applications:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {proj.applications.map((app, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <Check className="w-4 h-4 text-[var(--color-accent)] mr-2 mt-0.5 flex-shrink-0" />
                                                    <span>{app}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prev / Next navigation only at category level */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {prevCategory && (
                        <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-lg shadow-sm">
                            <div className="size-24 rounded overflow-hidden flex-shrink-0">
                                <img
                                    src={prevCategory.bannerImg || "/placeholder.svg"}
                                    alt={prevCategory.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[var(--color-dark)]">{prevCategory.name}</h4>
                                <p className="text-gray-600 text-sm">{prevCategory.brand}</p>
                                <Link
                                    to={`/products/${prevCategory.slug}`}
                                    className="bg-primary text-white py-1 px-2 text-sm my-1 inline-block rounded"
                                >
                                    ← Previous Category
                                </Link>
                            </div>
                        </div>
                    )}

                    {nextCategory && (
                        <div className="flex items-center gap-4 bg-[var(--color-surface)] p-4 rounded-lg shadow-sm">
                            <div className="size-24 rounded overflow-hidden flex-shrink-0">
                                <img
                                    src={nextCategory.bannerImg || "/placeholder.svg"}
                                    alt={nextCategory.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-[var(--color-dark)]">{nextCategory.name}</h4>
                                <p className="text-gray-600 text-sm">{nextCategory.brand}</p>
                                <Link
                                    to={`/products/${nextCategory.slug}`}
                                    className="bg-primary text-white py-1 px-2 text-sm my-1 inline-block rounded"
                                >
                                    Next Category →
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
