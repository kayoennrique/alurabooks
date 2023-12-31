import { ReactElement, createContext, useContext } from "react";
import { ICart } from "../../interfaces/ICart";
import { useCart } from "../../graphql/cart/hooks";
import { IItemCart } from "../../interfaces/IItemCart";

export interface ICartContext {
    cart?: ICart
    addItemCart: (item: IItemCart) => void
}

export const CartContext = createContext<ICartContext>({
    addItemCart: () => null
});

interface CartProviderProps {
    children: ReactElement
}

const CartProvider = ({ children }: CartProviderProps) => {
    const cart: ICart = {
        itens: [],
        total: 0
    }
    const { data } = useCart();

    const addItemCart = (item: IItemCart) => {
        console.log('[CartProvider] - addItemCart', item);        
    }

    return (

        <CartContext.Provider value={{ cart: data?.cart, addItemCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext<ICartContext>(CartContext);
}

export default CartProvider;