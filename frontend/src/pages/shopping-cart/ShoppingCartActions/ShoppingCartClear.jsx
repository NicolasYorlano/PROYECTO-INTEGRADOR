import { ButtonPrimary } from "@/components/buttons";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

const ShoppingCartClear = () => {
    const { shoppingCartContext } = useContext(AppContext);
    const { clearCart } = shoppingCartContext;

    return (
        <ButtonPrimary size="md" onClick={clearCart}>Vaciar carrito</ButtonPrimary>
    );
};

export default ShoppingCartClear;