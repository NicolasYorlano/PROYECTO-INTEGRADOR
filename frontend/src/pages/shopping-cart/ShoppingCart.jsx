import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import "./shopping-cart.scss";
import ShoppingCartBuy from "./ShoppingCartActions/ShoppingCartBuy";
import ShoppingCartClear from "./ShoppingCartActions/ShoppingCartClear";

const ShoppingCart = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { shoppingCart, addArticle, subtractArticle } = shoppingCartContext;

    const handleAdd = (id) => {
        addArticle(id, 1);
    };

    const handleSubtract = (id) => {
        subtractArticle(id, 1);
    };

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>

            <Table>
                <TableHead>
                    <TableRow className="table__head">
                        <TableCell align="left">Producto</TableCell>
                        <TableCell align="center">Cant.</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Importe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart.articles?.map((article) => (
                        <TableRow key={article.id} className="table__body">
                            <TableCell align="left">{article.name}</TableCell>
                            <TableCell align="center">
                                <div className="quantity-control">
                                    <RemoveCircleIcon
                                        className="quantity-control__icon quantity-control__icon--remove"
                                        onClick={() => handleSubtract(article.id)}/>
                                    <span className="quantity-control__value">{article.quantity}</span>
                                    <AddCircleIcon
                                        className="quantity-control__icon quantity-control__icon--add"
                                        onClick={() => handleAdd(article.id)}/>
                                </div>
                            </TableCell>
                            <TableCell align="right">${article.price?.toFixed(2)}</TableCell>
                            <TableCell align="right">${article.amount?.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="table__footer">
                <Text className="table__total" variant="p">
                    Total: ${shoppingCart.totalAmount?.toFixed(2)}
                </Text>
            </div>

            <div className="shopping-cart__actions">
                <ShoppingCartClear />
                <ShoppingCartBuy />
            </div>
        </div>
    );
};

export default ShoppingCart;