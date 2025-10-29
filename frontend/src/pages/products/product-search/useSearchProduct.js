import AppContext from "@/contexts/AppContext";
import { useContext, useState } from "react";

export const useSearchProduct = () => {
    const { productsContext } = useContext(AppContext);
    const { fetchProducts } = productsContext;

    const [ noResults, setNoResults ] = useState(false);

    const handleSearch = async (values) => {
        const query = values.query.trim();

        try {
            await fetchProducts(query ? { search: query } : {});

            setTimeout(() => {
                setNoResults(productsContext.products.length === 0);
            }, 100);
        } catch (error) {
            console.error("Error al buscar productos:", error);
            setNoResults(true);
        }
    };

    return {
        handleSearch,
        noResults,
    };
};