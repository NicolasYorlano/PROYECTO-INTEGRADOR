import { Text } from "@/components/texts";
import ProductGallery from "./product-gallery/ProductGallery";
import ProductSerch from "./product-search/ProductSerch";
import "./products.scss";

const Products = () => {
    return (
        <div className="products">
            <Text variant="h2">Nuestras hamburguesas</Text>
            <ProductSerch></ProductSerch>
            <ProductGallery />
        </div>
    );
};

export default Products;