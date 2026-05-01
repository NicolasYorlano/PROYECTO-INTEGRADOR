import { ButtonPrimary } from "@/components/buttons";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

const ShoppingCartBuy = () => {
    const { shoppingCartContext, productsContext } = useContext(AppContext);
    const { shoppingCart, clearCart } = shoppingCartContext;
    const { fetchProductById, updateProduct } = productsContext;

    const handlePurchase = async () => {
        try {
            if (!shoppingCart.articles || shoppingCart.articles.length === 0) {
                alert("No hay productos seleccionados");
                return;
            }

            // Validar stock
            const validatedProducts = [];

            for (const article of shoppingCart.articles) {
                const product = await fetchProductById(article.id);

                if (!product) {
                    alert(`El producto con ID ${article.id} no existe.`);
                    return;
                }

                if (product.stock < article.quantity) {
                    alert(`El producto "${product.name}" tiene stock insuficiente.`);
                    return;
                }

                validatedProducts.push({ product, article });
            }

            // Actualizar productos en paralelo
            await Promise.all(
                validatedProducts.map(async ({ product, article }) => {
                    const newStock = product.stock - article.quantity;

                    // Enviamos el stock actualizado al backend
                    await updateProduct(product._id || product.id, {
                        stock: newStock,
                    });
                }),
            );

            alert("¡Compra realizada con éxito!");
            clearCart();

        } catch (error) {
            console.error("Error al procesar la compra:", error);
            alert("Ocurrió un error al procesar la compra.");
        }
    };

    return (
        <ButtonPrimary size="md" onClick={handlePurchase}>
            Realizar pedido
        </ButtonPrimary>
    );
};

export default ShoppingCartBuy;