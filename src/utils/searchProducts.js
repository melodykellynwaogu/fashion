export function normalizeSearchTerm(value) {
    return String(value || "").trim().toLowerCase();
}

export default function searchProducts(products, query) {
    const term = normalizeSearchTerm(query);

    if (!term) return [];

    return products.filter(product => {
        const haystack = [
            product.title,
            product.category,
            product.description,
            product.badge
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return haystack.includes(term);
    });
}
