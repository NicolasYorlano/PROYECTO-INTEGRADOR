import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

export const useSearchProduct = () => {
    const { productsContext } = useContext(AppContext);
    const { products, setFilteredProducts, setNoResults } = productsContext;

    const handleSearch = (values) => {
        const query = values.query.trim().toLowerCase();

        if (!query) {
            setFilteredProducts([]);
            setNoResults(false);
            return;
        }

        const filtered = products.filter((p) =>
            p.name.toLowerCase().includes(query),
        );

        setFilteredProducts(filtered);
        setNoResults(filtered.length === 0);
    };

    const resetNoResults = () => setNoResults(false);

    return { handleSearch, resetNoResults };
};