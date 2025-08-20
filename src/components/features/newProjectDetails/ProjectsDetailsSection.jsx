import { Check } from "lucide-react";

export default function ProjectsDetailsSection({ project }) {
    const brand = project;
    if (!brand) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Brand not found
                </h2>
                <p className="text-gray-500 mt-2">
                    We couldn’t find products for this brand.
                </p>
            </div>
        );
    }

    // 🔹 Flatten all products from all categories
    const allProducts = brand.workedProducts.flatMap((category) =>
        category.detailedProducts.map((prod) => ({
            ...prod,
            categoryName: category.name, // keep track of category
        }))
    );

    // 🔹 Sort all products by total features + applications length
    const sortedProducts = allProducts.sort((a, b) => {
        const aLength = (a.features?.length || 0) + (a.applications?.length || 0);
        const bLength = (b.features?.length || 0) + (b.applications?.length || 0);
        return bLength - aLength; // high → low
    });

    return (
        <div className="bg-[var(--color-background)] pb-16">
            <div className="container mx-auto px-8 py-16">
                {/* Brand Title */}
                <h2 className="text-4xl font-bold text-[var(--color-dark)] mb-4">
                    {brand.brandName}
                </h2>
                <p className="text-gray-600 max-w-3xl mb-12">{brand.description}</p>

                {/* Products Grid */}
                <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {sortedProducts.map((prod) => (
                        <div
                            key={prod.slug}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                        >
                            {/* Banner */}
                            {prod.bannerImg && (
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={prod.bannerImg}
                                        alt={prod.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Details */}
                            <div className="p-6 flex-1 flex flex-col">
                                {/* Category Name */}
                                <p className="text-sm text-gray-500 mb-1">{prod.categoryName}</p>

                                <h4 className="text-xl font-bold text-[var(--color-dark)] mb-3">
                                    {prod.name}
                                </h4>

                                {/* Features */}
                                {prod.features?.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                                            Features:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {prod.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <Check className="w-4 h-4 text-[var(--color-accent)] mr-2 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Applications */}
                                {prod.applications?.length > 0 && (
                                    <div>
                                        <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                                            Applications:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {prod.applications.map((app, idx) => (
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
            </div>
        </div>
    );
}
