import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import "./product-gallery.scss";

const ProductGallery = () => {
    const { productsContext } = useContext(AppContext);
    const { products, filteredProducts, isLoading, noResults } = productsContext;

    if (noResults) {
        return (
            <Text className="product-gallery__no-results" variant="p">
                No se encuentran resultados
            </Text>
        );
    }

    const productsToRender = filteredProducts.length > 0 ? filteredProducts : products;

    return (
        <div className="product-gallery">
            <ProductNewItem />
            {productsToRender.map((product) => (
                <ProductItem key={product.id} product={product} isLoading={isLoading} />
            ))}
        </div>
    );
};

export default ProductGallery;