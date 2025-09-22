import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import "./shopping-cart.scss";

const ShoppingCart = () => {
    const { shoppingCartContext, productsContext } = useContext(AppContext);
    const { shoppingCart, clearCart } = shoppingCartContext;
    const { fetchProductById, updateProduct } = productsContext;

    const handlePurchase = async () => {
        try {
            for (const article of shoppingCart.articles) {
                const product = await fetchProductById(article.id);

                if (product.stock < article.quantity) {
                    alert("Hay productos con stock insuficiente");
                    return;
                }
            }

            for (const article of shoppingCart.articles) {
                const product = await fetchProductById(article.id);
                await updateProduct(product.id, { ...product, stock: product.stock - article.quantity });
            }

            alert("¡Compra realizada con éxito!");

            clearCart();
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al procesar la compra.");
        }
    };

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>

            <Table>
                <TableHead>
                    <TableRow className="table__head">
                        <TableCell align="left">Producto</TableCell>
                        <TableCell align="right">Cant.</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Importe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart.articles?.map((article)=>(
                        <TableRow key={article.id} className="table__body">
                            <TableCell align="left">{article.name}</TableCell>
                            <TableCell align="right">{article.quantity}</TableCell>
                            <TableCell align="right">${article.price?.toFixed(2)}</TableCell>
                            <TableCell align="right">${article.amount?.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

            <div className="table__footer">
                <Text className="table__total" variant="p">Total: ${shoppingCart.totalAmount?.toFixed(2)}</Text>
            </div>

            <ButtonPrimary onClick={clearCart}>Vaciar carrito</ButtonPrimary>
            <ButtonPrimary onClick={handlePurchase}>Comprar</ButtonPrimary>
        </div>
    );
};

export default ShoppingCart;